import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { SearchBar } from "../../../../../../components/common/fields";
import RenderTable from "./RenderTable";
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
    return (_jsxs(_Fragment, { children: [_jsx("div", { className: "w-full text-center text-lg font-medium text-primary-grey-600 my-3", children: "First term examination" }), _jsx("div", { className: "w-72 relative max-w-full", children: _jsx(SearchBar, { register: register, name: "search" }) }), _jsx("div", { className: "my-6", children: _jsx("div", { className: " ring-1 ring-black ring-opacity-5 overflow-x-auto rounded-lg shadow", children: _jsx("div", { className: "inline-block w-full align-middle", children: _jsx("div", { className: " w-full rounded-lg", children: _jsxs("table", { className: "min-w-full divide-y divide-gray-300 table-auto", children: [_jsx("thead", { className: "bg-gray-50", children: _jsxs("tr", { children: [_jsx("th", { scope: "col", className: "px-3 py-3.5  text-left text-sm font-medium text-primary-grey-700    ", children: "Student name" }), _jsx("th", { scope: "col", className: "px-3 py-3.5  text-left text-sm font-medium text-primary-grey-700  ", children: "Theory" }), _jsx("th", { scope: "col", className: "px-3 py-3.5  text-left text-sm font-medium text-primary-grey-700  ", children: "Pratical" }), _jsx("th", { scope: "col", className: "px-3 py-3.5  text-left text-sm font-medium text-primary-grey-700  ", children: "Assest" }), _jsx("th", { scope: "col", className: "px-3 py-3.5  text-left text-sm font-medium text-primary-grey-700  ", children: "Total" })] }) }), _jsx("tbody", { className: "bg-white divide-y divide-gray-200", children: _jsx(RenderTable, { currentItems: data, register: register }) })] }) }) }) }) })] }));
}
