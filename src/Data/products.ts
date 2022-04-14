import useSWR from "swr";

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
  const { data, error } = useSWR("/api/products", fetchProducts, {
    suspense: true,
  });

  const products = data as Product[];

  return { products, error };
};

const fetchProducts = async () => {
  await sleep(1000);
  return productsData;
};
