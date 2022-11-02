import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { GlobeAltIcon, PrinterIcon } from "@heroicons/react/20/solid";
import { useLayoutEffect, useRef, useState } from "react";
import RenderTable from "./RenderTable";
import Search from "@mui/icons-material/SearchOutlined";
import { Select } from "../../../../../../components/common/oldFields";
const people = [
    {
        monthlyFee: 10000000,
        name: "Asmita",
        previousDue: 40,
        invoiceStatus: "Unplublished",
        total: 990000,
        miscellaneousFee: 15000,
    },
    {
        monthlyFee: 500,
        name: "Aarya joti Bajaraya",
        previousDue: 40,
        invoiceStatus: "Unplublished",
        total: 990000,
        miscellaneousFee: 15000,
    },
];
export default function Table() {
    const checkbox = useRef();
    const [checked, setChecked] = useState(false);
    const [indeterminate, setIndeterminate] = useState(false);
    const [selectedPeople, setSelectedPeople] = useState([]);
    useLayoutEffect(() => {
        const isIndeterminate = selectedPeople.length > 0 && selectedPeople.length < people.length;
        setChecked(selectedPeople.length === people.length);
        setIndeterminate(isIndeterminate);
        checkbox.current.indeterminate = isIndeterminate;
    }, [selectedPeople]);
    function toggleAll() {
        setSelectedPeople(checked || indeterminate ? [] : people);
        setChecked(!checked && !indeterminate);
        setIndeterminate(false);
    }
    //   form
    const arrayMonth = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
    ];
    const monthIndex = new Date().getMonth();
    const [month, setMonth] = useState(arrayMonth[monthIndex]);
    return (_jsxs(_Fragment, { children: [_jsx("div", { className: "md:flex-row flex flex-col justify-between my-6", children: _jsxs("div", { className: "sm:grid-cols-2 grid grid-cols-1 gap-4", children: [_jsx("div", { children: _jsx(Select, { label: "Month", value: arrayMonth, setSelected: setMonth, selected: month }) }), _jsx("div", { className: "h-fit mt-auto -mb-1", children: _jsx("div", { className: "h-fit w-fit bg-primary-btn sm:box-content col-span-full sm:ml-0 sm:py-2 box-border px-4 py-3 mt-auto mb-1 ml-auto text-white rounded cursor-pointer", children: _jsx(Search, { className: "w-4 mx-auto" }) }) })] }) }), _jsxs("div", { className: "flex items-center justify-between", children: [_jsx("div", { className: "md:block hidden text-xl", children: "Magh fee statement" }), _jsxs("div", { className: " flex items-center gap-3", children: [_jsxs("div", { className: "flex items-center", children: [_jsx("div", { className: "text-primary-btn font-semibold", children: "Publish" }), _jsx("div", { className: "icon text-primary-btn w-8 ml-2", children: _jsx(GlobeAltIcon, { fontSize: "medium" }) })] }), _jsx("div", { className: "", children: _jsx("select", { className: "mt-[6px]  sm:w-40 min-w-full p- rounded  focus:ring-primary-btn    border-primary-field bg-white shadow-md placeholder:text-primary-grey-400    text-primary-grey-700 text-sm", children: _jsx("option", { value: "test", children: "Choose print option" }) }) }), _jsx("div", { className: "text-primary-btn font-semibold", children: "Print" }), _jsx("div", { className: "icon text-primary-btn w-5", children: _jsx(PrinterIcon, {}) })] })] }), _jsxs("div", { className: " ring-1 ring-black ring-opacity-5 mb-9 min-w-full mt-4 overflow-x-auto rounded-lg shadow", children: [_jsx("div", { className: "w-fit ml-auto" }), _jsx("div", { className: " flex flex-col w-full rounded", children: _jsx("div", { className: " overflow-x-auto", children: _jsxs("table", { className: " min-w-full divide-y divide-gray-300 table-fixed", children: [_jsx("thead", { className: "bg-gray-50", children: _jsxs("tr", { className: "text-primary-grey-700", children: [_jsx("th", { scope: "col", className: "sm:w-16 sm:px-8 relative w-12 px-6", children: _jsx("input", { type: "checkbox", className: "left-4 top-1/2 focus:ring-primary-btn border-primary-field placeholder:text-primary-grey-400 text-primary-btn absolute w-4 h-4 -mt-2 text-sm rounded shadow-md", ref: checkbox, checked: checked, onChange: toggleAll }) }), _jsx("th", { scope: "col", className: " py-3.5 pr-3 text-left text-sm font-semibold text-primary-active", children: "Student name" }), _jsx("th", { scope: "col", className: "px-3 py-3.5 text-left text-sm font-semibold text-primary-active", children: "Magh fee" }), _jsx("th", { scope: "col", className: "px-3 py-3.5 text-left text-sm font-semibold text-primary-active", children: "Miscellaneous fee" }), _jsx("th", { scope: "col", className: "px-3 py-3.5 text-left text-sm font-semibold text-primary-active", children: "Previous due" }), _jsx("th", { scope: "col", className: "px-3 py-3.5 text-left text-sm font-semibold text-primary-active", children: "Total" }), _jsx("th", { scope: "col", className: "relative py-3.5 pl-3 pr-4 sm:pr-6 text-left ", children: "Invoice status" })] }) }), _jsx("tbody", { className: " bg-white divide-y divide-gray-200", children: people.map((person, index) => (_jsx(RenderTable, { person: person, selectedPeople: selectedPeople, setSelectedPeople: setSelectedPeople }, index))) })] }) }) })] })] }));
}
