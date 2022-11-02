import { jsx as _jsx } from "react/jsx-runtime";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainRoutes from "./routes";
import ContexProvider from "./contex/ContexProvider";
ReactDOM.createRoot(document.getElementById("root")).render(
// <React.StrictMode>
_jsx(BrowserRouter, { children: _jsx(ContexProvider, { children: _jsx(Routes, { children: _jsx(Route, { path: "/*", element: _jsx(MainRoutes, {}) }) }) }) })
// </React.StrictMode>
);
