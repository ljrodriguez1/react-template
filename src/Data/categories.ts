import { useState, useEffect } from "react";

export interface Category {
  id: number;
  name: string;
}

function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export const useCategories = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      await sleep(1000);
      setCategories([category]);
    };
    fetchProducts().finally(() => setLoading(false));
  }, []);

  return { categories, loading };
};

const category = {
  id: 1,
  name: "fruit",
};
