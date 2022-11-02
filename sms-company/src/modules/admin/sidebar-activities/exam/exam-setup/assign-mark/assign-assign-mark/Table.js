import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Link } from "react-router-dom";
import RenderTable from "./RenderTable";
const subject = ["Physic", "Maths", "Opt maths", "Chemistry"];
export default function Example() {
    //   const itemsOnPage = 5;
    //   const [currentPage, setCurrentPage] = useState(1);
    //   const [currentItems, setCurrentItems] = useState(
    //     people.slice(0, itemsOnPage)
    //   );
    //   const [indexOfLastItem, setIndexOfLastItem] = useState(
    //     currentPage * itemsOnPage
    //   );
    //   const [indexOfFirstItem, setIndexOfFirstItem] = useState(
    //     indexOfLastItem - itemsOnPage
    //   );
    //   const [message, setmessage] = useState("Showing 1 to 2 of 2 results");
    //   const onNextPage = () => {
    //     setCurrentPage((curr) => curr + 1);
    //   };
    //   const onPreviousPage = () => {
    //     setCurrentPage((curr) => curr - 1);
    //   };
    //   useEffect(() => {
    //     setIndexOfLastItem(currentPage * itemsOnPage);
    //   }, [currentPage]);
    //   useEffect(() => {
    //     setIndexOfFirstItem(indexOfLastItem - itemsOnPage);
    //   }, [indexOfLastItem]);
    //   useEffect(() => {
    //     setmessage(
    //       `Showing ${indexOfFirstItem + 1} to ${
    //         people.length <= indexOfLastItem ? people.length : indexOfLastItem
    //       } of ${people.length}`
    //     );
    //     setCurrentItems(people.slice(indexOfFirstItem, indexOfLastItem));
    //   }, [indexOfFirstItem]);
    return (_jsxs("div", { className: "mt-11", children: [_jsx("div", { className: "my-6", children: _jsx("div", { className: " ring-1 ring-black ring-opacity-5 min-w-full overflow-x-auto rounded-lg shadow", children: _jsx("div", { className: "inline-block w-full align-middle", children: _jsx("div", { className: " w-full rounded-lg", children: _jsxs("table", { className: "min-w-full divide-y divide-gray-300 table-auto", children: [_jsxs("thead", { className: "bg-gray-50 divide-y", children: [_jsxs("tr", { className: "divide-x", children: [_jsx("th", { scope: "col", className: "px-3 py-3.5 text-left text-sm font-medium text-primary-grey-700  w-40   ", children: "Subject" }), _jsx("th", { scope: "col", colSpan: "4", className: "px-3    py-3.5 text-left text-sm font-medium text-primary-grey-700   ", children: "Full marks" }), _jsx("th", { scope: "col", colSpan: "4", className: "px-3 py-3.5 text-left text-sm font-medium text-primary-grey-700   ", children: "Pass marks" })] }), _jsxs("tr", { children: [_jsx("th", { scope: "col", className: "px-3 py-3.5 text-left text-sm font-medium text-primary-grey-700    " }), _jsx("th", { scope: "col", className: "px-3 border-l py-3.5 text-left text-sm font-medium text-primary-grey-700 min-w-[72px]  ", children: "Theory" }), _jsx("th", { scope: "col", className: "px-3 py-3.5 text-left text-sm font-medium text-primary-grey-700 min-w-[72px]   ", children: "Pratical" }), _jsx("th", { scope: "col", className: "px-3 py-3.5 text-left text-sm font-medium text-primary-grey-700 min-w-[72px]   ", children: "Assest" }), _jsx("th", { scope: "col", className: "px-3 py-3.5 text-left text-sm font-medium text-primary-grey-700 min-w-[72px]   ", children: "Total" }), _jsx("th", { scope: "col", className: "px-3 py-3.5 border-l text-left text-sm font-medium text-primary-grey-700 min-w-[72px]  ", children: "Theory" }), _jsx("th", { scope: "col", className: "px-3 py-3.5 text-left text-sm font-medium text-primary-grey-700 min-w-[72px]   ", children: "Pratical" }), _jsx("th", { scope: "col", className: "px-3 py-3.5 text-left text-sm font-medium text-primary-grey-700 min-w-[72px]   ", children: "Assest" }), _jsx("th", { scope: "col", className: "px-3 py-3.5 text-left text-sm font-medium text-primary-grey-700 min-w-[72px]   ", children: "Total" })] })] }), _jsx("tbody", { className: "bg-white divide-y divide-gray-200", children: _jsx(RenderTable, { subject: subject }) })] }) }) }) }) }), _jsx("div", { className: " w-full my-6", children: _jsxs("div", { className: " w-fit ml-auto", children: [_jsx(Link, { to: "/admin/dashboard/exam/exam-setup/assign-mark", className: "secondary_btn", children: "Cancel" }), _jsx(Link, { to: "/admin/dashboard/exam/exam-setup/assign-mark", className: "primary_btn", children: "Save" })] }) })] }));
}
