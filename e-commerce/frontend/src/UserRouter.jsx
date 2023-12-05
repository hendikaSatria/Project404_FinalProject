import React from "react";
import { Route, Routes } from "react-router-dom";
import UserPage from "./pages/User/UserPage";// Sesuaikan dengan struktur proyek Anda

const UserRouter = () => {
  return (
    <Routes>
      <Route path="/" component={UserPage} />
      {/* Tambahkan rute pengguna lainnya di sini */}
    </Routes>
  );
};

export default UserRouter;
