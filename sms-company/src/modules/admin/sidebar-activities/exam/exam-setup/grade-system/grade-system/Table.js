import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { Link } from "react-router-dom";
import RenderTable from "./RenderTable";
import { Fragment, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { SearchBar } from "../../../../../../../components/common/oldFields";
const people = [
    {
        level: "School level",
    },
    {
        level: "School level",
    },
];
const view = {
    level: "School level",
    table: [
        {
            lowerLimit: 90,
            upperLimit: 100,
            grade: "A+",
            gpa: 4.0,
        },
        {
            lowerLimit: 80,
            upperLimit: 90,
            grade: "A",
            gpa: 3.6,
        },
        {
            lowerLimit: 90,
            upperLimit: 100,
            grade: "A+",
            gpa: 4.0,
        },
        {
            lowerLimit: 90,
            upperLimit: 100,
            grade: "A+",
            gpa: 4.0,
        },
        {
            lowerLimit: 90,
            upperLimit: 100,
            grade: "A+",
            gpa: 4.0,
        },
    ],
};
export default function Table() {
    const [searchFilter, setSearchFilter] = useState("");
    const [open, setOpen] = useState(false);
    const cancelButtonRef = useRef(null);
    return (_jsxs(_Fragment, { children: [_jsx(Transition.Root, { show: open, as: Fragment, children: _jsxs(Dialog, { as: "div", className: "relative z-[99]", initialFocus: cancelButtonRef, onClose: setOpen, children: [_jsx(Transition.Child, { as: Fragment, enter: "ease-out duration-300", enterFrom: "opacity-0", enterTo: "opacity-100", leave: "ease-in duration-200", leaveFrom: "opacity-100", leaveTo: "opacity-0", children: _jsx("div", { className: "fixed inset-0 transition-opacity bg-gray-500 bg-opacity-75" }) }), _jsx("div", { className: "fixed inset-0 z-10 overflow-y-auto", children: _jsx("div", { className: "sm:items-center sm:p-0 flex items-end justify-center min-h-full p-4 text-center", children: _jsx(Transition.Child, { as: Fragment, enter: "ease-out duration-300", enterFrom: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95", enterTo: "opacity-100 translate-y-0 sm:scale-100", leave: "ease-in duration-200", leaveFrom: "opacity-100 translate-y-0 sm:scale-100", leaveTo: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95", children: _jsxs(Dialog.Panel, { className: "sm:my-8 sm:max-w-xl relative w-full overflow-hidden text-left transition-all transform bg-white rounded-lg shadow-xl", children: [_jsxs(Dialog.Title, { className: "p-2 text-center", children: ["Grade system - ", view.level] }), _jsx(Dialog.Description, { children: _jsx("div", { className: "ring-1 ring-black ring-opacity-5 w-full shadow", children: _jsxs("table", { className: "min-w-full divide-y divide-gray-300 table-auto", children: [_jsx("thead", { className: "bg-gray-50 ", children: _jsxs("tr", { children: [_jsx("th", { className: "px-3 py-3.5 text-primary-grey-700 font-medium text-sm", children: "Limit(%)" }), _jsx("th", { className: "px-3 py-3.5 text-primary-grey-700 font-medium text-sm", children: "Grade" }), _jsx("th", { className: "px-3 py-3.5 text-primary-grey-700 font-medium text-sm", children: "GPA" })] }) }), _jsx("tbody", { children: view.table.map((curr, i) => (_jsxs("tr", { children: [_jsxs("td", { className: "whitespace-nowrap px-3 py-4 text-sm text-gray-500", children: [curr.lowerLimit, "-", curr.upperLimit] }), _jsx("td", { className: "whitespace-nowrap px-3 py-4 text-sm text-gray-500", children: curr.grade }), _jsx("td", { className: "whitespace-nowrap px-3 py-4 text-sm text-gray-500", children: curr.gpa })] }, i))) })] }) }) })] }) }) }) })] }) }), _jsxs("div", { className: "mt-11 lg:w-2/3 w-full", children: [_jsxs("div", { className: "sm:flex sm:items-center justify-between", children: [_jsx("div", { className: "w-72 relative max-w-full", children: _jsx(SearchBar, { value: searchFilter, setValue: setSearchFilter }) }), _jsx("div", { className: "sm:mt-0 sm:ml-16 sm:flex-none mt-4", children: _jsx(Link, { to: "add", className: "primary_btn", children: "Add" }) })] }), _jsx("div", { className: "my-6", children: _jsx("div", { className: " ring-1 ring-black ring-opacity-5 overflow-x-auto rounded-lg shadow", children: _jsx("div", { className: "inline-block w-full align-middle", children: _jsx("div", { className: " w-full rounded-lg", children: _jsxs("table", { className: "min-w-full divide-y divide-gray-300 table-auto", children: [_jsx("thead", { className: "bg-gray-50", children: _jsxs("tr", { children: [_jsx("th", { scope: "col", className: "px-3 py-3.5  text-left text-sm font-medium text-primary-grey-700  ", children: "Level" }), _jsx("th", { scope: "col", className: "px-3 py-3.5  text-left text-sm font-medium text-primary-grey-700    ", children: "Grading system" }), _jsx("th", { scope: "col", className: "px-3 py-3.5 w-10 text-left text-sm font-medium text-primary-grey-700  ", children: "Action" })] }) }), _jsx("tbody", { className: "bg-white divide-y divide-gray-200", children: _jsx(RenderTable, { currentItems: people, setOpen: setOpen }) })] }) }) }) }) })] })] }));
}
