import React, { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
const ExamDetails = lazy(
  () =>
    import(
      "../../modules/teacher/sidebar-activities/exam/exam-details/ExamDetails"
    )
);
const ExamMarks = lazy(
  () =>
    import("../../modules/teacher/sidebar-activities/exam/exam-marks/ExamMarks")
);
const MarksEntry = lazy(
  () =>
    import(
      "../../modules/teacher/sidebar-activities/exam/marks/entry/MarksEntry"
    )
);
const MarksView = lazy(
  () =>
    import("../../modules/teacher/sidebar-activities/exam/marks/view/MarksView")
);
const Slidebar = lazy(
  () => import("../../modules/teacher/sidebar-activities/exam/Slidebar")
);

export default function Exam() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Suspense>
            <Slidebar />
          </Suspense>
        }
      >
        <Route
          path="exam-marks"
          element={
            <Suspense>
              <ExamMarks />
            </Suspense>
          }
        />
        <Route
          path="exam-marks/:examName"
          element={
            <Suspense>
              <ExamDetails />
            </Suspense>
          }
        />
        <Route
          path="exam-marks/:examName/entry/:classOfSchool/:section"
          element={
            <Suspense>
              <MarksEntry />
            </Suspense>
          }
        />
        <Route
          path="exam-marks/:examName/view/:classOfSchool/:section"
          element={
            <Suspense>
              <MarksView />
            </Suspense>
          }
        />
      </Route>
    </Routes>
  );
}
