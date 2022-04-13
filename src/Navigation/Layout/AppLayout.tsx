import { Route, Routes } from "react-router-dom";
import { Suspense } from "react";

import { appRoutes } from "../routes";
import Spinner from "../../Services/Spinner";

const AppLayout = function () {
  return (
    <>
      {/* <Header {...props} /> */}
      <Suspense fallback={<Spinner />}>
        <Routes>
          {appRoutes.map((route, idx) => {
            return route.component ? (
              <Route
                key={idx}
                path={route.path}
                element={<route.component />}
              />
            ) : null;
          })}
        </Routes>
      </Suspense>
    </>
  );
};

export default AppLayout;
