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
    return response.data;  
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

export const getProducts = async ({ page, limit, sort, filter }) => {
  try {
    const { data } = await api.get('/users/products', {
      params: { page, limit, sort, filter },
    });

    return data;
  } catch (error) {
    throw error.response ? error.response.data.message : error.message;
  }
};

export const getProductById = async (productId) => {
  console.log('Function called with productId:', productId);

  try {
    const response = await api.get(`/users/products/${productId}`);
    console.log('getProductById Response:', response);
    return response.data;
  } catch (error) {
    throw error.response ? error.response.data.message : error.message;
  }
};

export const getAllProducts = async () => {
  try {
    const response = await api.get('/users/allProducts'); 
    console.log('getAllProducts Response:', response); 
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

export const fetchUserData = async (token) => {
  try {
    const tokenString = typeof token === 'object' ? token.token : token;
    console.log('Token in fetchUserData:', tokenString);

    const response = await api.get('/userauth/view-profile', {
      headers: {
        Authorization: `Bearer ${tokenString}`,
      },
    });

    const userData = response.data.user_profile;
    console.log('Fetch User Data:', userData);

    return userData;
  } catch (error) {
    console.error('Fetch User Data Error:', error.response ? error.response.data : error.message);
    throw error;
  }
};

export default api;
