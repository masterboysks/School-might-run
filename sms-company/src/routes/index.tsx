import React from "react";
import { Outlet, Route, Routes } from "react-router-dom";
import Login from "../pages/Login";
import TeacherRoutes from "./teacher";
import AdminRoutes from "./admin";
import UserRoutes from "./user/UserRoutes";
import Welcome from "../modules/user/welcome/Welcome";

export default function MainRoutes() {
  return (
    <Routes>
      <Route path="/">
        <Route index element={<Login />} />
        <Route path="admin/*" element={<AdminRoutes />} />
        <Route path="student" element={<Outlet />}>
          <Route path="dashboard/*" element={<UserRoutes />} />
        </Route>
        <Route path="parent" element={<Outlet />}>
          <Route path="welcome" element={<Welcome />} />

          <Route path="dashboard/*" element={<UserRoutes />} />
        </Route>
        <Route path="teacher/*" element={<TeacherRoutes />} />
        <Route path="*" element={<>404 not found</>} />
      </Route>
    </Routes>
  );
}
