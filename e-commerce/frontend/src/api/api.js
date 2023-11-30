import axios from 'axios';

const baseURL = 'http://localhost:3000';

const api = axios.create({
  baseURL,
});

const handleRequestError = (error) => {
  if (error.response) {
    console.error('Request failed with status code:', error.response.status);
    console.error('Response data:', error.response.data);
    return error.response.data.message || 'Request failed';
  } else if (error.request) {
    console.error('Request made but no response received');
    return 'No response from server';
  } else {
    console.error('Error setting up the request');
    return 'Failed to set up the request';
  }
};

export const loginUser = async (email, password) => {
  try {
    const response = await api.post('/userauth/login', { email, password });
    return response.data.token;
  } catch (error) {
    throw handleRequestError(error);
  }
};

export const registerUser = async (userData) => {
  try {
    console.log('Register User Data:', userData);
    const response = await api.post('/userauth/register', userData);
    console.log('Register Response:', response);
    return response.data.token;
  } catch (error) {
    throw handleRequestError(error);
  }
};

export const getProducts = async ({ page, limit }) => {
  try {
    const response = await api.get('/users/products', {
      params: { page, limit },
    });
    const totalProductsResponse = await api.get('/users/totalProducts');
    const totalProducts = totalProductsResponse.data.totalProducts;

    return { products: response.data, totalProducts };
  } catch (error) {
    throw error.response ? error.response.data.message : error.message;
  }
};

export const getAllProducts = async () => {
  try {
    const response = await api.get('/users/allProducts'); 
    console.log('getAllProducts Response:', response); // Log the entire response
    return response.data;
  } catch (error) {
    console.error('Error in getAllProducts:', error);
    throw handleRequestError(error);
  }
};




export const getCategories = async () => {
  try {
    const response = await api.get('/users/categories');
    return response.data;
  } catch (error) {
    throw handleRequestError(error);
  }
};

export default api;
