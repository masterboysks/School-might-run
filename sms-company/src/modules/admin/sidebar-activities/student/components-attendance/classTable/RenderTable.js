import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { Fragment } from "react";
import { Link } from "react-router-dom";
const classes = [
    {
        semester: "Class-11",
        level: "+2",
        faculty: "Science-Bio",
        section: "A",
    },
];
const RenderTable = () => {
    return (_jsx(_Fragment, { children: classes.map((classs, index) => (_jsx(Fragment, { children: _jsxs("tr", { children: [_jsx("td", { className: "whitespace-nowrap px-3 py-4 text-sm text-gray-500", children: classs.semester }), _jsx("td", { className: "whitespace-nowrap px-3 py-4 text-sm text-gray-500", children: classs.level }), _jsx("td", { className: "whitespace-nowrap px-3 py-4 text-sm text-gray-500", children: classs.faculty }), _jsx("td", { className: "whitespace-nowrap px-3 py-4 text-sm text-gray-500", children: classs.section }), _jsx("td", { className: "whitespace-nowrap text-end px-3 py-4 text-sm text-gray-500", children: _jsx(Link, { to: `${classs.semester}/${classs.section}`, className: "text-primary-btn whitespace-nowrap px-3 py-4 text-sm font-medium", children: "View" }) })] }) }, index))) }));
};
export default RenderTable;
