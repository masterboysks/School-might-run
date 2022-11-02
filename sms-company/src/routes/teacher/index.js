import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Route, Routes } from "react-router-dom";
import ApplyLeave from "../../modules/teacher/sidebar-activities/profile/apply-leave/ApplyLeave";
import TeacherProfile from "../../modules/teacher/sidebar-activities/profile/my-profile/MyProfile";
import Slidebar from "../../modules/teacher/sidebar-activities/profile/Slidebar";
import TeacherMain from "../../pages/TeacherMain";
import Class from "./Class";
import Exam from "./Exam";
import LMS from "./LMS";
export default function TeacherRoutes() {
    return (_jsx(Routes, { children: _jsxs(Route, { path: "dashboard", element: _jsx(TeacherMain, {}), children: [_jsxs(Route, { path: "profile", element: _jsx(Slidebar, {}), children: [_jsx(Route, { path: "my-profile", element: _jsx(TeacherProfile, {}) }), _jsx(Route, { path: "apply-leave", element: _jsx(ApplyLeave, {}) })] }), _jsx(Route, { path: "class/*", element: _jsx(Class, {}) }), _jsx(Route, { path: "lms/*", element: _jsx(LMS, {}) }), _jsx(Route, { path: "exam/*", element: _jsx(Exam, {}) })] }) }));
}
