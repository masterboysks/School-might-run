import React from "react";
import {
  Link,
  Route,
  Routes,
  useLocation,
  useNavigate,
} from "react-router-dom";
import Home from "../pages/landing/home";
import Login from "../pages/sign/login";
import Signup from "../pages/sign/signup";

export default function LandingRoutes() {
  const path = useLocation().pathname;
  const navigate = useNavigate();

  return (
    <Routes>
      <Route path="/*">
        <Route index element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
        <Route
          path="*"
          element={
            <div className="text-center  flex w-screen h-screen items-center justify-center bg-gradient-to-tr from-primary-base/70 to-primary-secondary/30  flex-col">
              <h2 className="text-6xl ">Cannot find page: {path}</h2>
              <div className="space-x-6 ">
                <Link to="/" className="my-12">
                  Return to home
                </Link>
                <button
                  onClick={() => {
                    navigate(-1);
                  }}
                  className="mt-12"
                >
                  Return back
                </button>
              </div>
            </div>
          }
        />
      </Route>
    </Routes>
  );
}
