import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import RenderTable from "./RenderTable";
import { Fragment, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
const people = [
    {
        date: 557663,
        particular: "Fee",
        amount: 12000000,
    },
    {
        date: "-----",
        particular: "Miscellaneous fee",
        amount: 12000000,
    },
    {
        date: "--",
        particular: "Previous Fee",
        amount: 12000000,
    },
];
export default function Table() {
    const [open, setOpen] = useState(false);
    const cancelButtonRef = useRef(null);
    return (_jsxs(_Fragment, { children: [_jsx(Transition.Root, { show: open, as: Fragment, children: _jsxs(Dialog, { as: "div", className: "relative z-[99]", initialFocus: cancelButtonRef, onClose: setOpen, children: [_jsx(Transition.Child, { as: Fragment, enter: "ease-out duration-300", enterFrom: "opacity-0", enterTo: "opacity-100", leave: "ease-in duration-200", leaveFrom: "opacity-100", leaveTo: "opacity-0", children: _jsx("div", { className: "fixed inset-0 transition-opacity bg-gray-500 bg-opacity-75" }) }), _jsx("div", { className: "fixed inset-0 z-10 overflow-y-auto", children: _jsx("div", { className: "sm:items-center sm:p-0 flex items-end justify-center min-h-full p-4 text-center", children: _jsx(Transition.Child, { as: Fragment, enter: "ease-out duration-300", enterFrom: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95", enterTo: "opacity-100 translate-y-0 sm:scale-100", leave: "ease-in duration-200", leaveFrom: "opacity-100 translate-y-0 sm:scale-100", leaveTo: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95", children: _jsxs(Dialog.Panel, { className: "sm:my-8 sm:max-w-xl sm:w-full relative overflow-hidden text-left transition-all transform bg-white rounded-lg shadow-xl", children: [_jsx(Dialog.Title, { className: "p-2", children: "Fee" }), _jsx(Dialog.Description, { children: _jsx("div", { className: "ring-1 ring-black ring-opacity-5 w-full overflow-x-auto shadow", children: _jsxs("table", { className: "min-w-full divide-y divide-gray-300 table-auto", children: [_jsx("thead", { className: "bg-gray-50 ", children: _jsxs("tr", { children: [_jsx("th", { className: "px-3 py-3.5 text-primary-grey-700 font-medium text-sm", children: "Fee name" }), _jsx("th", { className: "px-3 py-3.5 text-primary-grey-700 font-medium text-sm", children: "Amount" })] }) }), _jsxs("tbody", { className: "divide-primary-50 divide-y-[1px]", children: [_jsxs("tr", { children: [_jsx("td", { className: "whitespace-nowrap px-3 py-4 text-sm text-gray-500", children: "Monthly fee" }), _jsx("td", { className: "whitespace-nowrap px-3 py-4 text-sm text-gray-500", children: "Rs.2000" })] }), _jsxs("tr", { children: [_jsx("td", { className: "whitespace-nowrap px-3 py-4 text-sm text-gray-500", children: "Transportation fee" }), _jsx("td", { className: "whitespace-nowrap px-3 py-4 text-sm text-gray-500", children: "Rs.1600" })] }), _jsxs("tr", { children: [_jsx("td", { className: "whitespace-nowrap px-3 py-4 text-sm text-gray-500", children: "Libary fee" }), _jsx("td", { className: "whitespace-nowrap px-3 py-4 text-sm text-gray-500", children: "Rs.400" })] }), _jsxs("tr", { children: [_jsx("td", { className: "whitespace-nowrap px-3 py-4 text-sm text-gray-500", children: "Lab fee" }), _jsx("td", { className: "whitespace-nowrap px-3 py-4 text-sm text-gray-500", children: "Rs.1000" })] })] })] }) }) })] }) }) }) })] }) }), _jsx("div", { className: "my-6", children: _jsx("div", { className: " ring-1 ring-black ring-opacity-5 overflow-x-auto rounded-lg shadow", children: _jsx("div", { className: "inline-block w-full align-middle", children: _jsx("div", { className: " w-full rounded-lg", children: _jsxs("table", { className: "min-w-full divide-y divide-gray-300 table-auto", children: [_jsx("thead", { className: "bg-gray-50", children: _jsxs("tr", { children: [_jsx("th", { scope: "col", className: "px-3 py-3.5  w-12 text-left text-sm font-medium text-primary-grey-700    ", children: "Date" }), _jsx("th", { scope: "col", className: "px-3 py-3.5  text-left text-sm font-medium text-primary-grey-700  ", children: "Particular" }), _jsx("th", { scope: "col", className: "px-3 py-3.5  text-left text-sm font-medium text-primary-grey-700  ", children: "Amount" }), _jsx("th", { scope: "col", className: "px-3 py-3.5 w-10  text-left text-sm font-medium text-primary-grey-700  ", children: "Inclusion" })] }) }), _jsx("tbody", { className: "bg-white divide-y divide-gray-200", children: _jsx(RenderTable, { currentItems: people, setOpen: setOpen }) })] }) }) }) }) })] }));
}
