import React, { useEffect, useState } from 'react';
import { Box, SimpleGrid, Button, IconButton } from '@chakra-ui/react';
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';
import { getProducts } from '../../api/api';
import ProductCard from './ProductCard';

const ProductGrid = ({ selectedCategory, sortingOption, products: initialProducts }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, [currentPage, selectedCategory, sortingOption]);

  const fetchProducts = async () => {
    try {
      setLoading(true);

      const response = await getProducts({
        page: currentPage,
        limit: 12,
        category: selectedCategory,
        sort: sortingOption,
      });

      console.log('API Response:', response);

      const { products: fetchedProducts, totalProducts } = response;

      setProducts(fetchedProducts);
      setTotalPages(Math.ceil(totalProducts / 12));
    } catch (error) {
      console.error('Error fetching products:', error);
    } finally {
      setLoading(false);
    }
  };

  const handlePrevPage = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1));
  };

  const handleNextPage = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  };

  return (
    <Box p={4}>
      <SimpleGrid columns={{ base: 1, md: 2, lg: 3, xl: 4 }} spacing={4}>
        {loading ? (
          <p>Loading...</p>
        ) : products.length > 0 ? (
          products.map((product) => (
            <ProductCard key={product.product_id} product={product} />
          ))
        ) : (
          <p>No products found.</p>
        )}
      </SimpleGrid>

      <Box mt={4} textAlign="center">
        <IconButton
          icon={<ChevronLeftIcon />}
          aria-label="Previous Page"
          onClick={handlePrevPage}
          isDisabled={currentPage === 1 || loading}
        />
        <Button mx={2} variant="outline" disabled>
          {currentPage} / {totalPages}
        </Button>
        <IconButton
          icon={<ChevronRightIcon />}
          aria-label="Next Page"
          onClick={handleNextPage}
          isDisabled={currentPage === totalPages || loading}
        />
      </Box>
    </Box>
  );
};

export default ProductGrid;
