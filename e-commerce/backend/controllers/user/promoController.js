const { PrismaClient } = require('../../prisma/generated/client');
const prisma = new PrismaClient();

const getPromotions = async (req, res) => {
  try {
    const promotions = await prisma.promotion.findMany();
    res.json(promotions);
  } catch (error) {
    console.error('Error fetching promotions:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const validatePromoCodeForUser = async (promoCode) => {
  try {
    const validPromo = await prisma.promotion.findFirst({
      where: {
        promo_code: promoCode,
        remaining_usage: { gt: 0 },
        product_id: null,
      },
    });

    return Boolean(validPromo);
  } catch (error) {
    console.error('Error validating promo code for user:', error);
    throw new Error('Internal Server Error');
  }
};

const calculatePromoAmountForUser = async (promoCode, totalAmount) => {
  try {
    const promo = await prisma.promotion.findFirst({
      where: {
        promo_code: promoCode,
        remaining_usage: { gt: 0 },
        product_id: null,
      },
    });

    if (!promo) {
      return 0;
    }

    if (promo.type === 'percentage') {
      return (promo.amount / 100) * totalAmount;
    } else if (promo.type === 'fixed') {
      return promo.amount;
    }

    return 0;
  } catch (error) {
    console.error('Error calculating promo amount for user:', error);
    throw new Error('Internal Server Error');
  }
};

const updatePromotionRemainingUsage = async (promoId) => {
  try {
    await prisma.promotion.update({
      where: {
        promo_id: promoId,
      },
      data: {
        remaining_usage: {
          decrement: 1, 
        },
      },
    });
  } catch (error) {
    console.error('Error updating promotion remaining usage:', error);
    throw new Error('Internal Server Error');
  }
};

module.exports = {
  getPromotions,
  validatePromoCodeForUser,
  calculatePromoAmountForUser,
  updatePromotionRemainingUsage,
};
