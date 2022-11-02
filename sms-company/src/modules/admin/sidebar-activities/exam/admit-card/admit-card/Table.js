import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useState } from "react";
import RenderTable from "./RenderTable";
const people = [
    {
        class: "lindsay.walton@example.com",
        faculty: "Member",
        sec: "Lindsay Walton",
        level: "lindsay.walton@example.com",
    },
    {
        class: "lindsay.walton@example.com",
        faculty: "Member",
        sec: "Lindsay Walton",
        level: "lindsay.walton@example.com",
    },
    {
        class: "lindsay.walton@example.com",
        faculty: "Member",
        sec: "Lindsay Walton",
        level: "lindsay.walton@example.com",
    },
    {
        class: "lindsay.walton@example.com",
        faculty: "Member",
        sec: "Lindsay Walton",
        level: "lindsay.walton@example.com",
    },
    {
        class: "lindsay.walton@example.com",
        faculty: "Member",
        sec: "Lindsay Walton",
        level: "lindsay.walton@example.com",
    },
    {
        class: "lindsay.walton@example.com",
        faculty: "Member",
        sec: "Lindsay Walton",
        level: "lindsay.walton@example.com",
    },
    {
        class: "lindsay.walton@example.com",
        faculty: "Member",
        sec: "Lindsay Walton",
        level: "lindsay.walton@example.com",
    },
    {
        class: "lindsay.walton@example.com",
        faculty: "Member",
        sec: "Lindsay Walton",
        level: "lindsay.walton@example.com",
    },
    {
        class: "lindsay.walton@example.com",
        faculty: "Member",
        sec: "Lindsay Walton",
        level: "lindsay.walton@example.com",
    },
    {
        class: "lindsay.walton@example.com",
        faculty: "Member",
        sec: "Lindsay Walton",
        level: "lindsay.walton@example.com",
    },
    {
        class: "lindsay.walton@example.com",
        faculty: "Member",
        sec: "Lindsay Walton",
        level: "lindsay.walton@example.com",
    },
    {
        class: "lindsay.walton@example.com",
        faculty: "Member",
        sec: "Lindsay Walton",
        level: "lindsay.walton@example.com",
    },
    {
        class: "lindsay.walton@example.com",
        faculty: "Member",
        sec: "Lindsay Walton",
        level: "lindsay.walton@example.com",
    },
    {
        class: "lindsay.walton@example.com",
        faculty: "Member",
        sec: "Lindsay Walton",
        level: "lindsay.walton@example.com",
    },
    {
        class: "lindsay.walton@example.com",
        faculty: "Member",
        sec: "Lindsay Walton",
        level: "lindsay.walton@example.com",
    },
    {
        class: "lindsay.walton@example.com",
        faculty: "Member",
        sec: "Lindsay Walton",
        level: "lindsay.walton@example.com",
    },
    {
        class: "lindsay.walton@example.com",
        faculty: "Member",
        sec: "Lindsay Walton",
        level: "lindsay.walton@example.com",
    },
    {
        class: "lindsay.walton@example.com",
        faculty: "Member",
        sec: "Lindsay Walton",
        level: "lindsay.walton@example.com",
    },
    {
        class: "lindsay.walton@example.com",
        faculty: "Member",
        sec: "Lindsay Walton",
        level: "lindsay.walton@example.com",
    },
    {
        class: "lindsay.walton@example.com",
        faculty: "Member",
        sec: "Lindsay Walton",
        level: "lindsay.walton@example.com",
    },
    {
        class: "lindsay.walton@example.com",
        faculty: "Member",
        sec: "Lindsay Walton",
        level: "lindsay.walton@example.com",
    },
    {
        class: "lindsay.walton@example.com",
        faculty: "Member",
        sec: "Lindsay Walton",
        level: "lindsay.walton@example.com",
    },
    {
        class: "lindsay.walton@example.com",
        faculty: "Member",
        sec: "Lindsay Walton",
        level: "lindsay.walton@example.com",
    },
    {
        class: "lindsay.walton@example.com",
        faculty: "Member",
        sec: "Lindsay Walton",
        level: "lindsay.walton@example.com",
    },
    {
        class: "lindsay.walton@example.com",
        faculty: "Member",
        sec: "Lindsay Walton",
        level: "lindsay.walton@example.com",
    },
    {
        class: "lindsay.walton@example.com",
        faculty: "Member",
        sec: "Lindsay Walton",
        level: "lindsay.walton@example.com",
    },
    {
        class: "lindsay.walton@example.com",
        faculty: "Member",
        sec: "Lindsay Walton",
        level: "lindsay.walton@example.com",
    },
    {
        class: "lindsay.walton@example.com",
        faculty: "Member",
        sec: "Lindsay Walton",
        level: "lindsay.walton@example.com",
    },
    {
        class: "lindsay.walton@example.com",
        faculty: "Member",
        sec: "Lindsay Walton",
        level: "lindsay.walton@example.com",
    },
    {
        class: "lindsay.walton@example.com",
        faculty: "Member",
        sec: "Lindsay Walton",
        level: "lindsay.walton@example.com",
    },
    {
        class: "lindsay.walton@example.com",
        faculty: "Member",
        sec: "Lindsay Walton",
        level: "lindsay.walton@example.com",
    },
    {
        class: "lindsay.walton@example.com",
        faculty: "Member",
        sec: "Lindsay Walton",
        level: "lindsay.walton@example.com",
    },
    {
        class: "lindsay.walton@example.com",
        faculty: "Member",
        sec: "Lindsay Walton",
        level: "lindsay.walton@example.com",
    },
    {
        class: "lindsay.walton@example.com",
        faculty: "Member",
        sec: "Lindsay Walton",
        level: "lindsay.walton@example.com",
    },
    {
        class: "lindsay.walton@example.com",
        faculty: "Member",
        sec: "Lindsay Walton",
        level: "lindsay.walton@example.com",
    },
    {
        stdName: "Front-end Developer",
        class: "lindsay.walton@example.com",
        faculty: "Member",
        sec: "Lindsay Walton",
        level: "lindsay.walton@example.com",
    },
    {
        class: "lindsay.walton@example.com",
        faculty: "Member",
        sec: "Lindsay Walton",
        level: "lindsay.walton@example.com",
    },
    {
        class: "lindsay.walton@example.com",
        faculty: "Member",
        sec: "Lindsay Walton",
        level: "lindsay.walton@example.com",
    },
    {
        class: "lindsay.walton@example.com",
        faculty: "Member",
        sec: "Lindsay Walton",
        level: "lindsay.walton@example.com",
    },
    {
        class: "lindsay.walton@example.com",
        faculty: "Member",
        sec: "Lindsay Walton",
        level: "lindsay.walton@example.com",
    },
    {
        class: "lindsay.walton@example.com",
        faculty: "Member",
        sec: "Lindsay Walton",
        level: "lindsay.walton@example.com",
    },
    {
        class: "lindsay.walton@example.com",
        faculty: "Member",
        sec: "Lindsay Walton",
        level: "lindsay.walton@example.com",
    },
    {
        class: "lindsay.walton@example.com",
        faculty: "Member",
        sec: "Lindsay Walton",
        level: "lindsay.walton@example.com",
    },
    {
        class: "lindsay.walton@example.com",
        faculty: "Member",
        sec: "Lindsay Walton",
        level: "lindsay.walton@example.com",
    },
    {
        class: "lindsay.walton@example.com",
        faculty: "Member",
        sec: "Lindsay Walton",
        level: "lindsay.walton@example.com",
    },
    {
        class: "lindsay.walton@example.com",
        faculty: "Member",
        sec: "Lindsay Walton",
        level: "lindsay.walton@example.com",
    },
    {
        class: "lindsay.walton@example.com",
        faculty: "Member",
        sec: "Lindsay Walton",
        level: "lindsay.walton@example.com",
    },
    {
        class: "lindsay.walton@example.com",
        faculty: "Member",
        sec: "Lindsay Walton",
        level: "lindsay.walton@example.com",
    },
    {
        class: "lindsay.walton@example.com",
        faculty: "Member",
        sec: "Lindsay Walton",
        level: "lindsay.walton@example.com",
    },
    {
        class: "lindsay.walton@example.com",
        faculty: "Member",
        sec: "Lindsay Walton",
        level: "lindsay.walton@example.com",
    },
    {
        class: "lindsay.walton@example.com",
        faculty: "Member",
        sec: "Lindsay Walton",
        level: "lindsay.walton@example.com",
    },
    {
        class: "lindsay.walton@example.com",
        faculty: "Member",
        sec: "Lindsay Walton",
        level: "lindsay.walton@example.com",
    },
    {
        class: "lindsay.walton@example.com",
        faculty: "Member",
        sec: "Lindsay Walton",
        level: "lindsay.walton@example.com",
    },
    {
        class: "lindsay.walton@example.com",
        faculty: "Member",
        sec: "Lindsay Walton",
        level: "lindsay.walton@example.com",
    },
    {
        class: "lindsay.walton@example.com",
        faculty: "Member",
        sec: "Lindsay Walton",
        level: "lindsay.walton@example.com",
    },
    {
        class: "lindsay.walton@example.com",
        faculty: "Member",
        sec: "Lindsay Walton",
        level: "lindsay.walton@example.com",
    },
    {
        class: "lindsay.walton@example.com",
        faculty: "Member",
        sec: "Lindsay Walton",
        level: "lindsay.walton@example.com",
    },
    {
        class: "lindsay.walton@example.com",
        faculty: "Member",
        sec: "Lindsay Walton",
        level: "lindsay.walton@example.com",
    },
    {
        class: "lindsay.walton@example.com",
        faculty: "Member",
        sec: "Lindsay Walton",
        level: "lindsay.walton@example.com",
    },
    {
        class: "lindsay.walton@example.com",
        faculty: "Member",
        sec: "Lindsay Walton",
        level: "lindsay.walton@example.com",
    },
    {
        class: "lindsay.walton@example.com",
        faculty: "Member",
        sec: "Lindsay Walton",
        level: "lindsay.walton@example.com",
    },
    {
        class: "lindsay.walton@example.com",
        faculty: "Member",
        sec: "Lindsay Walton",
        level: "lindsay.walton@example.com",
    },
    {
        class: "lindsay.walton@example.com",
        faculty: "Member",
        sec: "Lindsay Walton",
        level: "lindsay.walton@example.com",
    },
    {
        class: "lindsay.walton@example.com",
        faculty: "Member",
        sec: "Lindsay Walton",
        level: "lindsay.walton@example.com",
    },
    {
        class: "lindsay.walton@example.com",
        faculty: "Member",
        sec: "Lindsay Walton",
        level: "lindsay.walton@example.com",
    },
    {
        class: "lindsay.walton@example.com",
        faculty: "Member",
        sec: "Lindsay Walton",
        level: "lindsay.walton@example.com",
    },
    {
        class: "lindsay.walton@example.com",
        faculty: "Member",
        sec: "Lindsay Walton",
        level: "lindsay.walton@example.com",
    },
    {
        class: "lindsay.walton@example.com",
        faculty: "Member",
        sec: "Lindsay Walton",
        level: "lindsay.walton@example.com",
    },
];
export default function Table() {
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
    return (_jsxs("div", { className: "mt-11", children: [_jsx("div", { className: "my-6", children: _jsx("div", { className: " ring-1 ring-black ring-opacity-5 min-w-full overflow-x-auto rounded-lg shadow", children: _jsx("div", { className: "inline-block w-full align-middle", children: _jsx("div", { className: " w-full rounded-lg", children: _jsxs("table", { className: "min-w-full divide-y divide-gray-300 table-auto", children: [_jsx("thead", { className: "bg-gray-50", children: _jsxs("tr", { children: [_jsx("th", { scope: "col", className: "px-3 py-3.5 text-left text-sm font-medium text-primary-grey-700    ", children: "Class/semester" }), _jsx("th", { scope: "col", className: "px-3 py-3.5 text-left text-sm font-medium text-primary-grey-700   ", children: "Level" }), _jsx("th", { scope: "col", className: "px-3 py-3.5 text-left text-sm font-medium text-primary-grey-700   ", children: "Faculty" }), _jsx("th", { scope: "col", className: "px-3 py-3.5 text-left text-sm font-medium text-primary-grey-700   ", children: "Section" }), _jsx("th", { scope: "col", className: "px-3 py-3.5 w-10 text-left text-sm font-medium text-primary-grey-700  ", children: "Action" })] }) }), _jsx("tbody", { className: "bg-white divide-y divide-gray-200", children: _jsx(RenderTable, { currentItems: currentItems }) })] }) }) }) }) }), _jsxs("nav", { className: " flex items-center justify-between py-3 bg-white border-t border-gray-200", "aria-label": "Pagination", children: [_jsx("div", { className: "sm:block hidden", children: _jsx("p", { className: "text-sm text-gray-700", children: message }) }), _jsxs("div", { className: "sm:justify-end flex justify-between flex-1", children: [_jsx("button", { disabled: indexOfFirstItem === 0, onClick: onPreviousPage, className: "disabled:opacity-80 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md", children: "Previous" }), _jsx("button", { disabled: indexOfLastItem >= people.length, onClick: onNextPage, className: "disabled:opacity-80 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 ml-3 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md", children: "Next" })] })] })] }));
}
