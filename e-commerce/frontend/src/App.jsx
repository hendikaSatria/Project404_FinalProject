import React, { useState } from "react";
import { ChakraProvider } from "@chakra-ui/react";
import {
  Routes,
  Route,
  useLocation,
  useNavigate,
  Navigate,
} from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import { UploadProvider } from "./context/UploadContext";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import Navbar from "./component/Navbar";
import ProductDetails from "./pages/ProductDetails";
import ProfilePage from "./pages/ProfilePage";
import ShoppingCartPage from "./pages/ShoppingCartPage";
import CheckoutPage from "./pages/CheckoutPages";
import OrderPage from "./pages/OrderPage";
import AdminRouter from "./routers/AdminRouter";

const App = () => {
  const location = useLocation();
  const isLoginPage = location.pathname === "/login";
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const handleSearchTermChange = (newSearchTerm) => {
    console.log("New Search Term:", newSearchTerm);
    setSearchTerm(newSearchTerm);
    navigate("/");
  };

  return (
    <ChakraProvider>
      <Routes>
        {/* Rute default atau rute awal */}
        <Route path="/admin" element={<Navigate to="/admin/login" />} />
        <Route path="/admin/*" element={<AdminRouter />} />
      </Routes>

      <AuthProvider>
        <UploadProvider>
          {!isLoginPage && (
            <Navbar onSearchTermChange={handleSearchTermChange} />
          )}
          <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/product/:productId" element={<ProductDetails />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/cart" element={<ShoppingCartPage />} />
            <Route path="/checkout" element={<CheckoutPage />} />
            <Route path="/Orders" element={<OrderPage />} />
            <Route index element={<HomePage searchTerm={searchTerm} />} />
          </Routes>
        </UploadProvider>
      </AuthProvider>
    </ChakraProvider>
  );
};

export default App;
