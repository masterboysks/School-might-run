import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useState } from "react";
import three from "./three.jpg";
import two from "./two.jpg";
import { RadioGroup } from "@headlessui/react";
import { CheckCircleIcon } from "@heroicons/react/20/solid";
import { useNavigate } from "react-router-dom";
const arrayStudents = [
    {
        name: "Bobby koirala",
        class: "Class 7",
        section: "B",
        picture: three,
    },
    {
        name: "Whinni koirala",
        class: "Class 8",
        section: "B",
        picture: two,
    },
    {
        name: "Whinni koirala",
        class: "Class 8",
        section: "B",
        picture: two,
    },
    {
        name: "Whinni koirala",
        class: "Class 8",
        section: "B",
        picture: two,
    },
    {
        name: "Whinni koirala",
        class: "Class 8",
        section: "B",
        picture: two,
    },
    {
        name: "Whinni koirala",
        class: "Class 8",
        section: "B",
        picture: two,
    },
    {
        name: "Whinni koirala",
        class: "Class 8",
        section: "B",
        picture: two,
    },
    {
        name: "Whinni koirala",
        class: "Class 8",
        section: "B",
        picture: two,
    },
    {
        name: "Whinni koirala",
        class: "Class 8",
        section: "B",
        picture: two,
    },
    {
        name: "Whinni koirala",
        class: "Class 8",
        section: "B",
        picture: two,
    },
    {
        name: "Whinni koirala",
        class: "Class 8",
        section: "B",
        picture: two,
    },
    {
        name: "Whinni koirala",
        class: "Class 8",
        section: "B",
        picture: two,
    },
    {
        name: "Whinni koirala",
        class: "Class 8",
        section: "B",
        picture: two,
    },
    {
        name: "Whinni koirala",
        class: "Class 8",
        section: "B",
        picture: two,
    },
    {
        name: "Whinni koirala",
        class: "Class 8",
        section: "B",
        picture: two,
    },
    {
        name: "Whinni koirala",
        class: "Class 8",
        section: "B",
        picture: two,
    },
    {
        name: "Whinni koirala",
        class: "Class 8",
        section: "B",
        picture: two,
    },
];
function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}
export default function Welcome() {
    const [selectedMailingLists, setSelectedMailingLists] = useState(arrayStudents[0]);
    const navigate = useNavigate();
    const handleClick = () => {
        navigate("/parent/dashboard");
    };
    return (_jsx("div", { className: "text-center flex items-center justify-center  text-primary-grey-600 min-h-screen", children: _jsxs("div", { className: "w-11/12 sm:w-10/12 lg:8/12 xl:1/2 h-fit ", children: [_jsx("div", { className: "flex justify-center", children: _jsxs(RadioGroup, { value: selectedMailingLists, onChange: setSelectedMailingLists, children: [_jsx(RadioGroup.Label, { className: "text-lg font-medium tracking-wide my-6", children: "Select Student" }), _jsx("div", { className: "mt-4 grid grid-cols-1 gap-y-6 sm:grid-cols-2  sm:gap-4", children: arrayStudents.map((curr) => (_jsx(RadioGroup.Option, { value: curr, className: ({ checked, active }) => classNames(checked
                                        ? "border-transparent"
                                        : "border-primary-grey-300", active
                                        ? "border-primary-grey-400 ring-2 ring-primary-grey-400"
                                        : "", "relative flex cursor-pointer rounded-lg border bg-white p-4 shadow-sm focus:outline-none w-40"), children: ({ checked, active }) => (_jsxs(_Fragment, { children: [_jsxs("div", { className: "w-full", children: [_jsx("div", { className: "flex  items-center justify-center w-full", children: _jsx(RadioGroup.Label, { as: "div", className: " h-10 object-cover rounded-full overflow-hidden  w-10", children: _jsx("img", { alt: curr.name, src: curr.picture, className: "w-fit" }) }) }), _jsx(RadioGroup.Description, { as: "div", className: "mt-1 font-semibold text-lg text-center  text-primary-grey-700 w-full", children: curr.name }), _jsxs(RadioGroup.Description, { as: "div", className: "mt-3 text-sm  text-primary-grey-700 ", children: [curr.class, "-", curr.section] })] }), _jsx(CheckCircleIcon, { className: classNames(!checked
                                                    ? "text-primary-grey-300"
                                                    : "text-primary-grey-400", "h-5 w-5  absolute -top-2 -right-2 z-10 bg-white rounded"), "aria-hidden": "true" }), _jsx("span", { className: classNames(active ? "border" : "border-2", checked
                                                    ? "border-primary-grey-400"
                                                    : "border-transparent", "pointer-events-none absolute -inset-px rounded-lg"), "aria-hidden": "true" })] })) }, curr.name))) })] }) }), _jsx("div", { className: "flex items-center justify-center my-5 mt-9", children: _jsx("button", { className: "primary_btn", onClick: handleClick, children: "Continue" }) })] }) }));
}
