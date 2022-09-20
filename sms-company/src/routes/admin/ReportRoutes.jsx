import React from "react";
import { lazy } from "react";
import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
const StudentAttendenceReportClasses = lazy(() =>
  import(
    "../../modules/admin/sidebar-activities/report/attendence-report/student-attendence-report/classes/StudentAttendenceReportClasses"
  )
);
const ReportSlidebar = lazy(() =>
  import("../../modules/admin/sidebar-activities/report/slidebar")
);
const StudentAttendenceReportClass = lazy(() =>
  import(
    "../../modules/admin/sidebar-activities/report/attendence-report/student-attendence-report/class/StudentAttendenceReportClass"
  )
);
const StaffAttendenceReport = lazy(() =>
  import(
    "../../modules/admin/sidebar-activities/report/attendence-report/staff-sttendence-report/StaffAttendenceReport"
  )
);
const ExamReportClasses = lazy(() =>
  import(
    "../../modules/admin/sidebar-activities/report/exam-report/exam-report-classes/ExamReportClasses"
  )
);
const ExamReportClass = lazy(() =>
  import(
    "../../modules/admin/sidebar-activities/report/exam-report/exam-report-class/ExamReportClass"
  )
);
const FeeReport = lazy(() =>
  import(
    "../../modules/admin/sidebar-activities/report/fee-report/fee-report/FeeReport"
  )
);
const MonthlyFeeStatementReport = lazy(() =>
  import(
    "../../modules/admin/sidebar-activities/report/fee-report/monthly-fee-statement-report/MonthlyFeeStatementReport"
  )
);
const FeeStatementReport = lazy(() =>
  import(
    "../../modules/admin/sidebar-activities/report/fee-report/fee-statement-report/FeeStatementReport"
  )
);
const TopperReportClasses = lazy(() =>
  import(
    "../../modules/admin/sidebar-activities/report/topper-report/topper-report-classes/TopperReportClasses"
  )
);
const TopperReportClass = lazy(() =>
  import(
    "../../modules/admin/sidebar-activities/report/topper-report/topper-report-class/TopperReportClass"
  )
);

export default function ReportRoutes() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Suspense fallback="Loading">
            <ReportSlidebar />
          </Suspense>
        }
      >
        <Route
          path="attendence-report/student-attendence-report"
          element={
            <Suspense fallback="Loading">
              <StudentAttendenceReportClasses />
            </Suspense>
          }
        />
        <Route
          path="attendence-report/student-attendence-report/:classOfSchool/:section"
          element={
            <Suspense fallback="Loading">
              <StudentAttendenceReportClass />
            </Suspense>
          }
        />
        <Route
          path="attendence-report/staff-attendence-report"
          element={
            <Suspense fallback="Loading">
              <StaffAttendenceReport />
            </Suspense>
          }
        />
        <Route
          path="exam-report"
          element={
            <Suspense fallback="Loading">
              <ExamReportClasses />
            </Suspense>
          }
        />
        <Route
          path="exam-report/:classOfSchool/:section"
          element={
            <Suspense fallback="Loading">
              <ExamReportClass />
            </Suspense>
          }
        />
        <Route
          path="fee-report"
          element={
            <Suspense fallback="Loading">
              <FeeReport />
            </Suspense>
          }
        />
        <Route
          path="fee-report/fee-statement/:classOfSchool/:section/:monthly"
          element={
            <Suspense fallback="Loading">
              <MonthlyFeeStatementReport />
            </Suspense>
          }
        />
        <Route
          path="fee-report/fee-statement/:classOfSchool/:section"
          element={
            <Suspense fallback="Loading">
              <FeeStatementReport />
            </Suspense>
          }
        />
        <Route
          path="topper-report"
          element={
            <Suspense fallback="Loading">
              <TopperReportClasses />
            </Suspense>
          }
        />
        <Route
          path="topper-report/:classOfSchool"
          element={
            <Suspense fallback="Loading">
              <TopperReportClass />
            </Suspense>
          }
        />
        <Route
          path="*"
          element={
            <div className="text-primary-grey-700 w-full mt-12 text-xl font-semibold text-center">
              Page not found-{location.pathname.replace("/", " ")}
            </div>
          }
        />
      </Route>
    </Routes>
  );
}
