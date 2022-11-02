import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Route, Routes } from "react-router-dom";
import Attendance from "../../modules/teacher/sidebar-activities/class/class-attendance/attendance/Attendance";
import Classess from "../../modules/teacher/sidebar-activities/class/class-attendance/class-attendance/Classess";
import ClassRoutine from "../../modules/teacher/sidebar-activities/class/class-routine/class-routine/ClassRoutine";
import RoutineCLassRoutine from "../../modules/teacher/sidebar-activities/class/class-routine/routine-class-routine/RoutineCLassRoutine";
import MyClasses from "../../modules/teacher/sidebar-activities/class/my-classes/MyClasses";
import Slidebar from "../../modules/teacher/sidebar-activities/class/Slidebar";
export default function Class() {
    return (_jsx(Routes, { children: _jsxs(Route, { path: "/", element: _jsx(Slidebar, {}), children: [_jsx(Route, { path: "/my-classes", element: _jsx(MyClasses, {}) }), _jsx(Route, { path: "/class-attendance", element: _jsx(Classess, {}) }), _jsx(Route, { path: "/class-attendance/:classOfSchool/:section", element: _jsx(Attendance, {}) }), _jsx(Route, { path: "/class-routine", element: _jsx(ClassRoutine, {}) }), _jsx(Route, { path: "/class-routine/:classOfSchool/:section", element: _jsx(RoutineCLassRoutine, {}) })] }) }));
}
