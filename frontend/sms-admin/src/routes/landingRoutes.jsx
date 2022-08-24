import { Route, Routes } from "react-router-dom";
import Error from "../pages/error/Error";
import Home from "../pages/landing/home";
import Login from "../pages/sign/login";
import Signout from "../pages/sign/signout";
import AdminRoutes from "./AdminRoutes";

export default function LandingRoutes() {
  return (
    <Routes>
      <Route path="/">
        <Route index element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="admin/*" element={<AdminRoutes />} />
        <Route path="/signout" element={<Signout />} />
        <Route path="*" element={<Error />} />
      </Route>
    </Routes>
  );
}
