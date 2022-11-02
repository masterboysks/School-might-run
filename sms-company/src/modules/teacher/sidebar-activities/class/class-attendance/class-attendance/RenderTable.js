import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { Link } from "react-router-dom";
const RenderTable = ({ currentItems }) => {
    return (_jsx(_Fragment, { children: currentItems?.map((person, index) => (_jsxs("tr", { children: [_jsx("td", { className: "whitespace-nowrap px-3 py-4 text-sm text-gray-500", children: person.class }), _jsx("td", { className: "whitespace-nowrap px-3 py-4 text-sm text-gray-500", children: person.level }), _jsx("td", { className: "whitespace-nowrap px-3 py-4 text-sm text-gray-500", children: person.faculty }), _jsx("td", { className: "whitespace-nowrap px-3 py-4 text-sm text-gray-500", children: person.section }), _jsx("td", { className: "whitespace-nowrap px-3 py-4 text-sm text-gray-500", children: person.subject }), _jsx("td", { className: "whitespace-nowrap px-3 py-4 text-sm text-primary-btn", children: _jsx(Link, { to: `${person.class}/${person.section}`, children: "Attendance" }) })] }, index))) }));
};
export default RenderTable;
