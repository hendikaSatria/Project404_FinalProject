import React, { useState, useEffect } from 'react';
import {
  Box,
  Flex,
  Image,
  Text,
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
  Select,
  Button,
} from '@chakra-ui/react';
import { SearchIcon, DeleteIcon } from '@chakra-ui/icons';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Product = () => {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedProductId, setSelectedProductId] = useState(null);
  const [isAlertDialogOpen, setIsAlertDialogOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [searchError, setSearchError] = useState('');

  const cancelRef = React.useRef();

  useEffect(() => {
    fetchProducts();
  }, [selectedCategory]);
  
  const fetchProducts = async () => {
    try {
      let response;
      if (selectedCategory.trim() === '' || selectedCategory === 'All Categories') {
        // Jika selectedCategory kosong atau "All Categories," ambil semua produk
        response = await axios.get('http://localhost:3000/product/detail');
      } else {
        // Jika selectedCategory tidak kosong, lakukan filter berdasarkan kategori
        const encodedCategory = encodeURIComponent(selectedCategory);
        const endpoint = `http://localhost:3000/product/filter/${encodedCategory}`;
        response = await axios.get(endpoint);
      }
  
      setFilteredProducts(response.data); // Simpan hasil filter kategori ke dalam filteredProducts
      setProducts(response.data); // Tampilkan hasil filter kategori sebagai hasil utama
    } catch (error) {
      console.error('Error fetching or filtering products:', error);
    }
  };

  const handleSearch = async () => {
    try {
      let response;
      if (searchTerm.trim() === '') {
        // Jika searchTerm kosong, gunakan filteredProducts (hasil filter kategori)
        setProducts([...filteredProducts]);
        setSearchError('');
      } else {
        // Jika searchTerm tidak kosong, lakukan pencarian pada filteredProducts
        const searchResults = filteredProducts.filter((product) =>
          product.name.toLowerCase().includes(searchTerm.toLowerCase())
        );

        if (searchResults.length === 0) {
          setSearchError('No products found.');
        } else {
          setSearchError('');
        }

        setProducts(searchResults);
        setSearchTerm(''); // Mengosongkan nilai pada searchTerm setelah selesai pencarian
      }
    } catch (error) {
      console.error('Error searching products:', error);
    }
  };
  
  const handleKeyDown = (e) => {
    // Jika tombol yang ditekan adalah "Enter", panggil fungsi handleSearch
    if (e.key === 'Enter') {
      setSearchError(''); // Reset pesan kesalahan sebelum melakukan pencarian baru
      handleSearch();
    }
  };

  const handleSelectChange = (e) => {
    const category = e.target.value;
    console.log('Selected Category (before):', selectedCategory);
    setSelectedCategory(category);
    setSearchError(''); // Mengosongkan nilai pada searchError setelah filterisasi
  };

  const handleDelete = (productId) => {
    setSelectedProductId(productId);
    setIsAlertDialogOpen(true);
  };

  const confirmDelete = async () => {
    try {
      await axios.delete(`http://localhost:3000/product/${selectedProductId}`);
      const updatedProducts = products.filter((product) => product.product_id !== selectedProductId);
      setProducts(updatedProducts);
    } catch (error) {
      console.error('Error deleting product:', error);
    } finally {
      setIsAlertDialogOpen(false);
      setSelectedProductId(null);
    }
  };
  
  const cancelDelete = () => {
    setIsAlertDialogOpen(false);
    setSelectedProductId(null);
  };

  return (
    <Flex p={4} mx="auto" maxW="1200px" justifyContent="space-between" flexDirection="column">
      <Box mb={4}>
        <Text fontSize="4xl" fontWeight="bold" my="1" textAlign="center" textTransform="uppercase">
          Product Management
        </Text>
      </Box>
      
      <Flex >
        <InputGroup mb="3" ml="auto" maxW="500px">
          <InputLeftElement pointerEvents="none" children={<SearchIcon color="gray.300" />} />
          <Input
            placeholder="Search Product"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onKeyDown={handleKeyDown} 
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

      <Flex my="2" justifyContent="space-between">
        <Link to="/admin/product/add">
          <Button colorScheme="green" fontSize="sm" mr="2">
            Tambah Produk
          </Button>
        </Link>
        <Select ml="auto" maxW="500px"
           placeholder="Filter by Category"
           value={selectedCategory}
           onChange={handleSelectChange}
        >
          <option value="">All Categories</option>
          <option value="Category 1">Category 1</option>
          <option value="Category 2">Category 2</option>
          <option value="Category 3">Category 3</option>
          <option value="Category 4">Category 4</option>
          <option value="Category 5">Category 5</option>
        </Select>
      </Flex>
      {searchError && (
        <Box my="2" color="red.500" textAlign="center" fontSize="sm">
          {searchError}
        </Box>
      )}
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
                    style={{ width: '400px', height: '600px', margin: 'auto' }}
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
                    Category: {product.category?.category_name || 'Unknown Category'}
                  </Text>
                  <Text color="gray.500" fontSize="sm">
                    Warehouse: {product.warehouse?.warehouse_name || 'Unknown Warehouse'}
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

      <AlertDialog isOpen={isAlertDialogOpen} leastDestructiveRef={cancelRef} onClose={cancelDelete}>
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize="lg" fontWeight="bold">
              Delete Product
            </AlertDialogHeader>
            <AlertDialogBody>
              Are you sure you want to delete this product? You can't undo this action.
            </AlertDialogBody>
            <AlertDialogFooter>
              <Button colorScheme="gray" onClick={cancelDelete}>
                Cancel
              </Button>
              <Button colorScheme="red" onClick={confirmDelete} ml={3}>
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
