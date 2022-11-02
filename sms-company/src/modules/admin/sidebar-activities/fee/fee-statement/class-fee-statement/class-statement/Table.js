import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { PrinterIcon } from "@heroicons/react/20/solid";
import { useState } from "react";
import { Select } from "../../../../../../../components/common/oldFields";
import RenderTable from "./RenderTable";
const people = [
    {
        date: 557663,
        particular: "Magh",
        paymentType: "cash",
        billNo: 99999,
        dr: 11,
        cr: 99999999999999999999,
        balance: 12000000,
    },
    {
        date: "-----",
        particular: "Magh",
        paymentType: "cash",
        billNo: 99999,
        dr: 11,
        cr: 99999999999999999999,
        balance: 12000000,
    },
    {
        date: "--",
        particular: "Magh",
        paymentType: "cash",
        billNo: 99999,
        dr: 11,
        cr: 99999999999999999999,
        balance: 12000000,
    },
];
export default function Table() {
    const arrayFromDate = [
        "Jan",
        "Feb",
        "March",
        "April",
        "May",
        "June",
        "July",
        "Aug",
        "Sept",
        "Oct",
        "Nov",
        "Dec",
    ];
    const arrayToDate = [
        "Jan",
        "Feb",
        "March",
        "April",
        "May",
        "June",
        "July",
        "Aug",
        "Sept",
        "Oct",
        "Nov",
        "Dec",
    ];
    const month = new Date().getMonth();
    const [fromDate, setFromDate] = useState("Jan");
    const [toDate, setToDate] = useState(arrayToDate[month]);
    return (_jsxs(_Fragment, { children: [_jsxs("div", { className: "md:flex-row flex flex-col justify-between my-6", children: [_jsxs("div", { className: "sm:grid-cols-2 grid grid-cols-1 gap-4", children: [_jsx("div", { children: _jsx(Select, { label: "From date(month)", value: arrayFromDate, selected: fromDate, setSelected: setFromDate }) }), _jsx("div", { children: _jsx(Select, { label: "To date(month)", value: arrayToDate, selected: toDate, setSelected: setToDate }) })] }), _jsxs("div", { className: "h-fit md:mt-auto md:my-0 text-primary-btn flex items-center my-6", children: [_jsx("div", { className: "", children: "Print" }), _jsx("div", { className: " text-primary-btn w-6 ml-1", children: _jsx(PrinterIcon, { fontSize: "mediun" }) })] })] }), _jsx("div", { className: "my-6", children: _jsx("div", { className: " ring-1 ring-black ring-opacity-5 overflow-x-auto rounded-lg shadow", children: _jsx("div", { className: "inline-block w-full align-middle", children: _jsx("div", { className: " w-full rounded-lg", children: _jsxs("table", { className: "min-w-full divide-y divide-gray-300 table-auto", children: [_jsx("thead", { className: "bg-gray-50", children: _jsxs("tr", { children: [_jsx("th", { scope: "col", className: "px-3 py-3.5 w-12 text-left text-sm font-medium text-primary-grey-700    ", children: "Date" }), _jsx("th", { scope: "col", className: "px-3 py-3.5  text-left text-sm font-medium text-primary-grey-700  ", children: "Particular" }), _jsx("th", { scope: "col", className: "px-3 py-3.5 w-40 text-left text-sm font-medium text-primary-grey-700  ", children: "Dr." }), _jsx("th", { scope: "col", className: "px-3 py-3.5 w-40 text-left text-sm font-medium text-primary-grey-700  ", children: "Cr." }), _jsx("th", { scope: "col", className: "px-3 py-3.5 w-40  text-left text-sm font-medium text-primary-grey-700  ", children: "Balance" })] }) }), _jsxs("tbody", { className: "bg-white divide-y divide-gray-200", children: [_jsx(RenderTable, { currentItems: people }), _jsxs("tr", { className: "bg-gray-100", children: [_jsx("td", { colSpan: "1", className: "whitespace-nowrap px-3 py-4 pr-4 text-base font-medium text-right text-gray-600", children: "Total" }), _jsx("td", { className: "whitespace-nowrap px-3 py-4 text-base font-medium tracking-wide text-gray-600", children: "Rs.1299999999" }), _jsx("td", { className: "whitespace-nowrap px-3 py-4 text-base font-medium tracking-wide text-gray-600", children: "Rs.9999999999999" }), _jsx("td", { className: "whitespace-nowrap px-3 py-4 text-base font-medium tracking-wide text-gray-600" }), _jsx("td", {})] })] })] }) }) }) }) })] }));
}
