import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthContextProvider } from "./context/AuthContext";
import HomePage from "./pages/HomePage";
import ShopPage from "./pages/ShopPage";
import ProductPage from "./pages/ProductPage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import Navbar from "./components/Navbar";
import "./App.css";

const App = () => {
  return (
    <AuthContextProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/products" element={<ShopPage />} />
          <Route path="/products/:id" element={<ProductPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
        </Routes>
      </Router>
    </AuthContextProvider>
  );
};

export default App;
