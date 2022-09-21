import React from "react";
import { Route, Routes } from "react-router-dom";
import Slidebar from "../../modules/teacher/sidebar-activities/lms/Slidebar";

export default function Exam() {
  return (
    <Routes>
      <Route path="/" element={<Slidebar />}>
        <Route path="assignment" element={"Assignment"} />
        <Route path="e-libary" element={"e-libary"} />
        <Route path="pratice-questions" element={"questions"} />
        <Route path="report/assignment-report" element={"assignment reports"} />
        <Route path="report/test-report" element={"test reports"} />
      </Route>
    </Routes>
  );
}
