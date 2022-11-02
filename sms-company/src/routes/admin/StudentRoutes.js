import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Suspense } from "react";
import { lazy } from "react";
import { useState } from "react";
import { Route, Routes } from "react-router-dom";
const AddStudent = lazy(() => import("../../modules/admin/sidebar-activities/student/student-information/add-student/AddStudent"));
const StudentSlidebar = lazy(() => import("../../modules/admin/sidebar-activities/student/Slidebar"));
const StudentInformation = lazy(() => import("../../modules/admin/sidebar-activities/student/Student-information"));
const StudentAttendance = lazy(() => import("../../modules/admin/sidebar-activities/student/Student-attendance"));
const AddguardianTrue = lazy(() => import("../../modules/admin/sidebar-activities/student/student-information/add-student/AddGuardianTrue"));
const AddguardianFalse = lazy(() => import("../../modules/admin/sidebar-activities/student/student-information/add-student/AddGuardianFalse"));
const WholeClass = lazy(() => import("../../modules/admin/sidebar-activities/student/components-attendance/wholeClass/WholeClass"));
const StudentProfile = lazy(() => import("../../modules/admin/sidebar-activities/student/components-attendance/studentProfile/StudentProfile"));
const AddAddress = lazy(() => import("../../modules/admin/sidebar-activities/student/student-information/add-student/AddAddress"));
const AddClassDetails = lazy(() => import("../../modules/admin/sidebar-activities/student/student-information/add-student/AddClassDetails"));
const AddFeeDetails = lazy(() => import("../../modules/admin/sidebar-activities/student/student-information/add-student/AddFeeDetails"));
export default function StudentRoutes() {
    const [hasAnotherChild, setHasAnotherChild] = useState(false);
    return (_jsx(Routes, { children: _jsxs(Route, { path: "/", element: _jsx(Suspense, { fallback: "Loading", children: _jsx(StudentSlidebar, {}) }), children: [_jsx(Route, { path: "student-information", element: _jsx(Suspense, { fallback: "Loading", children: _jsx(StudentInformation, {}) }) }), _jsx(Route, { path: "student-information/add-student-details", element: _jsx(Suspense, { fallback: "Loading", children: _jsx(AddStudent, { HasAnotherChild: hasAnotherChild, setHasAnotherChild: setHasAnotherChild }) }) }), _jsx(Route, { path: "student-information/add-student-details/guardian-true", element: _jsx(Suspense, { fallback: "Loading", children: _jsx(AddguardianTrue, {}) }) }), _jsx(Route, { path: "student-information/add-student-details/guardian-false", element: _jsx(Suspense, { fallback: "Loading", children: _jsx(AddguardianFalse, {}) }) }), _jsx(Route, { path: "student-information/add-address-details", element: _jsx(Suspense, { fallback: "Loading", children: _jsx(AddAddress, {}) }) }), _jsx(Route, { path: "student-information/add-class-details", element: _jsx(Suspense, { fallback: "Loading", children: _jsx(AddClassDetails, {}) }) }), _jsx(Route, { path: "student-information/add-fee-details", element: _jsx(Suspense, { fallback: "Loading", children: _jsx(AddFeeDetails, {}) }) }), _jsx(Route, { path: "student-attendance", element: _jsx(Suspense, { fallback: "Loading", children: _jsx(StudentAttendance, {}) }) }), _jsx(Route, { path: "student-attendance/:classOfSchool/:section", element: _jsx(Suspense, { fallback: "Loading", children: _jsx(WholeClass, {}) }) }), _jsx(Route, { path: "student-attendance/:classOfSchool/:section/:studentName/:studentId", element: _jsx(Suspense, { fallback: "Loading", children: _jsx(StudentProfile, {}) }) })] }) }));
}
