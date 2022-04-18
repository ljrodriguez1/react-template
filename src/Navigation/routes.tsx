import { lazy } from "react";

const Home = lazy(() => import("../Controllers/Home"));
const Order = lazy(() => import("../Controllers/Order"));

export const appRoutes = [
  { path: "/order", component: Order },
  { path: "/", component: Home },
];
