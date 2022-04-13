import { lazy } from "react";

const Home = lazy(() => import("../Controllers/Home"));

export const appRoutes = [{ path: "/", component: Home }];
