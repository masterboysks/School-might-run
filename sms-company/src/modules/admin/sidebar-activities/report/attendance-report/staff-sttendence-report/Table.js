import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { Dialog, Transition } from "@headlessui/react";
import { useEffect, useState, Fragment, useRef } from "react";
import RenderTable from "./RenderTable";
const people = [
    {
        staffId: 12323,
        staffName: "pratap",
        depart: "admistrative",
        desig: "manager",
        presentDays: "idk",
        absentDays: "male",
        schoolDays: "01234569978",
    },
    {
        staffId: 14152323,
        staffName: "pratap",
        depart: "admistrative",
        desig: "manager",
        presentDays: "idk",
        absentDays: "male",
        schoolDays: "01234569978",
    },
    {
        staffId: 1234564523,
        staffName: "pratap",
        depart: "admistrative",
        desig: "manager",
        presentDays: "idk",
        absentDays: "male",
        schoolDays: "01234569978",
    },
    {
        staffId: 12879323,
        staffName: "pratap",
        depart: "admistrative",
        desig: "manager",
        presentDays: "idk",
        absentDays: "male",
        schoolDays: "01234569978",
    },
    {
        staffId: 12378669784523,
        staffName: "pratap",
        depart: "admistrative",
        desig: "manager",
        presentDays: "idk",
        absentDays: "male",
        schoolDays: "01234569978",
    },
    {
        staffId: 12378694784523,
        staffName: "pratap",
        depart: "admistrative",
        desig: "manager",
        presentDays: "idk",
        absentDays: "male",
        schoolDays: "01234569978",
    },
    {
        staffId: 1,
        staffName: "pratap",
        depart: "admistrative",
        desig: "manager",
        presentDays: "idk",
        absentDays: "male",
        schoolDays: "01234569978",
    },
    {
        staffId: 12378699784523,
        staffName: "pratap",
        depart: "admistrative",
        desig: "manager",
        presentDays: "idk",
        absentDays: "male",
        schoolDays: "01234569978",
    },
    {
        staffId: 12378697784523,
        staffName: "pratap",
        depart: "admistrative",
        desig: "manager",
        presentDays: "idk",
        absentDays: "male",
        schoolDays: "01234569978",
    },
    {
        staffId: 12378697584523,
        staffName: "pratap",
        depart: "admistrative",
        desig: "manager",
        presentDays: "idk",
        absentDays: "male",
        schoolDays: "01234569978",
    },
];
export default function Table() {
    const [open, setOpen] = useState(false);
    const cancelButtonRef = useRef(null);
    const itemsOnPage = 5;
    const [currentPage, setCurrentPage] = useState(1);
    const [currentItems, setCurrentItems] = useState(people.slice(0, itemsOnPage));
    const [indexOfLastItem, setIndexOfLastItem] = useState(currentPage * itemsOnPage);
    const [indexOfFirstItem, setIndexOfFirstItem] = useState(indexOfLastItem - itemsOnPage);
    const [message, setmessage] = useState("Showing 1 to 2 of 2 results");
    const onNextPage = () => {
        setCurrentPage((curr) => curr + 1);
    };
    const onPreviousPage = () => {
        setCurrentPage((curr) => curr - 1);
    };
    useEffect(() => {
        setIndexOfLastItem(currentPage * itemsOnPage);
    }, [currentPage]);
    useEffect(() => {
        setIndexOfFirstItem(indexOfLastItem - itemsOnPage);
    }, [indexOfLastItem]);
    useEffect(() => {
        setmessage(`Showing ${indexOfFirstItem + 1} to ${people.length <= indexOfLastItem ? people.length : indexOfLastItem} of ${people.length}`);
        setCurrentItems(people.slice(indexOfFirstItem, indexOfLastItem));
    }, [indexOfFirstItem]);
    return (_jsxs(_Fragment, { children: [_jsxs("div", { className: "mt-11", children: [_jsx("div", { className: "my-6", children: _jsx("div", { className: " ring-1 ring-black ring-opacity-5 min-w-full overflow-x-auto rounded-lg shadow", children: _jsx("div", { className: "inline-block w-full align-middle", children: _jsx("div", { className: " w-full rounded-lg", children: _jsxs("table", { className: "min-w-full divide-y divide-gray-300 table-auto", children: [_jsx("thead", { className: "bg-gray-50", children: _jsxs("tr", { children: [_jsx("th", { scope: "col", className: "px-3 py-3.5 text-left text-sm font-medium text-primary-grey-700    ", children: "Staff ID" }), _jsx("th", { scope: "col", className: "px-3 py-3.5 text-left text-sm font-medium text-primary-grey-700   ", children: "Staff Name" }), _jsx("th", { scope: "col", className: "px-3 py-3.5 text-left text-sm font-medium text-primary-grey-700   ", children: "Department" }), _jsx("th", { scope: "col", className: "px-3 py-3.5 text-left text-sm font-medium text-primary-grey-700   ", children: "Designation" }), _jsx("th", { scope: "col", className: "px-3 py-3.5 text-left text-sm font-medium text-primary-grey-700   ", children: "Total present days" }), _jsx("th", { scope: "col", className: "px-3 py-3.5 text-left text-sm font-medium text-primary-grey-700   ", children: "Total absent days" }), _jsx("th", { scope: "col", className: "px-3 py-3.5 text-left text-sm font-medium text-primary-grey-700   ", children: "Total school days" })] }) }), _jsx("tbody", { className: "bg-white divide-y divide-gray-200", children: _jsx(RenderTable, { currentItems: currentItems, setOpen: setOpen }) })] }) }) }) }) }), _jsxs("nav", { className: " flex items-center justify-between py-3 bg-white border-t border-gray-200", "aria-label": "Pagination", children: [_jsx("div", { className: "sm:block hidden", children: _jsx("p", { className: "text-sm text-gray-700", children: message }) }), _jsxs("div", { className: "sm:justify-end flex justify-between flex-1", children: [_jsx("button", { disabled: indexOfFirstItem === 0, onClick: onPreviousPage, className: "disabled:opacity-80 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md", children: "Previous" }), _jsx("button", { disabled: indexOfLastItem >= people.length, onClick: onNextPage, className: "disabled:opacity-80 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 ml-3 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md", children: "Next" })] })] })] }), _jsx(Transition.Root, { show: open, as: Fragment, children: _jsxs(Dialog, { as: "div", className: "relative z-[99]", initialFocus: cancelButtonRef, onClose: setOpen, children: [_jsx(Transition.Child, { as: Fragment, enter: "ease-out duration-300", enterFrom: "opacity-0", enterTo: "opacity-100", leave: "ease-in duration-200", leaveFrom: "opacity-100", leaveTo: "opacity-0", children: _jsx("div", { className: "fixed inset-0 transition-opacity bg-gray-500 bg-opacity-75" }) }), _jsx("div", { className: "fixed inset-0 z-10 overflow-y-auto", children: _jsx("div", { className: "sm:items-center sm:p-0 flex items-end justify-center min-h-full p-4 text-center", children: _jsx(Transition.Child, { as: Fragment, enter: "ease-out duration-300", enterFrom: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95", enterTo: "opacity-100 translate-y-0 sm:scale-100", leave: "ease-in duration-200", leaveFrom: "opacity-100 translate-y-0 sm:scale-100", leaveTo: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95", children: _jsxs(Dialog.Panel, { className: "sm:my-8 sm:max-w-xl relative w-full overflow-hidden text-left transition-all transform bg-white rounded-lg shadow-xl", as: "div", children: [_jsx(Dialog.Title, { className: "p-2 text-center", children: "Shuvam dahal-5678" }), _jsx(Dialog.Description, { as: "div", children: _jsx("div", { className: "ring-1 ring-black ring-opacity-5 w-full overflow-x-auto shadow", children: _jsxs("table", { className: "min-w-full divide-y divide-gray-300 table-auto", children: [_jsx("thead", { className: "bg-gray-50 ", children: _jsxs("tr", { children: [_jsx("th", { className: "px-3 py-3.5 text-primary-grey-700 font-medium text-sm", children: "Date" }), _jsx("th", { className: "px-3 py-3.5 text-primary-grey-700 font-medium text-sm", children: "Reason" }), _jsx("th", { className: "px-3 py-3.5 text-primary-grey-700 font-medium text-sm", children: "Action" })] }) }), _jsxs("tbody", { children: [_jsxs("tr", { children: [_jsx("td", { className: "whitespace-nowrap px-3 py-4 text-sm text-gray-500", children: "2022/8/10" }), _jsx("td", { className: "whitespace-nowrap px-3 py-4 text-sm text-gray-500", children: "Head blasted" }), _jsx("td", { className: "whitespace-nowrap text-primary-btn px-3 py-4 text-sm", children: "View" })] }), _jsxs("tr", { children: [_jsx("td", { className: "whitespace-nowrap px-3 py-4 text-sm text-gray-500", children: "2022/8/11" }), _jsx("td", { className: "whitespace-nowrap px-3 py-4 text-sm text-gray-500", children: "Heart attack" }), _jsx("td", { className: "whitespace-nowrap text-primary-btn px-3 py-4 text-sm", children: "View" })] }), _jsxs("tr", { children: [_jsx("td", { className: "whitespace-nowrap px-3 py-4 text-sm text-gray-500", children: "2022/8/13" }), _jsx("td", { className: "whitespace-nowrap px-3 py-4 text-sm text-gray-500", children: "Went to Sky Diving" }), _jsx("td", { className: "whitespace-nowrap text-primary-btn px-3 py-4 text-sm", children: "View" })] }), _jsxs("tr", { children: [_jsx("td", { className: "whitespace-nowrap px-3 py-4 text-sm text-gray-500", children: "2022/8/19" }), _jsx("td", { className: "whitespace-nowrap px-3 py-4 text-sm text-gray-500", children: "Leg broke" }), _jsx("td", { className: "whitespace-nowrap text-primary-btn px-3 py-4 text-sm", children: "View" })] })] })] }) }) })] }) }) }) })] }) })] }));
}
