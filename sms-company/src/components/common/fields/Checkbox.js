import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
export const checkbox = ({ label, //array with correct index
name, register, id = Math.random() + "uehwsfdkh", className = "", }) => {
    return (_jsxs("div", { className: `flex items-center h-5 ${className}`, children: [_jsx("input", { id: id, type: "checkbox", ...register(name), className: `focus:ring-primary-btn text-primary-btn  w-4 h-4 border-primary-btn border rounded ` }), _jsx("div", { className: "ml-3 text-sm", children: _jsx("label", { htmlFor: id, className: "font-sm text-primary-grey-600", children: label }) })] }));
};
export const radio = ({ name, errors = {}, value, register, required = false, errorText = undefined, }) => {
    return (_jsxs(_Fragment, { children: [value.map((curr) => (_jsxs("label", { htmlFor: curr.id + "radioButton" + curr.name, children: [_jsx("input", { type: "radio", id: curr.id + "radioButton" + curr.name, ...register(name, { required }), name: name, value: curr.id }), _jsx("span", { className: `mx-2 ${errors && errors[name] && "text-red-600"}`, children: curr.name })] }, curr.id + curr.name))), errors && errors[name] && (_jsx("div", { className: " md:block hidden text-xs font-light text-red-600", children: errorText || " This is a required field" }))] }));
};
