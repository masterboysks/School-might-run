import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import universityBoardApi from "../../../../../../../api/admin/dashboard/admin/data-setup/universityBoardApi";
import Breadnav from "../../../../../../../components/common/Breadnav";
import Break from "../../../../../../../components/common/Break";
import { Input } from "../../../../../../../components/common/fields";
const pages = [
    { name: "Admin", href: "#", current: false },
    {
        name: "Date setup",
        href: "#",
        current: false,
    },
    {
        name: "University/Board",
        href: "/admin/dashboard/admin/data-setup/university-board",
        current: false,
    },
    {
        name: "Add",
        href: "/admin/dashboard/admin/data-setup/university-board/add",
        current: true,
    },
];
const AddUniversityBoard = () => {
    const [error, setError] = useState("");
    const { register, handleSubmit, formState: { errors }, } = useForm();
    const navigate = useNavigate();
    const onSubmit = async (d) => {
        console.log(d);
        try {
            const res = await universityBoardApi.create(d);
            res?.status === 201
                ? navigate("/admin/dashboard/admin/data-setup/university-board")
                : setError("Failed to add university");
        }
        catch (errors) {
            console.warn(errors);
        }
        // university
        //   ? navigate("/admin/data-setup/university-board")
        //   : setErrorUniversity(true);
    };
    return (_jsxs(_Fragment, { children: [_jsx(Breadnav, { pages: pages }), _jsx(Break, { title: "Add university/Board details" }), _jsxs("form", { className: "form-solid w-full my-6 rounded-md", onSubmit: handleSubmit(onSubmit), children: [error && (_jsxs(_Fragment, { children: [_jsx("div", { className: "text-red-600 font-medium text-lg", children: error }), _jsx("br", {})] })), _jsx("div", { className: "sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 grid grid-cols-1 gap-4", children: _jsx("div", { children: _jsx(Input, { label: "University/Board*", placeholder: "National Education Board", name: "name", required: true, register: register, errors: errors }) }) }), _jsx("div", { className: "sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 grid grid-cols-1 gap-4", children: _jsx("div", { className: "md:flex-row w-fit flex flex-col my-6 ml-auto", children: _jsxs("div", { className: " w-fit my-auto", children: [_jsx(Link, { to: "/admin/dashboard/admin/data-setup/university-board", className: "secondary_btn", children: "Cancel" }), _jsx("button", { type: "submit", className: "primary_btn", children: "Save" })] }) }) })] })] }));
};
export default AddUniversityBoard;
