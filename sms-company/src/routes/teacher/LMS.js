import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Route, Routes } from "react-router-dom";
import AssignmentClass from "../../modules/teacher/sidebar-activities/lms/assignment/assignemnt-class/page";
import AssignmentEdit from "../../modules/teacher/sidebar-activities/lms/assignment/assignment-edit/page";
import AssignmentView from "../../modules/teacher/sidebar-activities/lms/assignment/assignment-view/page";
import Assignment from "../../modules/teacher/sidebar-activities/lms/assignment/assignment/page";
import Slidebar from "../../modules/teacher/sidebar-activities/lms/Slidebar";
export default function Exam() {
    return (_jsx(Routes, { children: _jsxs(Route, { path: "/", element: _jsx(Slidebar, {}), children: [_jsx(Route, { path: "assignment", element: _jsx(Assignment, {}) }), _jsx(Route, { path: "assignment/:name", element: _jsx(AssignmentClass, {}) }), _jsx(Route, { path: "assignment/:name/:id", element: _jsx(AssignmentView, {}) }), _jsx(Route, { path: "assignment/:name/:id/edit", element: _jsx(AssignmentEdit, {}) }), _jsx(Route, { path: "e-libary", element: "e-libary" }), _jsx(Route, { path: "pratice-questions", element: "questions" }), _jsx(Route, { path: "report/assignment-report", element: "assignment reports" }), _jsx(Route, { path: "report/test-report", element: "test reports" })] }) }));
}
