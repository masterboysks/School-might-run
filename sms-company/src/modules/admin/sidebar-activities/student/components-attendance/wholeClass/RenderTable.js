import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { Link } from "react-router-dom";
const students = [
    {
        stdId: "1243",
        stdName: "Ranjit",
        numb: "1",
        status: "Present",
        reason: "",
    },
];
const RenderTable = () => {
    return (_jsx(_Fragment, { children: students.map((person, index) => (_jsxs("tr", { children: [_jsx("td", { className: "whitespace-nowrap px-3 py-4 text-sm text-gray-500", children: person.stdId }), _jsx("td", { className: "text-primary-btn whitespace-nowrap px-3 py-4 text-sm font-medium", children: _jsx(Link, { to: "/admin/dashboard/student/student-attendance/Class-11-Science-Bio-A/ranjit", children: person.stdName }) }), _jsx("td", { className: "whitespace-nowrap px-3 py-4 text-sm text-gray-500", children: person.numb }), _jsx("td", { className: "whitespace-nowrap px-3 py-4 text-sm text-gray-500", children: person.status }), _jsx("td", { className: "whitespace-nowrap px-3 py-4 text-sm text-gray-500", children: person.reason }), _jsx("td", { className: "text-primary-btn whitespace-nowrap px-3 py-4 text-sm font-medium", children: _jsx(Link, { to: `${person.stdName}/${person.stdId}`, children: "View" }) })] }, index))) }));
};
export default RenderTable;
