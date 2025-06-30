import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative bg-black text-white overflow-hidden">

      <div className="absolute inset-0">
        <img
          src="/HeroSection.webp"
          alt="Premium leather goods"
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40" />
      </div>


      <div className="relative z-10 px-6 py-32 md:px-16 flex flex-col items-center text-center">
        <h1 className="text-4xl md:text-6xl font-serif font-semibold leading-tight mb-6">
          Crafted for Legacy.
          <br className="hidden md:block" />
          Designed for Now.
        </h1>
        <p className="text-lg font-sans text-gray-300 max-w-xl mb-8">
          Hand-stitched leather goods that age with grace. Built to last. Styled to lead.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            to="/shop"
            className="px-6 py-3 bg-white text-black rounded hover:bg-gray-200 transition"
          >
            Shop Collection
          </Link>
          <Link
            to="/about"
            className="px-6 py-3 border border-white text-white rounded hover:bg-white hover:text-black transition"
          >
            Our Story
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;