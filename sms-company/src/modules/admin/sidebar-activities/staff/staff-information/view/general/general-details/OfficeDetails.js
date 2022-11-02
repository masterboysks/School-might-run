import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useContext } from "react";
import { Link } from "react-router-dom";
import StaffGeneralDetailsView from "../../../../../../../../contex/admin/staff/StaffGeneralDetailsView";
export default function OfficeDetails() {
    const generaldetails = useContext(StaffGeneralDetailsView);
    const data = generaldetails?.data?.office;
    console.log(data);
    return (_jsxs("div", { className: "my-6", children: [_jsxs("div", { className: "sm:flex sm:items-center my-3", children: [_jsx("div", { className: "sm:flex-auto", children: _jsx("h1", { className: "text-primary-grey-700 text-xl font-semibold", children: "Office details" }) }), _jsx("div", { className: "sm:mt-0 sm:ml-16 sm:flex-none mt-4", children: _jsx(Link, { to: "add", className: "primary_btn", children: "Edit" }) })] }), _jsxs("div", { className: "", children: [_jsxs("div", { className: "flex flex-wrap justify-between", children: [_jsx("div", { className: "font-medium text-primary-grey-700  tracking-wide", children: "Staff type:" }), _jsx("div", { className: "capitalize", children: data?.type })] }), _jsxs("div", { className: "flex flex-wrap justify-between", children: [_jsx("div", { className: "font-medium text-primary-grey-700  tracking-wide", children: "Username:" }), _jsx("div", { children: data?.username })] }), _jsxs("div", { className: "flex flex-wrap justify-between", children: [_jsx("div", { className: "font-medium text-primary-grey-700  tracking-wide", children: "Department:" }), _jsx("div", { children: data?.department_name })] }), _jsxs("div", { className: "flex flex-wrap justify-between", children: [_jsx("div", { className: "font-medium text-primary-grey-700  tracking-wide", children: "Designation:" }), _jsx("div", { children: data?.designation_name })] })] })] }));
}
