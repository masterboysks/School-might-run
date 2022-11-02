import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { CheckIcon } from "@heroicons/react/20/solid";
import Break from "./Break";
import { Link } from "react-router-dom";
import Breadnav from "../../../../../../../components/common/Breadnav";
const pages = [
    { name: "Student", href: "#", current: false },
    {
        name: "Student Information",
        href: "/student/student-information/",
        current: false,
    },
    {
        name: "Add Student",
        href: "/admin/dashboard/student/student-information/add-student-details",
        current: true,
    },
];
const AboveForm = ({ steps, title }) => {
    return (_jsxs(_Fragment, { children: [_jsx(Breadnav, { pages: pages }), _jsx("nav", { "aria-label": "Progress", className: "border-primary-grey-300 md:pb-0 pb-2 my-8 overflow-x-auto overflow-y-hidden border rounded-md", children: _jsx("ol", { role: "list", className: " md:flex md:divide-y-0", children: steps.map((step, stepIdx) => (_jsxs("li", { className: "md:flex-1 md:flex sm:h-14 relative", children: [step.status === "complete" ? (_jsx(Link, { to: step.href, className: "group flex items-center w-full", children: _jsxs("span", { className: "flex items-center px-6 py-4 text-sm font-medium", children: [_jsx("span", { className: "bg-primary-btn flex items-center justify-center flex-shrink-0 w-10 h-10 rounded-full", children: _jsx(CheckIcon, { className: " w-6 h-6 text-white", "aria-hidden": "true" }) }), _jsx("span", { className: "text-primary-grey-600 ml-4 text-sm font-medium", children: step.name })] }) })) : step.status === "current" ? (_jsxs(Link, { to: step.href, className: "flex items-center px-6 py-4 text-sm font-medium", "aria-current": "step", children: [_jsx("span", { className: "border-primary-grey-600 flex items-center justify-center flex-shrink-0 w-10 h-10 border-2 rounded-full", children: _jsx("span", { className: "text-primary-grey-600", children: step.id }) }), _jsx("span", { className: "text-primary-grey-600 ml-4 text-sm font-medium", children: step.name })] })) : (_jsx(Link, { to: step.href, className: "group flex items-center", children: _jsxs("span", { className: "flex items-center px-6 py-4 text-sm font-medium", children: [_jsx("span", { className: "group-hover:border-gray-400 flex items-center justify-center flex-shrink-0 w-10 h-10 border-2 border-gray-300 rounded-full", children: _jsx("span", { className: "group-hover:text-gray-900 text-gray-500", children: step.id }) }), _jsx("span", { className: "group-hover:text-gray-900 ml-4 text-sm font-medium text-gray-500", children: step.name })] }) })), stepIdx !== steps.length - 1 ? (_jsx(_Fragment, { children: _jsx("div", { className: "md:block absolute top-0 right-0 hidden w-5 h-full", "aria-hidden": "true", children: _jsx("svg", { className: "w-full h-full text-gray-300", viewBox: "0 0 22 80", fill: "none", preserveAspectRatio: "none", children: _jsx("path", { d: "M0 -2L20 40L0 82", vectorEffect: "non-scaling-stroke", stroke: "currentcolor", strokeLinejoin: "round" }) }) }) })) : null] }, step.name))) }) }), _jsx(Break, { title: title })] }));
};
export default AboveForm;
