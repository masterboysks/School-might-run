import React from "react";
import { Route, Routes } from "react-router-dom";
import ExamDetails from "../../modules/teacher/sidebar-activities/exam/exam-details/ExamDetails";
import ExamMarks from "../../modules/teacher/sidebar-activities/exam/exam-marks/ExamMarks";
import MarksEntry from "../../modules/teacher/sidebar-activities/exam/marks/entry/MarksEntry";
import MarksView from "../../modules/teacher/sidebar-activities/exam/marks/view/MarksView";
import Slidebar from "../../modules/teacher/sidebar-activities/exam/Slidebar";

export default function Exam() {
  return (
    <Routes>
      <Route path="/" element={<Slidebar />}>
        <Route path="exam-marks" element={<ExamMarks />} />
        <Route path="exam-marks/:examName" element={<ExamDetails />} />
        <Route
          path="exam-marks/:examName/entry/:classOfSchool/:section"
          element={<MarksEntry />}
        />
        <Route
          path="exam-marks/:examName/view/:classOfSchool/:section"
          element={<MarksView />}
        />
      </Route>
    </Routes>
  );
}
