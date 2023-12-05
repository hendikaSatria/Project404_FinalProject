import { Box, Text } from '@chakra-ui/react';

const TopSection = ({ userAddress }) => {
  return (
    <Box ml={{ base: 2, md: 4 }} mt={{ base: 2, md: 4 }}> 
      <Text fontSize="xl">Checkout</Text>
      <Text>User Address 📍 {userAddress.province_name}, {userAddress.city_name}</Text>
    </Box>
  );
};

export default TopSection;
