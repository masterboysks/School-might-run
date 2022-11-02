import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { ChevronRightIcon } from "@heroicons/react/20/solid";
import { Link } from "react-router-dom";
const Breadnav = ({ pages }) => {
    return (_jsx(_Fragment, { children: _jsx("div", { className: "breadNav", children: _jsx("nav", { className: "flex", "aria-label": "Breadcrumb", children: _jsx("ol", { role: "list", className: " flex items-center", children: pages.map((page) => (_jsx("li", { children: _jsx("div", { className: "flex items-center", children: pages.indexOf(page) === 0 ? (_jsx(Link, { to: page.href, className: ` lg:text-base text-xs hidden md:block ${page.current ? "base font-medium" : "sm font-normal"}  text-primary-grey-600`, "aria-current": page.current ? "page" : undefined, children: page.name })) : (_jsxs(_Fragment, { children: [_jsx(ChevronRightIcon, { className: "flex-shrink-0 w-5 h-5 text-gray-400", "aria-hidden": "true" }), _jsx(Link, { to: page.href, className: `ml-2  lg:text-base text-xs ${page.current ? " font-medium" : " font-normal"}  text-primary-grey-600`, "aria-current": page.current ? "page" : undefined, children: page.name })] })) }) }, page.name))) }) }) }) }));
};
export default Breadnav;
