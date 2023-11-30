import React, { useEffect, useState } from 'react';
import { Flex, Text, Select } from '@chakra-ui/react';
import { getCategories } from '../api/api';

const FilterBar = ({ onCategoryChange, onSortingChange }) => {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [sortOptions] = useState([
    { label: 'Sort by Price: Low to High', value: 'lowToHigh' },
    { label: 'Sort by Price: High to Low', value: 'highToLow' },
    { label: 'Sort by Name (A-Z)', value: 'byNameAsc' },
    { label: 'Sort by Name (Z-A)', value: 'byNameDesc' },
  ]);

  useEffect(() => {
    fetchCategories();
  }, []); 

  const fetchCategories = async () => {
    try {
      const categoriesData = await getCategories();
      setCategories(categoriesData);
    } catch (error) {
      console.error('Error fetching categories:', error);
    }
  };

  const handleCategoryChange = (categoryId) => {
    setSelectedCategory(categoryId);
    onCategoryChange(categoryId);
    onSortingChange(null);
  };

  return (
    <Flex
      p={4}
      justify="center"
      align="center"
      bg="teal.500"
      color="black"
      position="relative"
      mb={4}
      gap={50}
      marginTop="1rem"
      maxWidth="80%"
      width="100%"
      marginX="auto"
    >
      {/* Sorting Section */}
      <Flex align="center">
        <Text fontWeight="bold" mr={2}>
          Sort:
        </Text>
        <Select
          placeholder="Select option"
          width="200px"
          bg="white"
          onChange={(e) => onSortingChange(e.target.value)}
        >
          {sortOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </Select>
      </Flex>

      {/* Category Section */}
      <Flex align="center">
        <Text fontWeight="bold" mr={2}>
          Category:
        </Text>
        <Select
          placeholder="Select category"
          width="200px"
          bg="white"
          value={selectedCategory}
          onChange={(e) => handleCategoryChange(e.target.value)}
        >
          <option value="">All</option>
          {categories.map((category) => (
            <option key={category.category_id} value={category.category_id}>
              {category.category_name}
            </option>
          ))}
        </Select>
      </Flex>
    </Flex>
  );
};

export default FilterBar;
