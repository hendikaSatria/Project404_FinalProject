// App.jsx
import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';
import Navbar from './component/Navbar';
import ProductDetails from './pages/ProductDetails';
import ProfilePage from './pages/ProfilePage';

const App = () => {
  const location = useLocation();
  const isLoginPage = location.pathname === '/login';

  return (
    <ChakraProvider>
      <AuthProvider>
        {!isLoginPage && <Navbar />}
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/product/:productId" element={<ProductDetails />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route index element={<HomePage />} />
        </Routes>
      </AuthProvider>
    </ChakraProvider>
  );
};

export default App;
