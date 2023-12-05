import React, { useState, useEffect } from 'react';
import { Box, Table, Thead, Tbody, Tr, Th, Td, Heading, Button, Select } from '@chakra-ui/react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Order = () => {
  const [orderDetails, setOrderDetails] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Panggil API untuk mendapatkan data getOrderDetails
    const fetchOrderDetails = async () => {
      try {
        const response = await axios.get('http://localhost:3000/order/detail', {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('Token')}`,
          },
        });
        console.log('Detail pesanan yang diambil:', response.data);
        setOrderDetails(response.data);
      } catch (error) {
        console.error('Kesalahan mengambil detail pesanan:', error);
      }
    };

    fetchOrderDetails();
  }, []); // Pastikan untuk menyertakan dependensi kosong agar efek hanya dijalankan sekali

  const handleLogout = () => {
    // Lakukan operasi logout atau hapus token dari penyimpanan lokal di sini
    localStorage.removeItem('Token');
    navigate('/login');
  };

  const handleStatusChange = async (orderId, newStatus) => {
    try {
      // Panggil API untuk memperbarui status pesanan
      await axios.put(
        `http://localhost:3000/order/${orderId}`,
        { order_status: newStatus },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('Token')}`,
          },
        }
      );

      // Perbarui status di state lokal
      setOrderDetails((prevOrders) =>
        prevOrders.map((order) =>
          order.order_id === orderId ? { ...order, order_status: newStatus } : order
        )
      );
    } catch (error) {
      console.error('Error updating order status:', error);
    }
  };

  return (
    <Box p={4} maxW="md" mx="auto">
      <Button colorScheme="red" mb={4} onClick={handleLogout}>
        Logout
      </Button>

      <Heading mb={4}>Order Details</Heading>
      <Table variant="simple">
        <Thead>
          <Tr>
            <Th>Order ID</Th>
            <Th>Order Date</Th>
            <Th>Total Price</Th>
            <Th>Product Name</Th>
            <Th>Quantity</Th>
            <Th>Price</Th>
            <Th>Order Status</Th>
          </Tr>
        </Thead>
        <Tbody>
          {orderDetails.map((order) => (
            <Tr key={order.order_id}>
              <Td>{order.order_id}</Td>
              <Td>{new Date(order.order_date).toLocaleDateString()}</Td>
              <Td>{order.total_price}</Td>
              <Td>{order.order_items[0]?.product.name}</Td>
              <Td>{order.order_items[0]?.quantity}</Td>
              <Td>{order.order_items[0]?.price}</Td>
              <Td>
                <Select
                  size="sm"
                  onChange={(e) => {
                    const newStatus = e.target.value;
                    const orderId = order.order_id;
                    handleStatusChange(orderId, newStatus);
                  }}
                >
                  <option value="pending" selected={order.order_status === 'pending'}>
                    Pending
                  </option>
                  <option value="processing" selected={order.order_status === 'processing'}>
                    Processing
                  </option>
                  <option value="finish" selected={order.order_status === 'finish'}>
                    Finish
                  </option>
                </Select>
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </Box>
  );
};

export default Order;
