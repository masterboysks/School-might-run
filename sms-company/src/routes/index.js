import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "../pages/Login";
import TeacherRoutes from "./teacher";
import AdminRoutes from "./admin";
import ParentRoutes from "./parent";
import StudentRoutes from "./student";

export default function MainRoutes() {
  return (
    <Routes>
      <Route path="/">
        <Route index element={<Login />} />
        <Route path="admin/*" element={<AdminRoutes />} />
        <Route path="student/*" element={<StudentRoutes />} />
        <Route path="parent/*" element={<ParentRoutes />} />
        <Route path="teacher/*" element={<TeacherRoutes />} />
        <Route path="*" element={<>404 not found</>} />
      </Route>
    </Routes>
  );
}
