import React, { lazy, Suspense } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import AddPlan from "../pages/admin/plan/AddPlan";
import Company from "../pages/admin/company/Company";
import AddCompany from "../pages/admin/company/AddCompany";
import Plan from "../pages/admin/plan/Plan";
import ChangePassword from "../pages/admin/ChangePassword";
import MainLayout from "../layout/admin/MainLayout";

const Dashboard = lazy(() => import("../pages/admin/dashboard/Dashboard"));
const PlanRequest = lazy(() =>
  import("../pages/admin/plan request/PlanRequest")
);
const SystemSettings = lazy(() =>
  import("../pages/admin/system-settings/SystemSettings")
);
const Error = lazy(() => import("../pages/error/Error"));

export default function AdminRoutes() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route index element={<Navigate to="dashboard" />} />
        <Route
          path="dashboard"
          element={
            <Suspense fallback="Loading...">
              <Dashboard />
            </Suspense>
          }
        />
        <Route path="company" element={<Company />} />
        <Route path="company/add" element={<AddCompany />} />
        <Route
          path="plan"
          element={
            <Suspense fallback="Loading...">
              <Plan />
            </Suspense>
          }
        />
        <Route path="plan/add" element={<AddPlan />} />
        <Route
          path="plan-request"
          element={
            <Suspense fallback="Loading...">
              <PlanRequest />
            </Suspense>
          }
        />
        <Route
          path="system-settings"
          element={
            <Suspense fallback="Loading...">
              <SystemSettings />
            </Suspense>
          }
        />
        <Route
          path="change-password"
          element={
            <Suspense fallback="Loading...">
              <ChangePassword />
            </Suspense>
          }
        />

        <Route
          path="*"
          element={
            <Suspense fallback="Loading...">
              <Error />
            </Suspense>
          }
        ></Route>
      </Route>
    </Routes>
  );
}
