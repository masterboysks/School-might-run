import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { Checkbox, DateInput, Input, Password, Select, Upload, } from "../../../../../../../components/common/fields";
const arrayGender = [
    {
        id: 1,
        name: "Boy",
    },
    {
        id: 2,
        name: "Girl",
    },
];
const arrayBloodGroup = [
    {
        name: "A+",
        id: 1,
    },
    {
        name: "A-",
        id: 2,
    },
    {
        name: "B+",
        id: 3,
    },
    {
        name: "B-",
        id: 4,
    },
    {
        name: "O+",
        id: 5,
    },
    {
        name: "O-",
        id: 6,
    },
    {
        name: "AB+",
        id: 7,
    },
    {
        name: "Ab-",
        id: 8,
    },
];
const DetailsForm = () => {
    const [date, setDate] = useState("");
    const { register, handleSubmit, reset, watch, formState: { errors }, } = useForm();
    const anotherChild = watch("has_siblings");
    // personal.dob
    return (_jsxs("form", { className: "form-solid my-6 rounded-md", children: [_jsxs("div", { className: "sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 grid grid-cols-1 gap-4", children: [_jsx("div", { children: _jsx(Input, { label: "First Name*", placeholder: "Roshan", register: register, name: "personal[first_name]", errors: errors, required: true }) }), _jsx("div", { className: "", children: _jsx(Input, { label: "Middle Name", placeholder: "Bahadur", register: register, name: "personal[middle_name]" }) }), _jsx("div", { className: "", children: _jsx(Input, { label: "Last Name*", placeholder: "Dahal", register: register, errors: errors, required: true, name: "personal[last_name]" }) }), _jsx("div", { className: "", children: _jsx(Input, { label: "Username", placeholder: "@roshandahal", name: "personal[username]", register: register, required: true, errors: errors }) }), _jsx("div", { className: "", children: _jsx(Password, { label: "Password", placeholder: "Password", name: "personal[password]", register: register, required: true, errors: errors }) }), _jsx("div", { className: "", children: _jsx(Input, { label: "Mobile Number", placeholder: "981234567", register: register, name: "personal[mobile_number]" }) }), _jsx("div", { className: "", children: _jsx(Input, { label: "Email", placeholder: "mail@hoymail.com", type: "email", register: register, name: "personal[email]" }) }), _jsx("div", { className: "", children: _jsx(Select, { value: arrayGender, label: "Gender*", required: true, register: register, errors: errors, name: "personal[gender]" }) }), _jsx("div", { className: "", children: _jsx(Select, { label: "BLood Group", value: arrayBloodGroup, register: register, name: "personal[blood_group]" }) }), _jsx("div", { className: "", children: _jsx(DateInput, { selected: date, setSelected: setDate, label: "Date of birth" }) }), _jsx("div", { className: "", children: _jsx(Upload, { name: "personal[birth_cit_certificate]", accept: "image/*,.pdf", label: "Birth/Citizenship Certificate*", required: true, errors: errors, watch: watch, register: register, id: "556565565_Form_birth_certificate" }) }), _jsx("div", { className: "", children: _jsx(Upload, { name: "personal[profile_picture]", accept: "image/*", label: "Photo*", required: true, errors: errors, watch: watch, id: "6456463546_Form_photo", register: register }) })] }), _jsx("div", { className: "relative z-0 flex items-start mt-6", children: _jsx(Checkbox, { register: register, id: "956526565_form_checkbox", name: "personal[has_siblings]", label: "Has another child admitted" }) }), _jsx("div", { className: "w-full", children: _jsxs("div", { className: " w-fit ml-auto", children: [_jsx(Link, { to: "/admin/dashboard/student/student-information/", className: "secondary_btn", children: "Cancel" }), _jsx(Link, { to: `/admin/dashboard/student/student-information/add-student-details/guardian-${anotherChild || "true"}`, className: "primary_btn", children: "Next" })] }) })] }));
};
export default DetailsForm;
