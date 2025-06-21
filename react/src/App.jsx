import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import CartPage from "./pages/CartPage.jsx";
import PrivateRoute from "./components/PrivateRoute.jsx";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import HomePage from "./pages/HomePage";
import AboutUs from "./pages/AboutUs";
import ShopPage from "./pages/ShopPage";
import CheckoutPage from "./pages/CheckoutPage.jsx";
import ContactPage from "./pages/ContactPage";
import JournalPage from "./pages/JournalPostPage.jsx";
import JournalPostPage from "./pages/JournalPostPage";
import LoginPage from "./pages/LoginPage.jsx";
import SignupPage from "./pages/SignupPage.jsx";




const App = () => {
  return (
    <CartProvider>
      <Router>
        <Navbar />

        <Routes>
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/journal" element={<JournalPage />} />
          <Route path="/journal/:id" element={<JournalPostPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route
            path="/checkout"
            element={
              <PrivateRoute>
                <CheckoutPage />
              </PrivateRoute>
            }
          />



        </Routes>

        <Footer />
      </Router>
    </CartProvider>
  );
};

export default App;