import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";

const Error = lazy(() => import("../pages/error/Error"));
const Home = lazy(() => import("../pages/landing/home"));
const Login = lazy(() => import("../pages/sign/login"));
const Signout = lazy(() => import("../pages/sign/signout"));
const AdminRoutes = lazy(() => import("./AdminRoutes"));

export default function LandingRoutes() {
  return (
    <Routes>
      <Route path="/">
        <Route
          index
          element={
            <Suspense fallback="Loading...">
              <Home />
            </Suspense>
          }
        />
        <Route
          path="login"
          element={
            <Suspense fallback="Loading...">
              <Login />
            </Suspense>
          }
        />
        <Route
          path="admin/*"
          element={
            <Suspense fallback="Loading...">
              <AdminRoutes />
            </Suspense>
          }
        />
        <Route
          path="/signout"
          element={
            <Suspense fallback="Loading...">
              <Signout />
            </Suspense>
          }
        />
        <Route
          path="*"
          element={
            <Suspense fallback="Loading...">
              <Error />
            </Suspense>
          }
        />
      </Route>
    </Routes>
  );
}
