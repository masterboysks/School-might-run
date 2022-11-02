import React from "react";
import { Route, Routes } from "react-router-dom";
import AssignmentClass from "../../modules/teacher/sidebar-activities/lms/assignment/assignemnt-class/page";
import AssignmentNew from "../../modules/teacher/sidebar-activities/lms/assignment/assignment-new/page";
import AssignmentView from "../../modules/teacher/sidebar-activities/lms/assignment/assignment-view/page";
import Assignment from "../../modules/teacher/sidebar-activities/lms/assignment/assignment/page";
import Slidebar from "../../modules/teacher/sidebar-activities/lms/Slidebar";

export default function Exam() {
  return (
    <Routes>
      <Route path="/" element={<Slidebar />}>
        <Route path="assignment" element={<Assignment />} />
        <Route path="assignment/:name" element={<AssignmentClass />} />
        <Route path="assignment/:name/:id" element={<AssignmentView />} />
        <Route path="assignment/:name/new" element={<AssignmentNew />} />
        <Route path="e-libary" element={"e-libary"} />
        <Route path="pratice-questions" element={"questions"} />
        <Route path="report/assignment-report" element={"assignment reports"} />
        <Route path="report/test-report" element={"test reports"} />
      </Route>
    </Routes>
  );
}
