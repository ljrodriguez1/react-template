export const user = { name: "John Doe", email: "jhon@gmail.com" };

export const coupon = {
  id: 1,
  code: "SACATEUN7",
  discount: 0.2,
  category: "fruit",
};

export const products = [
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

export const history = [
  {
    id: 1,
    coupon,
    total: 1000,
    products,
  },
];
