import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
const RenderTable = ({ currentItems, setOpen }) => {
    return (_jsx(_Fragment, { children: currentItems.map((person, index) => (_jsxs("tr", { children: [_jsx("td", { className: "whitespace-nowrap px-3 py-4 text-sm text-gray-500", children: person.studentId }), _jsx("td", { className: "whitespace-nowrap px-3 py-4 text-sm text-gray-500", children: person.studentName }), _jsx("td", { className: "whitespace-nowrap px-3 py-4 text-sm text-gray-500", children: person.rollNo }), _jsx("td", { className: "whitespace-nowrap px-3 py-4 text-sm text-gray-500", children: person.presentDays }), _jsx("td", { className: "whitespace-nowrap text-primary-btn px-3 py-4 text-sm", onClick: () => setOpen(true), children: person.absentDays }), _jsx("td", { className: "whitespace-nowrap px-3 py-4 text-sm text-gray-500", children: person.schoolDays })] }, index))) }));
};
export default RenderTable;
