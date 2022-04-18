export const user = { name: "John Doe", email: "jhon@gmail.com" };
import { Product } from "./history";

export const coupon = {
  id: 1,
  code: "SACATEUN7",
  discount: 0.2,
  category: "fruit",
};

export const products: Product[] = [
  {
    id: 1,
    name: "Apple",
    category: "fruit",
    price: 1.5,
    qty: 10,
    brand: "Wholegrain",
    description: "A fruit",
    image:
      "https://www.collinsdictionary.com/images/thumb/apple_158989157_250.jpg?version=4.0.251",
  },
  {
    id: 2,
    name: "Pineapple",
    category: "fruit",
    price: 1.5,
    qty: 10,
    brand: "Wholegrain",
    description: "A fruit",
    image:
      "https://freshandfleshy.com/wp-content/uploads/2021/06/pineapple.jpg",
  },
  {
    id: 3,
    name: "Banana",
    category: "fruit",
    price: 1.5,
    qty: 10,
    brand: "Scandinavian",
    description: "A fruit",
    image:
      "https://imagenes.elpais.com/resizer/ignf5hRqPoNrcNeilF3aB9CKy-M=/1960x0/cloudfront-eu-central-1.images.arcpublishing.com/prisa/HE3SMC3L7Z7XENXLHLLKE3CDEA.jpg",
  },
];

export const history = [
  {
    id: 143123849,
    coupon,
    total: 1000,
    products,
    date: new Date(),
  },
  {
    id: 1431223849,
    coupon,
    total: 1000,
    products,
    date: new Date(),
  },
  {
    id: 1431123849,
    coupon,
    total: 1000,
    products,
    date: new Date(),
  },
  {
    id: 3143123849,
    coupon,
    total: 1000,
    products,
    date: new Date(),
  },
  {
    id: 4143123849,
    coupon,
    total: 1000,
    products,
    date: new Date(),
  },
];
