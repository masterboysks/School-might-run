import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useState } from "react";
import RenderTable from "./RenderTable";
const people = [
    {
        level: "Lindsay Walton",
        class: "lindsay.walton@example.com",
        faculty: "Member",
        sec: "Lindsay Walton",
    },
    {
        level: "Lindsa",
        class: "lindsay.walton@example.com",
        faculty: "Member",
        sec: "Lindsay Walton",
    },
    {
        level: "Lindsay Wa",
        class: "lindsay.walton@example.com",
        faculty: "Member",
        sec: "Lindsay Walton",
    },
    {
        level: "Lindsay Walton1",
        class: "lindsay.walton@example.com",
        faculty: "Member",
        sec: "Lindsay Walton",
    },
    {
        level: "Lindsa1",
        class: "lindsay.walton@example.com",
        faculty: "Member",
        sec: "Lindsay Walton",
    },
    {
        level: "Lindsay Wa1",
        class: "lindsay.walton@example.com",
        faculty: "Member",
        sec: "Lindsay Walton",
    },
    {
        level: "Lindsay Walton2",
        class: "lindsay.walton@example.com",
        faculty: "Member",
        sec: "Lindsay Walton",
    },
    {
        level: "Lindsa2",
        class: "lindsay.walton@example.com",
        faculty: "Member",
        sec: "Lindsay Walton",
    },
    {
        level: "Lindsay Wa2",
        class: "lindsay.walton@example.com",
        faculty: "Member",
        sec: "Lindsay Walton",
    },
    {
        level: "Lindsay Walton3",
        class: "lindsay.walton@example.com",
        faculty: "Member",
        sec: "Lindsay Walton",
    },
    {
        level: "Lindsa3",
        class: "lindsay.walton@example.com",
        faculty: "Member",
        sec: "Lindsay Walton",
    },
    {
        level: "Lindsay Wa3",
        class: "lindsay.walton@example.com",
        faculty: "Member",
        sec: "Lindsay Walton",
    },
    {
        level: "Lindsay Walton4",
        class: "lindsay.walton@example.com",
        faculty: "Member",
        sec: "Lindsay Walton",
    },
    {
        level: "Lindsa4",
        class: "lindsay.walton@example.com",
        faculty: "Member",
        sec: "Lindsay Walton",
    },
    {
        level: "Lindsay W4a",
        class: "lindsay.walton@example.com",
        faculty: "Member",
        sec: "Lindsay Walton",
    },
    {
        level: "Lindsay Walto5n",
        class: "lindsay.walton@example.com",
        faculty: "Member",
        sec: "Lindsay Walton",
    },
    {
        level: "Lind5sa",
        class: "lindsay.walton@example.com",
        faculty: "Member",
        sec: "Lindsay Walton",
    },
    {
        level: "Lindsay 5Wa",
        class: "lindsay.walton@example.com",
        faculty: "Member",
        sec: "Lindsay Walton",
    },
    {
        level: "Lindsay Wa6lton",
        class: "lindsay.walton@example.com",
        faculty: "Member",
        sec: "Lindsay Walton",
    },
    {
        level: "Linds87a",
        class: "lindsay.walton@example.com",
        faculty: "Member",
        sec: "Lindsay Walton",
    },
    {
        level: "Lindsay 87Wa",
        class: "lindsay.walton@example.com",
        faculty: "Member",
        sec: "Lindsay Walton",
    },
    {
        level: "Lindsay 76Walton",
        class: "lindsay.walton@example.com",
        faculty: "Member",
        sec: "Lindsay Walton",
    },
    {
        level: "Lind23sa",
        class: "lindsay.walton@example.com",
        faculty: "Member",
        sec: "Lindsay Walton",
    },
    {
        level: "Lindsay11 Wa",
        class: "lindsay.walton@example.com",
        faculty: "Member",
        sec: "Lindsay Walton",
    },
    {
        level: "Lind1say Walton",
        class: "lindsay.walton@example.com",
        faculty: "Member",
        sec: "Lindsay Walton",
    },
    {
        level: "Lin2dsa",
        class: "lindsay.walton@example.com",
        faculty: "Member",
        sec: "Lindsay Walton",
    },
    {
        level: "Linds12ay Wa",
        class: "lindsay.walton@example.com",
        faculty: "Member",
        sec: "Lindsay Walton",
    },
    {
        level: "Lindsa211`3y Walton",
        class: "lindsay.walton@example.com",
        faculty: "Member",
        sec: "Lindsay Walton",
    },
    {
        level: "Lind54sa",
        class: "lindsay.walton@example.com",
        faculty: "Member",
        sec: "Lindsay Walton",
    },
    {
        level: "Lindsa453y Wa",
        class: "lindsay.walton@example.com",
        faculty: "Member",
        sec: "Lindsay Walton",
    },
    {
        level: "Lind64say Walton",
        class: "lindsay.walton@example.com",
        faculty: "Member",
        sec: "Lindsay Walton",
    },
    {
        level: "Linds43a",
        class: "lindsay.walton@example.com",
        faculty: "Member",
        sec: "Lindsay Walton",
    },
    {
        level: "Lind43say Wa",
        class: "lindsay.walton@example.com",
        faculty: "Member",
        sec: "Lindsay Walton",
    },
    {
        level: "Lind34say Walton",
        class: "lindsay.walton@example.com",
        faculty: "Member",
        sec: "Lindsay Walton",
    },
    {
        level: "Lind34sa",
        class: "lindsay.walton@example.com",
        faculty: "Member",
        sec: "Lindsay Walton",
    },
    {
        level: "Lindsay1 Waton@example.com",
        faculty: "Member",
        sec: "Lindsay Walton",
    },
    {
        level: "Lindsay 34Walton",
        class: "lindsay.walton@example.com",
        faculty: "Member",
        sec: "Lindsay Walton",
    },
    {
        level: "Lindsahgs",
        class: "lindsay.walton@example.com",
        faculty: "Member",
        sec: "Lindsay Walton",
    },
    {
        level: "Lindsaysfg Wa",
        class: "lindsay.walton@example.com",
        faculty: "Member",
        sec: "Lindsay Walton",
    },
    {
        level: "Lindsaysawe Walton",
        class: "lindsay.walton@example.com",
        faculty: "Member",
        sec: "Lindsay Walton",
    },
    {
        level: "Lindsafdsa",
        class: "lindsay.walton@example.com",
        faculty: "Member",
        sec: "Lindsay Walton",
    },
    {
        level: "Linddfsay Wa",
        class: "lindsay.walton@example.com",
        faculty: "Member",
        sec: "Lindsay Walton",
    },
    {
        level: "Lindfadsersay Walton",
        class: "lindsay.walton@example.com",
        faculty: "Member",
        sec: "Lindsay Walton",
    },
    {
        level: "Lindatregasa",
        class: "lindsay.walton@example.com",
        faculty: "Member",
        sec: "Lindsay Walton",
    },
    {
        level: "Lindafretsay Wa",
        class: "lindsay.walton@example.com",
        faculty: "Member",
        sec: "Lindsay Walton",
    },
    {
        level: "Lindartfgreafvsay Walton",
        class: "lindsay.walton@example.com",
        faculty: "Member",
        sec: "Lindsay Walton",
    },
    {
        level: "Lind sa",
        class: "lindsay.walton@example.com",
        faculty: "Member",
        sec: "Lindsay Walton",
    },
    {
        level: "Linafgfadsay Wa",
        class: "lindsay.walton@example.com",
        faculty: "Member",
        sec: "Lindsay Walton",
    },
    {
        level: "Lindsagreay Walton",
        class: "lindsay.walton@example.com",
        faculty: "Member",
        sec: "Lindsay Walton",
    },
    {
        level: "Lindatrsa",
        class: "lindsay.walton@example.com",
        faculty: "Member",
        sec: "Lindsay Walton",
    },
    {
        level: "Lintgrdfedsay Wa",
        class: "lindsay.walton@example.com",
        faculty: "Member",
        sec: "Lindsay Walton",
    },
    {
        level: "Lingaertdsay Walton",
        class: "lindsay.walton@example.com",
        faculty: "Member",
        sec: "Lindsay Walton",
    },
    {
        level: "Linreagbfgdsa",
        class: "lindsay.walton@example.com",
        faculty: "Member",
        sec: "Lindsay Walton",
    },
    {
        level: "Lindgvzregvrfc csay Wa",
        class: "lindsay.walton@example.com",
        faculty: "Member",
        sec: "Lindsay Walton",
    },
    {
        level: "Lind4365say Walton",
        class: "lindsay.walton@example.com",
        faculty: "Member",
        sec: "Lindsay Walton",
    },
    {
        level: "Linds464556a",
        class: "lindsay.walton@example.com",
        faculty: "Member",
        sec: "Lindsay Walton",
    },
    {
        level: "Lin2645345dsay Wa",
        class: "lindsay.walton@example.com",
        faculty: "Member",
        sec: "Lindsay Walton",
    },
    {
        level: "Linds26453ay Walton",
        class: "lindsay.walton@example.com",
        faculty: "Member",
        sec: "Lindsay Walton",
    },
    {
        level: "Lin46345bngfdsa",
        class: "lindsay.walton@example.com",
        faculty: "Member",
        sec: "Lindsay Walton",
    },
    {
        level: "Lin543543dsay Wa",
        class: "lindsay.walton@example.com",
        faculty: "Member",
        sec: "Lindsay Walton",
    },
    {
        level: "Lin453453fgfdsdsay Walton",
        class: "lindsay.walton@example.com",
        faculty: "Member",
        sec: "Lindsay Walton",
    },
    {
        level: "Lind45543 ggsa",
        class: "lindsay.walton@example.com",
        faculty: "Member",
        sec: "Lindsay Walton",
    },
    {
        level: "Lindffd5343643dsay Wa",
        class: "lindsay.walton@example.com",
        faculty: "Member",
        sec: "Lindsay Walton",
    },
    {
        level: "Lind543443fghdfsay Walton",
        class: "lindsay.walton@example.com",
        faculty: "Member",
        sec: "Lindsay Walton",
    },
    {
        level: "Linstrewrtredsa",
        class: "lindsay.walton@example.com",
        faculty: "Member",
        sec: "Lindsay Walton",
    },
    {
        level: "Lindswertrewway Wa",
        class: "lindsay.walton@example.com",
        faculty: "Member",
        sec: "Lindsay Walton",
    },
    {
        level: "Linrterwt45redsay Walton",
        class: "lindsay.walton@example.com",
        faculty: "Member",
        sec: "Lindsay Walton",
    },
    {
        level: "Lintre6tretrdsa",
        class: "lindsay.walton@example.com",
        faculty: "Member",
        sec: "Lindsay Walton",
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
    return (_jsxs("div", { className: "mt-11", children: [_jsx("div", { className: "sm:flex sm:items-center", children: _jsx("div", { className: "sm:flex-auto", children: _jsx("h1", { className: "text-primary-grey-700 text-xl font-semibold", children: "Assign exam" }) }) }), _jsx("div", { className: "my-6", children: _jsx("div", { className: " ring-1 ring-black ring-opacity-5 min-w-full overflow-x-auto rounded-lg shadow", children: _jsx("div", { className: "inline-block w-full align-middle", children: _jsx("div", { className: " w-full rounded-lg", children: _jsxs("table", { className: "min-w-full divide-y divide-gray-300 table-auto", children: [_jsx("thead", { className: "bg-gray-50", children: _jsxs("tr", { children: [_jsx("th", { scope: "col", className: "px-3 py-3.5 text-left text-sm font-medium text-primary-grey-700    ", children: "Class/Semester" }), _jsx("th", { scope: "col", className: "px-3 py-3.5 text-left text-sm font-medium text-primary-grey-700   ", children: "Level" }), _jsx("th", { scope: "col", className: "px-3 py-3.5 text-left text-sm font-medium text-primary-grey-700   ", children: "Faculty" }), _jsx("th", { scope: "col", className: "px-3 py-3.5 text-left text-sm font-medium text-primary-grey-700   ", children: "Section" }), _jsx("th", { scope: "col", className: "px-3 py-3.5 w-10 text-left text-sm font-medium text-primary-grey-700  ", children: "Action" })] }) }), _jsx("tbody", { className: "bg-white divide-y divide-gray-200", children: _jsx(RenderTable, { currentItems: currentItems }) })] }) }) }) }) }), _jsxs("nav", { className: " flex items-center justify-between py-3 bg-white border-t border-gray-200", "aria-label": "Pagination", children: [_jsx("div", { className: "sm:block hidden", children: _jsx("p", { className: "text-sm text-gray-700", children: message }) }), _jsxs("div", { className: "sm:justify-end flex justify-between flex-1", children: [_jsx("button", { disabled: indexOfFirstItem === 0, onClick: onPreviousPage, className: "disabled:opacity-80 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md", children: "Previous" }), _jsx("button", { disabled: indexOfLastItem >= people.length, onClick: onNextPage, className: "disabled:opacity-80 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 ml-3 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md", children: "Next" })] })] })] }));
}
