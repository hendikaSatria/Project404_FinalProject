// <<<<<<< Moza
// import React from "react";
// import { ChakraProvider } from "@chakra-ui/react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import AdminRouter from "./AdminRouter"; // Sesuaikan dengan struktur proyek Anda
// import UserRouter from "./UserRouter"; // Sesuaikan dengan struktur proyek Anda

// const App = () => {
//   return (
//     <React.StrictMode>
//       <ChakraProvider>
//         <Router>
//           <Routes>
//             <Route path="/admin/*" element={<AdminRouter />} />
//             <Route path="/user/*" element={<UserRouter />} />
//             {/* Mungkin Anda ingin menambahkan rute lain di sini */}
//           </Routes>
//         </Router>
//       </ChakraProvider>
//     </React.StrictMode>

import React from 'react';
import { VStack } from '@chakra-ui/react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import AdminLogin from './pages/admin/adminLogin';
import Home from './pages/admin/home';
import Order from './pages/admin/Order';
import User from './pages/admin/User';
import './App.css'

const checkAuthentication = () => {
  // Periksa apakah token ada di localStorage
  return localStorage.getItem('Token');
};

const PrivateRoute = ({ element }) => {
  return checkAuthentication() ? element : <Navigate to="/login" />;
};

function App() {
  return (
      <Router>
        <Routes>
          <Route path="/" element={<Navigate to="/login" />} />
          <Route path="/login" element={<AdminLogin />} />
          <Route path="/home" element={<PrivateRoute element={<Home />} />} />
          <Route path="/order" element={<PrivateRoute element={<Order />} />} />
          <Route path="/user" element={<PrivateRoute element={<User />} />} />
        </Routes>
      </Router>
  );
};

export default App;
