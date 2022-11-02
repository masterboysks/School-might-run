import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useLayoutEffect, useRef, useState } from "react";
import { SelectDisabled } from "../../../../../../components/common/oldFields";
const people = [
    {
        id: 1,
        name: "Lindsay Walton",
        class: "Front-end Developer",
        section: "lindsay.walton@example.com",
        mob: "Member",
    },
    {
        id: 12,
        name: "Lindsay Walton",
        class: "Front-end Developer",
        section: "lindsay.walton@examplfdgbf.com",
        mob: "Member",
    },
];
function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}
export default function Example() {
    const checkbox = useRef();
    const [checked, setChecked] = useState(false);
    const [indeterminate, setIndeterminate] = useState(false);
    const [selectedPeople, setSelectedPeople] = useState([]);
    useLayoutEffect(() => {
        const isIndeterminate = selectedPeople.length > 0 && selectedPeople.length < people.length;
        setChecked(selectedPeople.length === people.length);
        setIndeterminate(isIndeterminate);
        checkbox?.current?.indeterminate = isIndeterminate;
    }, [selectedPeople]);
    function toggleAll() {
        setSelectedPeople(checked || indeterminate ? [] : people);
        setChecked(!checked && !indeterminate);
        setIndeterminate(false);
    }
    return (_jsxs("div", { className: " ring-1 ring-black ring-opacity-5 my-9 min-w-full overflow-x-auto rounded-lg shadow", children: [_jsx("div", { className: "w-fit ml-auto" }), _jsx("div", { className: " flex flex-col w-full rounded", children: _jsx("div", { className: " overflow-x-auto", children: _jsxs("table", { className: " min-w-full divide-y divide-gray-300 table-fixed", children: [_jsx("thead", { className: "bg-gray-50", children: _jsxs("tr", { className: "text-primary-grey-700", children: [_jsx("th", { scope: "col", className: "sm:w-16 sm:px-8 relative w-12 px-6", children: _jsx("input", { type: "checkbox", className: "left-4 top-1/2 focus:ring-primary-btn border-primary-field placeholder:text-primary-grey-400 text-primary-btn absolute w-4 h-4 -mt-2 text-sm rounded shadow-md", ref: checkbox, checked: checked, onChange: toggleAll }) }), _jsx("th", { scope: "col", className: " py-3.5 pr-3 text-left text-sm font-semibold text-primary-active", children: "Stu.Id" }), _jsx("th", { scope: "col", className: "px-3 py-3.5 text-left text-sm font-semibold text-primary-active", children: "Stu.Name" }), _jsx("th", { scope: "col", className: "px-3 py-3.5 text-left text-sm font-semibold text-primary-active", children: "Class/Semester" }), _jsx("th", { scope: "col", className: "px-3 py-3.5 text-left text-sm font-semibold text-primary-active", children: "Section" }), _jsx("th", { scope: "col", className: "px-3 py-3.5 text-left text-sm font-semibold text-primary-active", children: "Mob Number" }), _jsx("th", { scope: "col", className: "relative py-3.5 pl-3 pr-4 sm:pr-6", children: "Status" })] }) }), _jsx("tbody", { className: " bg-white divide-y divide-gray-200", children: people.map((person) => (_jsxs("tr", { className: selectedPeople.includes(person) ? "bg-gray-50" : undefined, children: [_jsxs("td", { className: "sm:w-16 sm:px-8 relative w-12 px-6", children: [selectedPeople.includes(person) && (_jsx("div", { className: "absolute inset-y-0 left-0 w-0.5 bg-primary-btn" })), _jsx("input", { type: "checkbox", className: "left-4 top-1/2 focus:ring-primary-btn border-primary-field placeholder:text-primary-grey-400 text-primary-btn absolute w-4 h-4 -mt-2 text-sm rounded shadow-md", value: person.email, checked: selectedPeople.includes(person), onChange: (e) => setSelectedPeople(e.target.checked
                                                        ? [...selectedPeople, person]
                                                        : selectedPeople.filter((p) => p !== person)) })] }), _jsx("td", { className: "whitespace-nowrap py-4 pr-3 text-sm text-left text-gray-500", children: person.id }), _jsx("td", { className: classNames("whitespace-nowrap py-4 px-3 text-sm ", selectedPeople.includes(person)
                                                ? "text-primary-grey-700"
                                                : "text-primary-grey-600"), children: person.name }), _jsx("td", { className: "whitespace-nowrap px-3 py-4 text-sm text-gray-500", children: person.class }), _jsx("td", { className: "whitespace-nowrap px-3 py-4 text-sm text-gray-500", children: person.section }), _jsx("td", { className: "whitespace-nowrap px-3 py-4 text-sm text-gray-500", children: person.mob }), _jsx("td", { className: "min-w-[116px] flex items-center justify-center", children: _jsx(SelectDisabled, { value: "Inactive" }) })] }, person.id))) })] }) }) })] }));
}
