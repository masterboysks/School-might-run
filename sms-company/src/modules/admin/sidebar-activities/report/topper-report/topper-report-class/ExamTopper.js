import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { PrinterIcon } from "@heroicons/react/20/solid";
import { useState } from "react";
import { Select } from "../../../../../../components/common/oldFields";
import RenderTable from "./RenderExamTopperTable";
const currentItems = [
    {
        stdId: "Lindsay Walton",
        stdName: "Front-end Developer",
        obtainedPercentage: "Lindsay Walton",
    },
    {
        stdId: "Lindsa",
        stdName: "Front-end Developer",
        obtainedPercentage: "Lindsay Walton",
    },
    {
        stdId: "Lindsay Wa",
        stdName: "Front-end Developer",
        obtainedPercentage: "Lindsay Walton",
    },
];
export default function ExamTopper() {
    const arrayExamName = ["dhgs", "jfhd", "dghf"];
    const [examName, setExamName] = useState("Select");
    return (_jsxs(_Fragment, { children: [_jsxs("div", { className: " md:flex-row md:justify-between flex flex-col items-center", children: [_jsx("div", { className: " md:w-6/12 lg:w-3/12 w-full mt-3", children: _jsx(Select, { value: arrayExamName, label: "Exam name", selected: examName, setSelected: setExamName }) }), _jsxs("div", { className: "h-fit md:my-auto flex items-center self-end my-6", children: [_jsx("div", { className: "text-primary-btn font-semibold", children: "Print" }), _jsx("div", { className: " text-primary-btn w-5 ml-1", children: _jsx(PrinterIcon, {}) })] })] }), _jsx("div", { className: "", children: _jsx("div", { className: "my-6", children: _jsx("div", { className: " ring-1 ring-black ring-opacity-5 min-w-full overflow-x-auto rounded-lg shadow", children: _jsx("div", { className: "inline-block w-full align-middle", children: _jsx("div", { className: " w-full rounded-lg", children: _jsxs("table", { className: "min-w-full divide-y divide-gray-300 table-auto", children: [_jsx("thead", { className: "bg-gray-50", children: _jsxs("tr", { children: [_jsx("th", { scope: "col", className: "px-3 py-3.5 text-left text-sm font-medium text-primary-grey-700    ", children: "Student ID" }), _jsx("th", { scope: "col", className: "px-3 py-3.5 text-left text-sm font-medium text-primary-grey-700   ", children: "Student Name" }), _jsx("th", { scope: "col", className: "px-3 py-3.5 text-left text-sm w-48 font-medium text-primary-grey-700   ", children: "Obtained percent" })] }) }), _jsx("tbody", { className: "bg-white divide-y divide-gray-200", children: _jsx(RenderTable, { currentItems: currentItems }) })] }) }) }) }) }) })] }));
}
