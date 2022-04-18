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
            console.log(route);
            return (
              <Route
                key={idx}
                path={route.path}
                element={
                  <Suspense fallback={<Spinner />}>
                    <route.component />
                  </Suspense>
                }
              />
            );
          })}
        </Routes>
      </Suspense>
    </>
  );
};

export default AppLayout;
