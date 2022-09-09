import React from "react";
import { Route, Routes } from "react-router-dom";
import ParentMain from "../../pages/ParentMain";

export default function ParentRoutes() {
  return (
    <Routes>
      <Route path="" element={<ParentMain />}>
        {/* <Route path="parent/*" element={<UserRoutes />} />
        <Route path="student/*" element={<UserRoutes />} /> */}
      </Route>
    </Routes>
  );
}
