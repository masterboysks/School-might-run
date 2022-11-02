import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { Input, Select } from "../../../../../../../components/common/fields";
import Breadnav from "../../../../../../../components/common/Breadnav";
import Break from "../../../../../../../components/common/Break";
import facultyApi from "../../../../../../../api/admin/dashboard/admin/data-setup/facultyApi";
import { useForm } from "react-hook-form";
import { useEffect } from "react";
import subFacultyApi from "../../../../../../../api/admin/dashboard/admin/data-setup/subFacultyApi";
const pages = [
    { name: "Admin", href: "#", current: false },
    {
        name: "Date setup",
        href: "#",
        current: false,
    },
    {
        name: "Sub-Faculty",
        href: "/admin/dashboard/admin/data-setup/sub-faculty",
        current: false,
    },
    {
        name: "Add",
        href: "#",
        current: true,
    },
];
const AddSubFaculty = () => {
    const { register, handleSubmit, formState: { errors }, } = useForm();
    const [arrayFaculty, setArrayFaculty] = useState([]);
    const [error, setError] = useState("");
    useEffect(() => {
        (async () => {
            const data = await facultyApi.getAll();
            setArrayFaculty(data?.data?.data);
        })();
    }, []);
    const navigate = useNavigate();
    const onSubmit = async (d) => {
        const res = await subFacultyApi.create(d);
        res?.status === 201
            ? navigate("/admin/dashboard/admin/data-setup/sub-faculty")
            : setError("Failed to create sub-faculty");
    };
    return (_jsxs(_Fragment, { children: [_jsx(Breadnav, { pages: pages }), _jsx(Break, { title: "Add Sub-faculty" }), _jsxs("form", { className: "form-solid w-full my-6 rounded-md", onSubmit: handleSubmit(onSubmit), children: [error && (_jsxs(_Fragment, { children: [_jsx("div", { className: "text-lg font-medium text-red-600", children: error }), _jsx("br", {})] })), _jsxs("div", { className: "sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 grid grid-cols-1 gap-4", children: [_jsx("div", { children: _jsx(Select, { value: arrayFaculty, label: "Faculty*", required: true, selected: "Select", errors: errors, register: register, name: "faculty_id" }) }), _jsx("div", { children: _jsx(Input, { label: "Sub-faculty*", placeholder: "Bio", id: "subFaculty", required: true, errors: errors, register: register, name: "subfaculty_name" }) })] }), _jsx("div", { className: "sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 grid grid-cols-1 gap-4", children: _jsx("div", { className: "md:flex-row w-fit col-span-full lg:col-span-2 flex flex-col my-6 ml-auto", children: _jsxs("div", { className: " w-fit", children: [_jsx(Link, { to: "/admin/dashboard/admin/data-setup/sub-faculty", className: "secondary_btn", children: "Cancel" }), _jsx("button", { type: "submit", className: "primary_btn", children: "Save" })] }) }) })] })] }));
};
export default AddSubFaculty;
