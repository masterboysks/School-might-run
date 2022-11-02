import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { lazy } from "react";
import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
const StudentAttendanceReportClasses = lazy(() => import("../../modules/admin/sidebar-activities/report/attendance-report/student-attendance-report/classes/StudentAttendanceReportClasses"));
const ReportSlidebar = lazy(() => import("../../modules/admin/sidebar-activities/report/slidebar"));
const StudentAttendanceReportClass = lazy(() => import("../../modules/admin/sidebar-activities/report/attendance-report/student-attendance-report/class/StudentAttendanceReportClass"));
const StaffAttendanceReport = lazy(() => import("../../modules/admin/sidebar-activities/report/attendance-report/staff-sttendence-report/StaffAttendanceReport"));
const ExamReportClasses = lazy(() => import("../../modules/admin/sidebar-activities/report/exam-report/exam-report-classes/ExamReportClasses"));
const ExamReportClass = lazy(() => import("../../modules/admin/sidebar-activities/report/exam-report/exam-report-class/ExamReportClass"));
const FeeReport = lazy(() => import("../../modules/admin/sidebar-activities/report/fee-report/fee-report/FeeReport"));
const MonthlyFeeStatementReport = lazy(() => import("../../modules/admin/sidebar-activities/report/fee-report/monthly-fee-statement-report/MonthlyFeeStatementReport"));
const FeeStatementReport = lazy(() => import("../../modules/admin/sidebar-activities/report/fee-report/fee-statement-report/FeeStatementReport"));
const TopperReportClasses = lazy(() => import("../../modules/admin/sidebar-activities/report/topper-report/topper-report-classes/TopperReportClasses"));
const TopperReportClass = lazy(() => import("../../modules/admin/sidebar-activities/report/topper-report/topper-report-class/TopperReportClass"));
export default function ReportRoutes() {
    return (_jsx(Routes, { children: _jsxs(Route, { path: "/", element: _jsx(Suspense, { fallback: "Loading", children: _jsx(ReportSlidebar, {}) }), children: [_jsx(Route, { path: "attendance-report/student-attendance-report", element: _jsx(Suspense, { fallback: "Loading", children: _jsx(StudentAttendanceReportClasses, {}) }) }), _jsx(Route, { path: "attendance-report/student-attendance-report/:classOfSchool/:section", element: _jsx(Suspense, { fallback: "Loading", children: _jsx(StudentAttendanceReportClass, {}) }) }), _jsx(Route, { path: "attendance-report/staff-attendance-report", element: _jsx(Suspense, { fallback: "Loading", children: _jsx(StaffAttendanceReport, {}) }) }), _jsx(Route, { path: "exam-report", element: _jsx(Suspense, { fallback: "Loading", children: _jsx(ExamReportClasses, {}) }) }), _jsx(Route, { path: "exam-report/:classOfSchool/:section", element: _jsx(Suspense, { fallback: "Loading", children: _jsx(ExamReportClass, {}) }) }), _jsx(Route, { path: "fee-report", element: _jsx(Suspense, { fallback: "Loading", children: _jsx(FeeReport, {}) }) }), _jsx(Route, { path: "fee-report/fee-statement/:classOfSchool/:section/:monthly", element: _jsx(Suspense, { fallback: "Loading", children: _jsx(MonthlyFeeStatementReport, {}) }) }), _jsx(Route, { path: "fee-report/fee-statement/:classOfSchool/:section", element: _jsx(Suspense, { fallback: "Loading", children: _jsx(FeeStatementReport, {}) }) }), _jsx(Route, { path: "topper-report", element: _jsx(Suspense, { fallback: "Loading", children: _jsx(TopperReportClasses, {}) }) }), _jsx(Route, { path: "topper-report/:classOfSchool", element: _jsx(Suspense, { fallback: "Loading", children: _jsx(TopperReportClass, {}) }) }), _jsx(Route, { path: "*", element: _jsxs("div", { className: "text-primary-grey-700 w-full mt-12 text-xl font-semibold text-center", children: ["Page not found-", location.pathname.replace("/", " ")] }) })] }) }));
}
