import React, { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
const Attendance = lazy(
  () => import("../../modules/user/sidebar-activities/attendance/Attendance")
);
const Dashboard = lazy(
  () => import("../../modules/user/sidebar-activities/dashboard/Dashboard")
);
const AdmitCard = lazy(
  () =>
    import("../../modules/user/sidebar-activities/exam/admit-card/AdmitCard")
);
const ExamRoutine = lazy(
  () =>
    import(
      "../../modules/user/sidebar-activities/exam/exam-routine/ExamRoutine"
    )
);
const ReportCard = lazy(
  () =>
    import("../../modules/user/sidebar-activities/exam/report-card/ReportCard")
);
const BalanceSheet = lazy(
  () =>
    import(
      "../../modules/user/sidebar-activities/fee/balance-sheet/BalanceSheet"
    )
);
const FeeInvoice = lazy(
  () =>
    import("../../modules/user/sidebar-activities/fee/fee-invoice/FeeInvoice")
);
const Logsheet = lazy(
  () => import("../../modules/user/sidebar-activities/fee/logsheet/Logsheet")
);
const Reciept = lazy(
  () => import("../../modules/user/sidebar-activities/fee/reciept/Reciept")
);
const TeacherDetails = lazy(
  () =>
    import(
      "../../modules/user/sidebar-activities/teacher-details/TeacherDetails"
    )
);
const Sidebar = lazy(() => import("../../modules/user/sidebar/Sidebar"));

export default function UserRoutes() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Suspense>
            <Sidebar />
          </Suspense>
        }
      >
        <Route
          path="dashboard"
          element={
            <Suspense>
              <Dashboard />
            </Suspense>
          }
        />
        <Route
          path="attendance"
          element={
            <Suspense>
              <Attendance />
            </Suspense>
          }
        />
        <Route
          path="teacher-details"
          element={
            <Suspense>
              <TeacherDetails />
            </Suspense>
          }
        />
        {/* exam */}
        <Route
          path="exam/exam-routine"
          element={
            <Suspense>
              <ExamRoutine />
            </Suspense>
          }
        />
        <Route
          path="exam/admit-card"
          element={
            <Suspense>
              <AdmitCard />
            </Suspense>
          }
        />
        <Route
          path="exam/report-card"
          element={
            <Suspense>
              <ReportCard />
            </Suspense>
          }
        />
        {/* fee */}
        <Route
          path="fee/logsheet"
          element={
            <Suspense>
              <Logsheet />
            </Suspense>
          }
        />
        <Route
          path="fee/fee-invoice"
          element={
            <Suspense>
              <FeeInvoice />
            </Suspense>
          }
        />
        <Route
          path="fee/reciept"
          element={
            <Suspense>
              <Reciept />
            </Suspense>
          }
        />
        <Route
          path="fee/balance-sheet"
          element={
            <Suspense>
              <BalanceSheet />
            </Suspense>
          }
        />
      </Route>
    </Routes>
  );
}
