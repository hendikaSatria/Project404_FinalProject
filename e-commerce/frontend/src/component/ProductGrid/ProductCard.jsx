import React from 'react';
import { Box, Flex, Image, Text } from '@chakra-ui/react';

const ProductCard = ({ product }) => {
  const { name, price, image } = product;

  return (
    <Box p={2} borderWidth="1px" borderRadius="md" bg="grey" mb={4}>
      <Flex>
        {/* Left Section */}
        <Box mr={4}>
          <Image src={image} alt={name} boxSize="75px" objectFit="cover" />
        </Box>

        {/* Right Section with a larger margin to the left */}
        <Box ml={8}>
          <Text fontSize="md" fontWeight="bold">
            {name}
          </Text>
          <Text fontSize="sm" color="black">
            ${price}
          </Text>
        </Box>
      </Flex>
    </Box>
  );
};

export default ProductCard;
