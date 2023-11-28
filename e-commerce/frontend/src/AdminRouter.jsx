import React from "react";
import { Routes, Route } from "react-router-dom";
import Warehousepage from "./pages/Admin/Warehousepage";
import AdminSidebar from "./components/AdminSidebar";
import { Box, Flex } from "@chakra-ui/react";

const AdminRouter = () => {
  return (
    <>
      <Flex>
        <AdminSidebar />
        <Box>
          <Routes>
            <Route path="/warehouse" element={<Warehousepage />} />
            {/* Tambahkan rute admin lainnya di sini */}
          </Routes>
        </Box>
      </Flex>
    </>
  );
};

export default AdminRouter;
