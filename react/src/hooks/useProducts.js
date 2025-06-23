import { useEffect, useState } from "react";
import axios from "axios";

const BASE_URL = process.env.REACT_APP_BACKEND_URL;

export default function useProducts() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const { data } = await axios.get(`${BASE_URL}/api/products`);
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    loadProducts();
  }, []);

  return products;
}