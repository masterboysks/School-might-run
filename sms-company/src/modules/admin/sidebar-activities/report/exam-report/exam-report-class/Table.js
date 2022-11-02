import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { GlobeAltIcon, PrinterIcon } from "@heroicons/react/20/solid";
import { useEffect, useLayoutEffect, useRef, useState, Fragment, } from "react";
import RenderTable from "./RenderTable";
import { Dialog, Transition } from "@headlessui/react";
import { Input } from "../../../../../../components/common/oldFields";
const people = [
    {
        subject: "Physics",
        English: 100,
        Maths: 0,
        Nepali: 0,
        Social: 100,
        EHP: 32,
        Science: 0,
        total: 0,
        percentage: 32,
        status: "Published",
        remark: "pass",
        stdId: 556453127332,
        stdName: "Saurav ",
    },
    {
        subject: "Physics",
        English: 100,
        Maths: 0,
        Nepali: 0,
        Social: 100,
        EHP: 32,
        Science: 0,
        total: 0,
        percentage: 32,
        status: "Published",
        remark: "pass",
        stdId: 5587667332,
        stdName: "Saurav ",
    },
    {
        subject: "Physics",
        English: 100,
        Maths: 0,
        Nepali: 0,
        Social: 100,
        EHP: 32,
        Science: 0,
        total: 0,
        percentage: 32,
        status: "Published",
        remark: "pass",
        stdId: 556733256,
        stdName: "Saurav ",
    },
    {
        subject: "Physics",
        English: 100,
        Maths: 0,
        Nepali: 0,
        Social: 100,
        EHP: 32,
        Science: 0,
        total: 0,
        percentage: 32,
        status: "Published",
        remark: "pass",
        stdId: 556733452,
        stdName: "Saurav ",
    },
];
const subject = ["English", "Maths", "Nepali", "Social", "EHP", "Science"];
export default function Table() {
    // Modal
    const [open, setOpen] = useState(false);
    const [miniumDueAmmount, setMiniumDueAmmount] = useState("");
    const cancelButtonRef = useRef(null);
    const handleSubmitMiniumDueAmmount = () => {
        console.log(miniumDueAmmount);
    };
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
    return (_jsxs(_Fragment, { children: [_jsxs("div", { className: "flex items-center justify-between", children: [_jsx("div", { className: "md:block hidden text-xl", children: "First Term Examination" }), _jsxs("div", { className: " flex items-center gap-3", children: [_jsxs("div", { className: "flex items-center", onClick: () => setOpen(true), children: [_jsx("div", { className: "text-primary-btn font-semibold", children: "Publish" }), _jsx("div", { className: "icon text-primary-btn w-5 ml-2", children: _jsx(GlobeAltIcon, { fontSize: "medium" }) })] }), _jsx("div", { className: "", children: _jsx("select", { className: "mt-[6px]  sm:w-40 min-w-full p- rounded  focus:ring-primary-btn    border-primary-field bg-white shadow-md placeholder:text-primary-grey-400    text-primary-grey-700 text-sm", children: _jsx("option", { value: "test", children: "Choose print option" }) }) }), _jsx("div", { className: "text-primary-btn font-semibold", children: "Print" }), _jsx("div", { className: "icon text-primary-btn w-5", children: _jsx(PrinterIcon, {}) })] })] }), _jsx("div", { className: "my-3", children: _jsx("div", { className: " ring-1 ring-black ring-opacity-5 min-w-full overflow-x-auto rounded-lg shadow", children: _jsx("div", { className: "inline-block w-full align-middle", children: _jsx("div", { className: " w-full rounded-lg", children: _jsxs("table", { className: "min-w-full divide-y divide-gray-300 table-auto", children: [_jsx("thead", { className: "bg-gray-50", children: _jsxs("tr", { children: [_jsx("th", { scope: "col", className: "sm:w-16 sm:px-8 relative w-12 px-6", children: _jsx("input", { type: "checkbox", className: "left-4 top-1/2 focus:ring-primary-btn border-primary-field placeholder:text-primary-grey-400 text-primary-btn absolute w-4 h-4 -mt-2 text-sm rounded shadow-md", ref: checkbox, checked: checked, onChange: toggleAll }) }), _jsx("th", { scope: "col", className: " py-3.5 pr-3 text-left text-sm font-semibold text-primary-active", children: "Std.ID" }), _jsx("th", { scope: "col", className: "px-3 py-3.5 text-left text-sm font-medium text-primary-grey-700   ", children: "Student Name" }), subject.map((curr, i) => (_jsx("th", { scope: "col", className: "px-3 py-3.5 text-left text-sm font-medium text-primary-grey-700   ", children: curr }, i))), _jsx("th", { scope: "col", className: "px-3 py-3.5 text-left text-sm font-medium text-primary-grey-700   ", children: "Total" }), _jsx("th", { scope: "col", className: "px-3 py-3.5 text-left text-sm font-medium text-primary-grey-700   ", children: "Percentage" }), _jsx("th", { scope: "col", className: "px-3 py-3.5 text-left text-sm font-medium text-primary-grey-700   ", children: "Remark" }), _jsx("th", { scope: "col", className: "px-3 py-3.5 text-left text-sm font-medium text-primary-grey-700   ", children: "Status" })] }) }), _jsx("tbody", { className: "bg-white divide-y divide-gray-200", children: _jsx(RenderTable, { currentItems: currentItems, subject: subject, selectedPeople: selectedPeople, setSelectedPeople: setSelectedPeople }) })] }) }) }) }) }), _jsxs("nav", { className: " flex items-center justify-between py-3 bg-white border-t border-gray-200", "aria-label": "Pagination", children: [_jsx("div", { className: "sm:block hidden", children: _jsx("p", { className: "text-sm text-gray-700", children: message }) }), _jsxs("div", { className: "sm:justify-end flex justify-between flex-1", children: [_jsx("button", { disabled: indexOfFirstItem === 0, onClick: onPreviousPage, className: "disabled:opacity-80 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md", children: "Previous" }), _jsx("button", { disabled: indexOfLastItem >= people.length, onClick: onNextPage, className: "disabled:opacity-80 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 ml-3 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md", children: "Next" })] })] }), _jsxs("div", { className: "w-52 grid items-center grid-cols-2 gap-3 mt-3 mb-6 ml-auto", children: [_jsx("div", { className: "text-primary-700 text-base font-semibold", children: "Total Pass" }), _jsx("div", { className: "mt-[6px] w-full p- rounded  focus:ring-primary-btn  border   border-primary-grey-400 bg-primary-grey-100 shadow-md placeholder:text-primary-grey-400    text-primary-grey-700 text-sm p-2", children: "30" }), _jsx("div", { className: "text-primary-700 text-base font-semibold", children: "Total Fail" }), _jsx("div", { className: "mt-[6px] w-full p- rounded  focus:ring-primary-btn  border   border-primary-grey-400 bg-primary-grey-100 shadow-md placeholder:text-primary-grey-400    text-primary-grey-700 text-sm p-2 ", children: "0" })] }), _jsx(Transition.Root, { show: open, as: Fragment, children: _jsxs(Dialog, { as: "div", className: "relative z-[99]", initialFocus: cancelButtonRef, onClose: setOpen, children: [_jsx(Transition.Child, { as: Fragment, enter: "ease-out duration-300", enterFrom: "opacity-0", enterTo: "opacity-100", leave: "ease-in duration-200", leaveFrom: "opacity-100", leaveTo: "opacity-0", children: _jsx("div", { className: "fixed inset-0 transition-opacity bg-gray-500 bg-opacity-75" }) }), _jsx("div", { className: "fixed inset-0 z-10 overflow-y-auto", children: _jsx("div", { className: "sm:items-center sm:p-0 flex items-end justify-center min-h-full p-4 text-center", children: _jsx(Transition.Child, { as: Fragment, enter: "ease-out duration-300", enterFrom: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95", enterTo: "opacity-100 translate-y-0 sm:scale-100", leave: "ease-in duration-200", leaveFrom: "opacity-100 translate-y-0 sm:scale-100", leaveTo: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95", children: _jsxs(Dialog.Panel, { className: "sm:my-8 sm:max-w-xl relative w-full p-4 overflow-hidden text-left transition-all transform bg-white rounded-lg shadow-xl", as: "div", children: [_jsx(Dialog.Title, { className: "p-2 text-left", children: "How much minium due amount is allowed for online result?" }), _jsxs(Dialog.Description, { as: "div", children: [_jsx("div", { className: "w-6/12", children: _jsx(Input, { label: "Minimum due ammount:", placeholder: "5000", type: "number", value: miniumDueAmmount, setValue: setMiniumDueAmmount }) }), _jsxs("div", { className: " w-fit my-3 ml-auto", children: [_jsx("div", { onClick: () => setOpen(false), className: "secondary_btn", children: "Cancel" }), _jsx("div", { onClick: () => {
                                                                    setOpen(false);
                                                                    handleSubmitMiniumDueAmmount();
                                                                }, className: "primary_btn", children: "Publish" })] })] })] }) }) }) })] }) })] }));
}
