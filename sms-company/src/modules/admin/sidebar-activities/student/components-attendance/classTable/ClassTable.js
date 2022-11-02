import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import RenderTable from "./RenderTable";
const ClassTable = () => {
    return (_jsx("div", { className: "mt-8", children: _jsx("div", { className: "my-6", children: _jsx("div", { className: "ring-1 ring-black ring-opacity-5 min-w-full overflow-x-auto rounded-lg shadow", children: _jsx("div", { className: "inline-block w-full align-middle", children: _jsx("div", { className: " w-full rounded-lg", children: _jsxs("table", { className: "min-w-full divide-y divide-gray-300 table-auto", children: [_jsx("thead", { className: "bg-gray-50", children: _jsxs("tr", { children: [_jsx("th", { scope: "col", className: "px-3 py-3.5 text-left text-sm font-medium text-primary-grey-700    ", children: "Class/semester" }), _jsx("th", { scope: "col", className: "px-3 py-3.5 text-left text-sm font-medium text-primary-grey-700   ", children: "Level" }), _jsx("th", { scope: "col", className: "px-3 py-3.5 text-left text-sm font-medium text-primary-grey-700   ", children: "Faculty" }), _jsx("th", { scope: "col", className: "px-3 py-3.5 text-left text-sm font-medium text-primary-grey-700   ", children: "Section" }), _jsx("th", { scope: "col", className: "px-4 text-end py-3.5  text-sm font-medium text-primary-grey-700   ", children: "Action" })] }) }), _jsx("tbody", { className: "bg-white divide-y divide-gray-200", children: _jsx(RenderTable, {}) })] }) }) }) }) }) }));
};
export default ClassTable;
