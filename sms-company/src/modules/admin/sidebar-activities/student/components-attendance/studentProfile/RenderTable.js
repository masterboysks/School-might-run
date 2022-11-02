import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { Link } from "react-router-dom";
const students = [
    {
        date: "2022/8/10",
        stdId: "1243",
        stdName: "Ranjit",
        status: "Present",
        reason: "",
    },
];
const RenderTable = () => {
    return (_jsx(_Fragment, { children: students.map((person, index) => (_jsxs("tr", { children: [_jsx("td", { className: "px-3 py-4 text-sm text-gray-500 whitespace-nowrap ", children: person.date }), _jsx("td", { className: "px-3 py-4 text-sm text-gray-500 whitespace-nowrap ", children: person.stdId }), _jsx("td", { className: "px-3 py-4 text-sm text-gray-500 whitespace-nowrap ", children: person.stdName }), _jsx("td", { className: "px-3 py-4 text-sm text-gray-500 whitespace-nowrap ", children: person.status }), _jsx("td", { className: "px-3 py-4 text-sm text-gray-500 whitespace-nowrap ", children: person.reason }), _jsx("td", { className: "px-3 py-4 text-sm font-medium text-primary-btn whitespace-nowrap", children: _jsx(Link, { to: "/student/student-attendance/", children: "View" }) })] }, index))) }));
};
export default RenderTable;
