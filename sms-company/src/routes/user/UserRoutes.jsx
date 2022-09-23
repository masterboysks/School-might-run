import React from "react";
import { Route, Routes } from "react-router-dom";
import Attendence from "../../modules/user/sidebar-activities/attendence/Attendence";
import Dashboard from "../../modules/user/sidebar-activities/dashboard/Dashboard";
import TeacherDetails from "../../modules/user/sidebar-activities/teacher-details/TeacherDetails";
import Sidebar from "../../modules/user/sidebar/Sidebar";

export default function UserRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Sidebar />}>
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="attendence" element={<Attendence />} />
        <Route path="teacher-details" element={<TeacherDetails />} />
      </Route>
    </Routes>
  );
}
