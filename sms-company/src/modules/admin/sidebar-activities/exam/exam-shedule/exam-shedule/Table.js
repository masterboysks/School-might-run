import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import RenderTable from "./RenderTable";
import { SearchBar, Select, } from "../../../../../../components/common/oldFields";
import { useState } from "react";
import SearchIcon from "../../../../../../components/common/SearchIcon";
const people = [
    {
        examName: "First term  examination",
    },
    {
        examName: "Bsc.CSIT Preboard examination",
    },
];
export default function Table() {
    const arrayLevel = ["jkhdsa", "sdahg", "fdh"];
    const [level, setLevel] = useState("Select");
    const [searchFilter, setSearchFilter] = useState("");
    return (_jsxs(_Fragment, { children: [_jsx("div", { className: "md:flex-row flex flex-col justify-between my-6", children: _jsxs("div", { className: "sm:grid-cols-2 grid grid-cols-1 gap-4", children: [_jsx("div", { children: _jsx(Select, { value: arrayLevel, selected: level, setSelected: setLevel, label: "Level*" }) }), _jsx("div", { className: "h-fit mt-auto -mb-1", children: _jsx(SearchIcon, {}) })] }) }), _jsxs("div", { className: "mt-11 lg:w-2/3 w-full", children: [_jsx("div", { className: "sm:flex sm:items-center justify-between", children: _jsx("div", { className: "w-72 relative max-w-full", children: _jsx(SearchBar, { value: searchFilter, setValue: setSearchFilter }) }) }), _jsx("div", { className: "my-6", children: _jsx("div", { className: " ring-1 ring-black ring-opacity-5 overflow-x-auto rounded-lg shadow", children: _jsx("div", { className: "inline-block w-full align-middle", children: _jsx("div", { className: " w-full rounded-lg", children: _jsxs("table", { className: "min-w-full divide-y divide-gray-300 table-fixed", children: [_jsx("thead", { className: "bg-gray-50", children: _jsxs("tr", { children: [_jsx("th", { scope: "col", className: "px-3 py-3.5 text-left text-sm font-medium text-primary-grey-700    ", children: "Exam name" }), _jsx("th", { scope: "col", className: "px-3 py-3.5 w-10 text-left text-sm font-medium text-primary-grey-700  ", children: "Action" })] }) }), _jsx("tbody", { className: "bg-white divide-y divide-gray-200", children: _jsx(RenderTable, { currentItems: people }) })] }) }) }) }) })] })] }));
}
