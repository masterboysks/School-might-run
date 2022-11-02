import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate, useParams } from "react-router-dom";
import staffAPI from "../../../../../../../../api/admin/dashboard/staff/staffAPI";
import { Input, Upload, } from "../../../../../../../../components/common/fields";
const Form = () => {
    const { id } = useParams();
    const [message, setMessage] = useState("");
    const navigate = useNavigate();
    const { register, watch, reset, getValues, handleSubmit, formState: { errors }, } = useForm();
    const onSubmit = async (data) => {
        console.log(data);
        const form = new FormData();
        form.append("document_name", data["document_name"]);
        form.append("document_file", data["document_file"][0]);
        try {
            const res = await staffAPI.createDocument(id, form);
            res.status === 201
                ? navigate(`/admin/dashboard/staff/staff-information/${id}/document`)
                : setMessage(res?.response?.data?.message);
        }
        catch (error) {
            console.log(error);
        }
        // to=
    };
    return (_jsxs("form", { className: "form-solid md:w-10/12 lg:w-8/12 w-full my-6 rounded-md", onSubmit: handleSubmit(onSubmit), children: [message && (_jsxs(_Fragment, { children: [_jsx("div", { className: "!text-red-600 font-medium text-lg", children: message }), _jsx("br", {})] })), _jsxs("div", { className: "sm:grid-cols-2 grid grid-cols-1 gap-4", children: [_jsx("div", { className: "", children: _jsx(Input, { name: "document_name", register: register, errors: errors, required: true, label: "Name", placeholder: "Citizenship" }) }), _jsx("div", { className: "", children: _jsx(Upload, { name: "document_file", register: register, errors: errors, required: true, label: "Document", watch: watch, id: "document_file", accept: "image/*,.pdf" }) }), _jsx("div", { className: " col-span-full", children: _jsxs("div", { className: " w-fit ml-auto", children: [_jsx(Link, { to: `/admin/dashboard/staff/staff-information/${id}/document`, className: "secondary_btn", children: "Cancel" }), _jsx("button", { type: "submit", className: "primary_btn", children: "Save" })] }) })] })] }));
};
export default Form;
