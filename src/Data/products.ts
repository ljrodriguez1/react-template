import { useState, useEffect } from "react";

export interface Product {
  id: number;
  name: string;
  category: string;
}

function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export const useProductsData = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      await sleep(1000);
      setProducts([
        { id: 1, name: "Apple", category: "fruit" },
        { id: 2, name: "Pineapple", category: "fruit" },
        { id: 3, name: "Banana", category: "fruit" },
      ]);
    };
    fetchProducts().finally(() => setLoading(false));
  }, []);

  return { products, loading };
};
