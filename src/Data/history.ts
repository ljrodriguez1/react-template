import { useState, useEffect } from "react";

import { Coupon } from "./cuppons";

export interface Product {
  id: number;
  name: string;
  brand: string;
  category: string;
  description: string;
  price: number;
  qty: number;
}

interface History {
  products: Product[];
  id: number;
  coupon: Coupon;
  total: number;
}

function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export const useHistoryData = () => {
  const [history, setHistory] = useState<History[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      await sleep(1000);
      setHistory(history);
    };
    fetchProducts().finally(() => setLoading(false));
  }, []);

  return { history, loading };
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

const coupon = {
  id: 1,
  code: "SACATEUN7",
  discount: 0.2,
  category: "fruit",
};

const history = [
  {
    id: 1,
    coupon,
    total: 1000,
    products,
  },
];
