import React from "react";
import { FaInstagram, FaFacebookF, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-white px-6 md:px-16 py-12">
      <div className="max-w-7xl mx-auto grid gap-8 md:grid-cols-3 items-start">
        {/* Brand */}
        <div>
          <h3 className="text-2xl font-serif mb-4">RAWHIDE</h3>
          <p className="text-sm text-neutral-400">
            Crafted for the understated. Built for the bold.
          </p>
        </div>

        {/* Links */}
        <nav className="space-y-2">
          <a href="/" className="block text-sm hover:underline">
            Home
          </a>
          <a href="/shop" className="block text-sm hover:underline">
            Shop
          </a>
          <a href="/about" className="block text-sm hover:underline">
            About
          </a>
          <a href="/contact" className="block text-sm hover:underline">
            Contact
          </a>
        </nav>


        <div className="flex space-x-4 justify-start">
          <a href="https://instagram.com" target="_blank" rel="noreferrer">
            <FaInstagram className="text-xl hover:text-neutral-400" />
          </a>
          <a href="https://facebook.com" target="_blank" rel="noreferrer">
            <FaFacebookF className="text-xl hover:text-neutral-400" />
          </a>
          <a href="mailto:yourname@gmail.com">
            <FaEnvelope className="text-xl hover:text-neutral-400" />
          </a>

        </div>
      </div>


      <div className="mt-12 border-t border-neutral-700 pt-6 text-sm text-neutral-500 text-center">
        © {new Date().getFullYear()} copyright. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;