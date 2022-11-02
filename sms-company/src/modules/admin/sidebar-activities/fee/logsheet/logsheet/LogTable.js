import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import RenderTable from "./LogTableRender";
import { Fragment, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
const people = [
    {
        date: 557663,
        billNo: 156332,
        total: 99999999999,
        paid: 0,
        due: 50000000000000,
    },
    {
        date: 557663,
        billNo: 156342,
        total: -1,
        paid: 0,
        due: -1,
    },
];
export default function LogTable() {
    const [open, setOpen] = useState(false);
    const cancelButtonRef = useRef(null);
    return (_jsxs(_Fragment, { children: [_jsx("div", { className: "my-9", children: _jsx("div", { className: " ring-1 ring-black ring-opacity-5 overflow-x-auto rounded-lg shadow", children: _jsx("div", { className: "inline-block w-full align-middle", children: _jsx("div", { className: " w-full rounded-lg", children: _jsxs("table", { className: "min-w-full divide-y divide-gray-300 table-auto", children: [_jsx("thead", { className: "bg-gray-50", children: _jsxs("tr", { children: [_jsx("th", { scope: "col", className: "px-3 py-3.5  w-16 text-left text-sm font-medium text-primary-grey-700    ", children: "Date" }), _jsx("th", { scope: "col", className: "px-3 py-3.5  text-left text-sm font-medium text-primary-grey-700  ", children: "Bill no." }), _jsx("th", { scope: "col", className: "px-3 py-3.5  text-left text-sm font-medium text-primary-grey-700  ", children: "Total amount" }), _jsx("th", { scope: "col", className: "px-3 py-3.5  text-left text-sm font-medium text-primary-grey-700  ", children: "Paid amount" }), _jsx("th", { scope: "col", className: "px-3 py-3.5  text-left text-sm font-medium text-primary-grey-700  ", children: "Due amount" }), _jsx("th", { scope: "col", className: "px-3 py-3.5 w-10  text-left text-sm font-medium text-primary-grey-700  ", children: "Action" })] }) }), _jsx("tbody", { className: "bg-white divide-y divide-gray-200", children: _jsx(RenderTable, { currentItems: people, setOpen: setOpen }) })] }) }) }) }) }), _jsx(Transition.Root, { show: open, as: Fragment, children: _jsxs(Dialog, { as: "div", className: "relative z-[99]", initialFocus: cancelButtonRef, onClose: setOpen, children: [_jsx(Transition.Child, { as: Fragment, enter: "ease-out duration-300", enterFrom: "opacity-0", enterTo: "opacity-100", leave: "ease-in duration-200", leaveFrom: "opacity-100", leaveTo: "opacity-0", children: _jsx("div", { className: "fixed inset-0 transition-opacity bg-gray-500 bg-opacity-75" }) }), _jsx("div", { className: "fixed inset-0 z-10 overflow-y-auto", children: _jsx("div", { className: "sm:items-center sm:p-0 flex items-end justify-center min-h-full p-4 text-center", children: _jsx(Transition.Child, { as: Fragment, enter: "ease-out duration-300", enterFrom: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95", enterTo: "opacity-100 translate-y-0 sm:scale-100", leave: "ease-in duration-200", leaveFrom: "opacity-100 translate-y-0 sm:scale-100", leaveTo: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95", children: _jsxs(Dialog.Panel, { className: "sm:my-8 sm:max-w-xl sm:w-full sm:p-6 relative px-4 pt-5 pb-4 overflow-hidden text-left transition-all transform bg-white rounded-lg shadow-xl", children: [_jsx("div", { className: ` ring-1 ring-black ring-opacity-5 my-9 min-w-full overflow-x-auto rounded-lg shadow `, children: _jsx("div", { className: " flex flex-col w-full rounded", children: _jsx("div", { className: " overflow-x-auto", children: _jsxs("table", { className: " min-w-full divide-y divide-gray-300 table-fixed", children: [_jsx("thead", { className: "bg-gray-50", children: _jsxs("tr", { className: "text-primary-grey-700", children: [_jsx("th", { scope: "col", className: " py-3.5 px-3  text-left text-sm font-semibold text-primary-active", children: "Date" }), _jsx("th", { scope: "col", className: "px-3 py-3.5 text-left text-sm font-semibold text-primary-active", children: "Description" }), _jsx("th", { scope: "col", className: "px-3 py-3.5 text-left text-sm font-semibold text-primary-active", children: "Amount (Rs.)" }), _jsx("th", { scope: "col", className: "px-3 py-3.5 text-left text-sm font-semibold text-primary-active", children: "Discount (Rs.)" }), _jsx("th", { scope: "col", className: "px-3 py-3.5 text-left text-sm font-semibold text-primary-active", children: "Total amount (Rs.)" })] }) }), _jsxs("tbody", { className: " bg-white divide-y divide-gray-200", children: [_jsxs("tr", { children: [_jsx("td", { className: "p-2", children: _jsx("input", { type: "date", name: "date", id: "date", disabled: true, className: "mt-[6px] w-full p- rounded  focus:ring-primary-btn    border-primary-grey-400 bg-primary-grey-100 shadow-md placeholder:text-primary-grey-400    text-primary-grey-700 text-sm" }) }), _jsx("td", { className: "p-2", children: _jsx("input", { type: "text", className: "mt-[6px] w-full p- rounded  focus:ring-primary-btn    border-primary-field shadow-md placeholder:text-primary-grey-400    text-primary-grey-700 text-sm" }) }), _jsx("td", { className: "p-2", children: _jsx("input", { type: "number", name: "ammount", id: "ammount", placeholder: "12000", className: "mt-[6px] w-full p- rounded  focus:ring-primary-btn   shadow-md border-primary-field  placeholder:text-primary-grey-400    text-primary-grey-700 text-sm" }) }), _jsx("td", { className: "p-2", children: _jsx("input", { type: "number", name: "discount", id: "discount", placeholder: "00", className: `mt-[6px] w-full p- rounded  focus:ring-primary-btn 
                                    
                                      border-primary-field  placeholder:text-primary-grey-400 
                                  } ` }) }), _jsxs("td", { className: "overscroll-none relative p-2", children: [_jsx("input", { type: "number", name: "total", disabled: true, id: "total", placeholder: "12000", className: "mt-[6px] w-full p- rounded  focus:ring-primary-btn    border-primary-grey-400 bg-primary-grey-100 shadow-md placeholder:text-primary-grey-400    text-primary-grey-700 text-sm" }), _jsx("div", { className: "top-5 -right-3 absolute z-10 w-5" })] })] }), _jsxs("tr", { children: [_jsx("td", { className: "p-2", children: _jsx("input", { type: "date", name: "date", id: "date", disabled: true, className: "mt-[6px] w-full p- rounded  focus:ring-primary-btn    border-primary-grey-400 bg-primary-grey-100 shadow-md placeholder:text-primary-grey-400    text-primary-grey-700 text-sm" }) }), _jsx("td", { className: "p-2", children: _jsx("input", { type: "text", className: "mt-[6px] w-full p- rounded  focus:ring-primary-btn    border-primary-field shadow-md placeholder:text-primary-grey-400    text-primary-grey-700 text-sm" }) }), _jsx("td", { className: "p-2", children: _jsx("input", { type: "number", name: "ammount", id: "ammount", placeholder: "12000", className: "mt-[6px] w-full p- rounded  focus:ring-primary-btn   shadow-md border-primary-field  placeholder:text-primary-grey-400    text-primary-grey-700 text-sm" }) }), _jsx("td", { className: "p-2", children: _jsx("input", { type: "number", name: "discount", id: "discount", placeholder: "00", className: `mt-[6px] w-full p- rounded  focus:ring-primary-btn 
                                    
                                      border-primary-field  placeholder:text-primary-grey-400 
                                  } ` }) }), _jsxs("td", { className: "overscroll-none relative p-2", children: [_jsx("input", { type: "number", name: "total", disabled: true, id: "total", placeholder: "12000", className: "mt-[6px] w-full p- rounded  focus:ring-primary-btn    border-primary-grey-400 bg-primary-grey-100 shadow-md placeholder:text-primary-grey-400    text-primary-grey-700 text-sm" }), _jsx("div", { className: "top-5 -right-3 absolute z-10 w-5" })] })] })] })] }) }) }) }), _jsxs("div", { className: "md:flex-row flex flex-col w-full", children: [_jsxs("div", { className: "grid items-center grid-cols-2 py-1", children: [_jsx("label", { htmlFor: "grandTotal", children: "Grand total :" }), _jsx("input", { type: "number", name: "grandTotal", disabled: true, id: "grandTotal", placeholder: "Rs.12000", className: "ml-auto mt-[6px] w-36 p- rounded  focus:ring-primary-btn    border-primary-grey-400 bg-primary-grey-100 shadow-md placeholder:text-primary-grey-400    text-primary-grey-700 text-sm" }), _jsx("label", { htmlFor: "paidAmount", children: "Paid ammount*: " }), _jsx("input", { type: "number", name: "paidAmmount", id: "paidAmmount", placeholder: "Rs.12000", disabled: true, className: "ml-auto mt-[6px] w-36 p- rounded  focus:ring-primary-btn    border-primary-grey-400 bg-primary-grey-100 shadow-md placeholder:text-primary-grey-400    text-primary-grey-700 text-sm" }), _jsx("label", { htmlFor: "due", children: "Due amount:" }), _jsx("input", { type: "number", name: "due", disabled: true, id: "due", placeholder: "Rs.12000", className: "ml-auto mt-[6px] w-36 p- rounded  focus:ring-primary-btn    border-primary-grey-400 bg-primary-grey-100 shadow-md placeholder:text-primary-grey-400    text-primary-grey-700 text-sm" })] }), _jsx("div", { className: " md:my-0 md:mt-auto flex flex-1 my-3", children: _jsxs("div", { className: "btns w-fit md:ml-auto ml-0", children: [_jsx("div", { to: "/fee/student-logsheet ", className: "secondary_btn", onClick: () => setOpen(false), children: "Cancel" }), _jsx("div", { className: "primary_btn", onClick: () => setOpen(false), children: "Save" })] }) })] })] }) }) }) })] }) })] }));
}
