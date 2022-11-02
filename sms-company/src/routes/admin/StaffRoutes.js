import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { lazy } from "react";
import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import AcademicDetails from "../../modules/admin/sidebar-activities/staff/staff-information/view/academic/academic-details/AcademicDetails";
import AddAcademicDetails from "../../modules/admin/sidebar-activities/staff/staff-information/view/academic/add-acedimic-details/AddAcademicDetails";
import AcademicsView from "../../modules/admin/sidebar-activities/staff/staff-information/view/academic/base";
import AddDocument from "../../modules/admin/sidebar-activities/staff/staff-information/view/documents/add-document/AddDocument";
import DocumentView from "../../modules/admin/sidebar-activities/staff/staff-information/view/documents/base";
import Document from "../../modules/admin/sidebar-activities/staff/staff-information/view/documents/documents/Document";
import ViewGeneral from "../../modules/admin/sidebar-activities/staff/staff-information/view/general/base";
import GeneralDetails from "../../modules/admin/sidebar-activities/staff/staff-information/view/general/general-details/GeneralDetails";
import ViewStaff from "../../modules/admin/sidebar-activities/staff/staff-information/view/ViewStaff";
const StaffSlidebar = lazy(() => import("../../modules/admin/sidebar-activities/staff/slidebar"));
const StaffInformation = lazy(() => import("../../modules/admin/sidebar-activities/staff/staff-information/main/staff-information"));
const AddStaffGeneralPersonal = lazy(() => import("../../modules/admin/sidebar-activities/staff/staff-information/general/add-staff-general-personal/AddStaffGeneralPersonal"));
const AddStaffGeneralAddress = lazy(() => import("../../modules/admin/sidebar-activities/staff/staff-information/general/add-staff-general-address/AddStaffGeneralAddress"));
const AddStaffGeneralOffice = lazy(() => import("../../modules/admin/sidebar-activities/staff/staff-information/general/add-staff-general-office/AddStaffGeneralOffice"));
// const StaffAcademicDetails = lazy(() =>
//   import(
//     "../../modules/admin/sidebar-activities/staff/staff-information/academic/academic-details/AcademicDetails"
//   )
// );
// const AddStaffAcademicDetails = lazy(() =>
//   import(
//     "../../modules/admin/sidebar-activities/staff/staff-information/academic/add-acedimic-details/AddAcademicDetails"
//   )
// );
// const AddStaffDocument = lazy(() =>
//   import(
//     "../../modules/admin/sidebar-activities/staff/staff-information/documents/add-document/AddDocument"
//   )
// );
// const StaffDocument = lazy(() =>
//   import(
//     "../../modules/admin/sidebar-activities/staff/staff-information/documents/documents/Document"
//   )
// );
const AddStaffGeneralBase = lazy(() => import("../../modules/admin/sidebar-activities/staff/staff-information/general/Base"));
// const AddStaffAcademicBase = lazy(() =>
//   import(
//     "../../modules/admin/sidebar-activities/staff/staff-information/academic/base"
//   )
// );
// const AddStaffDocumentBase = lazy(() =>
//   import(
//     "../../modules/admin/sidebar-activities/staff/staff-information/documents/base"
//   )
// );
const StaffAttendance = lazy(() => import("../../modules/admin/sidebar-activities/staff/staff-attendance/main/StaffAttendance"));
const TeacherAssign = lazy(() => import("../../modules/admin/sidebar-activities/staff/teacher-assign/teacher-assign/TeacherAssign"));
const AssignTeacher = lazy(() => import("../../modules/admin/sidebar-activities/staff/teacher-assign/assign-teacher/AssignTeacher"));
export default function StaffRoutes() {
    return (_jsxs(Routes, { children: [_jsxs(Route, { path: "/", element: _jsx(Suspense, { fallback: "Loading", children: _jsx(StaffSlidebar, {}) }), children: [_jsx(Route, { path: "teacher-assign/assign-teacher", element: _jsx(Suspense, { fallback: "Loading", children: _jsx(AssignTeacher, {}) }) }), _jsx(Route, { path: "teacher-assign", element: _jsx(Suspense, { fallback: "Loading", children: _jsx(TeacherAssign, {}) }) }), _jsx(Route, { path: "staff-attendance", element: _jsx(Suspense, { fallback: "Loading", children: _jsx(StaffAttendance, {}) }) }), _jsx(Route, { path: "staff-information", element: _jsx(Suspense, { fallback: "Loading", children: _jsx(StaffInformation, {}) }) }), _jsxs(Route, { path: "staff-information/:id", element: _jsx(Suspense, { fallback: "Loading ...", children: _jsx(ViewStaff, {}) }), children: [_jsxs(Route, { path: "document", element: _jsx(Suspense, { fallback: "Loading ...", children: _jsx(DocumentView, {}) }), children: [_jsx(Route, { index: true, element: _jsx(Suspense, { fallback: "Loading ...", children: _jsx(Document, {}) }) }), _jsx(Route, { path: "add", element: _jsx(Suspense, { fallback: "Loading ...", children: _jsx(AddDocument, {}) }) })] }), _jsxs(Route, { path: "academic", element: _jsx(Suspense, { fallback: "Loading ...", children: _jsx(AcademicsView, {}) }), children: [_jsx(Route, { index: true, element: _jsx(Suspense, { fallback: "Loading...", children: _jsx(AcademicDetails, {}) }) }), " ", _jsx(Route, { path: "add", element: _jsx(Suspense, { fallback: "Loading ...", children: _jsx(AddAcademicDetails, {}) }) })] }), _jsx(Route, { path: "general", element: _jsx(Suspense, { fallback: "Loading ...", children: _jsx(ViewGeneral, {}) }), children: _jsx(Route, { index: true, element: _jsx(Suspense, { fallback: "Loading...", children: _jsx(GeneralDetails, {}) }) }) })] }), _jsxs(Route, { path: "staff-information/add-staff/general", element: _jsx(Suspense, { fallback: "Loading", children: _jsx(AddStaffGeneralBase, {}) }), children: [_jsx(Route, { path: "personal-details", element: _jsx(Suspense, { fallback: "Loading", children: _jsx(AddStaffGeneralPersonal, {}) }) }), _jsx(Route, { path: "address-details", element: _jsx(Suspense, { fallback: "Loading", children: _jsx(AddStaffGeneralAddress, {}) }) }), _jsx(Route, { path: "office-details", element: _jsx(Suspense, { fallback: "Loading", children: _jsx(AddStaffGeneralOffice, {}) }) })] })] }), _jsx(Route, { path: "*", element: _jsxs("div", { className: "text-primary-grey-700 w-full mt-12 text-xl font-semibold text-center", children: ["Page not found-", location.pathname.replace("/", " ")] }) })] }));
}
