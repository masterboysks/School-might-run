import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from "react";
import { ChevronDownIcon, ChevronLeftIcon, ChevronRightIcon, ClockIcon, EllipsisHorizontalIcon, } from "@heroicons/react/20/solid";
import { Menu, Transition } from "@headlessui/react";
import { Link } from "react-router-dom";
const days = [
    { date: "2021-12-27", events: [] },
    { date: "2021-12-28", events: [] },
    { date: "2021-12-29", events: [] },
    { date: "2021-12-30", events: [] },
    { date: "2021-12-31", events: [] },
    { date: "2022-01-01", isCurrentMonth: true, events: [] },
    { date: "2022-01-02", isCurrentMonth: true, events: [] },
    {
        date: "2022-01-03",
        isCurrentMonth: true,
        events: [
            {
                id: 1,
                name: "Design review",
                time: "10AM",
                datetime: "2022-01-03T10:00",
                href: "#",
            },
            {
                id: 2,
                name: "Sales meeting",
                time: "2PM",
                datetime: "2022-01-03T14:00",
                href: "#",
            },
        ],
    },
    { date: "2022-01-04", isCurrentMonth: true, events: [] },
    { date: "2022-01-05", isCurrentMonth: true, events: [] },
    { date: "2022-01-06", isCurrentMonth: true, events: [] },
    {
        date: "2022-01-07",
        isCurrentMonth: true,
        events: [
            {
                id: 3,
                name: "Date night",
                time: "6PM",
                datetime: "2022-01-08T18:00",
                href: "#",
            },
        ],
    },
    { date: "2022-01-08", isCurrentMonth: true, events: [] },
    { date: "2022-01-09", isCurrentMonth: true, events: [] },
    { date: "2022-01-10", isCurrentMonth: true, events: [] },
    { date: "2022-01-11", isCurrentMonth: true, events: [] },
    {
        date: "2022-01-12",
        isCurrentMonth: true,
        isToday: true,
        events: [
            {
                id: 6,
                name: "Sam's birthday party",
                time: "2PM",
                datetime: "2022-01-25T14:00",
                href: "#",
            },
        ],
    },
    { date: "2022-01-13", isCurrentMonth: true, events: [] },
    { date: "2022-01-14", isCurrentMonth: true, events: [] },
    { date: "2022-01-15", isCurrentMonth: true, events: [] },
    { date: "2022-01-16", isCurrentMonth: true, events: [] },
    { date: "2022-01-17", isCurrentMonth: true, events: [] },
    { date: "2022-01-18", isCurrentMonth: true, events: [] },
    { date: "2022-01-19", isCurrentMonth: true, events: [] },
    { date: "2022-01-20", isCurrentMonth: true, events: [] },
    { date: "2022-01-21", isCurrentMonth: true, events: [] },
    {
        date: "2022-01-22",
        isCurrentMonth: true,
        isSelected: true,
        events: [
            {
                id: 4,
                name: "Maple syrup museum",
                time: "3PM",
                datetime: "2022-01-22T15:00",
                href: "#",
            },
            {
                id: 5,
                name: "Hockey game",
                time: "7PM",
                datetime: "2022-01-22T19:00",
                href: "#",
            },
        ],
    },
    { date: "2022-01-23", isCurrentMonth: true, events: [] },
    { date: "2022-01-24", isCurrentMonth: true, events: [] },
    { date: "2022-01-25", isCurrentMonth: true, events: [] },
    { date: "2022-01-26", isCurrentMonth: true, events: [] },
    { date: "2022-01-27", isCurrentMonth: true, events: [] },
    { date: "2022-01-28", isCurrentMonth: true, events: [] },
    { date: "2022-01-29", isCurrentMonth: true, events: [] },
    { date: "2022-01-30", isCurrentMonth: true, events: [] },
    { date: "2022-01-31", isCurrentMonth: true, events: [] },
    { date: "2022-02-01", events: [] },
    { date: "2022-02-02", events: [] },
    {
        date: "2022-02-03",
        events: [
            {
                id: 7,
                name: "Cinema with friends",
                time: "9PM",
                datetime: "2022-02-04T21:00",
                href: "#",
            },
        ],
    },
    { date: "2022-02-04", events: [] },
    { date: "2022-02-05", events: [] },
    { date: "2022-02-06", events: [] },
];
const selectedDay = days.find((day) => day.isSelected);
function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}
export default function Calendar() {
    return (_jsxs("div", { className: "lg:flex lg:h-full lg:flex-col rounded-3xl overflow-hidden border", children: [_jsxs("header", { className: "lg:flex-none relative flex items-center justify-between px-6 py-4 border-b border-gray-200", children: [_jsxs("div", { className: "sm:w-40 w-fit flex", children: [_jsx("h1", { className: " text-lg font-semibold text-gray-900", children: _jsx("time", { dateTime: "2022-01", className: "", children: "January2022" }) }), _jsx(ChevronLeftIcon, { className: "sm:block hidden" }), _jsx(ChevronRightIcon, { className: "sm:block hidden" })] }), _jsxs("div", { className: "flex items-center", children: [_jsx("div", { className: "md:ml-4 md:flex md:items-center hidden", children: _jsxs(Menu, { as: "div", className: "relative", children: [_jsxs(Menu.Button, { type: "button", className: "hover:bg-gray-50 flex items-center py-2 pl-3 pr-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm", children: ["Month view", _jsx(ChevronDownIcon, { className: "w-5 h-5 ml-2 text-gray-400", "aria-hidden": "true" })] }), _jsx(Transition, { as: Fragment, enter: "transition ease-out duration-100", enterFrom: "transform opacity-0 scale-95", enterTo: "transform opacity-100 scale-100", leave: "transition ease-in duration-75", leaveFrom: "transform opacity-100 scale-100", leaveTo: "transform opacity-0 scale-95", children: _jsx(Menu.Items, { className: "focus:outline-none w-36 ring-1 ring-black ring-opacity-5 absolute right-0 z-10 mt-3 overflow-hidden origin-top-right bg-white rounded-md shadow-lg", children: _jsxs("div", { className: "py-1", children: [_jsx(Menu.Item, { children: ({ active }) => (_jsx("a", { href: "#", className: classNames(active
                                                                    ? "bg-gray-100 text-gray-900"
                                                                    : "text-gray-700", "block px-4 py-2 text-sm"), children: "Day view" })) }), _jsx(Menu.Item, { children: ({ active }) => (_jsx("a", { href: "#", className: classNames(active
                                                                    ? "bg-gray-100 text-gray-900"
                                                                    : "text-gray-700", "block px-4 py-2 text-sm"), children: "Week view" })) }), _jsx(Menu.Item, { children: ({ active }) => (_jsx("a", { href: "#", className: classNames(active
                                                                    ? "bg-gray-100 text-gray-900"
                                                                    : "text-gray-700", "block px-4 py-2 text-sm"), children: "Month view" })) }), _jsx(Menu.Item, { children: ({ active }) => (_jsx("a", { href: "#", className: classNames(active
                                                                    ? "bg-gray-100 text-gray-900"
                                                                    : "text-gray-700", "block px-4 py-2 text-sm"), children: "Year view" })) })] }) }) })] }) }), _jsxs(Menu, { as: "div", className: "md:hidden relative ml-6", children: [_jsxs(Menu.Button, { className: "hover:text-gray-500 flex items-center p-2 -mx-2 text-gray-400 border border-transparent rounded-full", children: [_jsx("span", { className: "sr-only", children: "Open menu" }), _jsx(EllipsisHorizontalIcon, { className: "w-5 h-5", "aria-hidden": "true" })] }), _jsx(Transition, { as: Fragment, enter: "transition ease-out duration-100", enterFrom: "transform opacity-0 scale-95", enterTo: "transform opacity-100 scale-100", leave: "transition ease-in duration-75", leaveFrom: "transform opacity-100 scale-100", leaveTo: "transform opacity-0 scale-95", children: _jsxs(Menu.Items, { className: "focus:outline-none w-36 ring-1 ring-black ring-opacity-5 absolute right-0 z-10 mt-3 overflow-hidden origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg", children: [_jsx("div", { className: "py-1", children: _jsx(Menu.Item, { children: ({ active }) => (_jsx("a", { href: "#", className: classNames(active
                                                                ? "bg-gray-100 text-gray-900"
                                                                : "text-gray-700", "block px-4 py-2 text-sm"), children: "Create event" })) }) }), _jsx("div", { className: "py-1", children: _jsx(Menu.Item, { children: ({ active }) => (_jsx("a", { href: "#", className: classNames(active
                                                                ? "bg-gray-100 text-gray-900"
                                                                : "text-gray-700", "block px-4 py-2 text-sm"), children: "Go to today" })) }) }), _jsxs("div", { className: "py-1", children: [_jsx(Menu.Item, { children: ({ active }) => (_jsx("a", { href: "#", className: classNames(active
                                                                    ? "bg-gray-100 text-gray-900"
                                                                    : "text-gray-700", "block px-4 py-2 text-sm"), children: "Day view" })) }), _jsx(Menu.Item, { children: ({ active }) => (_jsx("a", { href: "#", className: classNames(active
                                                                    ? "bg-gray-100 text-gray-900"
                                                                    : "text-gray-700", "block px-4 py-2 text-sm"), children: "Week view" })) }), _jsx(Menu.Item, { children: ({ active }) => (_jsx("a", { href: "#", className: classNames(active
                                                                    ? "bg-gray-100 text-gray-900"
                                                                    : "text-gray-700", "block px-4 py-2 text-sm"), children: "Month view" })) }), _jsx(Menu.Item, { children: ({ active }) => (_jsx("a", { href: "#", className: classNames(active
                                                                    ? "bg-gray-100 text-gray-900"
                                                                    : "text-gray-700", "block px-4 py-2 text-sm"), children: "Year view" })) })] })] }) })] })] })] }), _jsxs("div", { className: "ring-1 ring-black ring-opacity-5 lg:flex lg:flex-auto lg:flex-col lg:rounded-b-3xl shadow", children: [_jsxs("div", { className: "lg:flex-none grid grid-cols-7 gap-px text-xs font-semibold leading-6 text-center text-gray-700 bg-gray-200 border-b border-gray-300", children: [_jsxs("div", { className: "py-2 bg-white", children: ["M", _jsx("span", { className: "sm:not-sr-only sr-only", children: "on" })] }), _jsxs("div", { className: "py-2 bg-white", children: ["T", _jsx("span", { className: "sm:not-sr-only sr-only", children: "ue" })] }), _jsxs("div", { className: "py-2 bg-white", children: ["W", _jsx("span", { className: "sm:not-sr-only sr-only", children: "ed" })] }), _jsxs("div", { className: "py-2 bg-white", children: ["T", _jsx("span", { className: "sm:not-sr-only sr-only", children: "hu" })] }), _jsxs("div", { className: "py-2 bg-white", children: ["F", _jsx("span", { className: "sm:not-sr-only sr-only", children: "ri" })] }), _jsxs("div", { className: "py-2 bg-white", children: ["S", _jsx("span", { className: "sm:not-sr-only sr-only", children: "at" })] }), _jsxs("div", { className: "py-2 bg-white", children: ["S", _jsx("span", { className: "sm:not-sr-only sr-only", children: "un" })] })] }), _jsxs("div", { className: "lg:flex-auto rounded-b-3xl flex text-xs leading-6 text-gray-700 bg-gray-200", children: [_jsx("div", { className: "lg:grid lg:grid-cols-7 lg:grid-rows-6 lg:gap-px hidden w-full", children: days.map((day) => (_jsxs(Link, { to: `/admin/event-calender/add/${day.date}`, className: classNames(day.isCurrentMonth
                                        ? "bg-white"
                                        : "bg-gray-50 text-gray-50 pointer pointer-events-none ", "relative py-2 px-3"), children: [_jsx("time", { dateTime: day.date, className: day.isToday
                                                ? "flex h-6 w-6 items-center justify-center rounded-full bg-primary-grey-200  text-primary-grey-700"
                                                : undefined, children: day?.date?.split("-")?.pop()?.replace(/^0/, "") }), day.events.length > 0 && (_jsxs("ol", { className: "mt-2", children: [day.events.slice(0, 2).map((event) => (_jsx("li", { children: _jsxs("span", { className: "group flex", children: [_jsx("p", { className: " flex-auto font-medium truncate", children: event.name }), _jsx("time", { dateTime: event.datetime, className: " xl:block flex-none hidden ml-3", children: event.time })] }) }, event.id))), day.events.length > 2 && (_jsxs("li", { className: "text-gray-500", children: ["+ ", day.events.length - 2, " more"] }))] }))] }, day.date))) }), _jsx("div", { className: "isolate lg:hidden grid w-full grid-cols-7 grid-rows-6 gap-px", children: days.map((day) => (_jsxs(Link, { to: `/admin/dashboard/admin/event-calender/add/${day.date}`, type: "button", className: classNames(day.isCurrentMonth ? "bg-white" : "bg-gray-50 text-gray-50", (day.isSelected || day.isToday) && "font-semibold", !day.isSelected &&
                                        day.isToday &&
                                        "text-primary-grey-700 font-bold", !day.isSelected &&
                                        !day.isCurrentMonth &&
                                        !day.isToday &&
                                        "text-gray-500", "flex h-14 flex-col py-2 px-3 hover:bg-gray-100"), children: [_jsx("time", { dateTime: day.date, className: classNames(day.isSelected &&
                                                "flex h-6 w-6 items-center justify-center rounded-full text-gray-500", "ml-auto"), children: day?.date?.split("-")?.pop()?.replace(/^0/, "") }), _jsxs("span", { className: "sr-only", children: [day.events.length, " events"] }), day.events.length > 0 && (_jsx("span", { className: "-mx-0.5 mt-auto flex flex-wrap-reverse", children: day.events.map((event) => (_jsx("span", { className: `mx-0.5 mb-1 h-1.5 w-1.5 rounded-full ${day.isCurrentMonth ? " bg-gray-400 " : " "}` }, event.id))) }))] }, day.date))) })] })] }), selectedDay?.events.length > 0 && (_jsx("div", { className: "sm:px-6 lg:hidden px-4 py-10", children: _jsx("ol", { className: "ring-1 ring-black ring-opacity-5 overflow-hidden text-sm bg-white divide-y divide-gray-100 rounded-lg shadow", children: selectedDay.events.map((event) => (_jsx("li", { className: "group focus-within:bg-gray-50 hover:bg-gray-50 flex p-4 pr-6", children: _jsxs("div", { className: "flex-auto", children: [_jsx("p", { className: "font-semibold text-gray-900", children: event.name }), _jsxs("time", { dateTime: event.datetime, className: " flex items-center mt-2 text-gray-700", children: [_jsx(ClockIcon, { className: "w-5 h-5 mr-2 text-gray-400", "aria-hidden": "true" }), event.time] })] }) }, event.id))) }) }))] }));
}
