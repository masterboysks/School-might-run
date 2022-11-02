import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { ClockIcon } from "@heroicons/react/24/outline";
const routines = [
    {
        name: "Preboard examination routine",
        days: 45,
        routine: [
            {
                date: "kjfdjfds",
                name: "Nepalu",
            },
            {
                date: "kjfdjfds",
                name: "jkhdsjh",
            },
            {
                date: "kjfdjfds",
                name: "kldjfklj",
            },
            {
                date: "kjfdjfds",
                name: "jkhfs",
            },
        ],
    },
    {
        name: "Preboard examination routigfdshne",
        days: 45,
        routine: [
            {
                date: "kjfdjfds",
                name: "Nepalu",
            },
            {
                date: "kjfdjfds",
                name: "jkhdsjh",
            },
            {
                date: "kjfdjfds",
                name: "kldjfklj",
            },
            {
                date: "kjfdjfds",
                name: "jkhfs",
            },
        ],
    },
    {
        name: "Preboard examination rouadgtine",
        days: 45,
        routine: [
            {
                date: "kjfdjfds",
                name: "Nepalu",
            },
            {
                date: "kjfdjfds",
                name: "jkhdsjh",
            },
            {
                date: "kjfdjfds",
                name: "kldjfklj",
            },
            {
                date: "kjfdjfds",
                name: "jkhfs",
            },
        ],
    },
    {
        name: "Preboard examination ewrtgdfg",
        days: 45,
        routine: [
            {
                date: "kjfdjfds",
                name: "Nepalu",
            },
            {
                date: "kjfdjfds",
                name: "jkhdsjh",
            },
            {
                date: "kjfdjfds",
                name: "kldjfklj",
            },
            {
                date: "kjfdjfds",
                name: "jkhfs",
            },
        ],
    },
    {
        name: "Preboard examinatio345rewn routine",
        days: 45,
        routine: [
            {
                date: "kjfdjfds",
                name: "Nepalu",
            },
            {
                date: "kjfdjfds",
                name: "jkhdsjh",
            },
            {
                date: "kjfdjfds",
                name: "kldjfklj",
            },
            {
                date: "kjfdjfds",
                name: "jkhfs",
            },
        ],
    },
    {
        name: "Preboard examinatiagre543on routine",
        days: 45,
        routine: [
            {
                date: "kjfdjfds",
                name: "Nepalu",
            },
            {
                date: "kjfdjfds",
                name: "jkhdsjh",
            },
            {
                date: "kjfdjfds",
                name: "kldjfklj",
            },
            {
                date: "kjfdjfds",
                name: "jkhfs",
            },
        ],
    },
    {
        name: "Preboard eaw32t4agxamination routine",
        days: 45,
        routine: [
            {
                date: "kjfdjfds",
                name: "Nepalu",
            },
            {
                date: "kjfdjfds",
                name: "jkhdsjh",
            },
            {
                date: "kjfdjfds",
                name: "kldjfklj",
            },
            {
                date: "kjfdjfds",
                name: "jkhfs",
            },
        ],
    },
];
export default function ExamRoutine() {
    return (_jsxs(_Fragment, { children: [_jsx("div", { className: "text-primary-grey-700 text-lg font-medium  ", children: "Exam routine" }), _jsx("div", { className: "mt-11 lg:w-2/3 w-full", children: routines.map((curr, i) => (_jsxs("div", { className: "border p-3 rounded-md  mt-9", children: [_jsxs("div", { className: "flex", children: [_jsx("div", { className: "text-red-500 h-5 w-5 my-auto mr-3", children: _jsx(ClockIcon, {}) }), _jsxs("div", { className: "", children: [curr.days, " days ago"] })] }), _jsxs("div", { className: "flex items-center justify-between", children: [_jsx("div", { className: "font-medium text-base ", children: curr.name }), _jsx("button", { className: " rounded px-3 py-1.5 primary_btn", children: "View" })] })] }, curr.name))) })] }));
}
