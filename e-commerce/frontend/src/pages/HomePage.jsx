import React, { useState, useEffect } from 'react';
import FilterBar from '../component/FilterBar';
import ProductGrid from '../component/ProductGrid/ProductGrid';
import { getAllProducts, getProducts } from '../api/api';

const HomePage = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [sortingOption, setSortingOption] = useState(null);
  const [allProducts, setAllProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    fetchProducts();
  }, [currentPage, sortingOption, selectedCategory]);

  const fetchProducts = async () => {
    try {
      const response = await getProducts({
        page: currentPage,
        limit: 12,
        filter: selectedCategory,
        sort: sortingOption
      });
      setAllProducts(response.data)
      setTotalPages(Math.ceil(response.length / 12));
    } catch (error) {
      console.error('Error fetching all products:', error);
    }
  };

  const fetchTotalProducts = async () => {
    try {
      const response = await getAllProducts();
      setTotalPages(Math.ceil(response.length / 12));
     
    } catch (error) {
      console.error('Error fetching all products:', error);
    }
  }
  
  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  
    const newFilteredProducts = allProducts
      ? allProducts.filter(
          (product) => !category || String(product.category_id) === String(category)
        )
      : [];
  
    console.log('Filtered Products1:', newFilteredProducts);
    setAllProducts(newFilteredProducts);
  };

  const handleSortingChange = (option) => {
    console.log(option);
    setSortingOption(option);
  };

  const handlePrevPage = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1));
  };

  const handleNextPage = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  };

  return (
    <div>
      <FilterBar
        selectedCategory={selectedCategory}
        sortingOption={sortingOption}
        onCategoryChange={handleCategoryChange}
        onSortingChange={handleSortingChange}
      />

      <ProductGrid
        selectedCategory={selectedCategory}
        sortingOption={sortingOption}
        products={allProducts}
        currentPage={currentPage}
        totalPages={totalPages}
        handlePrevPage={handlePrevPage}
        handleNextPage={handleNextPage}
      />
    </div>
  );
};

export default HomePage;
