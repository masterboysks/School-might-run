import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { useState } from "react";
export function input({ id = Math.random() + "jkhsaieor", name, shouldUnregister = false, errors = {}, errorText = "", register, type = "text", label, required = false, placeholder = "", showError = true, className = "", labelClassName = "", }) {
    return (_jsxs(_Fragment, { children: [label && (_jsxs(_Fragment, { children: [_jsx("label", { className: `my-6 ${errors && errors[name] && "text-red-600"} text-sm ${labelClassName}`, htmlFor: id, children: label }), _jsx("br", {})] })), _jsx("input", { className: `mt-[6px] w-full p- rounded  focus:ring-primary-btn focus:border-primary-btn  py-3 border-primary-btn shadow-md placeholder:text-primary-grey-400    text-primary-grey-600 text-sm ${className}`, id: id, ...register(name, { required, shouldUnregister }), placeholder: placeholder, type: type }), showError && errors && errors[name] && (_jsx(_Fragment, { children: _jsx("span", { className: "text-xs font-light text-red-600", children: errorText || "This is a required field." }) }))] }));
}
export function password({ id = Math.random() + "jkhsaieor", name, errors = {}, errorText = "", register, label, required = false, placeholder = "", showError = true, className = "", step, labelClassName = "", }) {
    const [visiblity, setVisiblity] = useState(false);
    return (_jsxs(_Fragment, { children: [label && (_jsxs(_Fragment, { children: [_jsx("label", { className: `my-6 ${errors && errors[name] && "text-red-600"} text-sm ${labelClassName}`, htmlFor: id, children: label }), _jsx("br", {})] })), _jsxs("div", { className: "relative", children: [_jsx("input", { className: `mt-[6px] w-full p- rounded pr-8  focus:ring-primary-btn focus:border-primary-btn  py-3 border-primary-btn shadow-md placeholder:text-primary-grey-400    text-primary-grey-600 text-sm ${className}`, id: id, step: step, ...register(name, { required }), placeholder: placeholder, type: visiblity ? "text" : "password" }), _jsx("div", { className: "right-1 top-4 absolute", onClick: () => {
                            setVisiblity(!visiblity);
                        }, children: visiblity ? _jsx(VisibilityIcon, {}) : _jsx(VisibilityOffIcon, {}) })] }), showError && errors && errors[name] && (_jsx(_Fragment, { children: _jsx("span", { className: "text-xs font-light text-red-600", children: errorText || " This is a required field." }) }))] }));
}
export const inputDisabled = ({ label, value = "", }) => {
    return (_jsxs(_Fragment, { children: [label && (_jsxs(_Fragment, { children: [_jsx("label", { className: "my-6 text-sm", children: label }), " ", _jsx("br", {})] })), _jsx("input", { className: " mt-[6px] w-full p- rounded   focus:ring-primary-btn     bg-primary-grey-100 border-primary-grey-400  shadow-md placeholder:text-primary-grey-400    text-primary-grey-700 text-sm", disabled: true, type: "text", value: value })] }));
};
export function inputNumber({ id = Math.random() + "jkhsaieor", name, errors = {}, register, label, required = false, placeholder = "", step, min, max, }) {
    const props = { step, min, max, placeholder, id };
    return (_jsxs(_Fragment, { children: [label && (_jsxs(_Fragment, { children: [_jsx("label", { className: `my-6 ${errors && errors[name] && "text-red-600"} text-sm `, htmlFor: id, children: label }), _jsx("br", {})] })), _jsx("input", { className: `mt-[6px] w-full p- rounded  focus:ring-primary-btn focus:border-primary-btn  py-3 border-primary-btn shadow-md placeholder:text-primary-grey-400    text-primary-grey-600 text-sm`, ...register(name, { required }), type: "number", ...props }), errors && errors[name] && (_jsx(_Fragment, { children: _jsx("span", { className: "text-xs font-light text-red-600", children: " This is a required field." }) }))] }));
}
