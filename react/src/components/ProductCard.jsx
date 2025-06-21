import React from "react";
import { useCart } from "../context/CartContext";

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-200 hover:scale-105">
      <img
        src={product.image}
        alt={product.title}
        className="w-full h-60 object-cover"
      />

      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800 line-clamp-1">
          {product.title}
        </h3>
        <p className="text-gray-600 text-sm line-clamp-2 mt-1">
          {product.description}
        </p>

        <div className="mt-4 flex justify-between items-center">
          <span className="text-xl font-bold text-gray-900">
            ${product.price.toFixed(2)}
          </span>
          <button
            onClick={() => addToCart(product)}
            className="px-4 py-1 bg-black text-white text-sm rounded hover:bg-gray-800"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;