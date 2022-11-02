import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Fragment } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import staffAPI from "../../../../../../api/admin/dashboard/staff/staffAPI";
import RenderTable from "./RenderTable";
export default function Table({ data }) {
    const { register, watch, handleSubmit, formState: { errors }, } = useForm();
    const onSubmit = async (data) => {
        console.log(data);
        const res = await staffAPI.attendance(data);
    };
    return (_jsxs("form", { onSubmit: handleSubmit(onSubmit), className: "w-full ", children: [_jsx("div", { className: "my-6", children: _jsx("div", { className: " ring-1 ring-black ring-opacity-5 overflow-x-auto rounded-lg shadow", children: _jsx("div", { className: "inline-block w-full align-middle", children: _jsx("div", { className: " w-full rounded-lg", children: _jsxs("table", { className: "min-w-full divide-y divide-gray-300 table-auto", children: [_jsx("thead", { className: "bg-gray-50", children: _jsxs("tr", { children: [_jsx("th", { scope: "col", className: "px-3 py-3.5  text-left text-sm font-medium text-primary-grey-700    ", children: "Staff Id" }), _jsx("th", { scope: "col", className: "px-3 py-3.5  text-left text-sm font-medium text-primary-grey-700  ", children: "Staff name" }), _jsx("th", { scope: "col", className: "px-3 py-3.5  text-left text-sm font-medium text-primary-grey-700  ", children: "Department" }), _jsx("th", { scope: "col", className: "px-3 py-3.5  text-left text-sm font-medium text-primary-grey-700  ", children: "Designation" }), _jsx("th", { scope: "col", className: "px-3 py-3.5 w-10 text-left  text-sm font-medium text-primary-grey-700  ", children: "Present" }), _jsx("th", { scope: "col", className: "px-3 py-3.5 w-10 text-left  text-sm font-medium text-primary-grey-700  ", children: "Absent" }), _jsx("th", { scope: "col", className: "px-3 py-3.5 w-10 text-left  text-sm font-medium text-primary-grey-700  ", children: "Half leave" }), _jsx("th", { scope: "col", className: "px-3 py-3.5 w-10  text-left text-sm font-medium text-primary-grey-700  ", children: "Reason" })] }) }), _jsx("tbody", { className: "bg-white divide-y divide-gray-200", children: data?.map((curr) => {
                                            return (_jsx(Fragment, { children: _jsx(RenderTable, { curr: curr, register: register, errors: errors, watch: watch }) }, curr.staff_id));
                                        }) })] }) }) }) }) }), _jsxs("div", { className: " w-fit ml-auto", children: [_jsx(Link, { to: "#", className: "secondary_btn", children: "Cancel" }), _jsx("button", { type: "submit", className: "primary_btn", children: "Save" })] })] }));
}
