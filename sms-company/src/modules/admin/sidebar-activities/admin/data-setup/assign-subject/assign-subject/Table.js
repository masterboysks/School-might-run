import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { Link } from "react-router-dom";
import { SearchBar } from "../../../../../../../components/common/oldFields";
import RenderTable from "./RenderTable";
const people = [
    {
        level: "NEB",
        class: "12",
        section: "A",
        subFaculty: "Bio",
        faculty: "Science",
        elective: ["Opt Math", "Computer"],
        compulsary: ["Math", "Nepali"],
    },
];
export default function Table() {
    const [search, setSearch] = useState("");
    return (_jsxs("div", { className: "mt-11 w-full", children: [_jsxs("div", { className: "sm:flex sm:items-center justify-between", children: [_jsx("div", { className: "w-72 relative max-w-full", children: _jsx(SearchBar, { value: search, setValue: setSearch }) }), _jsx("div", { className: "sm:mt-0 sm:ml-16 sm:flex-none mt-4", children: _jsx(Link, { to: "/admin/dashboard/admin/data-setup/assign-subject/add", className: "primary_btn", children: "Add" }) })] }), _jsx("div", { className: "my-6", children: _jsx("div", { className: " ring-1 ring-black ring-opacity-5 overflow-x-auto rounded-lg shadow", children: _jsx("div", { className: "inline-block w-full align-middle", children: _jsx("div", { className: " w-full rounded-lg", children: _jsxs("table", { className: "min-w-full divide-y divide-gray-300 table-auto", children: [_jsx("thead", { className: "bg-gray-50", children: _jsxs("tr", { children: [_jsx("th", { scope: "col", className: "px-3 py-3.5  text-left text-sm font-medium text-primary-grey-700  ", children: "Class" }), _jsx("th", { scope: "col", className: "px-3 py-3.5  text-left text-sm font-medium text-primary-grey-700  ", children: "Faculty" }), _jsx("th", { scope: "col", className: "px-3 py-3.5 text-left text-sm font-medium text-primary-grey-700  ", children: "Sub-Faculty" }), _jsx("th", { scope: "col", className: "px-3 py-3.5  text-left text-sm font-medium text-primary-grey-700    ", children: "Section" }), _jsx("th", { scope: "col", className: "px-3 py-3.5 text-left text-sm font-medium text-primary-grey-700  ", children: "Compulsary subjects" }), _jsx("th", { scope: "col", className: "px-3 py-3.5 text-left text-sm font-medium text-primary-grey-700  ", children: "Elective subject" }), _jsx("th", { scope: "col", className: "px-3 py-3.5 w-10 text-left text-sm font-medium text-primary-grey-700  ", children: "Action" })] }) }), _jsx("tbody", { className: "bg-white divide-y divide-gray-200", children: _jsx(RenderTable, { currentItems: people }) })] }) }) }) }) })] }));
}
