import React, { useState, useEffect } from 'react';
import {
  Box,
  Flex,
  Image,
  Text,
  Button,
  Input,
  InputGroup,
  InputLeftElement,
  IconButton,
  AlertDialog,
  AlertDialogOverlay,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogBody,
  AlertDialogFooter,
  ButtonGroup,
} from '@chakra-ui/react';
import { SearchIcon, DeleteIcon } from '@chakra-ui/icons';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Product = () => {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedProductId, setSelectedProductId] = useState(null); // Menyimpan ID produk yang akan dihapus
  const [isAlertDialogOpen, setIsAlertDialogOpen] = useState(false);

  // Menambah definisi cancelRef
  const cancelRef = React.useRef();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://localhost:3000/product/detail');
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  const handleSearch = async () => {
    try {
      const response = await axios.get(`http://localhost:3000/product/search?term=${searchTerm}`);
      setProducts(response.data);
    } catch (error) {
      console.error('Error searching products:', error);
    }
  };

  const handleDelete = (productId) => {
    // Menetapkan ID produk yang akan dihapus dan membuka AlertDialog
    setSelectedProductId(productId);
    setIsAlertDialogOpen(true);
  };

  const confirmDelete = async () => {
    try {
      await axios.delete(`http://localhost:3000/product/${selectedProductId}`);
      // Jika penghapusan berhasil, perbarui daftar produk
      const updatedProducts = products.filter((product) => product.product_id !== selectedProductId);
      setProducts(updatedProducts);
    } catch (error) {
      console.error('Error deleting product:', error);
    } finally {
      // Setelah penghapusan selesai, tutup AlertDialog dan reset selectedProductId
      setIsAlertDialogOpen(false);
      setSelectedProductId(null);
    }
  };

  const cancelDelete = () => {
    // Jika pengguna membatalkan penghapusan, tutup AlertDialog dan reset selectedProductId
    setIsAlertDialogOpen(false);
    setSelectedProductId(null);
  };

  return (
    <Flex p={4} mx="auto" maxW="1200px" justifyContent="space-between" flexDirection="column">
      {/* Header */}
      <Box mb={4}>
        <Text fontSize="4xl" fontWeight="bold" my="1" textAlign="center" textTransform="uppercase">
          Product Management
        </Text>
      </Box>

      {/* Search bar dan Tombol "Tambah Produk" */}
      <Flex my="3" justifyContent="space-between">
        <Link to="/admin/product/add">
          <Button colorScheme="green" fontSize="sm" mr="2">
            Tambah Produk
          </Button>
        </Link>
        <InputGroup mb="3" ml="auto" maxW="500px">
          <InputLeftElement pointerEvents="none" children={<SearchIcon color="gray.300" />} />
          <Input
            placeholder="Search Product"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            fontSize="sm"
          />
          <IconButton
            mx="3"
            colorScheme="blue"
            h="2.5rem"
            size="lg"
            onClick={handleSearch}
            aria-label="Search"
            icon={<SearchIcon />}
          />
        </InputGroup>
      </Flex>

      {/* Product List */}
      <Box rounded="3xl" overflowX="auto" backgroundColor="#F2F2F2">
        <Flex flexWrap="wrap" justifyContent="space-between" rounded="3xl" overflowX="auto">
          {products.map((product) => (
            <Box
              key={product.product_id}
              p={4}
              mb={4}
              bg="white"
              boxShadow="md"
              borderRadius="md"
              width={['100%', '48%']}
            >
              <Flex justifyContent="space-between">
                <Box flex="1" mr={4}>
                  <Image
                    src={`http://localhost:3000/images/${product.image}`}
                    alt={product.name}
                    maxH="150px"
                    mb={2}
                    width="100%"
                    borderRadius="md"
                  />
                </Box>
                <Box flex="2" mr={4}>
                  <Text fontSize="xl" fontWeight="semibold">
                    {product.name}
                  </Text>
                  <Text fontSize="md">{product.description}</Text>
                  <Text color="gray.500" fontSize="sm">
                    Price: ${product.price}
                  </Text>
                  <Text color="gray.500" fontSize="sm">
                    Stock: {product.stock}
                  </Text>
                  <Text color="gray.500" fontSize="sm">
                    Category: {product.category.category_name}
                  </Text>
                  <Text color="gray.500" fontSize="sm">
                    Warehouse: {product.warehouse.city_name}
                  </Text>
                </Box>
                <Box>
                  <Link to={`/admin/product/edit/${product.product_id}`}>
                    <Button colorScheme="yellow" mb={2} fontSize="sm">
                      Edit
                    </Button>
                  </Link>
                  <Button
                    colorScheme="red"
                    mb={2}
                    ml={2}
                    fontSize="sm"
                    onClick={() => handleDelete(product.product_id)}
                  >
                    <DeleteIcon />
                  </Button>
                </Box>
              </Flex>
            </Box>
          ))}
        </Flex>
      </Box>

      {/* AlertDialog untuk konfirmasi penghapusan */}
      <AlertDialog
        isOpen={isAlertDialogOpen}
        leastDestructiveRef={cancelRef}
        onClose={cancelDelete}
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize='lg' fontWeight='bold'>
              Delete Product
            </AlertDialogHeader>
            <AlertDialogBody>
              Are you sure you want to delete this product? You can't undo this action.
            </AlertDialogBody>
            <AlertDialogFooter>
              <Button colorScheme='gray' onClick={cancelDelete}>
                Cancel
              </Button>
              <Button colorScheme='red' onClick={confirmDelete} ml={3}>
                Delete
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </Flex>
  );
};

export default Product;
