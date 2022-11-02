import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import fiscalYearApi from "../../../../../../../api/admin/dashboard/admin/data-setup/fiscalYearApi";
import Breadnav from "../../../../../../../components/common/Breadnav";
import Break from "../../../../../../../components/common/Break";
import { Checkbox, YearInput, } from "../../../../../../../components/common/fields";
const pages = [
    { name: "Admin", href: "#", current: false },
    {
        name: "Date setup",
        href: "#",
        current: false,
    },
    {
        name: "Fiscal year",
        href: "/admin/dashboard/admin/data-setup/fiscal-year",
        current: false,
    },
    {
        name: "Add",
        href: "/admin/dashboard/admin/data-setup/fiscal-year/add",
        current: true,
    },
];
const AddFiscalYear = () => {
    const { register, handleSubmit, control, reset, formState: { errors }, } = useForm();
    const [error, setError] = useState("");
    const navigate = useNavigate();
    const onSubmit = async (d) => {
        console.log(d);
        const res = await fiscalYearApi.create(d);
        res?.status === 201
            ? navigate("/admin/dashboard/admin/data-setup/designation")
            : setError("Failed to create Fiscal year");
    };
    return (_jsxs(_Fragment, { children: [_jsx(Breadnav, { pages: pages }), _jsx(Break, { title: "Add fiscal year" }), _jsxs("form", { className: "form-solid w-full my-6 rounded-md", onSubmit: handleSubmit(onSubmit), children: [error && (_jsxs(_Fragment, { children: [_jsx("div", { className: "text-lg font-medium text-red-600", children: error }), _jsx("br", {})] })), _jsxs("div", { className: "sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 grid grid-cols-1 gap-4", children: [_jsx("div", { children: _jsx(YearInput, { label: "Fiscal year start*", name: "start_year", register: register, errors: errors, required: true }) }), _jsx("div", { children: _jsx(YearInput, { label: "Fiscal year end*", name: "end_year", register: register, errors: errors, required: true }) }), _jsx("div", { className: "col-span-full", children: _jsx(Checkbox, { register: register, name: "is_running", label: "is running?", id: "isRunning_form_54524" }) })] }), _jsx("div", { className: "sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 grid grid-cols-1 gap-4", children: _jsx("div", { className: "md:flex-row sm:col-span-2 w-fit flex flex-col my-6 ml-auto", children: _jsxs("div", { className: " w-fit my-auto", children: [_jsx(Link, { to: "/admin/dashboard/admin/data-setup/fiscal-year", className: "secondary_btn", children: "Cancel" }), _jsx("button", { type: "submit", className: "primary_btn", children: "Save" })] }) }) })] })] }));
};
export default AddFiscalYear;
