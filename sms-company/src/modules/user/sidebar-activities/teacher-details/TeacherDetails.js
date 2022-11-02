import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import one from "../../welcome/three.jpg";
const arrayTeacher = [
    {
        name: "Rajni Shing",
        classTeacher: false,
        picture: one,
        subject: "Nepali",
    },
    {
        name: "Rakesh Shing",
        classTeacher: true,
        picture: one,
        subject: "Englisg",
    },
    {
        name: "JKHDjkfs Shing",
        classTeacher: false,
        picture: one,
        subject: "jdhsfj",
    },
    {
        name: "<MASJNJKfhds> Shing",
        classTeacher: false,
        picture: one,
        subject: "nadkshkj",
    },
    {
        name: "Raasgdfsjni Shing",
        classTeacher: false,
        picture: one,
        subject: "Nepali",
    },
    {
        name: "Rajafgfdgnifdhgfhfgh Shing",
        classTeacher: false,
        picture: one,
        subject: "Nepali",
    },
];
export default function TeacherDetails() {
    return (_jsxs(_Fragment, { children: [_jsx("div", { className: "text-primary-grey-700 text-lg font-medium  ", children: "Teacher details" }), _jsx("div", { className: "grid grid-cols-1 gap-4 md:grid-cols-2 my-6", children: arrayTeacher.map((curr) => (_jsxs("div", { className: "border rounded p-3 flex gap-4 items-center", children: [_jsx("div", { className: "rounded object-cover overflow-hidden", children: _jsx("img", { src: curr.picture, alt: curr.name }) }), _jsxs("div", { className: " space-y-3", children: [_jsxs("div", { children: [_jsx("span", { className: "text-primary-grey-700 font-medium", children: curr.name }), curr.classTeacher && (_jsxs("span", { className: "text-primary-grey-600 ", children: ["  ", "(Class Teacher)"] }))] }), _jsxs("div", { className: "", children: ["Subject:", _jsx("span", { className: "text-primary-grey-700", children: curr.subject })] })] })] }, curr.name + curr.id))) })] }));
}
