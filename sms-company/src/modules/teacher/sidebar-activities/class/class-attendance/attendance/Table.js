import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from "react";
import { Link } from "react-router-dom";
import RenderTable from "./RenderTable";
const people = [
    {
        id: 115,
        name: "Ranjit",
        department: "Academic",
        designation: "Primary teacher",
    },
    {
        id: 116,
        name: "Ranjit",
        department: "Academic",
        designation: "Primary teacher",
    },
    {
        id: 1155,
        name: "Ranjit",
        department: "Academic",
        designation: "Primary teacher",
    },
    {
        id: 11532,
        name: "Ranjit",
        department: "Academic",
        designation: "Primary teacher",
    },
    {
        id: 1152,
        name: "Ranjit",
        department: "Academic",
        designation: "Primary teacher",
    },
];
export default function Table() {
    return (_jsxs("div", { className: "w-full my-6", children: [_jsx("div", { className: "my-6", children: _jsx("div", { className: " ring-1 ring-black ring-opacity-5 overflow-x-auto rounded-lg shadow", children: _jsx("div", { className: "inline-block w-full align-middle", children: _jsx("div", { className: " w-full rounded-lg", children: _jsxs("table", { className: "min-w-full divide-y divide-gray-300 table-auto", children: [_jsx("thead", { className: "bg-gray-50", children: _jsxs("tr", { children: [_jsx("th", { scope: "col", className: "px-3 py-3.5  text-left text-sm font-medium text-primary-grey-700    ", children: "Student ID" }), _jsx("th", { scope: "col", className: "px-3 py-3.5  text-left text-sm font-medium text-primary-grey-700  ", children: "Student name" }), _jsx("th", { scope: "col", className: "px-3 py-3.5  text-left text-sm font-medium text-primary-grey-700  ", children: "Roll no." }), _jsx("th", { scope: "col", className: "px-3 py-3.5  text-left text-sm font-medium text-primary-grey-700  ", children: "Status" }), _jsx("th", { scope: "col", className: "px-3 py-3.5 w-10 text-left  text-sm font-medium text-primary-grey-700  ", children: "Reason" }), _jsx("th", { scope: "col", className: "px-3 py-3.5 w-10  text-left text-sm font-medium text-primary-grey-700  ", children: "Application" })] }) }), _jsx("tbody", { className: "bg-white divide-y divide-gray-200", children: people.map((curr) => {
                                            return (_jsx(React.Fragment, { children: _jsx(RenderTable, { curr: curr }) }, curr.id));
                                        }) })] }) }) }) }) }), _jsxs("div", { className: " w-fit ml-auto", children: [_jsx(Link, { to: "#", className: "secondary_btn", children: "Cancel" }), _jsx(Link, { to: "#", className: "primary_btn", children: "Save" })] })] }));
}
