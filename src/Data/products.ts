import { useState, useEffect } from "react";

export interface Product {
  id: number;
  name: string;
  brand: string;
  category: string;
  description: string;
  price: number;
  qty: number;
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
      setProducts(products);
    };
    fetchProducts().finally(() => setLoading(false));
  }, []);

  return { products, loading };
};

const products = [
  {
    id: 1,
    name: "Apple",
    category: "fruit",
    price: 1.5,
    qty: 10,
    brand: "Apple",
    description: "A fruit",
  },
  {
    id: 2,
    name: "Pineapple",
    category: "fruit",
    price: 1.5,
    qty: 10,
    brand: "Apple",
    description: "A fruit",
  },
  {
    id: 3,
    name: "Banana",
    category: "fruit",
    price: 1.5,
    qty: 10,
    brand: "Apple",
    description: "A fruit",
  },
];
