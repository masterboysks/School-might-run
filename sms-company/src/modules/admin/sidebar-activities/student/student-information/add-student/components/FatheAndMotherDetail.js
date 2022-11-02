import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { Input, InputNumber, } from "../../../../../../../components/common/fields";
import Break from "./Break";
export default function FatheAndMotherDetail({ register, errors }) {
    return (_jsxs(_Fragment, { children: [_jsx(Break, { title: "Father details" }), _jsxs("div", { className: "sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 grid grid-cols-1 gap-4 my-6", children: [_jsx("div", { children: _jsx(Input, { label: "First Name*", name: "father[first_name]", placeholder: "Krish", required: true, errors: errors, register: register }) }), _jsx("div", { className: "", children: _jsx(Input, { register: register, placeholder: "Prashad", name: "father[middle_name]", label: "Middle name" }) }), _jsx("div", { className: "", children: _jsx(Input, { label: "Last Name*", required: true, errors: errors, register: register, name: "father[last_name]", placeholder: "Koirala" }) }), _jsx("div", { className: "", children: _jsx(InputNumber, { label: "Mobile Number*", errors: errors, register: register, requred: true, name: "father[mobile_number]", placeholder: "9805540213" }) }), _jsx("div", { className: "", children: _jsx(Input, { type: "email", register: register, name: "father[email]", label: "Email", placeholder: "xyz@suchhi.com.np" }) }), _jsx("div", { className: "", children: _jsx(Input, { register: register, name: "father[occupation]", label: "Occupation*", required: true, errors: errors, placeholder: "An architect" }) })] }), _jsx(Break, { title: "Mother details" }), _jsxs("div", { className: "sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 grid grid-cols-1 gap-4 my-6", children: [_jsx("div", { children: _jsx(Input, { label: "First Name*", name: "mother[first_name]", placeholder: "Sabitri", required: true, errors: errors, register: register }) }), _jsx("div", { className: "", children: _jsx(Input, { register: register, placeholder: "", name: "mother[middle_name]", label: "Middle name" }) }), _jsx("div", { className: "", children: _jsx(Input, { label: "Last Name*", required: true, errors: errors, register: register, name: "mother[last_name]", placeholder: "Koirala" }) }), _jsx("div", { className: "", children: _jsx(InputNumber, { label: "Mobile Number*", errors: errors, register: register, requred: true, name: "mother[mobile_number]", placeholder: "9805540213" }) }), _jsx("div", { className: "", children: _jsx(Input, { type: "email", register: register, name: "mother[email]", label: "Email", placeholder: "xyzas@suchhi.com.np" }) }), _jsx("div", { className: "", children: _jsx(Input, { register: register, name: "mother[occupation]", label: "Occupation*", required: true, errors: errors, placeholder: "Housewife" }) })] })] }));
}
