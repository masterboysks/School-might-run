import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import Search from "@mui/icons-material/SearchOutlined";
import Breadnav from "../../../../../../../components/common/Breadnav";
import Table from "./Table";
const pages = [
    { name: "Fee", href: "#", current: false },
    {
        name: "Fee statement",
        href: "#",
        current: false,
    },
    {
        name: "Student fee statement",
        href: "/fee/fee-statement/student-fee-statement",
        current: true,
    },
];
export default function StudentFeeStatement() {
    return (_jsxs(_Fragment, { children: [_jsx(Breadnav, { pages: pages }), _jsxs("form", { className: "sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 ring-1 ring-black ring-opacity-5 form-solid grid grid-cols-1 gap-4 p-4 my-6 rounded-md shadow", children: [_jsxs("div", { className: "", children: [_jsx("label", { className: "my-6 text-sm", htmlFor: "Desigation", children: "Student ID" }), _jsx("br", {}), _jsx("input", { placeholder: "557332", type: "text", className: "w-full p-2  cursor-pointer rounded mt-[6px]  focus:ring-primary-btn    border-primary-field shadow-md placeholder:text-primary-grey-400   text-primary-grey-700 text-sm" })] }), _jsxs("div", { className: "", children: [_jsx("label", { className: "my-6 text-sm", htmlFor: "Desigation", children: "Student name" }), _jsx("br", {}), _jsx("input", { placeholder: "557332", type: "text", className: "w-full p-2  cursor-pointer rounded mt-[6px]  focus:ring-primary-btn    border-primary-field shadow-md placeholder:text-primary-grey-400   text-primary-grey-700 text-sm" })] }), _jsxs("div", { className: "", children: [_jsx("label", { className: "my-6 text-sm", htmlFor: "Staff type", children: "Level" }), _jsx("br", {}), _jsx("select", { className: "w-full p-2  cursor-pointer rounded mt-[6px]  focus:ring-primary-btn    border-primary-field shadow-md placeholder:text-primary-grey-400   text-primary-grey-700 text-sm", children: _jsx("option", { value: "Test", children: "Select" }) })] }), _jsxs("div", { className: "", children: [_jsx("label", { className: "my-6 text-sm", htmlFor: "Status", children: "Class/Semester" }), _jsx("br", {}), _jsx("select", { className: "w-full p-2  cursor-pointer rounded mt-[6px]  focus:ring-primary-btn    border-primary-field shadow-md placeholder:text-primary-grey-400   text-primary-grey-700 text-sm", children: _jsx("option", { value: "Test", children: "Select" }) })] }), _jsxs("div", { className: "", children: [_jsx("label", { className: "my-6 text-sm", htmlFor: "Order By", children: "Faculty" }), _jsx("br", {}), _jsx("select", { className: "w-full p-2  cursor-pointer rounded mt-[6px]  focus:ring-primary-btn     border-primary-field shadow-md placeholder:text-primary-grey-400   text-primary-grey-700 text-sm", children: _jsx("option", { value: "Test", children: "Select" }) })] }), _jsxs("div", { className: "", children: [_jsx("label", { className: "my-6 text-sm", htmlFor: "Order By", children: "Section" }), _jsx("br", {}), _jsx("select", { className: "w-full p-2  cursor-pointer rounded mt-[6px]  focus:ring-primary-btn     border-primary-field shadow-md placeholder:text-primary-grey-400   text-primary-grey-700 text-sm", children: _jsx("option", { value: "Test", children: "Select" }) })] }), _jsx("div", { className: "h-fit w-fit bg-primary-btn lg:col-span-3 xl:col-span-2 sm:box-content col-span-full box-border px-4 py-3 mt-auto ml-auto text-white rounded cursor-pointer", children: _jsx(Search, { className: "w-4 mx-auto" }) })] }), _jsx(Table, {})] }));
}
