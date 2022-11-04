import React, { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
const AssignmentClass = lazy(
  () =>
    import(
      "../../modules/teacher/sidebar-activities/lms/assignment/assignemnt-class/page"
    )
);
const AssignmentNew = lazy(
  () =>
    import(
      "../../modules/teacher/sidebar-activities/lms/assignment/assignment-new/page"
    )
);
const AssignmentView = lazy(
  () =>
    import(
      "../../modules/teacher/sidebar-activities/lms/assignment/assignment-view/page"
    )
);
const Assignment = lazy(
  () =>
    import(
      "../../modules/teacher/sidebar-activities/lms/assignment/assignment/page"
    )
);
const Slidebar = lazy(
  () => import("../../modules/teacher/sidebar-activities/lms/Slidebar")
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
          path="assignment"
          element={
            <Suspense>
              <Assignment />
            </Suspense>
          }
        />
        <Route
          path="assignment/:name"
          element={
            <Suspense>
              <AssignmentClass />
            </Suspense>
          }
        />
        <Route
          path="assignment/:name/:id"
          element={
            <Suspense>
              <AssignmentView />
            </Suspense>
          }
        />
        <Route
          path="assignment/:name/new"
          element={
            <Suspense>
              <AssignmentNew />
            </Suspense>
          }
        />
        <Route path="e-libary" element={"e-libary"} />
        <Route path="pratice-questions" element={"questions"} />
        <Route path="report/assignment-report" element={"assignment reports"} />
        <Route path="report/test-report" element={"test reports"} />
      </Route>
    </Routes>
  );
}
