import React from 'react';
import { ChakraProvider, Box, Text } from '@chakra-ui/react';
import OrderList from '../component/OrderComponent/OrderList';

const OrderPage = () => {
  return (
    <ChakraProvider>
      <Box p={4} borderBottom="1px" borderColor="gray.200" mb={4}>
        <Box display="flex" alignItems="center" justifyContent="center">
          <Text fontSize="xl">📦 Orders</Text>
        </Box>
      </Box>

      <OrderList />
    </ChakraProvider>
  );
};

export default OrderPage;
