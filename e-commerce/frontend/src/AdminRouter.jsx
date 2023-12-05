import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import AdminLogin from "./pages/admin/adminLogin";
import User from "./pages/admin/User";
import Order from "./pages/admin/Order";
import AdminSidebar from "./Components/AdminSidebar";
import { Box, Flex } from "@chakra-ui/react";

const checkAuthentication = () => {
    // Periksa apakah token ada di localStorage
    return localStorage.getItem('Token');
  };
  
  const PrivateRoute = ({ element }) => {
    return checkAuthentication() ? element : <Navigate to="/login" />;
  };

  const AdminRouter = () => {
    return (
      <>
        <Flex>
          <AdminSidebar />
          <Box>
            <Routes>
              <Route path="/" element={<Navigate to="/admin/login" />} />
              <Route path="/login" element={<AdminLogin />} />
              <Route path="/order" element={<PrivateRoute element={<Order />} />} />
              <Route path="/user" element={<PrivateRoute element={<User />} />} />
              {/* Tambahkan rute lain jika diperlukan */}
            </Routes>
          </Box>
        </Flex>
      </>
    );
  };
  

export default AdminRouter;
