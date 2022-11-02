import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
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
    return (_jsx(Routes, { children: _jsxs(Route, { path: "/", element: _jsx(Sidebar, {}), children: [_jsx(Route, { path: "dashboard", element: _jsx(Dashboard, {}) }), _jsx(Route, { path: "attendance", element: _jsx(Attendance, {}) }), _jsx(Route, { path: "teacher-details", element: _jsx(TeacherDetails, {}) }), _jsx(Route, { path: "exam/exam-routine", element: _jsx(ExamRoutine, {}) }), _jsx(Route, { path: "exam/admit-card", element: _jsx(AdmitCard, {}) }), _jsx(Route, { path: "exam/report-card", element: _jsx(ReportCard, {}) }), _jsx(Route, { path: "fee/logsheet", element: _jsx(Logsheet, {}) }), _jsx(Route, { path: "fee/fee-invoice", element: _jsx(FeeInvoice, {}) }), _jsx(Route, { path: "fee/reciept", element: _jsx(Reciept, {}) }), _jsx(Route, { path: "fee/balance-sheet", element: _jsx(BalanceSheet, {}) })] }) }));
}
