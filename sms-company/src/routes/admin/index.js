import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Routes, Route } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { lazy, Suspense } from "react";
import StudentRoutes from "./StudentRoutes";
import StaffRoutes from "./StaffRoutes";
import AdminDashboardRoutes from "./AdminDashboardRoutes";
import ExamRoutes from "./ExamRoutes";
import ReportRoutes from "./ReportRoutes";
import FeeRoutes from "./FeeRoutes";
const AdminMain = lazy(() => import("../../pages/AdminMain"));
function AdminRoutes() {
    const location = useLocation();
    return (_jsx(Routes, { children: _jsxs(Route, { path: "/dashboard/", element: _jsx(Suspense, { fallback: "Loading", children: _jsx(AdminMain, {}) }), children: [_jsx(Route, { path: "report/*", element: _jsx(ReportRoutes, {}) }), _jsx(Route, { path: "exam/*", element: _jsx(ExamRoutes, {}) }), _jsx(Route, { path: "admin/*", element: _jsx(AdminDashboardRoutes, {}) }), _jsx(Route, { path: "staff/*", element: _jsx(StaffRoutes, {}) }), _jsx(Route, { path: "student/*", element: _jsx(StudentRoutes, {}) }), _jsx(Route, { path: "fee/*", element: _jsx(FeeRoutes, {}) }), _jsx(Route, { path: "*", element: _jsxs("div", { className: "text-primary-grey-700 w-full mt-12 text-xl font-semibold text-center", children: ["Page not found-", location.pathname.replace("/", " ")] }) })] }) }));
}
export default AdminRoutes;
