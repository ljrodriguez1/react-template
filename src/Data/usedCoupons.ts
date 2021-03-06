import { useState, useEffect } from "react";

import { coupon } from "./placeholders";

export interface Coupon {
  id: number;
  code: string;
  discount: number;
  category: string;
}

function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export const useUsedCoupons = () => {
  const [usedCoupons, setUsedCoupons] = useState<Coupon[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      await sleep(1000);
      setUsedCoupons([coupon]);
    };
    fetchProducts().finally(() => setLoading(false));
  }, []);

  return { usedCoupons, loading };
};
