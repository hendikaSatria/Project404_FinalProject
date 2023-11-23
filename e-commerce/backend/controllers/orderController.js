const { PrismaClient } = require('../prisma/generated/client');
const prisma = new PrismaClient();
const shoppingCartController = require('./shoppingCartController');
const shippingController = require('./shippingController');

const calculateTotalPrice = (orderItems) => {
    return orderItems.reduce((total, item) => {
        const itemPrice = item.product.price || 0;
        return total + item.quantity * itemPrice;
    }, 0);
};

const calculateTotalWeight = (cartItems) => {
    return cartItems.reduce((totalWeight, cartItem) => {
        const itemWeight = cartItem.product.weight || 0;
        return totalWeight + cartItem.quantity * itemWeight;
    }, 0);
};

const createOrder = async (userId, promoCode = null, courier) => {
    try {
        // Get the user shopping cart
        const cartItems = await shoppingCartController.getShoppingCart(userId);

        // If the cart is empty, throw an error
        if (cartItems.length === 0) {
            throw new Error('Shopping cart is empty');
        }

        // Calculate total price after getting the cart items
        const totalPrice = calculateTotalPrice(cartItems);
        const userIdInt = parseInt(userId, 10);

        // Calculate shipping fee
        const userAddress = await prisma.userAddress.findFirst({
            where: {
                user_id: userIdInt,
            },
        });

        if (!userAddress) {
            console.error('User address not found');
            throw new Error('User address not found');
        }

        const destinationCityId = userAddress.city_id;
        const originCityId = userAddress.city_id;
        const weight = calculateTotalWeight(cartItems);
        const shippingFee = await shippingController.calculateShippingFee(originCityId, destinationCityId, weight, courier);

        // Apply discount if a promo code is provided
        let promoDiscountAmount = 0;
        let affiliateDiscountAmount = 0;

        if (promoCode) {
            const promo = await prisma.promotion.findFirst({
                where: {
                    promo_code: promoCode,
                    remaining_usage: { gt: 0 },
                    product_id: null,
                },
            });

            if (promo) {
                if (promo.type === 'percentage') {
                    promoDiscountAmount = (totalPrice * promo.amount) / 100;
                } else if (promo.type === 'fixed') {
                    promoDiscountAmount = promo.amount;
                }

                // Decrease the remaining usage of the promo code
                await prisma.promotion.update({
                    where: { promo_id: promo.promo_id },
                    data: { remaining_usage: promo.remaining_usage - 1 },
                });
            }
        }

        // Check if the user has affiliate usage and apply discount
        const user = await prisma.user.findUnique({
            where: {
                user_id: userIdInt,
            },
        });

        if (user && user.affiliate_usage) {
            // Assuming affiliate discount is 50%
            affiliateDiscountAmount = totalPrice * 0.5;

            // Update the user's affiliate usage to false
            await prisma.user.update({
                where: { user_id: userIdInt },
                data: { affiliate_usage: false },
            });
        }

        // Update total price with discounfs
        const totalPriceWithDiscounts = totalPrice - promoDiscountAmount - affiliateDiscountAmount;

        // Create a new order in the Orders table with shipping fee and promo discount included
        const order = await prisma.orders.create({
            data: {
                user: {
                    connect: {
                        user_id: userIdInt,
                    },
                },
                order_date: new Date(),
                delivery_time: new Date(),
                deliver_fee: shippingFee,
                total_price: parseFloat((totalPriceWithDiscounts + shippingFee).toFixed(2)),
                payment_status: 'Pending',
                order_status: 'Processing',
                admin: {
                    connect: {
                        admin_id: 1,
                    },
                },
                promo_code: promoCode,
                promo_discount_amount: promoDiscountAmount,
                affiliate_discount_amount: affiliateDiscountAmount,
                order_items: {
                    create: cartItems.map((cartItem) => ({
                        product: {
                            connect: {
                                product_id: cartItem.product.product_id,
                            },
                        },
                        quantity: cartItem.quantity,
                        price: cartItem.product.price, 
                    })),
                },
            },
        });

        // Get the user shopping cart again
        const userCart = await prisma.shoppingCart.findFirst({
            where: {
                user_id: userIdInt,
            },
        });

        // Delete the related shopping cart items
        await prisma.shoppingCartItem.deleteMany({
            where: { cart_id: userCart.cart_id },
        });

        // Delete the entire shopping cart entry
        await prisma.shoppingCart.delete({
            where: { cart_id: userCart.cart_id },
        });

        return order;
    } catch (error) {
        console.error(error);
        throw new Error('Failed to create order');
    }
};



// Get orders for a specific user
const getOrdersForUser = async (userId) => {
    try {
        const userIdInt = parseInt(userId, 10);

        // Retrieve orders for the specified user
        const orders = await prisma.orders.findMany({
            where: {
                user_id: userIdInt,
            },
            include: {
                order_items: {
                    include: {
                        product: true,
                    },
                },
            },
        });

        return orders;
    } catch (error) {
        console.error(error);
        throw new Error('Failed to retrieve orders');
    }
};

module.exports = {
    createOrder,
    getOrdersForUser,
};
