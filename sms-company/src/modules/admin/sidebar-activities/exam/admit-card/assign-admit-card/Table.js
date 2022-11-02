import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { InputDisabled, Radio, SearchBar, Select, } from "../../../../../../components/common/oldFields";
import RenderTable from "./RenderTable";
const people = [
    {
        class: "Physics",
        section: 100,
        faculty: 0,
        status: "Assigned",
        stdId: 556453127332,
        stdName: "Saurav ",
    },
    {
        class: "Physics",
        section: 100,
        faculty: 0,
        status: "Assigned",
        stdId: 5587667332,
        stdName: "Saurav ",
    },
    {
        class: "Physics",
        section: 100,
        faculty: 0,
        status: "Assigned",
        stdId: 556733256,
        stdName: "Saurav ",
    },
    {
        class: "Physics",
        section: 100,
        faculty: 0,
        status: "Assigned",
        stdId: 556733452,
        stdName: "Saurav ",
    },
];
export default function Table() {
    // Checkbox
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
    // pagination
    const itemsOnPage = 5;
    const [currentPage, setCurrentPage] = useState(1);
    const [currentItems, setCurrentItems] = useState(people.slice(0, itemsOnPage));
    const [indexOfLastItem, setIndexOfLastItem] = useState(currentPage * itemsOnPage);
    const [indexOfFirstItem, setIndexOfFirstItem] = useState(indexOfLastItem - itemsOnPage);
    const [message, setmessage] = useState("Showing 1 to 2 of 2 results");
    const onNextPage = () => {
        setCurrentPage((curr) => curr + 1);
    };
    const onPreviousPage = () => {
        setCurrentPage((curr) => curr - 1);
    };
    useEffect(() => {
        setIndexOfLastItem(currentPage * itemsOnPage);
    }, [currentPage]);
    useEffect(() => {
        setIndexOfFirstItem(indexOfLastItem - itemsOnPage);
    }, [indexOfLastItem]);
    useEffect(() => {
        setmessage(`Showing ${indexOfFirstItem + 1} to ${people.length <= indexOfLastItem ? people.length : indexOfLastItem} of ${people.length}`);
        setCurrentItems(people.slice(indexOfFirstItem, indexOfLastItem));
    }, [indexOfFirstItem]);
    // Form and filter
    const arrayExamNameForm = ["djfh", "dsjfg", "djfkhgfd"];
    const arrayAdmitCardTypeForm = ["djfh", "dsjfg", "djfkhgfd"];
    const arrayStatusFilter = ["Status", "Assigned", "Unassigned"];
    const arrayRadioAssign = ["Assigned and Print", "Assign"];
    const [examNameForm, setExamNameForm] = useState("Select");
    const [admitCardType, setAdmitCardType] = useState("Select");
    const [searchFilter, setSearchFilter] = useState("");
    const [statusFilter, setStatusFilter] = useState("Status");
    const [radioAssign, setRadioAssign] = useState("");
    return (_jsxs(_Fragment, { children: [_jsx("form", { className: "form-solid w-full my-6 rounded-md", children: _jsxs("div", { className: "sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 grid grid-cols-1 gap-4", children: [_jsx("div", { className: "", children: _jsx(Select, { label: "Exam name*", value: arrayExamNameForm, selected: examNameForm, setSelected: setExamNameForm }) }), _jsx("div", { className: "", children: _jsx(Select, { label: "Exam name*", value: arrayAdmitCardTypeForm, selected: admitCardType, setSelected: setAdmitCardType }) })] }) }), _jsxs("div", { className: "lg:flex-row flex flex-col items-center justify-between", children: [_jsx("form", { className: "form-solid lg:w-6/12 w-full my-6 rounded-md", children: _jsxs("div", { className: "sm:grid-cols-2 grid grid-cols-1 gap-4", children: [_jsx("div", { className: " relative w-full", children: _jsx(SearchBar, { value: searchFilter, setValue: setSearchFilter }) }), _jsx("div", { className: "flex items-center", children: _jsx(Select, { value: arrayStatusFilter, selected: statusFilter, setSelected: setStatusFilter }) })] }) }), _jsxs("div", { className: " sm:flex-row sm:items-center flex flex-col items-end gap-3 ml-auto", children: [_jsx(Radio, { value: arrayRadioAssign, selected: radioAssign, setSelected: setRadioAssign, name: "Assign_or_and_print" }), _jsx("div", { className: "", children: _jsx("div", { className: "primary_btn", children: "Assign" }) })] })] }), _jsx("div", { className: "my-3", children: _jsx("div", { className: " ring-1 ring-black ring-opacity-5 min-w-full overflow-x-auto rounded-lg shadow", children: _jsx("div", { className: "inline-block w-full align-middle", children: _jsx("div", { className: " w-full rounded-lg", children: _jsxs("table", { className: "min-w-full divide-y divide-gray-300 table-auto", children: [_jsx("thead", { className: "bg-gray-50", children: _jsxs("tr", { children: [_jsx("th", { scope: "col", className: "sm:w-16 sm:px-8 relative w-12 px-6", children: _jsx("input", { type: "checkbox", className: "left-4 top-1/2 focus:ring-primary-btn border-primary-field placeholder:text-primary-grey-400 text-primary-btn absolute w-4 h-4 -mt-2 text-sm rounded shadow-md", ref: checkbox, checked: checked, onChange: toggleAll }) }), _jsx("th", { scope: "col", className: " py-3.5 pr-3 text-left text-sm font-medium text-primary-grey-700", children: "Std.ID" }), _jsx("th", { scope: "col", className: "px-3 py-3.5 text-left text-sm font-medium text-primary-grey-700   ", children: "Student Name" }), _jsx("th", { scope: "col", className: "px-3 py-3.5 text-left text-sm font-medium text-primary-grey-700   ", children: "Class/Semester" }), _jsx("th", { scope: "col", className: "px-3 py-3.5 text-left text-sm font-medium text-primary-grey-700   ", children: "Faculty" }), _jsx("th", { scope: "col", className: "px-3 py-3.5 text-left text-sm font-medium text-primary-grey-700   ", children: "Section" }), _jsx("th", { scope: "col", className: "px-3 py-3.5 text-left text-sm font-medium text-primary-grey-700   ", children: "Status" })] }) }), _jsx("tbody", { className: "bg-white divide-y divide-gray-200", children: _jsx(RenderTable, { currentItems: currentItems, selectedPeople: selectedPeople, setSelectedPeople: setSelectedPeople }) })] }) }) }) }) }), _jsxs("nav", { className: " flex items-center justify-between py-3 bg-white border-t border-gray-200", "aria-label": "Pagination", children: [_jsx("div", { className: "sm:block hidden", children: _jsx("p", { className: "text-sm text-gray-700", children: message }) }), _jsxs("div", { className: "sm:justify-end flex justify-between flex-1", children: [_jsx("button", { disabled: indexOfFirstItem === 0, onClick: onPreviousPage, className: "disabled:opacity-80 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md", children: "Previous" }), _jsx("button", { disabled: indexOfLastItem >= people.length, onClick: onNextPage, className: "disabled:opacity-80 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 ml-3 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md", children: "Next" })] })] }), _jsxs("div", { className: "w-52 grid items-center grid-cols-2 gap-3 mt-3 mb-6 ml-auto", children: [_jsx("div", { className: "text-primary-700 text-base font-semibold", children: "Total Pass" }), _jsx("div", { className: "flex items-center", children: _jsx(InputDisabled, { value: 30 }) }), _jsx("div", { className: "text-primary-700 text-base font-semibold", children: "Total Fail" }), _jsx("div", { className: "flex items-center", children: _jsx(InputDisabled, { value: "0" }) })] })] }));
}
