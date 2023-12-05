import React, { useState, useEffect } from "react";
import {
  Box,
  Button,
  Heading,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableCaption,
} from "@chakra-ui/react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const User = () => {
  const [users, setUsers] = useState([]);
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

  const handleLogout = () => {
    localStorage.removeItem("Token");
    navigate("/login");
  };

  return (
    <Box p={4} maxW="md" mx="auto">
      <Button colorScheme="red" mb={4} onClick={handleLogout}>
        Logout
      </Button>

      <Heading mb={4}>Users Details</Heading>
      <Table variant="simple">
        <TableCaption>Imperial to metric conversion factors</TableCaption>
        <Thead>
          <Tr>
            <Th>User ID</Th>
            <Th>Name</Th>
            <Th>Email</Th>
            <Th>Affiliate Code</Th>
            <Th>Total Price</Th>
          </Tr>
        </Thead>
        <Tbody>
          {users.map((user) => (
            <Tr key={user.user_id}>
              <Td>{user.user_id}</Td>
              <Td>{user.full_name}</Td>
              <Td>{user.email}</Td>
              <Td>{user.affiliate_code}</Td>
              <Td>{user.total_price}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </Box>
  );
};

export default User;
