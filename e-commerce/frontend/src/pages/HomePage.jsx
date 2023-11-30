import React, { useState, useEffect } from 'react';
import FilterBar from '../component/FilterBar';
import ProductGrid from '../component/ProductGrid/ProductGrid';
import { getAllProducts } from '../api/api';

const HomePage = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [sortingOption, setSortingOption] = useState(null);
  const [allProducts, setAllProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    fetchAllProducts();
  }, []);

  const fetchAllProducts = async () => {
    try {
      const response = await getAllProducts();
      console.log('Full API Response:', response);
  
      // Check if response is an array
      if (Array.isArray(response)) {
        const products = response;
  
        setAllProducts((prevProducts) => [...prevProducts, ...products]);
        setFilteredProducts((prevProducts) => [...prevProducts, ...products]);
  
        console.log('All Products:', allProducts); // Log the state variable correctly
        console.log('Filtered Products:', filteredProducts); // Log the state variable correctly
      } else {
        console.error('Response is not an array:', response);
      }
    } catch (error) {
      console.error('Error fetching all products:', error);
    }
  };
  
  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  
    // Filter products based on the selected category if allProducts is defined
    const newFilteredProducts = allProducts
      ? allProducts.filter(
          (product) => !category || String(product.category_id) === String(category)
        )
      : [];
  
    // Log all products, the category, and the filtered products to the console
    console.log('All Products:', allProducts);
    console.log('Selected Category:', category);
    console.log('Filtered Products:', newFilteredProducts);
  
    setFilteredProducts(newFilteredProducts);
  };
  
  
  
  

  const handleSortingChange = (option) => {
    setSortingOption(option);
    // You can add sorting logic here if needed
  };

  return (
    <div>
      {/* FilterBar */}
      <FilterBar
        selectedCategory={selectedCategory}
        sortingOption={sortingOption}
        onCategoryChange={handleCategoryChange}
        onSortingChange={handleSortingChange}
      />

      {/* ProductGrid */}
      <ProductGrid
        selectedCategory={selectedCategory}
        sortingOption={sortingOption}
        products={filteredProducts}
      />
    </div>
  );
};

export default HomePage;
