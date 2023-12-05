import React, { useState, useEffect } from "react";
import { Box, Table, Thead, Tbody, Tr, Th, Td, Heading, Button, HStack, Input, InputGroup, InputLeftElement, IconButton } from '@chakra-ui/react';
import axios from "axios";
import { SearchIcon } from '@chakra-ui/icons';
import { useNavigate, Link } from "react-router-dom";

const User = () => {
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get("http://localhost:3000/user", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("Token")}`,
          },
        });
        setUsers(response.data);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    fetchUsers();
  }, []);
  const handleSearch = () => { };


  return (
    <Box p={4} mx="auto">
      <Heading my="5" textAlign="center" textTransform="uppercase">
        User Management
      </Heading>
      <InputGroup mb="3" ml="auto" maxW="500px">
        <InputLeftElement pointerEvents="none" children={<SearchIcon color="gray.300" />} /> {/* Ikon pencarian */}
        <Input
          placeholder="Search Product"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          fontSize="sm"
        />
        <IconButton mx="3"
          colorScheme="blue"
          h="2.5rem"
          size="lg"
          onClick={handleSearch}
          aria-label="Search"
          icon={<SearchIcon />}
        />
      </InputGroup>
      <Box border="1px solid" rounded="3xl" overflowX="auto">
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th textAlign="center" borderBottom="1px solid" p={2}>No.</Th>
              <Th textAlign="center" borderBottom="1px solid" p={2}>User ID</Th>
              <Th textAlign="justify" borderBottom="1px solid" p={2}>Name</Th>
              <Th textAlign="justify" borderBottom="1px solid" p={2}>Email</Th>
              <Th textAlign="justify" borderBottom="1px solid" p={2}>Affiliate Code</Th>
            </Tr>
          </Thead>
          <Tbody>
            {users.map((user, index) => (
              <Tr key={user.user_id}>
                <Td textAlign="center" p={2}>{index + 1}</Td>
                <Td textAlign="center" p={2}>{user.user_id}</Td>
                <Td textAlign="justify" p={2}>{user.full_name}</Td>
                <Td textAlign="justify" p={2}>{user.email}</Td>
                <Td textAlign="justify" p={2} color="red">{user.affiliate_code}</Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </Box>
    </Box>
  );
};

export default User;
