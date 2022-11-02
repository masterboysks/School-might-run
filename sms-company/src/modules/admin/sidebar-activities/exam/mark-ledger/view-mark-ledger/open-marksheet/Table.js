import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { PrinterIcon } from "@heroicons/react/20/solid";
import { useState } from "react";
import { Select } from "../../../../../../../components/common/oldFields";
import SearchIcon from "../../../../../../../components/common/SearchIcon";
import RenderTable from "./RenderTable";
const data = [
    {
        subject: "Physics",
        fullTheory: 100,
        fullPartical: 0,
        fullAssest: 0,
        fullTotal: 100,
        obtainedTheory: 32,
        obtainedPratical: 0,
        obtainedAssest: 0,
        obtainedTotal: 32,
        obtainedHigest: 99,
        result: "pass",
    },
    {
        subject: "Physics",
        fullTheory: 100,
        fullPartical: 0,
        fullAssest: 0,
        fullTotal: 100,
        obtainedTheory: 32,
        obtainedPratical: 0,
        obtainedAssest: 0,
        obtainedTotal: 32,
        obtainedHigest: 99,
        result: "pass",
    },
    {
        subject: "Physics",
        fullTheory: 100,
        fullPartical: 0,
        fullAssest: 0,
        fullTotal: 100,
        obtainedTheory: 32,
        obtainedPratical: 0,
        obtainedAssest: 0,
        obtainedTotal: 32,
        obtainedHigest: 99,
        result: "pass",
    },
    {
        subject: "Physics",
        fullTheory: 100,
        fullPartical: 0,
        fullAssest: 0,
        fullTotal: 100,
        obtainedTheory: 32,
        obtainedPratical: 0,
        obtainedAssest: 0,
        obtainedTotal: 32,
        obtainedHigest: 99,
        result: "pass",
    },
];
const total = data.reduce((prv, curr) => {
    return curr.obtainedTotal + prv;
}, 0);
const Table = () => {
    const arrayAcademicYear = ["fdjsh", "dklshf", "djksh"];
    const arrayExamName = ["jkdh", "disufj", "dskfjhg"];
    // Constant
    const arrayGradingSystem = ["Percentage", "GPA"];
    const [academicYear, setAcademicYear] = useState("Select");
    const [examName, setExamName] = useState("Select");
    const [gradingSystem, setGradingSystem] = useState("Percentage");
    const [errorAcademicYear, setErrorAcademicYear] = useState(false);
    const [errorExamName, setErrorExamName] = useState(false);
    return (_jsxs(_Fragment, { children: [_jsx("div", { className: "lg:w-11/12 mb-14 w-full", children: _jsx("div", { className: "xl:flex ring-black ring-opacity-5 ring-1 form-solid p-4 my-6 rounded-md shadow", children: _jsxs("div", { className: "md:grid-cols-2 xl:grid-cols-3 grid flex-1 grid-cols-1 gap-4", children: [_jsx("div", { className: "", children: _jsx(Select, { label: "Academic year*", value: arrayAcademicYear, selected: academicYear, setSelected: setAcademicYear, error: errorAcademicYear, setError: setErrorAcademicYear }) }), _jsx("div", { className: "", children: _jsx(Select, { label: "Exam name*", value: arrayExamName, selected: examName, setSelected: setExamName, error: errorExamName, setError: setErrorExamName }) }), _jsx("div", { className: "", children: _jsx(Select, { label: "Grading system", value: arrayGradingSystem, setSelected: setGradingSystem, selected: gradingSystem }) }), _jsx(SearchIcon, { className: "xl:col-start-4 mt-auto ml-auto" })] }) }) }), _jsxs("div", { className: "flex items-center justify-between", children: [_jsx("div", { className: "md:block hidden text-xl", children: "First Term Examination" }), _jsxs("div", { className: "flex items-center gap-3", children: [_jsx("div", { className: "text-primary-btn font-semibold", children: "Print" }), _jsx("div", { className: "icon text-primary-btn w-5", children: _jsx(PrinterIcon, {}) })] })] }), _jsxs("div", { className: "", children: [_jsx("div", { className: "my-6", children: _jsx("div", { className: " ring-1 ring-black ring-opacity-5 min-w-full overflow-x-auto rounded-lg shadow", children: _jsx("div", { className: "inline-block w-full align-middle", children: _jsx("div", { className: " w-full rounded-lg", children: _jsxs("table", { className: "min-w-full divide-y divide-gray-300 table-auto", children: [_jsxs("thead", { className: "bg-gray-50 divide-y", children: [_jsxs("tr", { className: "divide-x", children: [_jsx("th", { scope: "col", className: "px-3 py-3.5 text-left text-sm font-medium text-primary-grey-700   ", children: "Subject" }), _jsx("th", { scope: "col", colSpan: "4", className: "px-3    py-3.5 text-left text-sm font-medium text-primary-grey-700   ", children: "Full marks" }), _jsx("th", { scope: "col", colSpan: "6", className: "px-3 py-3.5 text-left text-sm font-medium text-primary-grey-700   ", children: "Obtained marks" })] }), _jsxs("tr", { children: [_jsx("th", { scope: "col", className: "px-3 py-3.5 text-left text-sm font-medium text-primary-grey-700    " }), _jsx("th", { scope: "col", className: "px-3 border-l py-3.5 text-left text-sm font-medium text-primary-grey-700 min-w-[72px]  ", children: "Theory" }), _jsx("th", { scope: "col", className: "px-3 py-3.5 text-left text-sm font-medium text-primary-grey-700 min-w-[72px]   ", children: "Pratical" }), _jsx("th", { scope: "col", className: "px-3 py-3.5 text-left text-sm font-medium text-primary-grey-700 min-w-[72px]   ", children: "Assest" }), _jsx("th", { scope: "col", className: "px-3 py-3.5 text-left text-sm font-medium text-primary-grey-700 min-w-[72px]   ", children: "Total" }), _jsx("th", { scope: "col", className: "px-3 py-3.5 border-l text-left text-sm font-medium text-primary-grey-700 min-w-[72px]  ", children: "Theory" }), _jsx("th", { scope: "col", className: "px-3 py-3.5 text-left text-sm font-medium text-primary-grey-700 min-w-[72px]   ", children: "Pratical" }), _jsx("th", { scope: "col", className: "px-3 py-3.5 text-left text-sm font-medium text-primary-grey-700 min-w-[72px]   ", children: "Assest" }), _jsx("th", { scope: "col", className: "px-3 py-3.5 text-left text-sm font-medium text-primary-grey-700 min-w-[72px]   ", children: "Total" }), _jsx("th", { scope: "col", className: "px-3 w-10 py-3.5 text-left text-sm font-medium text-primary-grey-700 min-w-[72px]   ", children: "Higest Score" }), _jsx("th", { scope: "col", className: "px-3 border-l py-3.5 text-left text-sm font-medium text-primary-grey-700   ", children: "Result" })] })] }), _jsx("tbody", { className: "bg-white divide-y divide-gray-200", children: _jsx(RenderTable, { data: data, total: total }) })] }) }) }) }) }), _jsxs("div", { className: " w-full my-6 flex justify-between", children: [_jsxs("div", { className: "grid grid-cols-2 w-fit gap-2", children: [_jsx("div", { className: "text-primary-grey-600 text-base font-semibold", children: "Result" }), _jsx("div", { className: "font-semibold text-primary-grey-700", children: ": Distinction" }), _jsx("div", { className: "text-primary-grey-600 text-base font-semibold", children: "Percentage" }), _jsx("div", { className: "font-semibold text-primary-grey-700", children: ": 80%" }), _jsx("div", { className: "text-primary-grey-600 text-base font-semibold", children: "Performance" }), _jsx("div", { className: "font-semibold text-primary-grey-700", children: ": Outstanding" })] }), _jsx("div", { className: "text-sm text-primary-grey-600 ", children: "*Note:A=Absent, F=Fail" })] })] })] }));
};
export default Table;
