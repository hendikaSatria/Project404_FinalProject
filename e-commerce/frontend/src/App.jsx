import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { AuthProvider } from './context/AuthContext';
import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';
import Navbar from './component/Navbar'; 

const App = () => {
  return (
    <ChakraProvider>
      <AuthProvider>
        <Navbar /> 
        <HomePage/>
      </AuthProvider>
    </ChakraProvider>
  );
};

export default App;
