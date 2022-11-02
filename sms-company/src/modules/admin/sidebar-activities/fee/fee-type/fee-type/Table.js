import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Link } from "react-router-dom";
import RenderTable from "./RenderTable";
const people = [
    {
        level: "NEB",
        paymentMethod: "jhdgsgasfd",
        feeName: "no",
    },
    {
        level: "TU",
        paymentMethod: "gfstrft",
        feeName: "no",
    },
];
export default function Table() {
    return (_jsxs("div", { className: "mt-11 w-full", children: [_jsxs("div", { className: "sm:flex sm:items-center justify-between", children: [_jsxs("div", { className: "w-72 relative max-w-full", children: [_jsx("div", { className: "absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none", children: _jsx("svg", { "aria-hidden": "true", className: "text-primary-grey-600 w-5 h-5", fill: "currentColor", viewBox: "0 0 20 20", xmlns: "http://www.w3.org/2000/svg", children: _jsx("path", { fillRule: "evenodd", d: "M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z", clipRule: "evenodd" }) }) }), _jsx("input", { type: "text", id: "simple-search", className: "bg-gray-50 border border-primary-grey-400 text-primary-grey-600 text-sm rounded-lg focus:ring-primary-btn block w-full pl-10 p-2.5 ", placeholder: "Search", required: true })] }), _jsx("div", { className: "sm:mt-0 sm:ml-16 sm:flex-none mt-4", children: _jsx(Link, { to: "/fee/fee-type/add", className: "primary_btn", children: "Add" }) })] }), _jsx("div", { className: "my-6", children: _jsx("div", { className: " ring-1 ring-black ring-opacity-5 overflow-x-auto rounded-lg shadow", children: _jsx("div", { className: "inline-block w-full align-middle", children: _jsx("div", { className: " w-full rounded-lg", children: _jsxs("table", { className: "min-w-full divide-y divide-gray-300 table-auto", children: [_jsx("thead", { className: "bg-gray-50", children: _jsxs("tr", { children: [_jsx("th", { scope: "col", className: "px-3 py-3.5  text-left text-sm font-medium text-primary-grey-700    ", children: "Fee name" }), _jsx("th", { scope: "col", className: "px-3 py-3.5  text-left text-sm font-medium text-primary-grey-700  ", children: "Level" }), _jsx("th", { scope: "col", className: "px-3 py-3.5  text-left text-sm font-medium text-primary-grey-700  ", children: "Payement method" }), _jsx("th", { scope: "col", className: "px-3 py-3.5 w-10 text-left text-sm font-medium text-primary-grey-700  ", children: "Action" })] }) }), _jsx("tbody", { className: "bg-white divide-y divide-gray-200", children: _jsx(RenderTable, { currentItems: people }) })] }) }) }) }) })] }));
}
