import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { useForm } from "react-hook-form";
import RenderTable from "./RenderTable";
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
    const { register } = useForm();
    return (_jsx("div", { className: "my-6", children: _jsx("div", { className: " ring-1 ring-black ring-opacity-5 overflow-x-auto rounded-lg shadow", children: _jsx("div", { className: "inline-block w-full align-middle", children: _jsx("div", { className: " w-full rounded-lg", children: _jsxs("table", { className: "min-w-full divide-y divide-gray-300 table-auto", children: [_jsx("thead", { className: "bg-gray-50", children: _jsxs("tr", { children: [_jsx("th", { scope: "col", className: "px-3 py-3.5  text-left text-sm font-medium text-primary-grey-700    ", children: "Class/Semester" }), _jsx("th", { scope: "col", className: "px-3 py-3.5  text-left text-sm font-medium text-primary-grey-700  ", children: "Level" }), _jsx("th", { scope: "col", className: "px-3 py-3.5  text-left text-sm font-medium text-primary-grey-700  ", children: "Faculty" }), _jsx("th", { scope: "col", className: "px-3 py-3.5  text-left text-sm font-medium text-primary-grey-700  ", children: "Section" }), _jsx("th", { scope: "col", className: "px-3 py-3.5  text-left text-sm font-medium text-primary-grey-700  ", children: "Subject" }), _jsx("th", { scope: "col", className: "px-3 py-3.5 w-10  text-left text-sm font-medium text-primary-grey-700  ", children: "Action" })] }) }), _jsx("tbody", { className: "bg-white divide-y divide-gray-200", children: _jsx(RenderTable, { currentItems: data }) })] }) }) }) }) }));
}
