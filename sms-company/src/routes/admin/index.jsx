import { Routes, Route } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useState, lazy, Suspense } from "react";
import StudentRoutes from "./StudentRoutes";
import StaffRoutes from "./StaffRoutes";
import AdminDashboardRoutes from "./AdminDashboardRoutes";
import ExamRoutes from "./ExamRoutes";
import ReportRoutes from "./ReportRoutes";
import FeeRoutes from "./FeeRoutes";

const AdminMain = lazy(() => import("../../pages/AdminMain"));

//

// routes of report

function AdminRoutes() {
  const location = useLocation();
  return (
    <Routes>
      <Route
        path="/dashboard/"
        element={
          <Suspense>
            <AdminMain />
          </Suspense>
        }
      >
        <Route path="report/*" element={<ReportRoutes />}></Route>
        <Route path="exam/*" element={<ExamRoutes />}></Route>
        <Route path="admin/*" element={<AdminDashboardRoutes />}></Route>
        <Route path="staff/*" element={<StaffRoutes />}></Route>
        <Route path="student/*" element={<StudentRoutes />}></Route>
        <Route path="fee/*" element={<FeeRoutes />}></Route>

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

export default AdminRoutes;
