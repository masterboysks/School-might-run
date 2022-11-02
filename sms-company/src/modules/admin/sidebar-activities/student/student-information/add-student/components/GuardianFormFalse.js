import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { Input, InputNumber, Password, UploadPhoto, } from "../../../../../../../components/common/fields";
import FatheAndMotherDetail from "./FatheAndMotherDetail";
const GuardianFormFalse = () => {
    const { register, handleSubmit, reset, watch, formState: { errors }, } = useForm();
    return (_jsxs("form", { className: "form-solid my-6 rounded-md", children: [_jsxs("div", { className: "sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  grid grid-cols-1 gap-4", children: [_jsx("div", { children: _jsx(Input, { label: "First Name*", name: "local_guardian[first_name]", register: register, required: true, errors: errors, placeholder: "Shuvam" }) }), _jsx("div", { className: "", children: _jsx(Input, { label: "Middle Name", name: "local_guardian[middle_name]", register: register, placeholder: "Prashad" }) }), _jsx("div", { className: "", children: _jsx(Input, { label: "Last Name*", required: true, register: register, name: "local_guardian[last_name]", errors: errors, placeholder: "Koirala" }) }), _jsx("div", { className: "", children: _jsx(InputNumber, { label: "Mobile Number*", required: true, placeholder: "9860625009", name: "local_guardian[mobile_number]", errors: errors, register: register }) }), _jsx("div", { className: "", children: _jsx(Input, { label: "Email", type: "email", placeholder: "abc@yahoo.com", name: "local_guardian[email]", register: register }) }), _jsx("div", { className: "", children: _jsx(Input, { label: "Occupation*", name: "local_guardian[occupation]", required: true, errors: errors, register: register, placeholder: "An architect" }) }), _jsx("div", { className: "", children: _jsx(Input, { label: "Relation*", name: "local_guardian[relation]", required: true, errors: errors, register: register, placeholder: "Mother" }) }), _jsx("div", { className: "", children: _jsx(Input, { label: "Username*", name: "local_guardian[username]", register: register, errors: errors, required: true, placeholder: "@shuvamkoirala" }) }), _jsx("div", { className: "", children: _jsx(Password, { label: "Password*", name: "local_guardian[password]", register: register, errors: errors, requred: true, placeholder: "Password" }) }), _jsx("div", { className: "", children: _jsx(UploadPhoto, { name: "local_guardian[profile_picture]", label: "Picture", register: register, watch: watch, id: "3131113152_Form_photo" }) })] }), _jsx(FatheAndMotherDetail, { errors: errors, register: register }), _jsx("div", { className: "w-full", children: _jsxs("div", { className: " w-fit ml-auto", children: [_jsx(Link, { to: "/admin/dashboard/student/student-information/add-student-details", className: "secondary_btn", children: "Back" }), _jsx(Link, { to: `/admin/dashboard/student/student-information/add-address-details`, className: "primary_btn", children: "Next" })] }) })] }));
};
export default GuardianFormFalse;
