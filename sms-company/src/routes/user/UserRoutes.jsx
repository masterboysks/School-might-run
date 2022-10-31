import React from "react";
import { Route, Routes } from "react-router-dom";
import Attendance from "../../modules/user/sidebar-activities/attendance/Attendance";
import Dashboard from "../../modules/user/sidebar-activities/dashboard/Dashboard";
import AdmitCard from "../../modules/user/sidebar-activities/exam/admit-card/AdmitCard";
import ExamRoutine from "../../modules/user/sidebar-activities/exam/exam-routine/ExamRoutine";
import ReportCard from "../../modules/user/sidebar-activities/exam/report-card/ReportCard";
import BalanceSheet from "../../modules/user/sidebar-activities/fee/balance-sheet/BalanceSheet";
import FeeInvoice from "../../modules/user/sidebar-activities/fee/fee-invoice/FeeInvoice";
import Logsheet from "../../modules/user/sidebar-activities/fee/logsheet/Logsheet";
import Reciept from "../../modules/user/sidebar-activities/fee/reciept/Reciept";
import TeacherDetails from "../../modules/user/sidebar-activities/teacher-details/TeacherDetails";
import Sidebar from "../../modules/user/sidebar/Sidebar";

export default function UserRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Sidebar />}>
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="attendance" element={<Attendance />} />
        <Route path="teacher-details" element={<TeacherDetails />} />
        {/* exam */}
        <Route path="exam/exam-routine" element={<ExamRoutine />} />
        <Route path="exam/admit-card" element={<AdmitCard />} />
        <Route path="exam/report-card" element={<ReportCard />} />
        {/* fee */}
        <Route path="fee/logsheet" element={<Logsheet />} />
        <Route path="fee/fee-invoice" element={<FeeInvoice />} />
        <Route path="fee/reciept" element={<Reciept />} />
        <Route path="fee/balance-sheet" element={<BalanceSheet />} />
      </Route>
    </Routes>
  );
}
