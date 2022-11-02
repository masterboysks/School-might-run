import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { Input, Select } from "../../../../../../../components/common/fields";
import Breadnav from "../../../../../../../components/common/Breadnav";
import Break from "../../../../../../../components/common/Break";
import { useEffect } from "react";
import levelApi from "../../../../../../../api/admin/dashboard/admin/data-setup/levelApi";
import { useForm } from "react-hook-form";
import facultyApi from "../../../../../../../api/admin/dashboard/admin/data-setup/facultyApi";
const pages = [
    { name: "Admin", href: "#", current: false },
    {
        name: "Date setup",
        href: "#",
        current: false,
    },
    {
        name: "Faculty",
        href: "/admin/dashboard/admin/data-setup/faculty",
        current: false,
    },
    {
        name: "Add",
        href: "#",
        current: true,
    },
];
const AddFaculty = () => {
    const { register, handleSubmit, formState: { errors }, } = useForm();
    const [arrayLevel, setArrayLevel] = useState([]);
    const [error, setError] = useState("");
    useEffect(() => {
        (async () => {
            const data = await levelApi.getAll();
            setArrayLevel(data?.data?.data);
        })();
    }, []);
    const navigate = useNavigate();
    const onSubmit = async (d) => {
        const res = await facultyApi.create(d);
        res?.status === 201
            ? navigate("/admin/dashboard/admin/data-setup/faculty")
            : setError("Failed to create faculty");
    };
    return (_jsxs(_Fragment, { children: [_jsx(Breadnav, { pages: pages }), _jsx(Break, { title: "Add faculty" }), _jsxs("form", { className: "form-solid w-full my-6 rounded-md", onSubmit: handleSubmit(onSubmit), children: [error && (_jsxs(_Fragment, { children: [_jsx("div", { className: "text-lg font-medium text-red-600", children: error }), _jsx("br", {})] })), _jsxs("div", { className: "sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 grid grid-cols-1 gap-4", children: [_jsx("div", { children: _jsx(Select, { label: "Level*", value: arrayLevel, name: "level_id", required: true, register: register, errors: errors }) }), _jsx("div", { children: _jsx(Input, { type: "text", placeholder: "Science", name: "faculty_name", label: "Faculty*", errors: errors, register: register }) })] }), _jsx("div", { className: "sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 grid grid-cols-1 gap-4", children: _jsx("div", { className: "md:flex-row w-fit col-span-full lg:col-span-2 flex flex-col my-6 ml-auto", children: _jsxs("div", { className: " w-fit", children: [_jsx(Link, { to: "/admin/dashboard/admin/data-setup/faculty", className: "secondary_btn", children: "Cancel" }), _jsx("button", { type: "submit", className: "primary_btn", children: "Save" })] }) }) })] })] }));
};
export default AddFaculty;
