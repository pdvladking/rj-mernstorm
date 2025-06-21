import React, { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { FiSearch, FiShoppingCart } from "react-icons/fi";
import { useCart } from "../context/CartContext";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const { cartItems } = useCart();

  const user = JSON.parse(localStorage.getItem("user"));

  const handleLogout = () => {
    localStorage.removeItem("user");
    setIsMenuOpen(false);
    navigate("/");
  };

  const navItems = [
    { label: "New", path: "/" },
    { label: "Trends", path: "/trends" },
    { label: "Shop", path: "/shop" },
    { label: "Journal", path: "/journal" },
    { label: "Contact", path: "/contact" },
    { label: "About us", path: "/about" },
  ];

  return (
    <nav className="bg-black text-white sticky top-0 z-50 px-6 py-4 shadow-md">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <Link to="/">
          <img
            src="/rawh 6.webp"
            alt="logo"
            className="h-10 w-10 rounded-full object-cover"
          />
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden md:flex gap-8 font-serif font-medium text-base">
          {navItems.map(({ label, path }) => (
            <li key={path}>
              <NavLink
                to={path}
                className={({ isActive }) =>
                  isActive
                    ? "underline text-white"
                    : "hover:text-gray-300 text-white"
                }
              >
                {label}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Right Content */}
        <div className="hidden md:flex items-center gap-6">
          {/* Icons */}
          <div className="flex items-center gap-4 text-xl">
            <button aria-label="Search">
              <FiSearch className="hover:text-gray-300" />
            </button>
            <Link to="/cart" aria-label="Cart" className="relative">
              <FiShoppingCart className="hover:text-gray-300" />
              {cartItems.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-white text-black text-xs rounded-full px-1">
                  {cartItems.length}
                </span>
              )}
            </Link>
          </div>

          {/* Auth Buttons */}
          <div className="flex gap-2">
            {user ? (
              <button
                onClick={handleLogout}
                className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition"
              >
                Logout
              </button>
            ) : (
              <>
                <Link
                  to="/signup"
                  className="px-4 py-2 border border-white text-white rounded hover:bg-white hover:text-black transition"
                >
                  Sign Up
                </Link>
                <Link
                  to="/login"
                  className="px-4 py-2 bg-white text-black rounded hover:bg-gray-200 transition"
                >
                  Login
                </Link>
              </>
            )}
          </div>
        </div>

        {/* Hamburger Icon */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle Menu"
        >
          {isMenuOpen ? "✖" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden mt-4 space-y-4 font-serif font-medium text-base">
          {navItems.map(({ label, path }) => (
            <NavLink
              key={path}
              to={path}
              className="block px-4 py-2 hover:bg-white hover:text-black rounded text-white"
              onClick={() => setIsMenuOpen(false)}
            >
              {label}
            </NavLink>
          ))}
          <div className="flex items-center justify-between px-4 pt-4 border-t border-gray-700">
            <div className="flex gap-4 text-xl">
              <button aria-label="Search">
                <FiSearch className="hover:text-gray-300" />
              </button>
              <Link to="/cart" aria-label="Cart">
                <FiShoppingCart className="hover:text-gray-300" />
              </Link>
            </div>
            <div className="flex gap-2">
              {user ? (
                <button
                  onClick={handleLogout}
                  className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition"
                >
                  Logout
                </button>
              ) : (
                <>
                  <Link
                    to="/signup"
                    className="px-4 py-2 border border-white text-white rounded hover:bg-white hover:text-black transition"
                  >
                    Sign Up
                  </Link>
                  <Link
                    to="/login"
                    className="px-4 py-2 bg-white text-black rounded hover:bg-gray-200 transition"
                  >
                    Login
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;