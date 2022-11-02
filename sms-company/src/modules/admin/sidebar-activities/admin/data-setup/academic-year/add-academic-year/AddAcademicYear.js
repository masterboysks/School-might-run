import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import academicyearApi from "../../../../../../../api/admin/dashboard/admin/data-setup/academicyearApi";
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
        name: "Academic year",
        href: "/admin/dashboard/admin/data-setup/academic-year",
        current: false,
    },
    {
        name: "Add",
        href: "/admin/dashboard/admin/data-setup/academic-year/add",
        current: true,
    },
];
const AddAcademicYear = () => {
    const { register, handleSubmit, control, reset, formState: { errors }, } = useForm();
    const [error, setError] = useState("");
    const navigate = useNavigate();
    const onSubmit = async (d) => {
        const res = await academicyearApi.create(d);
        res?.status === 201
            ? navigate("/admin/dashboard/admin/data-setup/designation")
            : setError("Failed to create Academic year");
    };
    return (_jsxs(_Fragment, { children: [_jsx(Breadnav, { pages: pages }), _jsx(Break, { title: "Add Academic year" }), _jsxs("form", { className: "form-solid w-full my-6 rounded-md", onSubmit: handleSubmit(onSubmit), children: [error && (_jsxs(_Fragment, { children: [_jsx("div", { className: "text-lg font-medium text-red-600", children: error }), _jsx("br", {})] })), _jsxs("div", { className: "sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 grid grid-cols-1 gap-4", children: [_jsx("div", { children: _jsx(YearInput, { register: register, name: "academic_year", label: "Academic year*", required: true, errors: errors }) }), _jsx("div", { className: "col-span-full", children: _jsx(Checkbox, { register: register, name: "is_running", id: "Form_label_45584578", label: "is running?" }) })] }), _jsx("div", { className: "sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 grid grid-cols-1 gap-4", children: _jsx("div", { className: "md:flex-row w-fit flex flex-col my-6 ml-auto", children: _jsxs("div", { className: " w-fit my-auto", children: [_jsx(Link, { to: "/admin/dashboard/admin/data-setup/academic-year", className: "secondary_btn", children: "Cancel" }), _jsx("button", { type: "submit", className: "primary_btn", children: "Save" })] }) }) })] })] }));
};
export default AddAcademicYear;
