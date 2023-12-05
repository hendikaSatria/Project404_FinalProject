import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { Flex, Text, IconButton, CSSReset, ChakraProvider, Input, Avatar } from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';
import styled from '@emotion/styled';
import { useNavigate } from 'react-router-dom';
import { fetchUserData } from '../api/api';

const CustomInput = styled(Input)`
  &:focus {
    border-color: teal.300;
    box-shadow: none;
    background-color: white;
    color: black; /* Set text color to black on focus */
  }
`;

const Navbar = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    console.log('Search term:', searchTerm);
  };

  const handleLinkClick = (path) => {
    navigate(path);
  };

  return (
    <ChakraProvider>
      <CSSReset />
      <Flex align="center" justify="space-between" p={4} bg="teal.500" color="white">
        <Link to="/" as={Text} fontSize="xl" fontWeight="bold" textDecoration="none" color="white">
          Logo
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
          <Text
            as="span"
            mr={4}
            textDecoration="none"
            color="white"
            cursor="pointer"
            onClick={() => handleLinkClick('/cart')}
          >
            🛒 Cart
          </Text>
          <Text
            as="span"
            mr={4}
            textDecoration="none"
            color="white"
            cursor="pointer"
            onClick={() => handleLinkClick('/orders')}
          >
            📦 Orders
          </Text>
          <Link to={user ? '/login' : '/profile'}>
            <Flex alignItems="center" cursor="pointer">
              <Avatar size="sm" name={user?.name} src={user?.avatar} />
              <Text ml={2} textDecoration="none" color="white">
                👤 {user ? user.name : 'Profile'}
              </Text>
            </Flex>
          </Link>
        </Flex>
      </Flex>
    </ChakraProvider>
  );
};

export default Navbar;
