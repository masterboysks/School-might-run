import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { lazy } from "react";
import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
const FeeSlidebar = lazy(() => import("../../modules/admin/sidebar-activities/fee/slidebar"));
const FeeType = lazy(() => import("../../modules/admin/sidebar-activities/fee/fee-type/fee-type/FeeType"));
const AddFeeType = lazy(() => import("../../modules/admin/sidebar-activities/fee/fee-type/add-fee-type/AddFeeType"));
const FeeAssign = lazy(() => import("../../modules/admin/sidebar-activities/fee/fee-assign/fee-assign/FeeAssign"));
const Assign = lazy(() => import("../../modules/admin/sidebar-activities/fee/fee-assign/assign/Assign"));
const StudentLogsheet = lazy(() => import("../../modules/admin/sidebar-activities/fee/logsheet/student-logsheet/StudentLogsheet"));
const Logsheet = lazy(() => import("../../modules/admin/sidebar-activities/fee/logsheet/logsheet/Logsheet"));
const FeePayment = lazy(() => import("../../modules/admin/sidebar-activities/fee/fee-payment/fee-payment/FeePayment"));
const MiscAssign = lazy(() => import("../../modules/admin/sidebar-activities/fee/miscellaneous-fee-assign/assign/MiscAssign"));
const MiscellaneousFeeAssign = lazy(() => import("../../modules/admin/sidebar-activities/fee/miscellaneous-fee-assign/miscellaneous-fee-assign/MiscellaneousFeeAssign"));
const FeeStudent = lazy(() => import("../../modules/admin/sidebar-activities/fee/fee-payment/fee-student/FeeStudent"));
const ClassFeeStatement = lazy(() => import("../../modules/admin/sidebar-activities/fee/fee-statement/class-fee-statement/class-fee-statement/ClassFeeStatement"));
const StudentFeeStatement = lazy(() => import("../../modules/admin/sidebar-activities/fee/fee-statement/student-fee-statement/student-fee-statement/StudentFeeStatement"));
const ClassStatement = lazy(() => import("../../modules/admin/sidebar-activities/fee/fee-statement/class-fee-statement/class-statement/ClassStatement"));
const StudentStatement = lazy(() => import("../../modules/admin/sidebar-activities/fee/fee-statement/student-fee-statement/student-statement/StudentStatement"));
const ClassStatementMonthly = lazy(() => import("../../modules/admin/sidebar-activities/fee/fee-statement/class-fee-statement/class-statement-monthly/ClassStatementMonthly"));
export default function FeeRoutes() {
    return (_jsx(Routes, { children: _jsxs(Route, { path: "/", element: _jsx(Suspense, { fallback: "Loading", children: _jsx(FeeSlidebar, {}) }), children: [_jsx(Route, { path: "miscellaneous-fee-assign", element: _jsx(Suspense, { fallback: "Loading", children: _jsx(MiscellaneousFeeAssign, {}) }) }), _jsx(Route, { path: "miscellaneous-fee-assign/assign", element: _jsx(Suspense, { fallback: "Loading", children: _jsx(MiscAssign, {}) }) }), _jsx(Route, { path: "fee-statement/student-fee-statement/:student", element: _jsx(Suspense, { fallback: "Loading", children: _jsx(StudentStatement, {}) }) }), _jsx(Route, { path: "fee-statement/student-fee-statement", element: _jsx(Suspense, { fallback: "Loading", children: _jsx(StudentFeeStatement, {}) }) }), _jsx(Route, { path: "fee-statement/class-fee-statement/:classOfSchool/:section/:monthly", element: _jsx(Suspense, { fallback: "Loading", children: _jsx(ClassStatementMonthly, {}) }) }), _jsx(Route, { path: "fee-statement/class-fee-statement/:classOfSchool/:section", element: _jsx(Suspense, { fallback: "Loading", children: _jsx(ClassStatement, {}) }) }), _jsx(Route, { path: "fee-statement/class-fee-statement", element: _jsx(Suspense, { fallback: "Loading", children: _jsx(ClassFeeStatement, {}) }) }), _jsx(Route, { path: "fee-payment", element: _jsx(Suspense, { fallback: "Loading", children: _jsx(FeePayment, {}) }) }), _jsx(Route, { path: "fee-payment/:student", element: _jsx(Suspense, { fallback: "Loading", children: _jsx(FeeStudent, {}) }) }), _jsx(Route, { path: "fee-type", element: _jsx(Suspense, { fallback: "Loading", children: _jsx(FeeType, {}) }) }), _jsx(Route, { path: "fee-type/add", element: _jsx(Suspense, { fallback: "Loading", children: _jsx(AddFeeType, {}) }) }), _jsx(Route, { path: "fee-assign", element: _jsx(Suspense, { fallback: "Loading", children: _jsx(FeeAssign, {}) }) }), _jsx(Route, { path: "fee-assign/assign", element: _jsx(Suspense, { fallback: "Loading", children: _jsx(Assign, {}) }) }), _jsx(Route, { path: "student-logsheet", element: _jsx(Suspense, { fallback: "Loading", children: _jsx(StudentLogsheet, {}) }) }), _jsx(Route, { path: "student-logsheet/:student", element: _jsx(Suspense, { fallback: "Loading", children: _jsx(Logsheet, {}) }) }), _jsx(Route, { path: "*", element: _jsxs("div", { className: "text-primary-grey-700 w-full mt-12 text-xl font-semibold text-center", children: ["Page not found-", location.pathname.replace("/", " ")] }) })] }) }));
}
