import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Suspense } from "react";
import { lazy } from "react";
import { Route, Routes } from "react-router-dom";
import AdminDataSetupRoutes from "./AdminDataSetupRoutes";
// Admin Imports
const AdminSlidebar = lazy(() => import("../../modules/admin/sidebar-activities/admin/slidebar"));
const OrginazationSetup = lazy(() => import("../../modules/admin/sidebar-activities/admin/organization-setup/OrginazationSetup"));
const AddClassShedule = lazy(() => import("../../modules/admin/sidebar-activities/admin/class-shedule/add-class-shedule/AddClassShedule"));
const UpgradeClass = lazy(() => import("../../modules/admin/sidebar-activities/admin/upgrade-class/upgrade-class/UpgradeClass"));
const ClassSchedule = lazy(() => import("../../modules/admin/sidebar-activities/admin/class-shedule/class-shedule/ClassShedule"));
const Upgrade = lazy(() => import("../../modules/admin/sidebar-activities/admin/upgrade-class/upgrade/Upgrade"));
const Notice = lazy(() => import("../../modules/admin/sidebar-activities/admin/notice/notice/Notice"));
const NewNotice = lazy(() => import("../../modules/admin/sidebar-activities/admin/notice/new-notice/NewNotice"));
const Event = lazy(() => import("../../modules/admin/sidebar-activities/admin/event/event/Event"));
const AddEvent = lazy(() => import("../../modules/admin/sidebar-activities/admin/event/add-event/AddEvent"));
const Temeplate = lazy(() => import("../../modules/admin/sidebar-activities/admin/tempelate/Temeplate"));
export default function AdminDashboardRoutes() {
    return (_jsx(Routes, { children: _jsxs(Route, { path: "/", element: _jsx(Suspense, { fallback: "Loading", children: _jsx(AdminSlidebar, {}) }), children: [_jsx(Route, { path: "data-setup/*", element: _jsx(AdminDataSetupRoutes, {}) }), _jsx(Route, { path: "template", element: _jsx(Suspense, { fallback: "Loading", children: _jsx(Temeplate, {}) }) }), _jsx(Route, { path: "event-calender", element: _jsx(Suspense, { fallback: "Loading", children: _jsx(Event, {}) }) }), _jsx(Route, { path: "event-calender/add/:date", element: _jsx(Suspense, { fallback: "Loading", children: _jsx(AddEvent, {}) }) }), _jsx(Route, { path: "notice", element: _jsx(Suspense, { fallback: "Loading", children: _jsx(Notice, {}) }) }), _jsx(Route, { path: "notice/new", element: _jsx(Suspense, { fallback: "Loading", children: _jsx(NewNotice, {}) }) }), _jsx(Route, { path: "upgrade", element: _jsx(Suspense, { fallback: "Loading", children: _jsx(Upgrade, {}) }) }), _jsx(Route, { path: "upgrade/class/:classname", element: _jsx(Suspense, { fallback: "Loading", children: _jsx(UpgradeClass, {}) }) }), _jsx(Route, { path: "class-schedule", element: _jsx(Suspense, { fallback: "Loading", children: _jsx(ClassSchedule, {}) }) }), _jsx(Route, { path: "class-schedule/add", element: _jsx(Suspense, { fallback: "Loading", children: _jsx(AddClassShedule, {}) }) }), _jsx(Route, { path: "organization-setup", element: _jsx(Suspense, { fallback: "Loading", children: _jsx(OrginazationSetup, {}) }) }), _jsx(Route, { path: "*", element: _jsxs("div", { className: "text-primary-grey-700 w-full mt-12 text-xl font-semibold text-center", children: ["Page not found-", location.pathname.replace("/", " ")] }) })] }) }));
}
