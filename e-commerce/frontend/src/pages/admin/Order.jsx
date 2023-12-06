import React, { useState, useEffect } from 'react';
import {
  Box,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Heading,
  Button,
  Select,
  useToast,
  AlertDialog,
  AlertDialogOverlay,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogBody,
  AlertDialogFooter,
  useDisclosure,
  IconButton,
  InputGroup,
  InputLeftElement,
  Input,
} from '@chakra-ui/react';
import axios from 'axios';
import { SearchIcon } from '@chakra-ui/icons';
import { useNavigate } from 'react-router-dom';

const Order = () => {
  const [orderDetails, setOrderDetails] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const toast = useToast();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = React.useRef();

  useEffect(() => {
    const fetchOrderDetails = async () => {
      try {
        const response = await axios.get('http://localhost:3000/order/detail', {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('Token')}`,
          },
        });

        setOrderDetails(response.data);
      } catch (error) {
        console.error('Kesalahan mengambil detail pesanan:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchOrderDetails();
  }, []);

  const handleStatusChange = async (orderId, newStatus) => {
    try {
      await axios.put(
        `http://localhost:3000/order/${orderId}`,
        { order_status: newStatus },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('Token')}`,
          },
        }
      );

      setOrderDetails((prevOrders) =>
        prevOrders.map((order) =>
          order.order_id === orderId ? { ...order, order_status: newStatus } : order
        )
      );

      // Tambahkan alert/toast ketika status order berhasil diubah
      toast({
        title: 'Order Status Updated',
        description: `Order ${orderId} status has been updated to ${newStatus}.`,
        status: 'success',
        duration: 5000,
        isClosable: true,
      });
    } catch (error) {
      console.error('Error updating order status:', error);
      // Tambahkan alert/toast ketika terjadi kesalahan
      toast({
        title: 'Error',
        description: 'An error occurred while updating order status.',
        status: 'error',
        duration: 5000,
        isClosable: true,
      });
    }
  };

  const handleSearch = () => {
    // Handle search functionality if needed
  };

  return (
    <Box p={4} mx="auto">
      <Heading my="5" textAlign="center" textTransform="uppercase">
        Order Management
      </Heading>

      {/* search bar */}
      <Box mb="3" ml="auto" maxW="500px" display="flex">
        <InputGroup>
          <InputLeftElement pointerEvents="none" children={<SearchIcon color="gray.300" />} />
          <Input
            placeholder="Search Product"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            fontSize="sm"
          />
        </InputGroup>
        <IconButton
          ml="3"
          colorScheme="blue"
          h="2.5rem"
          size="lg"
          onClick={handleSearch}
          aria-label="Search"
          icon={<SearchIcon />}
        />
      </Box>
      {/* end of search bar */}

      <Box border="1px solid" rounded="3xl" overflowX="auto">
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th textAlign="center" borderBottom="1px solid" p={2}>
                No.
              </Th>
              <Th textAlign="center" borderBottom="1px solid" p={2}>
                Order ID
              </Th>
              <Th textAlign="center" borderBottom="1px solid" p={2}>
                Order Date
              </Th>
              <Th textAlign="center" borderBottom="1px solid" p={2}>
                Total Price
              </Th>
              <Th textAlign="center" borderBottom="1px solid" p={2}>
                Product Name
              </Th>
              <Th textAlign="center" borderBottom="1px solid" p={2}>
                Quantity
              </Th>
              <Th textAlign="center" borderBottom="1px solid" p={2}>
                Price
              </Th>
              <Th textAlign="center" borderBottom="1px solid" p={2}>
                Proof of Payment
              </Th>
              <Th textAlign="center" borderBottom="1px solid" p={2}>
                Order Status
              </Th>
            </Tr>
          </Thead>
          <Tbody>
            {orderDetails.map((order, index) => (
              <Tr key={order.order_id}>
                <Td textAlign="center" p={2}>{index + 1}</Td>
                <Td textAlign="center" p={2}>{order.order_id}</Td>
                <Td textAlign="center" p={2}>
                  {new Date(order.order_date).toLocaleDateString()}
                </Td>
                <Td textAlign="center" p={2}>{order.total_price}</Td>
                <Td textAlign="center" p={2}>
                  {order.order_items[0]?.product.name}
                </Td>
                <Td textAlign="center" p={2}>{order.order_items[0]?.quantity}</Td>
                <Td textAlign="center" p={2}>{order.order_items[0]?.price}</Td>
                <Td textAlign="center" p={2}>
                  {order.ProofsOfPayment.map((proof, proofIndex) => (
                    <img
                      key={proofIndex}
                      src={proof.image}
                      alt={`Proof of Payment ${order.order_id} - ${proofIndex + 1}`}
                      style={{ maxWidth: '50px', marginRight: '10px' }}
                    />
                  ))}
                </Td>
                <Td textAlign="center" p={2}>
                  <Select
                    size="sm"
                    onChange={(e) => {
                      const newStatus = e.target.value;
                      const orderId = order.order_id;
                      handleStatusChange(orderId, newStatus);
                    }}
                    value={order.order_status}
                  >
                    <option value="pending">Pending</option>
                    <option value="processing">Processing</option>
                    <option value="finish">Finish</option>
                  </Select>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </Box>
    </Box>
  );
};

export default Order;
