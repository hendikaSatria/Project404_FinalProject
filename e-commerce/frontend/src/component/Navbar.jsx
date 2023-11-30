import React, { useState } from 'react';
import { Flex, Input, Text, IconButton, CSSReset, ChakraProvider } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { SearchIcon } from '@chakra-ui/icons';
import styled from '@emotion/styled';

const CustomInput = styled(Input)`
  &:focus {
    border-color: teal.300;
    box-shadow: none;
    background-color: white;
    color: black; /* Set text color to black on focus */
  }
`;

const Navbar = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    console.log('Search term:', searchTerm);
  };

  return (
    <ChakraProvider>
      <CSSReset />
      <Flex align="center" justify="space-between" p={4} bg="teal.500" color="white">
        <Link to="/" as={Text} fontSize="xl" fontWeight="bold" textDecoration="none" color="white">
          YourLogo
        </Link>

        <Flex as="form" onSubmit={handleSearchSubmit} align="center">
          <CustomInput
            type="text"
            placeholder="Search products"
            variant="filled"
            mr={2}
            value={searchTerm}
            onChange={handleSearchChange}
          />
          <IconButton
            type="submit"
            aria-label="Search"
            icon={<SearchIcon />}
            colorScheme="teal"
            size="sm"
          />
        </Flex>

        <Flex align="center">
          <Link to="/" as={Text} mr={4} textDecoration="none" color="white">
            🛒 Cart
          </Link>
          <Link to="/" as={Text} mr={4} textDecoration="none" color="white">
            📦 Orders
          </Link>
          <Link to="/" as={Text} textDecoration="none" color="white">
            👤 Profile
          </Link>
        </Flex>
      </Flex>
    </ChakraProvider>
  );
};

export default Navbar;
