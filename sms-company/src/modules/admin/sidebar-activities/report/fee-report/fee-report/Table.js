import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useLayoutEffect, useRef, useState } from "react";
import RenderTable from "./RenderTable";
const people = [
    {
        level: "School level",
        faculty: "",
        noOfStd: 40,
        invoiceStatus: "Unplublished",
        class: "Front-end Developer",
        section: "lindsay.walton@example.com",
    },
    {
        level: "School level",
        faculty: "",
        noOfStd: 40,
        invoiceStatus: "Unplublished",
        class: "Front-end Developer",
        section: "lindsay.walton@examplfdgbf.com",
    },
];
export default function Example() {
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
    return (_jsxs("div", { className: " ring-1 ring-black ring-opacity-5 mb-9 min-w-full mt-4 overflow-x-auto rounded-lg shadow", children: [_jsx("div", { className: "w-fit ml-auto" }), _jsx("div", { className: " flex flex-col w-full rounded", children: _jsx("div", { className: " overflow-x-auto", children: _jsxs("table", { className: " min-w-full divide-y divide-gray-300 table-fixed", children: [_jsx("thead", { className: "bg-gray-50", children: _jsxs("tr", { className: "text-primary-grey-700", children: [_jsx("th", { scope: "col", className: "sm:w-16 sm:px-8 relative w-12 px-6", children: _jsx("input", { type: "checkbox", className: "left-4 top-1/2 focus:ring-primary-btn border-primary-field placeholder:text-primary-grey-400 text-primary-btn absolute w-4 h-4 -mt-2 text-sm rounded shadow-md", ref: checkbox, checked: checked, onChange: toggleAll }) }), _jsx("th", { scope: "col", className: " py-3.5 pr-3 text-left text-sm font-semibold text-primary-active", children: "Class/Semester" }), _jsx("th", { scope: "col", className: "px-3 py-3.5 text-left text-sm font-semibold text-primary-active", children: "Level" }), _jsx("th", { scope: "col", className: "px-3 py-3.5 text-left text-sm font-semibold text-primary-active", children: "Faculty" }), _jsx("th", { scope: "col", className: "px-3 py-3.5 text-left text-sm font-semibold text-primary-active", children: "Section" }), _jsx("th", { scope: "col", className: "px-3 py-3.5 text-left text-sm font-semibold text-primary-active", children: "Number of std" }), _jsx("th", { scope: "col", className: "relative py-3.5 pl-3 pr-4 sm:pr-6 text-left ", children: "Invoice status" }), _jsx("th", { scope: "col", className: "relative w-10 py-3.5 pl-3 pr-4 sm:pr-6 text-left", children: "Action" })] }) }), _jsx("tbody", { className: " bg-white divide-y divide-gray-200", children: people.map((person, index, table) => (_jsx(RenderTable, { person: person, selectedPeople: selectedPeople, setSelectedPeople: setSelectedPeople, table: table, index: index }, `${person.class}-${person.section}`))) })] }) }) })] }));
}
