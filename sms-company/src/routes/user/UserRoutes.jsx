import React from "react";
import { Route, Routes } from "react-router-dom";
import Dashboard from "../../modules/user/sidebar-activities/dashboard/Dashboard";
import Sidebar from "../../modules/user/sidebar/Sidebar";

export default function UserRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Sidebar />}>
        <Route path="/" element={<Dashboard />} />
      </Route>
    </Routes>
  );
}
