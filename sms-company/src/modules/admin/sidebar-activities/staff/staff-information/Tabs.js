import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { Link, useNavigate } from "react-router-dom";
import { Fragment, useState, useEffect } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";
function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}
export default function Tabs({ tabs }) {
    const navigate = useNavigate();
    const [selected, setSelected] = useState(tabs.filter((curr) => {
        return curr.current ? curr : "";
    })[0]);
    useEffect(() => {
        navigate(selected.href);
    }, [selected]);
    return (_jsxs("div", { className: "my-6", children: [_jsxs("div", { className: "sm:hidden", children: [_jsx("label", { htmlFor: "tabs", className: "sr-only", children: "Select a tab" }), _jsx(Listbox, { value: selected, onChange: setSelected, children: _jsxs("div", { className: "relative mt-1", children: [_jsxs(Listbox.Button, { className: "focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-primary-grey-200 sm:text-sm relative w-full py-2 pl-3 pr-10 text-left bg-white rounded-lg shadow-md cursor-default", children: [_jsx("span", { className: "block truncate", children: selected.name }), _jsx("span", { className: "absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none", children: _jsx(ChevronUpDownIcon, { className: "w-5 h-5 text-gray-400", "aria-hidden": "true" }) })] }), _jsx(Transition, { as: Fragment, leave: "transition ease-in duration-100", leaveFrom: "hidden", leaveTo: "block", children: _jsx(Listbox.Options, { className: "max-h-fit ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm absolute z-10 block w-full py-1 mt-1 text-base bg-white rounded-md shadow-lg", children: tabs.map((person, personIdx) => (_jsx(Listbox.Option, { className: ({ active }) => `relative cursor-default select-none py-2 pl-10 pr-4 ${active
                                                ? "bg-primary-grey-200 text-primary-700"
                                                : "text-primary-600"}`, value: person, children: ({ selected }) => (_jsxs(_Fragment, { children: [_jsx("span", { className: `block truncate ${selected ? "font-medium" : "font-normal"}`, children: person.name }), selected ? (_jsx("span", { className: "text-primary-grey-700 absolute inset-y-0 left-0 flex items-center pl-3", children: _jsx(CheckIcon, { className: "w-5 h-5", "aria-hidden": "true" }) })) : null] })) }, personIdx))) }) })] }) })] }), _jsx("div", { className: "sm:block hidden", children: _jsx("div", { className: "border-b border-gray-200", children: _jsx("nav", { className: "flex -mb-px", "aria-label": "Tabs", children: tabs.map((tab) => (_jsx(Link, { to: tab.href, className: classNames(tab.current
                                ? "border-primary-grey-600 text-primary-grey-600  font-medium"
                                : "border-transparent text-primary-grey-500  hover:border-primary-grey-300", "w-1/3 py-4 px-1 text-center border-b-2  text-sm"), "aria-current": tab.current ? "page" : undefined, children: tab.name }, tab.name))) }) }) })] }));
}
