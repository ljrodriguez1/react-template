import { lazy } from "react";

const Home = lazy(() => import("../Controllers/Home"));

export const appRoutes = [
  { path: "/", exact: true, name: "Landing Page", component: Home },
];
