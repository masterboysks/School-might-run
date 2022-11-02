import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { Input, Textarea } from "../../../../../components/common/fields";
export default function Form() {
    const { register, formState: { errors }, handleSubmit, } = useForm();
    const onSubmit = (data) => {
        console.log(data);
    };
    return (_jsxs("form", { onSubmit: handleSubmit(onSubmit), children: [_jsxs("div", { className: "my-6 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 grid grid-cols-1 gap-4", children: [_jsx("div", { className: "", children: _jsx(Input, { register: register, name: "start-date", type: "date", label: "Start date*", required: true, errors: errors }) }), _jsx("div", { className: "\r\n        ", children: _jsx(Input, { register: register, name: "end-date", type: "date", label: "End date*", required: true, errors: errors }) })] }), _jsx("div", { className: "my-6 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 grid grid-cols-1 gap-4", children: _jsx("div", { className: " col-span-2", children: _jsx(Textarea, { register: register, name: "reason", label: "Reason " }) }) }), _jsx("div", { className: "sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 grid grid-cols-1 gap-4", children: _jsx("div", { className: "md:flex-row w-fit col-span-full lg:col-span-2 flex flex-col my-6 ml-auto", children: _jsxs("div", { className: " w-fit", children: [_jsx(Link, { to: "/admin/dashboard/admin/data-setup/faculty", className: "secondary_btn", children: "Cancel" }), _jsx("button", { type: "submit", className: "primary_btn", children: "Save" })] }) }) })] }));
}
