import React from 'react';
import { Box, Flex, Image, Text, Button } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom'; 
import { useAuth } from '../../context/AuthContext';

const ProductCard = ({ product }) => {
  const { product_id, name, price, image } = product;
  const navigate = useNavigate();
  const { token } = useAuth(); 

  const handleDetailsClick = () => {
    console.log('Token:', token); 
  
    if (token) {
      navigate(`/product/${product_id}`);
    } else {
      navigate('/login');
    }
  };
  

  return (
    <Box p={2} borderWidth="1px" borderRadius="md" bg="grey">
      <Flex>
        <Box mr={2}>
          <Image src={image} alt={name} boxSize="75px" objectFit="cover" />
        </Box>

        <Box ml={10}>
          <Text fontSize="md" fontWeight="bold">
            {name}
          </Text>
          <Text fontSize="sm" color="black">
            ${price}
          </Text>
          <Button size="sm" mt={2} onClick={handleDetailsClick}>
            View Details
          </Button>
        </Box>
      </Flex>
    </Box>
  );
};

export default ProductCard;
