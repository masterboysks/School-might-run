import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import RenderTable from "./RenderTable";
export default function Table() {
    const [data, setData] = useState([
        {
            name: "SLC marksheet",
        },
        {
            name: "+2 Marksheeet",
        },
        {
            name: "CV",
        },
    ]);
    return (_jsx("div", { className: "my-6 lg:w-2/3 w-full", children: _jsx("div", { className: " ring-1 ring-black ring-opacity-5 overflow-x-auto rounded-lg shadow", children: _jsx("div", { className: "inline-block w-full align-middle", children: _jsx("div", { className: " w-full rounded-lg", children: _jsxs("table", { className: "min-w-full divide-y divide-gray-300 table-fixed", children: [_jsx("thead", { className: "bg-gray-50", children: _jsxs("tr", { children: [_jsx("th", { scope: "col", className: "px-3 py-3.5 text-left text-sm font-medium text-primary-grey-700    ", children: "University/Board" }), _jsx("th", { scope: "col", className: "px-3 py-3.5 w-10 text-left text-sm font-medium text-primary-grey-700  ", children: "Action" })] }) }), _jsx("tbody", { className: "bg-white divide-y divide-gray-200", children: _jsx(RenderTable, { currentItems: data }) })] }) }) }) }) }));
}
