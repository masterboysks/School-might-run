import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import Search from "@mui/icons-material/SearchOutlined";
import LanguageIcon from "@mui/icons-material/Language";
import Table from "./Table";
import Breadnav from "../../../../../../../components/common/Breadnav";
const pages = [
    { name: "Fee", href: "#", current: false },
    {
        name: "Fee statement",
        href: "#",
        current: false,
    },
    {
        name: "Class fee statement",
        href: "/fee/fee-statement/class-fee-statement",
        current: true,
    },
];
export default function ClassFeeStatement() {
    return (_jsxs(_Fragment, { children: [_jsx(Breadnav, { pages: pages }), _jsxs("form", { className: "sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 ring-1 ring-black ring-opacity-5 form-solid grid grid-cols-1 gap-4 p-4 my-6 mb-12 rounded-md shadow", children: [_jsxs("div", { className: "", children: [_jsx("label", { className: "my-6 text-sm", htmlFor: "Desigation", children: "Level*" }), _jsx("br", {}), _jsx("select", { className: "w-full p-2  cursor-pointer rounded mt-[6px]  focus:ring-primary-btn    border-primary-field shadow-md placeholder:text-primary-grey-400   text-primary-grey-700 text-sm", children: _jsx("option", { value: "Test", children: "Select" }) })] }), _jsxs("div", { className: "", children: [_jsx("label", { className: "my-6 text-sm", htmlFor: "Staff type", children: "Class/Semester*" }), _jsx("br", {}), _jsx("select", { className: "w-full p-2  cursor-pointer rounded mt-[6px]  focus:ring-primary-btn    border-primary-field shadow-md placeholder:text-primary-grey-400   text-primary-grey-700 text-sm", children: _jsx("option", { value: "Test", children: "Select" }) })] }), _jsxs("div", { className: "", children: [_jsx("label", { className: "my-6 text-sm", htmlFor: "Status", children: "Faculty" }), _jsx("br", {}), _jsx("select", { className: "w-full p-2  cursor-pointer rounded mt-[6px]  focus:ring-primary-btn    border-primary-field shadow-md placeholder:text-primary-grey-400   text-primary-grey-700 text-sm", children: _jsx("option", { value: "Test", children: "Select" }) })] }), _jsxs("div", { className: "", children: [_jsx("label", { className: "my-6 text-sm", htmlFor: "Order By", children: "Section*" }), _jsx("br", {}), _jsx("select", { className: "w-full p-2  cursor-pointer rounded mt-[6px]  focus:ring-primary-btn     border-primary-field shadow-md placeholder:text-primary-grey-400   text-primary-grey-700 text-sm", children: _jsx("option", { value: "Test", children: "Select" }) })] }), _jsx("div", { className: "h-fit w-fit bg-primary-btn lg:col-span-2 xl:col-span-full sm:box-content col-span-full box-border px-4 py-3 mt-auto ml-auto text-white rounded cursor-pointer", children: _jsx(Search, { className: "w-4 mx-auto" }) })] }), _jsx("div", { className: "text-primary-btn w-full", children: _jsxs("div", { className: "w-fit flex items-center ml-auto", children: [_jsx("div", { className: "", children: "Publish invoice" }), _jsx("div", { className: " text-primary-btn ml-2", children: _jsx(LanguageIcon, {}) })] }) }), _jsx(Table, {})] }));
}
