import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import RenderTable from "./RenderTable";
const table = [
    {
        date: "Jun 2",
        billNo: "5521332",
        grandTotal: "1000",
        paidAmount: "99999",
        dueAmmount: "999999999999",
        status: "Paid",
    },
    {
        date: "Jun 2",
        billNo: "552fgs1332",
        grandTotal: "1000",
        paidAmount: "99999",
        dueAmmount: "999999999999",
        status: "Paid",
    },
    {
        date: "Jun 2",
        billNo: "552wqr1332",
        grandTotal: "1000",
        paidAmount: "99999",
        dueAmmount: "999999999999",
        status: "Paid",
    },
    {
        date: "Jun 2",
        billNo: "ahgfdr5521332",
        grandTotal: "1000",
        paidAmount: "99999",
        dueAmmount: "999999999999",
        status: "Paid",
    },
    {
        date: "Jun 2",
        billNo: "5521332rywg",
        grandTotal: "1000",
        paidAmount: "99999",
        dueAmmount: "999999999999",
        status: "Paid",
    },
    {
        date: "Jun 2",
        billNo: "552133agert2",
        grandTotal: "1000",
        paidAmount: "99999",
        dueAmmount: "999999999999",
        status: "Paid",
    },
];
export default function FeeInvoice() {
    return (_jsxs(_Fragment, { children: [_jsx("div", { className: "text-primary-grey-700 text-lg font-medium  ", children: "Fee invoice" }), " ", _jsx("div", { className: "my-6", children: _jsx("div", { className: " ring-1 ring-black ring-opacity-5 overflow-x-auto rounded-lg shadow", children: _jsx("div", { className: "inline-block w-full align-middle", children: _jsx("div", { className: " w-full rounded-lg", children: _jsxs("table", { className: "min-w-full divide-y divide-gray-300 table-fixed", children: [_jsx("thead", { className: "bg-gray-50", children: _jsxs("tr", { children: [_jsx("th", { scope: "col", className: "px-3 py-3.5 text-left text-sm font-medium text-primary-grey-700    ", children: "Date" }), _jsx("th", { scope: "col", className: "px-3 py-3.5 text-left text-sm font-medium text-primary-grey-700  ", children: "Bill no." }), _jsx("th", { scope: "col", className: "px-3 py-3.5 text-left text-sm font-medium text-primary-grey-700  ", children: "Particular" }), _jsx("th", { scope: "col", className: "px-3 py-3.5 text-left text-sm font-medium text-primary-grey-700  ", children: "Grand total" }), _jsx("th", { scope: "col", className: "px-3 py-3.5 w-10 text-left text-sm font-medium text-primary-grey-700  ", children: "Details" })] }) }), _jsx("tbody", { className: "bg-white divide-y divide-gray-200", children: _jsx(RenderTable, { currentItems: table }) })] }) }) }) }) })] }));
}
