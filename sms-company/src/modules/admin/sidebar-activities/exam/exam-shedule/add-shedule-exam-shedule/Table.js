import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import RenderTable from "./RenderTable";
const people = [
    {
        subject: "lindsay.walton@example.com",
        type: "Member",
    },
    {
        subject: "lindsay.walton@example.com",
        type: "Member",
    },
    {
        subject: "lindsay.walton@example.com",
        type: "Member",
    },
    {
        subject: "lindsay.walton@example.com",
        type: "Member",
    },
];
export default function Table() {
    return (_jsx("div", { className: "", children: _jsx("div", { className: "mt-6", children: _jsx("div", { className: " ring-1 ring-black ring-opacity-5 min-w-full overflow-x-auto rounded-lg shadow", children: _jsx("div", { className: "inline-block w-full align-middle", children: _jsx("div", { className: " w-full rounded-lg", children: _jsxs("table", { className: "min-w-full divide-y divide-gray-300 table-auto", children: [_jsx("thead", { className: "bg-gray-50", children: _jsxs("tr", { children: [_jsx("th", { scope: "col", className: " py-3.5 px-3 text-left text-sm font-semibold text-primary-grey-700", children: "Subject" }), _jsx("th", { scope: "col", className: "px-3 py-3.5 text-left text-sm font-medium text-primary-grey-700   ", children: "Subject type" }), _jsx("th", { scope: "col", className: "px-3 py-3.5 text-left text-sm font-medium text-primary-grey-700   ", children: "Exam date" }), _jsx("th", { scope: "col", className: "px-3 py-3.5 text-left text-sm font-medium text-primary-grey-700   ", children: "Exam day" })] }) }), _jsx("tbody", { className: " bg-white divide-y divide-gray-200", children: people.map((person, index, table) => (_jsx(RenderTable, { person: person }, index))) })] }) }) }) }) }) }));
}
