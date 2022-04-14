import { useState, useEffect } from "react";

import { products as productsData } from "./placeholders";

function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export interface Product {
  id: number;
  name: string;
  brand: string;
  category: string;
  description: string;
  price: number;
  qty: number;
}

export const useProductsData = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      await sleep(1000);
      setProducts(productsData);
    };
    fetchProducts().finally(() => setLoading(false));
  }, []);

  return { products, loading };
};
