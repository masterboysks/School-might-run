import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useLayoutEffect, useRef, useState } from "react";
import RenderTable from "./RenderTable";
const people = [
    {
        class: "lindsay.walton@example.com",
        faculty: "Member",
        level: "Lindsay Walton",
        start: "Front-end Developer",
        end: "lindsay.walton@example.com",
    },
    {
        class: "lindsay.walton@example.com",
        faculty: "Member",
        level: "Lindsay Walton",
        start: "Front-end Developer",
        end: "lindsay.walton@example.com",
    },
    {
        class: "lindsay.walton@example.com",
        faculty: "Member",
        level: "Lindsay Walton",
        start: "Front-end Developer",
        end: "lindsay.walton@example.com",
    },
    {
        class: "lindsay.walton@example.com",
        faculty: "Member",
        level: "Lindsay Walton",
        start: "Front-end Developer",
        end: "lindsay.walton@example.com",
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
    return (_jsx("div", { className: "mt-11", children: _jsx("div", { className: "my-6", children: _jsx("div", { className: " ring-1 ring-black ring-opacity-5 min-w-full overflow-x-auto rounded-lg shadow", children: _jsx("div", { className: "inline-block w-full align-middle", children: _jsx("div", { className: " w-full rounded-lg", children: _jsxs("table", { className: "min-w-full divide-y divide-gray-300 table-auto", children: [_jsx("thead", { className: "bg-gray-50", children: _jsxs("tr", { children: [_jsx("th", { scope: "col", className: "sm:w-16 sm:px-8 relative w-12 px-6", children: _jsx("input", { type: "checkbox", className: "left-4 top-1/2 focus:ring-primary-btn border-primary-field placeholder:text-primary-grey-400 text-primary-btn absolute w-4 h-4 -mt-2 text-sm rounded shadow-md", ref: checkbox, checked: checked, onChange: toggleAll }) }), _jsx("th", { scope: "col", className: " py-3.5 pr-3 text-left text-sm font-semibold text-primary-active", children: "Class/Semester" }), _jsx("th", { scope: "col", className: "px-3 py-3.5 text-left text-sm font-medium text-primary-grey-700   ", children: "Faculty" }), _jsx("th", { scope: "col", className: "px-3 py-3.5 text-left text-sm font-medium text-primary-grey-700   ", children: "Level" }), _jsx("th", { scope: "col", className: "px-3 py-3.5 text-left text-sm font-medium text-primary-grey-700   ", children: "Start date" }), _jsx("th", { scope: "col", className: "px-3 py-3.5 text-left text-sm font-medium text-primary-grey-700   ", children: "End date" }), _jsx("th", { scope: "col", className: "px-3 py-3.5 w-10 text-left text-sm font-medium text-primary-grey-700  ", children: "Action" })] }) }), _jsx("tbody", { className: " bg-white divide-y divide-gray-200", children: people.map((person, index, table) => (_jsx(RenderTable, { person: person, selectedPeople: selectedPeople, setSelectedPeople: setSelectedPeople, table: table, index: index }, `${person.class}-${person.section}`))) })] }) }) }) }) }) }));
}
