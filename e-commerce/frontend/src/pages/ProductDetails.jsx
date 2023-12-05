import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Box, Flex, Image, Text, Button } from '@chakra-ui/react';
import { getProductById, addToCart, fetchUserData, fetchCart } from '../api/api'; 
import { useAuth } from '../context/AuthContext';

const ProductDetails = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [cartItems, setCartItems] = useState([]);
  const { token } = useAuth();

  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        const productData = await getProductById(productId);
        setProduct(productData);
      } catch (error) {
        console.error('Error fetching product details:', error);
      }
    };

    const fetchCartItems = async () => {
      try {
        const userData = await fetchUserData(token);
        const userId = userData.user_id;
        const cartData = await fetchCart(userId); 
        setCartItems(cartData);
      } catch (error) {
        console.error('Error fetching cart items:', error);
      }
    };

    fetchProductDetails();
    fetchCartItems();
  }, [productId, token]);

  const handleIncrement = () => {
    const totalQuantityInCart = cartItems.reduce((total, item) => total + item.quantity, 0);
    const remainingStock = product.stock - totalQuantityInCart;

    if (quantity < remainingStock) {
      setQuantity((prevQuantity) => prevQuantity + 1);
    }
  };

  const handleDecrement = () => {
    setQuantity((prevQuantity) => Math.max(prevQuantity - 1, 1));
  };

  const handleAddToCart = async () => {
    try {
      const userData = await fetchUserData(token);
      const userId = userData.user_id;
      const response = await addToCart(userId, productId, quantity, token);
      console.log('Added to cart:', response);
    } catch (error) {
      console.error('Error adding to cart:', error);
    }
  };

  const handleBuyNow = () => {
    console.log('Buy now:', { product, quantity });
  };

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <Flex align="center" justify="center" height="100vh">
      <Box width="80%">
        <Flex>
          <Box flex="1">
            <Image src={product.image} alt={product.name} />
          </Box>

          <Box flex="1" p={4}>
            <Text fontSize="2xl">{product.name}</Text>
            <Text fontSize="lg" fontWeight="bold" mb={2}>
              ${product.price}
            </Text>
            <Text mb={4}>{product.description}</Text>

            <Flex alignItems="center" mb={4}>
              <Button onClick={handleDecrement}>-</Button>
              <Text mx={4}>{quantity}</Text>
              <Button onClick={handleIncrement} isDisabled={quantity >= product.stock}>
                +
              </Button>
            </Flex>

            <Flex>
              <Button onClick={handleAddToCart} colorScheme="teal" mr={2}>
                Add to Cart
              </Button>
              <Button onClick={handleBuyNow} colorScheme="blue">
                Buy Now
              </Button>
            </Flex>
          </Box>
        </Flex>
      </Box>
    </Flex>
  );
};

export default ProductDetails;
