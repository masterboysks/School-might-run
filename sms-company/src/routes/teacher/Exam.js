import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Route, Routes } from "react-router-dom";
import ExamDetails from "../../modules/teacher/sidebar-activities/exam/exam-details/ExamDetails";
import ExamMarks from "../../modules/teacher/sidebar-activities/exam/exam-marks/ExamMarks";
import MarksEntry from "../../modules/teacher/sidebar-activities/exam/marks/entry/MarksEntry";
import MarksView from "../../modules/teacher/sidebar-activities/exam/marks/view/MarksView";
import Slidebar from "../../modules/teacher/sidebar-activities/exam/Slidebar";
export default function Exam() {
    return (_jsx(Routes, { children: _jsxs(Route, { path: "/", element: _jsx(Slidebar, {}), children: [_jsx(Route, { path: "exam-marks", element: _jsx(ExamMarks, {}) }), _jsx(Route, { path: "exam-marks/:examName", element: _jsx(ExamDetails, {}) }), _jsx(Route, { path: "exam-marks/:examName/entry/:classOfSchool/:section", element: _jsx(MarksEntry, {}) }), _jsx(Route, { path: "exam-marks/:examName/view/:classOfSchool/:section", element: _jsx(MarksView, {}) })] }) }));
}
