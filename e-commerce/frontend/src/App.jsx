// App.jsx
import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { UploadProvider } from './context/UploadContext';
import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';
import Navbar from './component/Navbar';
import ProductDetails from './pages/ProductDetails';
import ProfilePage from './pages/ProfilePage';
import ShoppingCartPage from './pages/ShoppingCartPage';
import CheckoutPage from './pages/CheckoutPages';
import OrderPage from './pages/OrderPage';

const App = () => {
  const location = useLocation();
  const isLoginPage = location.pathname === '/login';

  return (
    <ChakraProvider>
      <AuthProvider>
        <UploadProvider>
          {!isLoginPage && <Navbar />}
          <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/product/:productId" element={<ProductDetails />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/cart" element={<ShoppingCartPage />} />
            <Route path="/checkout" element={<CheckoutPage />} />
            <Route path="/Orders" element={<OrderPage />} />
            <Route index element={<HomePage />} />
          </Routes>
        </UploadProvider>
      </AuthProvider>
    </ChakraProvider>
  );
};

export default App;
