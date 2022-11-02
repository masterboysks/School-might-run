import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { PrinterIcon } from "@heroicons/react/20/solid";
import RenderTable from "./RenderAttendanceTable";
const currentItems = [
    {
        stdId: "Lindsay Walton",
        stdName: "Front-end Developer",
        presentDays: "lindsay.walton@example.com",
        absentDays: "Member",
        schoolDays: "Lindsay Walton",
    },
    {
        stdId: "Lindsa",
        stdName: "Front-end Developer",
        presentDays: "lindsay.walton@example.com",
        absentDays: "Member",
        schoolDays: "Lindsay Walton",
    },
    {
        stdId: "Lindsay Wa",
        stdName: "Front-end Developer",
        presentDays: "lindsay.walton@example.com",
        absentDays: "Member",
        schoolDays: "Lindsay Walton",
    },
];
export default function AttendanceTopper() {
    return (_jsxs("div", { className: "mt-6", children: [_jsxs("div", { className: "h-fit md:my-auto flex items-center justify-end my-6", children: [_jsx("div", { className: "text-primary-btn font-semibold", children: "Print" }), _jsx("div", { className: " text-primary-btn w-5 ml-1", children: _jsx(PrinterIcon, {}) })] }), _jsx("div", { className: "my-6", children: _jsx("div", { className: " ring-1 ring-black ring-opacity-5 min-w-full overflow-x-auto rounded-lg shadow", children: _jsx("div", { className: "inline-block w-full align-middle", children: _jsx("div", { className: " w-full rounded-lg", children: _jsxs("table", { className: "min-w-full divide-y divide-gray-300 table-auto", children: [_jsx("thead", { className: "bg-gray-50", children: _jsxs("tr", { children: [_jsx("th", { scope: "col", className: "px-3 py-3.5 text-left text-sm font-medium text-primary-grey-700    ", children: "Student ID" }), _jsx("th", { scope: "col", className: "px-3 py-3.5 text-left text-sm font-medium text-primary-grey-700   ", children: "Student Name" }), _jsx("th", { scope: "col", className: "px-3 py-3.5 text-left text-sm font-medium text-primary-grey-700   ", children: "Total present days" }), _jsx("th", { scope: "col", className: "px-3 py-3.5 text-left text-sm font-medium text-primary-grey-700   ", children: "Total absent days" }), _jsx("th", { scope: "col", className: "px-3 py-3.5 text-left text-sm font-medium text-primary-grey-700   ", children: "Total school days" })] }) }), _jsx("tbody", { className: "bg-white divide-y divide-gray-200", children: _jsx(RenderTable, { currentItems: currentItems }) })] }) }) }) }) })] }));
}
