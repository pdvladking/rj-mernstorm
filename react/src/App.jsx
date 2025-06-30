import React from "react";
import { SpeedInsights } from "@vercel/speed-insights/react";
import { Routes, Route } from "react-router-dom";
import { CartProvider } from "./context/CartContext";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import PrivateRoute from "./components/PrivateRoute";

import HomePage from "./pages/HomePage";
import AboutUs from "./pages/AboutUs";
import ShopPage from "./pages/ShopPage";
import CartPage from "./pages/CartPage";
import CheckoutPage from "./pages/CheckoutPage";
import ContactPage from "./pages/ContactPage";
import CraftedStories from "./pages/CraftedStories";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import SingleStory from "./pages/SingleStory.jsx";
import ModernLeather from "./pages/SingleStory2.jsx";
import LeatherHistory from "./pages/SingleStory3.jsx";
import TrendsPage from "./pages/TrendsPage.jsx";

const App = () => {
  return (
    <CartProvider>
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/crafted-stories" element={<CraftedStories />} />
        <Route path="/crafted-stories/why-choose-leather" element={<SingleStory />} />
        <Route path="/crafted-stories/leather-market-nepal" element={<ModernLeather />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/crafted-stories/leather-history-nepal" element={<LeatherHistory />} />
        <Route path="/trends" element={<TrendsPage />} />
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
      <SpeedInsights />
    </CartProvider>
  );
};

export default App;