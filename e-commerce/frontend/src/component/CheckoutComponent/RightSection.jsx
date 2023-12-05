import React, { useState, useEffect } from 'react';
import { Box, Flex, Text, Button } from '@chakra-ui/react';
import api, { createOrder, fetchUserData } from '../../api/api'; 
import { useNavigate } from 'react-router-dom'; 
import { useAuth } from '../../context/AuthContext';

const RightSection = ({ shippingFee, selectedPromo, onPromoSelect, items }) => {
  const [userId, setUserId] = useState(null);
  const [userAffiliate, setUserAffiliate] = useState(null); 
  const { token } = useAuth();
  const navigate = useNavigate(); 


  useEffect(() => {
    const fetchData = async () => {
      try {
        if (token) {
          const response = await fetchUserData(token);
          setUserId(response.user_id);
          setUserAffiliate(response.affiliate_usage ? response : null); 
        }
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchData();
  }, [token]);

  const calculateTotalItemPrice = () => {
    return items.reduce((total, item) => {
      const itemPrice = (item && item.product && item.product.price) || 0;
      return total + item.quantity * itemPrice;
    }, 0);
  };

  const calculateDiscountAmount = () => {
    let discountAmount = 0;

    if (selectedPromo) {
      const totalItemPrice = calculateTotalItemPrice();
      const promoAmount = parseInt(selectedPromo.amount, 10);

      if (selectedPromo.type === 'percentage') {
        discountAmount += (promoAmount / 100) * totalItemPrice;
      } else if (selectedPromo.type === 'fixed') {
        discountAmount += promoAmount;
      }
    }

    if (userAffiliate) {
      discountAmount += (userAffiliate.affiliate_usage ? 0.5 : 0) * calculateTotalItemPrice();
    }

    return discountAmount;
  };

  const totalItemPrice = calculateTotalItemPrice();
  const discountAmount = calculateDiscountAmount();

  const handlePlaceOrder = async () => {
    try {
      if (!userId) {
        console.error('User ID is not available.');
        return;
      }
      console.log('Selected Promo Code:', String(selectedPromo?.promo_code));
  
      const orderResponse = await createOrder(userId, selectedPromo?.promo_code, 'pos', token);
      navigate('/Orders');
      console.log('Order Response:', orderResponse);
      
      if (orderResponse && orderResponse.orderId) {
        console.log('Order placed successfully! Order ID:', orderResponse.orderId);
  
        if (orderResponse.status === 200) {
          console.log('Order creation successful. Redirecting to /Orders.');
        } else {
          console.error('Unexpected response format:', orderResponse);
        }
      } else {
        console.error('Unexpected response format:', orderResponse);
      }
    } catch (error) {
      console.error('Error placing order:', error);
    }
  };
  
  
  

  return (
    <Box>
      <Flex justifyContent="space-between" alignItems="center" mb={4}>
        <Box>
          <Text>Promo </Text>
        </Box>
        <Box>
          <Button onClick={onPromoSelect}>Select</Button>
        </Box>
      </Flex>
      <Box mb={2}>
        <Text>Shipping Fee: Rp{shippingFee.toFixed(2)}</Text>
      </Box>
      <Box mb={2}>
        <Text>Promo: {selectedPromo ? selectedPromo.promo_code : 'None selected'}</Text>
      </Box>
      <Box mb={2}>
        <Text>Total Item Price: Rp{totalItemPrice.toFixed(2)}</Text>
      </Box>
      <Box mb={2}>
        <Text>Discount: Rp{discountAmount.toFixed(2)}</Text>
      </Box>
      {userAffiliate && userAffiliate.affiliate_usage && (
        <Box mb={2}>
          <Text>Affiliate Discount: Rp{(0.5 * totalItemPrice).toFixed(2)}</Text>
        </Box>
      )}
      <Box mb={2}>
        <Text>Total Price: Rp{(totalItemPrice - discountAmount + shippingFee).toFixed(2)}</Text>
      </Box>
      <Box mt={4}>
      <Button onClick={() => {
          handlePlaceOrder();
          navigate('/orders');
      }}>Place Order</Button>
      </Box>
    </Box>
  );
  
};

export default RightSection;
