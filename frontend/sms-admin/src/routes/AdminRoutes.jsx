import React from "react";
import { Route, Routes } from "react-router-dom";
import Company from "../pages/admin/company/Company";
import Dashboard from "../pages/admin/dashboard/Dashboard";
import PlanRequest from "../pages/admin/plan request/PlanRequest";
import Plan from "../pages/admin/plan/Plan";
import SystemSettings from "../pages/admin/system-settings/SystemSettings";
import Error from "../pages/error/Error";

export default function AdminRoutes() {
  return (
    <Routes>
      <Route path="dashboard" element={<Dashboard />} />
      <Route path="company" element={<Company />} />
      <Route path="plan" element={<Plan />} />
      <Route path="plan-request" element={<PlanRequest />} />
      <Route path="system-settings" element={<SystemSettings />} />

      <Route path="*" element={<Error />}></Route>
    </Routes>
  );
}
