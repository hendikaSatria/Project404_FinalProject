import React, { useState, useEffect } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { Box, Flex, Image, Text, Button } from '@chakra-ui/react';
import { getProductById } from '../api/api';

const ProductDetails = () => {
    const { productId } = useParams(); 
    console.log('Product ID:', productId); 
    const [product, setProduct] = useState(null);
    const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    console.log('Product ID:', productId);
  
    const fetchProductDetails = async () => {
      try {
        const productData = await getProductById(productId);
        console.log('Product Data:', productData);
        setProduct(productData);
      } catch (error) {
        console.error('Error fetching product details:', error);
      }
    };
  
    fetchProductDetails();
  }, [productId]);
  

  const handleIncrement = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const handleDecrement = () => {
    setQuantity((prevQuantity) => Math.max(prevQuantity - 1, 1));
  };

  const handleAddToCart = () => {
    console.log('Added to cart:', { product, quantity });
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
              <Button onClick={handleIncrement}>+</Button>
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
