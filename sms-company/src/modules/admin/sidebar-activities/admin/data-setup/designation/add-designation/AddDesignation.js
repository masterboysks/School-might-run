import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect } from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import departmentApi from "../../../../../../../api/admin/dashboard/admin/data-setup/departmentApi";
import designationApi from "../../../../../../../api/admin/dashboard/admin/data-setup/designationApi";
import Breadnav from "../../../../../../../components/common/Breadnav";
import Break from "../../../../../../../components/common/Break";
import { Input, Select } from "../../../../../../../components/common/fields";
const pages = [
    { name: "Admin", href: "#", current: false },
    {
        name: "Date setup",
        href: "#",
        current: false,
    },
    {
        name: "Designation",
        href: "/admin/dashboard/admin/data-setup/designation",
        current: false,
    },
    {
        name: "Add",
        href: "/admin/dashboard/admin/data-setup/designation/add",
        current: true,
    },
];
const AddDesignation = () => {
    const { register, handleSubmit, formState: { errors }, } = useForm();
    const [arrayDepartment, setArrayDepartment] = useState([]);
    const [error, setError] = useState("");
    useEffect(() => {
        (async () => {
            const data = await departmentApi.getAll();
            setArrayDepartment(data?.data?.data);
        })();
    }, []);
    const navigate = useNavigate();
    const onSubmit = async (d) => {
        const res = await designationApi.create(d);
        res?.status === 201
            ? navigate("/admin/dashboard/admin/data-setup/designation")
            : setError("Failed to create designation");
    };
    return (_jsxs(_Fragment, { children: [_jsx(Breadnav, { pages: pages }), _jsx(Break, { title: "Add designation" }), _jsxs("form", { className: "form-solid w-full my-6 rounded-md", onSubmit: handleSubmit(onSubmit), children: [error && (_jsxs(_Fragment, { children: [_jsx("div", { className: "text-lg font-medium text-red-600", children: error }), _jsx("br", {})] })), _jsxs("div", { className: "sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 grid grid-cols-1 gap-4", children: [_jsx("div", { children: _jsx(Select, { label: "Department*", value: arrayDepartment, register: register, name: "department_id", errors: errors, required: true }) }), _jsx("div", { children: _jsx(Input, { type: "text", label: "Designation*", register: register, errors: errors, name: "designation_name", placeholder: "Manager", required: true }) })] }), _jsx("div", { className: "sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 grid grid-cols-1 gap-4", children: _jsx("div", { className: "md:flex-row w-fit sm:col-span-2 flex flex-col my-6 ml-auto", children: _jsxs("div", { className: " w-fit my-auto", children: [_jsx(Link, { to: "/admin/dashboard/admin/data-setup/university-board", className: "secondary_btn", children: "Cancel" }), _jsx("button", { type: "submit", className: "primary_btn", children: "Save" })] }) }) })] })] }));
};
export default AddDesignation;
