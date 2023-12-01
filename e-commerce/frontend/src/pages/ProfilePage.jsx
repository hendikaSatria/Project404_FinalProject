import React from 'react';
import { ChakraProvider, Box, Flex, Text, Button } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Profile = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  console.log('User data in Profile:', user);


  return (
    <ChakraProvider>
      <Flex align="center" justify="center" h="100vh">
        <Box p="4" borderWidth="1px" borderRadius="md" boxShadow="md">
          <Flex>
            {/* Left Side - Affiliate Code */}
            <Box mr="4">
              <Text fontWeight="bold">Affiliate Code:</Text>
              <Text>{user ? user.affiliateCode : 'N/A'}</Text>
            </Box>

            {/* Right Side - User Info */}
            <Box>
              <Text fontWeight="bold">Name:</Text>
              <Text>{user?.full_name || 'N/A'}</Text>

              <Text fontWeight="bold">Email:</Text>
              <Text>{user?.email || 'N/A'}</Text>

              {/* Displaying the Address */}
              <Text fontWeight="bold">Address:</Text>
              <Text>{user?.user_addresses?.[0]?.address || 'N/A'}</Text>

              <Button mt="4" onClick={handleLogout}>
                Logout
              </Button>
            </Box>
          </Flex>
        </Box>
      </Flex>
    </ChakraProvider>
  );
};

export default Profile;
