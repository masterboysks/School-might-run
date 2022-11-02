import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { Fragment, useState } from "react";
import Arrow from "@mui/icons-material/ArrowForwardIos";
import { Dialog, Menu, Transition } from "@headlessui/react";
import { Bars3BottomLeftIcon, CalendarIcon, HomeIcon, UsersIcon, BanknotesIcon, DocumentCheckIcon, XMarkIcon, } from "@heroicons/react/24/outline";
import { Link, Outlet, useLocation } from "react-router-dom";
import one from "../welcome/three.jpg";
let navigation, dropnavigation;
const userNavigation = [
    { name: "Your Profile", href: "#" },
    { name: "Settings", href: "#" },
    { name: "Sign out", href: "#" },
];
function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}
export default function Sidebar() {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [examData, setExamData] = useState(false);
    const [feeData, setFeeData] = useState(false);
    const location = useLocation().pathname;
    location.includes("/parent/dashboard") &&
        (navigation = [
            {
                name: "Dashboard",
                href: "/parent/dashboard/dashboard",
                icon: HomeIcon,
            },
            {
                name: "Attendance",
                href: "/parent/dashboard/attendance",
                icon: CalendarIcon,
            },
            {
                name: "Teacher details",
                href: "/parent/dashboard/teacher-details",
                icon: UsersIcon,
            },
        ]) &&
        (dropnavigation = [
            {
                name: "Exam",
                open: examData,
                close: setExamData,
                icon: DocumentCheckIcon,
                href: "/parent/dashboard/exam",
                links: [
                    {
                        name: "Exam routine",
                        link: "/parent/dashboard/exam/exam-routine",
                    },
                    {
                        name: "Admit card",
                        link: "/parent/dashboard/exam/admit-card",
                    },
                    {
                        name: "Report card",
                        link: "/parent/dashboard/exam/report-card",
                    },
                ],
            },
            {
                name: "Fee",
                open: feeData,
                close: setFeeData,
                icon: BanknotesIcon,
                href: "/parent/dashboard/fee",
                links: [
                    {
                        name: "Logsheet",
                        link: "/parent/dashboard/fee/logsheet",
                    },
                    {
                        name: "Fee invoice",
                        link: "/parent/dashboard/fee/fee-invoice",
                    },
                    {
                        name: "Reciept",
                        link: "/parent/dashboard/fee/reciept",
                    },
                    {
                        name: "Balance sheet",
                        link: "/parent/dashboard/fee/balance-sheet",
                    },
                ],
            },
        ]);
    location.includes("/student/dashboard") &&
        (navigation = [
            {
                name: "Dashboard",
                href: "/student/dashboard/dashboard",
                icon: HomeIcon,
            },
            {
                name: "Attendance",
                href: "/student/dashboard/attendance",
                icon: CalendarIcon,
            },
            {
                name: "Teacher details",
                href: "/student/dashboard/teacher-details",
                icon: UsersIcon,
            },
        ]) &&
        (dropnavigation = [
            {
                name: "Exam",
                open: examData,
                close: setExamData,
                href: "/student/dashboard/exam",
                icon: DocumentCheckIcon,
                links: [
                    {
                        name: "Exam routine",
                        link: "/student/dashboard/exam/exam-routine",
                    },
                    {
                        name: "Admit card",
                        link: "/student/dashboard/exam/admit-card",
                    },
                    {
                        name: "Report card",
                        link: "/student/dashboard/exam/report-card",
                    },
                ],
            },
            {
                name: "Fee",
                open: feeData,
                close: setFeeData,
                href: "/student/dashboard/fee",
                icon: BanknotesIcon,
                links: [
                    {
                        name: "Logsheet",
                        link: "/student/dashboard/fee/logsheet",
                    },
                    {
                        name: "Fee invoice",
                        link: "/student/dashboard/fee/fee-invoice",
                    },
                    {
                        name: "Reciept",
                        link: "/student/dashboard/fee/reciept",
                    },
                    {
                        name: "Balance sheet",
                        link: "/student/dashboard/fee/balance-sheet",
                    },
                ],
            },
        ]);
    return (_jsx(_Fragment, { children: _jsxs("div", { children: [_jsx(Transition.Root, { show: sidebarOpen, as: Fragment, children: _jsxs(Dialog, { as: "div", className: "relative z-40 md:hidden", onClose: setSidebarOpen, children: [_jsx(Transition.Child, { as: Fragment, enter: "transition-opacity ease-linear duration-300", enterFrom: "opacity-0", enterTo: "opacity-100", leave: "transition-opacity ease-linear duration-300", leaveFrom: "opacity-100", leaveTo: "opacity-0", children: _jsx("div", { className: "fixed inset-0 bg-gray-600 bg-opacity-50" }) }), _jsxs("div", { className: "fixed inset-0 z-40 flex", children: [_jsx(Transition.Child, { as: Fragment, enter: "transition ease-in-out duration-300 transform", enterFrom: "-translate-x-full", enterTo: "translate-x-0", leave: "transition ease-in-out duration-300 transform", leaveFrom: "translate-x-0", leaveTo: "-translate-x-full", children: _jsxs(Dialog.Panel, { className: "relative flex w-full max-w-xs flex-1 flex-col bg-primary-grey-100 pt-5 pb-4", children: [_jsx(Transition.Child, { as: Fragment, enter: "ease-in-out duration-300", enterFrom: "opacity-0", enterTo: "opacity-100", leave: "ease-in-out duration-300", leaveFrom: "opacity-100", leaveTo: "opacity-0", children: _jsx("div", { className: "absolute top-0 right-0 -mr-12 pt-2", children: _jsxs("button", { type: "button", className: "ml-1 flex h-10 w-10  items-center justify-center rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-grey-200", onClick: () => setSidebarOpen(false), children: [_jsx("span", { className: "sr-only", children: "Close sidebar" }), _jsx(XMarkIcon, { className: "h-6 w-6 text-white", "aria-hidden": "true" })] }) }) }), _jsx("div", { className: "flex flex-shrink-0 items-center px-4", children: _jsx("img", { className: "h-8 w-auto", src: "https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600", alt: "Your Company" }) }), _jsxs("div", { className: "mt-5 h-0 flex-1 overflow-y-auto", children: [location.includes("/parent/dashboard") && (_jsxs("div", { className: "px-2", children: [_jsx("div", { className: "text-primary-grey-700 mx-1 text-sm my-3", children: "ACCOUNT" }), _jsxs("div", { className: " bg-white rounded  px-4 py-2 ", children: [_jsxs("div", { className: "flex space-x-4", children: [_jsx("div", { className: "w-10 h-10 rounded-full   overflow-hidden object-cover ", children: _jsx("img", { src: one, alt: "hjkhf" }) }), _jsxs("div", { className: "", children: [_jsx("div", { className: " font-medium text-primary-grey-700", children: "Shikha Bahari" }), _jsx("div", { className: "text-primary-grey-600", children: "Class 7-B ID:123456" })] })] }), _jsx("button", { className: " text-red-600  bg-primary-grey-200 rounded w-full p-1 my-2 text-center ", children: "Switch account" })] })] })), _jsxs("nav", { className: "space-y-1 px-2", children: [_jsx("div", { className: "text-primary-grey-700 mx-1 text-sm my-3", children: "NAVIGATION" }), navigation.map((item) => (_jsxs(Link, { to: item.href, className: classNames(location.includes(item.href)
                                                                        ? "bg-primary-grey-200 text-primary-grey-700"
                                                                        : "text-primary-grey-600 hover:bg-primary-grey-200 ", "group flex items-center px-2 py-2 text-base font-medium rounded-md"), children: [_jsx(item.icon, { className: classNames(location.includes(item.href)
                                                                                ? "text-gray-500"
                                                                                : "text-gray-400 group-hover:text-gray-500", "mr-4 flex-shrink-0 h-6 w-6"), "aria-hidden": "true" }), item.name] }, item.name))), dropnavigation.map((item) => (_jsxs(Fragment, { children: [_jsxs("a", { onClick: () => {
                                                                                item.close((a) => !a);
                                                                            }, className: classNames(!item.open && location.includes(item.href)
                                                                                ? "bg-primary-grey-200 text-primary-grey-700"
                                                                                : "text-primary-grey-600 hover:bg-primary-grey-200 ", "group flex items-center px-2 py-2  text-base font-medium rounded-md"), children: [_jsx(item.icon, { className: classNames(!item.open && location.includes(item.href)
                                                                                        ? "text-gray-500"
                                                                                        : "text-gray-400 group-hover:text-gray-500", "mr-4 flex-shrink-0 h-6 w-6"), "aria-hidden": "true" }), _jsxs("div", { className: "flex w-full justify-between", children: [_jsx("div", { className: "", children: item.name }), _jsx("div", { id: "arrow", className: `devList text-gray-500  transition duration-100 ease-in text-sm ${item.open ? "rotate-90" : ""}  `, children: _jsx(Arrow, { fontSize: "sm" }) })] })] }), item.open ? (_jsx("ul", { children: item.links.map((curr) => (_jsx(Link, { to: curr.link, children: _jsx("li", { className: `pl-6  pr-3 font-medium text-base   mx-2 mt-2 mb-3 rounded py-[3px]  ${location.includes(curr.path)
                                                                                        ? "bg-primary-grey-200 text-primary-grey-700"
                                                                                        : "hover:bg-primary-grey-200 text-primary-grey-600"}`, children: curr.name }) }, curr.name))) })) : null] }, item.name)))] })] })] }) }), _jsx("div", { className: "w-14 flex-shrink-0", "aria-hidden": "true" })] })] }) }), _jsx("div", { className: "hidden md:fixed md:inset-y-0 md:flex md:w-64 md:flex-col", children: _jsxs("div", { className: "flex flex-grow flex-col overflow-y-auto border-r border-gray-200 bg-primary-grey-100 pt-5", children: [_jsx("div", { className: "flex flex-shrink-0 items-center px-4", children: _jsx("img", { className: "h-8 w-auto", src: "https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600", alt: "Your Company" }) }), _jsxs("div", { className: "mt-5 flex flex-grow flex-col", children: [location.includes("/parent/dashboard") && (_jsxs("div", { className: "px-2", children: [_jsx("div", { className: "text-primary-grey-700 mx-1 text-sm my-3", children: "ACCOUNT" }), _jsxs("div", { className: " bg-white rounded  px-4 py-2 ", children: [_jsxs("div", { className: "flex space-x-4", children: [_jsx("div", { className: "w-10 h-10 rounded-full   overflow-hidden object-cover ", children: _jsx("img", { src: one, alt: "hjkhf" }) }), _jsxs("div", { className: "", children: [_jsx("div", { className: " font-medium text-primary-grey-700", children: "Shikha Bahari" }), _jsx("div", { className: "text-primary-grey-600", children: "Class 7-B ID:123456" })] })] }), _jsx("button", { className: " text-red-600  bg-primary-grey-200 rounded w-full p-1 my-2 text-center ", children: "Switch account" })] })] })), _jsxs("nav", { className: "flex-1 space-y-1 px-2 pb-4", children: [_jsx("div", { className: "text-primary-grey-700 mx-1 text-sm my-3", children: "NAVIGATION" }), navigation.map((item) => (_jsxs(Link, { to: item.href, className: classNames(location.includes(item.href)
                                                    ? "bg-primary-grey-200 text-primary-grey-700"
                                                    : "text-primary-grey-600 hover:bg-primary-grey-200 ", "group flex items-center px-2 py-2 text-base font-medium rounded-md"), children: [_jsx(item.icon, { className: classNames(location.includes(item.href)
                                                            ? "text-gray-500"
                                                            : "text-gray-400 group-hover:text-gray-500", "mr-4 flex-shrink-0 h-6 w-6"), "aria-hidden": "true" }), item.name] }, item.name))), dropnavigation.map((item) => (_jsxs(Fragment, { children: [_jsxs("a", { onClick: () => {
                                                            item.close((a) => !a);
                                                        }, className: classNames(!item.open && location.includes(item.href)
                                                            ? "bg-primary-grey-200 text-primary-grey-700"
                                                            : "text-primary-grey-600 hover:bg-primary-grey-200 ", "group flex items-center px-2 py-2  text-base font-medium rounded-md"), children: [_jsx(item.icon, { className: classNames(!item.open && location.includes(item.href)
                                                                    ? "text-gray-500"
                                                                    : "text-gray-400 group-hover:text-gray-500", "mr-4 flex-shrink-0 h-6 w-6"), "aria-hidden": "true" }), _jsxs("div", { className: "flex w-full justify-between", children: [_jsx("div", { className: "", children: item.name }), _jsx("div", { id: "arrow", className: `devList text-gray-500  transition duration-100 ease-in text-sm ${item.open ? "rotate-90" : ""}  `, children: _jsx(Arrow, { fontSize: "sm" }) })] })] }), item.open ? (_jsx("ul", { children: item.links.map((curr) => (_jsx(Link, { to: curr.link, children: _jsx("li", { className: `pl-6  pr-3 font-medium text-base   mx-2 mt-2 mb-3 rounded py-[3px]  ${location.includes(curr.link)
                                                                    ? "bg-primary-grey-200 text-primary-grey-700"
                                                                    : "hover:bg-primary-grey-200 text-primary-grey-600"}`, children: curr.name }) }, curr.name))) })) : null] }, item.name)))] })] })] }) }), _jsxs("div", { className: "flex flex-1 flex-col md:pl-64", children: [_jsxs("div", { className: "sticky top-0 z-10 flex h-16 flex-shrink-0 bg-white shadow", children: [_jsxs("button", { type: "button", className: "border-r border-gray-200 px-4 text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 md:hidden", onClick: () => setSidebarOpen(true), children: [_jsx("span", { className: "sr-only", children: "Open sidebar" }), _jsx(Bars3BottomLeftIcon, { className: "h-6 w-6", "aria-hidden": "true" })] }), _jsxs("div", { className: "flex flex-1 justify-between px-4", children: [_jsx("div", { className: "flex flex-1" }), _jsx("div", { className: "ml-4 flex items-center md:ml-6", children: _jsxs(Menu, { as: "div", className: "relative ml-3", children: [_jsx("div", { children: _jsxs(Menu.Button, { className: "flex max-w-xs items-center rounded-full bg-white text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2", children: [_jsx("span", { className: "sr-only", children: "Open user menu" }), _jsx("img", { className: "h-8 w-8 rounded-full", src: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80", alt: "" }), _jsx("div", { className: "ml-2 text-primary-grey-700 pr-1", children: "Shuvam Sherstha" })] }) }), _jsx(Transition, { as: Fragment, enter: "transition ease-out duration-100", enterFrom: "transform opacity-0 scale-95", enterTo: "transform opacity-100 scale-100", leave: "transition ease-in duration-75", leaveFrom: "transform opacity-100 scale-100", leaveTo: "transform opacity-0 scale-95", children: _jsx(Menu.Items, { className: "absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none", children: userNavigation.map((item) => (_jsx(Menu.Item, { children: ({ active }) => (_jsx(Link, { to: item.href, className: classNames(active ? "bg-gray-100" : "", "block px-4 py-2 text-sm text-gray-700"), children: item.name })) }, item.name))) }) })] }) })] })] }), _jsx("main", { className: "flex-1", children: _jsx("div", { className: "py-6", children: _jsx("div", { className: "mx-auto max-w-7xl px-4 sm:px-6 md:px-8", children: _jsx(Outlet, {}) }) }) })] })] }) }));
}
