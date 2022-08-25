import React, { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";

const AddCompany = lazy(() => import("../pages/admin/company/AddCompany"));
const Company = lazy(() => import("../pages/admin/company/Company"));
const Dashboard = lazy(() => import("../pages/admin/dashboard/Dashboard"));
const PlanRequest = lazy(() =>
  import("../pages/admin/plan request/PlanRequest")
);
const Plan = lazy(() => import("../pages/admin/plan/Plan"));
const SystemSettings = lazy(() =>
  import("../pages/admin/system-settings/SystemSettings")
);
const Error = lazy(() => import("../pages/error/Error"));

export default function AdminRoutes() {
  return (
    <Routes>
      <Route
        path="dashboard"
        element={
          <Suspense fallback="Loading...">
            <Dashboard />
          </Suspense>
        }
      />
      <Route
        path="company"
        element={
          <Suspense fallback="Loading...">
            <Company />
          </Suspense>
        }
      />
      <Route
        path="company/add"
        element={
          <Suspense fallback="Loading...">
            <AddCompany />
          </Suspense>
        }
      />
      <Route
        path="plan"
        element={
          <Suspense fallback="Loading...">
            <Plan />
          </Suspense>
        }
      />
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
        path="*"
        element={
          <Suspense fallback="Loading...">
            <Error />
          </Suspense>
        }
      ></Route>
    </Routes>
  );
}
