import { useState, useEffect } from "react";

import { Coupon } from "./usedCoupons";

import { history as historyData } from "./placeholders";

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
      setHistory(historyData);
    };
    fetchProducts().finally(() => setLoading(false));
  }, []);

  return { history, loading };
};
