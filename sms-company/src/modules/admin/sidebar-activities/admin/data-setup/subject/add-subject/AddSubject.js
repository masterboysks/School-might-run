import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { Input, Radio, Select, } from "../../../../../../../components/common/fields";
import Breadnav from "../../../../../../../components/common/Breadnav";
import Break from "../../../../../../../components/common/Break";
import { useEffect } from "react";
import levelApi from "../../../../../../../api/admin/dashboard/admin/data-setup/levelApi";
import { useForm } from "react-hook-form";
import subjectApi from "../../../../../../../api/admin/dashboard/admin/data-setup/subjectApi";
const pages = [
    { name: "Admin", href: "#", current: false },
    {
        name: "Date setup",
        href: "#",
        current: false,
    },
    {
        name: "Subject",
        href: "/admin/dashboard/admin/data-setup/subject",
        current: false,
    },
    {
        name: "Add",
        href: "/admin/dashboard/admin/data-setup/subject/add",
        current: true,
    },
];
const arraySubjectTypes = [
    { name: "Compulsary subject", id: 1 },
    { name: "Elective subject", id: 2 },
];
const AddSubject = () => {
    const { register, handleSubmit, formState: { errors }, } = useForm();
    const [arrayLevel, setArrayLevel] = useState([]);
    const [error, setError] = useState("");
    const navigate = useNavigate();
    const onSubmit = async (d) => {
        console.log(d);
        const res = await subjectApi.create(d);
        console.log(res);
        res?.status === 201
            ? navigate("/admin/dashboard/admin/data-setup/subject")
            : setError("Failed to create subject");
    };
    useEffect(() => {
        (async () => {
            const data = await levelApi.getAll();
            setArrayLevel(data?.data?.data);
        })();
    }, []);
    return (_jsxs(_Fragment, { children: [_jsx(Breadnav, { pages: pages }), _jsx(Break, { title: "Add subject" }), _jsxs("form", { className: "form-solid w-full my-6 rounded-md", onSubmit: handleSubmit(onSubmit), children: [error && (_jsxs(_Fragment, { children: [_jsx("div", { className: "text-lg font-medium text-red-600", children: error }), _jsx("br", {})] })), _jsxs("div", { className: "sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 grid grid-cols-1 gap-4", children: [_jsx("div", { children: _jsx(Select, { label: "Level*", value: arrayLevel, register: register, errors: errors, required: true, name: "level_id" }) }), _jsx("div", { children: _jsx(Input, { label: "Subject*", placeholder: "Science", register: register, errors: errors, required: true, name: "subject_name" }) }), _jsx("div", { children: _jsx(Input, { label: "Credit hours*", type: "number", placeholder: "80", name: "credit_hours", register: register, required: true, errors: errors }) }), _jsx("div", { className: "col-span-full flex my-3 space-x-4", children: _jsx(Radio, { value: arraySubjectTypes, register: register, errors: errors, required: true, name: "subject_type" }) })] }), _jsx("div", { className: "sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-4 grid grid-cols-1 gap-4", children: _jsx("div", { className: "md:flex-row col-span-full xl:col-span-3 flex flex-col my-6 ml-auto", children: _jsxs("div", { className: " w-fit", children: [_jsx(Link, { to: "/admin/dashboard/admin/data-setup/subject", className: "secondary_btn", children: "Cancel" }), _jsx("button", { type: "submit", className: "primary_btn", children: "Save" })] }) }) })] })] }));
};
export default AddSubject;
