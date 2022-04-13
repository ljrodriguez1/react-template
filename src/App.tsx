import "./App.css";
import { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { appRoutes } from "./Navigation/routes";

import Spinner from "./Services/Spinner";
import PageNotFound from "./Services/NotFound";
// containers
const AppLayout = lazy(() => import("./Navigation/Layout/AppLayout"));

function App() {
  return (
    <div className="root">
      <BrowserRouter>
        <Suspense fallback={<Spinner />}>
          <Routes>
            {appRoutes.map((route, idx) => {
              console.log(route);
              return (
                <Route key={idx} path={route.path} element={<AppLayout />} />
              );
            })}
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </div>
  );
}

export default App;
