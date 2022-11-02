import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { Link } from "react-router-dom";
const RenderTable = ({ currentItems }) => {
    return (_jsx(_Fragment, { children: currentItems.map((person, index, table) => (_jsxs("tr", { children: [_jsx("td", { className: "whitespace-nowrap px-3 py-4 text-sm text-gray-500", children: person.examName }), _jsx("td", { className: "whitespace-nowrap text-primary-btn px-3 py-4 text-sm", children: _jsx(Link, { to: `shedule/${person.examName}`, children: "Schedule" }) })] }, index))) }));
};
export default RenderTable;
