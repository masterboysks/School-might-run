import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { Outlet, Route, Routes } from "react-router-dom";
import Login from "../pages/Login";
import TeacherRoutes from "./teacher";
import AdminRoutes from "./admin";
import UserRoutes from "./user/UserRoutes";
import Welcome from "../modules/user/welcome/Welcome";
export default function MainRoutes() {
    return (_jsx(Routes, { children: _jsxs(Route, { path: "/", children: [_jsx(Route, { index: true, element: _jsx(Login, {}) }), _jsx(Route, { path: "admin/*", element: _jsx(AdminRoutes, {}) }), _jsx(Route, { path: "student", element: _jsx(Outlet, {}), children: _jsx(Route, { path: "dashboard/*", element: _jsx(UserRoutes, {}) }) }), _jsxs(Route, { path: "parent", element: _jsx(Outlet, {}), children: [_jsx(Route, { path: "welcome", element: _jsx(Welcome, {}) }), _jsx(Route, { path: "dashboard/*", element: _jsx(UserRoutes, {}) })] }), _jsx(Route, { path: "teacher/*", element: _jsx(TeacherRoutes, {}) }), _jsx(Route, { path: "*", element: _jsx(_Fragment, { children: "404 not found" }) })] }) }));
}
