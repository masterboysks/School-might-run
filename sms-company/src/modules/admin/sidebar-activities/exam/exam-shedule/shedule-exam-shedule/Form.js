import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import Search from "@mui/icons-material/SearchOutlined";
import { GlobeAltIcon, PrinterIcon } from "@heroicons/react/20/solid";
import { Link } from "react-router-dom";
import { Select } from "../../../../../../components/common/oldFields";
import { useState } from "react";
export default function Form() {
    const arrayClassSemester = ["fdjh", "fdsjkhg", "dsjhfg"];
    const arrayFaculty = ["fdjh", "fdsjkhg", "dsjhfg"];
    const [classSemester, setClassSemester] = useState("Select");
    const [faculty, setFaculty] = useState("Select");
    return (_jsxs(_Fragment, { children: [_jsx("div", { className: "flex items-center justify-between my-6", children: _jsxs("div", { className: " flex items-center gap-3", children: [_jsxs("div", { className: "flex items-center", children: [_jsx("div", { className: "text-primary-btn font-semibold", children: "Publish" }), _jsx("div", { className: "icon text-primary-btn w-5 ml-2", children: _jsx(GlobeAltIcon, { fontSize: "medium" }) })] }), _jsx("div", { className: "text-primary-btn font-semibold", children: "Print" }), _jsx("div", { className: "icon text-primary-btn w-5", children: _jsx(PrinterIcon, {}) }), _jsx("div", { className: "", children: _jsx(Link, { to: "add", className: "primary_btn", children: "Add" }) })] }) }), _jsx("form", { className: "form-solid w-full my-6 rounded-md", children: _jsxs("div", { className: "sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 grid grid-cols-1 gap-4", children: [_jsx("div", { className: "", children: _jsx(Select, { label: "CLass/Semester", value: arrayClassSemester, setSelected: setClassSemester, selected: classSemester }) }), _jsx("div", { className: "", children: _jsx(Select, { label: "Faculty", value: arrayFaculty, selected: faculty, setSelected: setFaculty }) }), _jsx("div", { className: "h-fit col-span-full lg:col-auto mt-auto -mb-1", children: _jsx("div", { className: "h-fit w-fit bg-primary-btn sm:box-content col-span-full lg:ml-0 sm:py-2 box-border px-4 py-3 mt-auto mb-1 ml-auto text-white rounded cursor-pointer", children: _jsx(Search, { className: "w-4 mx-auto" }) }) })] }) })] }));
}
