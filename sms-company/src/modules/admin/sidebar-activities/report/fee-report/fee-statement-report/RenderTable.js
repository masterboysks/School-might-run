import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { Link } from "react-router-dom";
const RenderTable = ({ currentItems }) => {
    return (_jsx(_Fragment, { children: currentItems.map((person, index, table) => (_jsxs("tr", { children: [_jsx("td", { className: "whitespace-nowrap px-3 py-4 text-sm text-gray-500", children: person.date }), _jsx("td", { className: "whitespace-nowrap px-3 py-4 text-sm text-primary-btn", children: _jsxs(Link, { to: `${person.particular}`, children: [" ", person.particular] }) }), _jsxs("td", { className: "whitespace-nowrap px-3 py-4 text-sm text-gray-500", children: ["Rs.", person.dr] }), _jsxs("td", { className: "whitespace-nowrap px-3 py-4 text-sm text-gray-500", children: ["Rs.", person.cr] }), _jsx("td", { className: "whitespace-nowrap px-3 py-4 text-sm text-gray-500", children: person.balance })] }, index))) }));
};
export default RenderTable;
