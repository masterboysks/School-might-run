import React from "react";
import { Route, Routes } from "react-router-dom";
import Slidebar from "../../modules/teacher/sidebar-activities/exam/Slidebar";

export default function Exam() {
  return (
    <Routes>
      <Route path="/" element={<Slidebar />}>
        <Route path="exam-marks" element="hiii" />
      </Route>
    </Routes>
  );
}
