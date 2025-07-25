import React, { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";

const BASE_URL = import.meta.env.VITE_BACKEND_URL;

const dummyProducts = [
  {
    _id: "1",
    name: "Leather Wallet",
    price: 49.99,
    image: "/product-4.webp",
  },
  {
    _id: "2",
    name: "Stylish Belt",
    price: 29.99,
    image: "/product-6.webp",
  },
  {
    _id: "3",
    name: "Card Holder",
    price: 19.99,
    image: "/product-1.webp",
  },
  {
    _id: "4",
    name: "Vintage Satchel",
    price: 79.99,
    image: "/product-2.webp",
  },
];

const ShopPage = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch(`${BASE_URL}/api/products`);
        const data = await res.json();

        if (Array.isArray(data)) {
          setProducts(data);
        } else {
          console.warn("Invalid product data from backend. Using dummy data.");
          setProducts(dummyProducts);
        }
      } catch (err) {
        console.error("Failed to fetch products, using fallback data:", err);
        setProducts(dummyProducts);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const filteredProducts = products.filter((product) =>
    product.name?.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const formatNPR = (amount) => {
    return new Intl.NumberFormat("en-NP", {
      style: "currency",
      currency: "NPR",
      minimumFractionDigits: 0,
    }).format(amount);
  };

  return (
    <div className="min-h-screen bg-gray-50 px-4 sm:px-6 py-10">
      <h2 className="text-3xl font-serif font-bold text-center text-gray-800 mb-10">
        Shop All Products
      </h2>

      <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-8">
        <input
          type="text"
          placeholder="Search products..."
          aria-label="Search products"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="px-4 py-2 border border-gray-300 rounded w-full sm:w-64 shadow-sm focus:ring-amber-600 focus:border-amber-600"
        />
        <select
          className="px-4 py-2 border border-gray-300 rounded w-full sm:w-48 shadow-sm focus:ring-amber-600 focus:border-amber-600"
          aria-label="Sort products"
        >
          <option>Sort by</option>
          <option value="low-high">Price: Low to High</option>
          <option value="high-low">Price: High to Low</option>
          <option value="trending">Trending</option>
        </select>
      </div>

      {loading ? (
        <p className="text-center text-gray-500 font-medium">Loading products...</p>
      ) : filteredProducts.length === 0 ? (
        <div className="text-center mt-20">
          <img
            src="/empty-cart.svg"
            alt="No products available"
            className="w-48 h-48 mx-auto opacity-60"
            loading="lazy"
          />
          <h3 className="text-lg text-gray-600 mt-4">No products found.</h3>
          <p className="text-sm text-gray-400">Check back later or refresh the page.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product._id}
              product={{
                ...product,
                priceFormatted: formatNPR(product.price),
              }}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default ShopPage;