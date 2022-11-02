import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { Link } from "react-router-dom";
import RenderTable from "./RenderTable";
const people = [
    {
        id: "11",
        name: "14",
        department: "Anil",
        designation: "English",
        assignedSubject: "English",
    },
    {
        id: "14",
        name: "20",
        department: "Dheren",
        designation: "Spanish",
        assignedSubject: "Spanish",
    },
    {
        id: "5",
        name: "11",
        department: "Alisha",
        designation: "Maths",
        assignedSubject: "Maths",
    },
];
export default function Table() {
    return (_jsxs(_Fragment, { children: [_jsxs("div", { className: "lg:flex my-12", children: [_jsx("div", { className: "ring-black ring-opacity-5 ring-1 form-solid lg:w-4/6 p-4 rounded-md shadow", children: _jsxs("div", { className: "md:grid-cols-2 gap-x-5 gap-y-2 grid grid-cols-1", children: [_jsxs("div", { className: "flex justify-between py-2 border-b-[1px] border-b-primary-grey-300 ", children: [_jsx("span", { className: "text-primary-grey-600", children: "Class:" }), _jsx("span", { className: "text-primary-grey-700", children: "1" })] }), _jsxs("div", { className: "flex justify-between py-2 border-b-[1px] border-b-primary-grey-300 ", children: [_jsx("span", { className: "text-primary-grey-600", children: "Section:" }), _jsx("span", { className: "text-primary-grey-700", children: "B" })] }), _jsxs("div", { className: "flex justify-between py-2 border-b-[1px] border-b-primary-grey-300 ", children: [_jsx("span", { className: "text-primary-grey-600", children: "Level:" }), _jsx("span", { className: "text-primary-grey-700", children: "School level" })] }), _jsxs("div", { className: "flex justify-between py-2 border-b-[1px] border-b-primary-grey-300 ", children: [_jsx("span", { className: "text-primary-grey-600", children: "No of students:" }), _jsx("span", { className: "text-primary-grey-700", children: "1" })] }), _jsxs("div", { className: " flex justify-between py-2", children: [_jsx("span", { className: "text-primary-grey-600", children: "Faculty:" }), _jsx("span", { className: "text-primary-grey-700" })] })] }) }), _jsx("div", { className: "w-fit mt-auto ml-auto", children: _jsx(Link, { to: "/admin/dashboard/staff/teacher-assign/assign-teacher", className: "bg-primary-btn hover: lg:mt-0 h-fit w-fit focus:outline-none focus:ring- focus:ring-offset-2 sm:w-auto inline-flex items-center justify-center px-4 py-3 mt-3 text-sm font-medium text-white border border-transparent rounded-md shadow-sm", children: "Assign teacher" }) })] }), _jsx("div", { className: "my-6", children: _jsx("div", { className: " ring-1 ring-black ring-opacity-5 overflow-x-auto rounded-lg shadow", children: _jsx("div", { className: "inline-block w-full align-middle", children: _jsx("div", { className: " w-full rounded-lg", children: _jsxs("table", { className: "min-w-full divide-y divide-gray-300 table-auto", children: [_jsx("thead", { className: "bg-gray-50", children: _jsxs("tr", { children: [_jsx("th", { scope: "col", className: "px-3 py-3.5  text-left text-sm font-medium text-primary-grey-700    ", children: "Staff Id" }), _jsx("th", { scope: "col", className: "px-3 py-3.5  text-left text-sm font-medium text-primary-grey-700  ", children: "Staff name" }), _jsx("th", { scope: "col", className: "px-3 py-3.5  text-left text-sm font-medium text-primary-grey-700  ", children: "Department" }), _jsx("th", { scope: "col", className: "px-3 py-3.5  text-left text-sm font-medium text-primary-grey-700  ", children: "Designation" }), _jsx("th", { scope: "col", className: "px-3 py-3.5  text-left text-sm font-medium text-primary-grey-700  ", children: "Assigned subject" }), _jsx("th", { scope: "col", className: "px-3 py-3.5 w-10  text-left text-sm font-medium text-primary-grey-700  ", children: "Action" })] }) }), _jsx("tbody", { className: "bg-white divide-y divide-gray-200", children: _jsx(RenderTable, { currentItems: people }) })] }) }) }) }) })] }));
}
