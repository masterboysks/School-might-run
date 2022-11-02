import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import RenderTable from "./RenderTable";
import { useForm } from "react-hook-form";
const people = [
    {
        department: "Non-Academic",
    },
    {
        department: "Academic",
    },
];
export default function Table() {
    const { register } = useForm();
    return (_jsx(_Fragment, { children: _jsx("div", { className: "mt-11 w-full", children: _jsx("div", { className: "my-6", children: _jsx("div", { className: " ring-1 ring-black ring-opacity-5 overflow-x-auto rounded-lg shadow", children: _jsx("div", { className: "inline-block w-full align-middle", children: _jsx("div", { className: " w-full rounded-lg", children: _jsxs("table", { className: "min-w-full divide-y divide-gray-300 table-fixed", children: [_jsx("thead", { className: "bg-gray-50", children: _jsxs("tr", { children: [_jsx("th", { scope: "col", className: "px-3 py-3.5 text-left text-sm font-medium text-primary-grey-700    ", children: "Class/semester" }), _jsx("th", { scope: "col", className: "px-3 py-3.5 text-left text-sm font-medium text-primary-grey-700    ", children: "Level" }), _jsx("th", { scope: "col", className: "px-3 py-3.5 text-left text-sm font-medium text-primary-grey-700    ", children: "Faculty" }), _jsx("th", { scope: "col", className: "px-3 py-3.5 text-left text-sm font-medium text-primary-grey-700    ", children: "Section" }), _jsx("th", { scope: "col", className: "px-3 py-3.5 text-left text-sm font-medium text-primary-grey-700    ", children: "Subject" }), _jsx("th", { scope: "col", className: "px-3 py-3.5 text-left text-sm font-medium text-primary-grey-700    ", children: "Total assignment" }), _jsx("th", { scope: "col", className: "px-3 py-3.5 w-10 text-left text-sm font-medium text-primary-grey-700  ", children: "Action" })] }) }), _jsx("tbody", { className: "bg-white divide-y divide-gray-200", children: _jsx(RenderTable, { currentItems: people }) })] }) }) }) }) }) }) }));
}
