import React from "react";
import { Route, Routes } from "react-router-dom";
import TeacherMain from "../../pages/TeacherMain";

export default function TeacherRoutes() {
  return (
    <Routes>
      {/* <Route path="/" elements={<TeacherMain />}> */}
      <Route path="dashboard" element={<TeacherMain />} />
      {/* </Route> */}
    </Routes>
  );
}
