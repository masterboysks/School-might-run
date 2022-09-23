import React from "react";
import { Route, Routes } from "react-router-dom";
import Sidebar from "../../modules/parent/sidebar/Sidebar";

export default function UserRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Sidebar />}></Route>
    </Routes>
  );
}
