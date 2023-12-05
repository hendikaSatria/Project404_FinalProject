import React from 'react';
import { Box, Text } from '@chakra-ui/react';

const CheckoutProductCard = ({ product, quantity }) => {
  const total = (parseFloat(product.price) * quantity).toFixed(2);

  return (
    <Box mb={4}>
      <Text fontSize="md" fontWeight="bold">{product.name}</Text>
      <Text fontSize="sm">Price: ${product.price} each</Text>
      <Text fontSize="sm">Quantity: {quantity}</Text>
      <Text fontSize="sm">Total: ${total}</Text>
    </Box>
  );
};

export default CheckoutProductCard;
