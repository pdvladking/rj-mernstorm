import { useEffect, useState } from "react";
import axios from "axios";

export default function useProducts() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const loadProducts = async () => {
      const { data } = await axios.get("http://localhost:5000/products");
      setProducts(data);
    };
    loadProducts();
  }, []);

  return products;
}