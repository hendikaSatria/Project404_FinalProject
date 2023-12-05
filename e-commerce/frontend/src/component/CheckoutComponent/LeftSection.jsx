import React from 'react';
import { Box, Text } from '@chakra-ui/react';
import CheckoutProductCard from './CheckoutProductCard';

const LeftSection = ({ items }) => {
  return (
    <Box
      overflowY="auto"
      maxHeight="80vh"
      css={{
        msOverflowStyle: 'none', 
        scrollbarWidth: 'none', 
        '&::-webkit-scrollbar': {
          width: '0 !important', 
        },
      }}
    >
      <Text fontSize="lg" fontWeight="bold">Items in Cart:</Text>
      {items.map((item) => (
        <CheckoutProductCard
          key={item.cart_item_id}
          product={item.product}
          quantity={item.quantity} 
        />
      ))}
    </Box>
  );
};

export default LeftSection;