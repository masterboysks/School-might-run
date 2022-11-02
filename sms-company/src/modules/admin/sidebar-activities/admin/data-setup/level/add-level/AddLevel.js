import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect } from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import levelApi from "../../../../../../../api/admin/dashboard/admin/data-setup/levelApi";
import universityBoardApi from "../../../../../../../api/admin/dashboard/admin/data-setup/universityBoardApi";
import Breadnav from "../../../../../../../components/common/Breadnav";
import Break from "../../../../../../../components/common/Break";
import { Checkbox, Input, Select, } from "../../../../../../../components/common/fields";
const pages = [
    { name: "Admin", href: "#", current: false },
    {
        name: "Date setup",
        href: "#",
        current: false,
    },
    {
        name: "Level",
        href: "/admin/dashboard/admin/data-setup/level",
        current: false,
    },
    {
        name: "Add",
        href: "#",
        current: true,
    },
];
const AddLevel = () => {
    const { register, handleSubmit, formState: { errors }, } = useForm();
    const [error, setError] = useState("");
    const [arrayUniversity, setArrayUniversity] = useState([]);
    useEffect(() => {
        (async () => {
            const data = await universityBoardApi.get();
            setArrayUniversity(data?.data?.data?.data);
        })();
    }, []);
    const navigate = useNavigate();
    const onSubmit = async (d) => {
        console.log(d);
        const res = await levelApi.create(d);
        console.log(res);
        res?.status === 201
            ? navigate("/admin/dashboard/admin/data-setup/level")
            : setError("Failed to create Level");
    };
    return (_jsxs(_Fragment, { children: [_jsx(Breadnav, { pages: pages }), _jsx(Break, { title: "Add Level and Board details" }), _jsxs("form", { className: "form-solid w-full my-6 rounded-md", onSubmit: handleSubmit(onSubmit), children: [error && (_jsxs(_Fragment, { children: [_jsx("div", { className: "text-lg font-medium text-red-600", children: error }), _jsx("br", {})] })), _jsxs("div", { className: "sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 grid grid-cols-1 gap-4", children: [_jsx("div", { children: _jsx(Select, { label: "University/Board*", name: "university_id", register: register, value: arrayUniversity, required: true, errors: errors }) }), _jsx("div", { children: _jsx(Input, { label: "Level*", type: "text", name: "level_name", register: register, placeholder: "+2", required: true, errors: errors }) }), _jsx("div", { className: "col-span-full", children: _jsx(Checkbox, { label: "Has faculty", name: "has_faculty", id: "hasFaculty", register: register }) })] }), _jsx("div", { className: "sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 grid grid-cols-1 gap-4", children: _jsx("div", { className: "md:flex-row w-fit col-span-full lg:col-span-2 flex flex-col my-6 ml-auto", children: _jsxs("div", { className: " w-fit", children: [_jsx(Link, { to: "/admin/dashboard/admin/data-setup/level", className: "secondary_btn", children: "Cancel" }), _jsx("button", { type: "submit", className: "primary_btn", children: "Save" })] }) }) })] })] }));
};
export default AddLevel;
