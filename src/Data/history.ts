import useSWR from "swr";

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
  image: string;
}

export interface History {
  products: Product[];
  id: number;
  coupon: Coupon;
  total: number;
  date: Date;
}

function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export const useHistoryData = () => {
  const { data, error } = useSWR("/api/history", fetchProducts, {
    suspense: true,
  });

  const history = data as History[];

  return { history, error };
};

const fetchProducts = async () => {
  await sleep(1000);
  return historyData;
};

export const useOrderData = ({ orderId }: { orderId: number }) => {
  const { data, error } = useSWR(`/api/history/${orderId}`, fetchProduct, {
    suspense: true,
  });

  const order = data as History;

  return { order, error };
};

const fetchProduct = async () => {
  await sleep(1000);
  return historyData[0];
};
