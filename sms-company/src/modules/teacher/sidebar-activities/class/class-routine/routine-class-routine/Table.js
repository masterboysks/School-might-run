import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useForm } from "react-hook-form";
import { Select } from "../../../../../../components/common/fields";
import { PrinterIcon } from "@heroicons/react/20/solid";
import RenderTable from "./RenderTable";
import { useState } from "react";
const arrayDays = [
    { name: "Sun", id: 7 },
    { name: "Mon", id: 1 },
    { name: "Tue", id: 2 },
    { name: "Wed", id: 3 },
    { name: "Thur", id: 4 },
    { name: "Fri", id: 5 },
    { name: "Sat", id: 6 },
];
export default function Table() {
    const { register, handleSubmit } = useForm();
    const [data, setData] = useState([
        {
            class: "dsjkhjkah",
            level: "jkhdkhak",
            faculty: "jkhdkhak",
            section: "kjjhdsfjkh",
            subject: "dfkljf",
            time: "jjshdf",
            id: "jdshfgjhdg",
        },
        {
            class: "dsjkhjkah",
            level: "jkhdkhak",
            faculty: "jkhdkhak",
            section: "kjjhdsfjkh",
            subject: "dfkljf",
            time: "jjshdf",
            id: "jdsrtyhfgjhdg",
        },
        {
            class: "dsjkhjkah",
            level: "jkhdkhak",
            faculty: "jkhdkhak",
            section: "kjjhdsfjkh",
            subject: "dfkljf",
            time: "jjshdf",
            id: "jdsdhfhfgjhdg",
        },
    ]);
    return (_jsxs(_Fragment, { children: [_jsxs("div", { className: "md:flex-row flex flex-col justify-between my-6", children: [_jsx("div", { className: " md:w-64 w-full", children: _jsx("div", { children: _jsx(Select, { label: "From date(month)", value: arrayDays, register: register, name: "days" }) }) }), _jsxs("div", { className: "h-fit md:mt-auto md:my-0 text-primary-btn flex items-center my-6", children: [_jsx("div", { className: "", children: "Print" }), _jsx("div", { className: " text-primary-btn w-6 ml-1", children: _jsx(PrinterIcon, { fontSize: "mediun" }) })] })] }), _jsx("div", { className: "w-full text-center text-lg font-medium text-primary-grey-600", children: "Class 12 - B routine" }), _jsx("div", { className: "my-6", children: _jsx("div", { className: " ring-1 ring-black ring-opacity-5 overflow-x-auto rounded-lg shadow", children: _jsx("div", { className: "inline-block w-full align-middle", children: _jsx("div", { className: " w-full rounded-lg", children: _jsxs("table", { className: "min-w-full divide-y divide-gray-300 table-auto", children: [_jsx("thead", { className: "bg-gray-50", children: _jsxs("tr", { children: [_jsx("th", { scope: "col", className: "px-3 py-3.5  text-left text-sm font-medium text-primary-grey-700    ", children: "Subject" }), _jsx("th", { scope: "col", className: "px-3 py-3.5  text-left text-sm font-medium text-primary-grey-700  ", children: "Start time" }), _jsx("th", { scope: "col", className: "px-3 py-3.5  text-left text-sm font-medium text-primary-grey-700  ", children: "End time" }), _jsx("th", { scope: "col", className: "px-3 py-3.5  text-left text-sm font-medium text-primary-grey-700  ", children: "Subject teacher" })] }) }), _jsx("tbody", { className: "bg-white divide-y divide-gray-200", children: _jsx(RenderTable, { currentItems: data }) })] }) }) }) }) })] }));
}
