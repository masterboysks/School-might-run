import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";
import { Fragment, useState } from "react";
import UploadOutlined from "@mui/icons-material/UploadOutlined";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
export const Checkbox = ({ label, //array with correct index
name, selected, //true or false
setSelected, dataTitle, dataValue, id = Math.random() + "jkhsaieor", className = "", }) => {
    const optional = {};
    dataTitle && (optional[dataTitle] = dataValue);
    return (_jsxs("div", { className: `flex items-center h-5 ${className}`, children: [_jsx("input", { id: id, name: name, type: "checkbox", checked: selected, ...optional, className: `focus:ring- text-primary-btn  w-4 h-4 border-gray-300 rounded `, onChange: (e) => {
                    setSelected(e.currentTarget.checked);
                } }), _jsx("div", { className: "ml-3 text-sm", children: _jsx("label", { htmlFor: id, className: "font-sm text-primary-grey-700", children: label }) })] }));
};
// checkbox new
export const NewCheckbox = ({ label, //array with correct index
name, register, id = Math.random() + "jkhsaieor", className = "", }) => {
    return (_jsxs("div", { className: `flex items-center h-5 ${className}`, children: [_jsx("input", { id: id, type: "checkbox", ...register(name), className: `focus:ring-primary-btn text-primary-base  w-4 h-4 border-primary-btn border rounded ` }), _jsx("div", { className: "ml-3 text-sm", children: _jsx("label", { htmlFor: id, className: "font-sm text-primary-grey-600", children: label }) })] }));
};
// Radio bth
export const Radio = ({ name, error, value: options, setError, selected, setSelected, dataTitle, dataValue, }) => {
    // useEffect(() => {
    //   console.log(err, name);
    //   error && !selected ? setErr(true) : setErr(false);
    //   console.log(err);
    // }, [error]);
    const optional = {};
    dataTitle && (optional[dataTitle] = dataValue);
    const handleChange = (e) => {
        const target = e.target;
        error && setError(false);
        if (target.checked) {
            setSelected(target.value);
        }
    };
    return (_jsxs(_Fragment, { children: [options.map((curr) => (_jsxs("label", { htmlFor: curr, children: [_jsx("input", { type: "radio", id: curr, name: name, value: curr, checked: selected === curr, onChange: handleChange, ...optional }), _jsx("span", { className: `mx-2 ${error && "text-red-600"}`, children: curr })] }, curr))), error && (_jsx("div", { className: " md:block hidden text-xs font-light text-red-600", children: "This is a required field" }))] }));
};
export const Input = ({ id = Math.random() + "jkhsaieor", name, error, setError, type = "text", label, value, setValue, placeholder = "", dataTitle, dataValue, onChange, className = "", step, errorText = "", dontShowerrorText = undefined, }) => {
    // useEffect(() => {
    //   console.log(err, name);
    //   error && value.trim === "" ? setErr(true) : setErr(false);
    //   console.log(err);
    // });
    const optional = {};
    dataTitle && (optional[dataTitle] = dataValue);
    return (_jsxs(_Fragment, { children: [label && (_jsxs(_Fragment, { children: [_jsx("label", { className: `my-6 ${error && "text-red-600"} text-sm`, htmlFor: id, children: label }), _jsx("br", {})] })), _jsx("input", { className: `mt-[6px] w-full p- rounded  focus:ring-primary-btn    border-primary-field shadow-md placeholder:text-primary-grey-400    text-primary-grey-700 text-sm ${className}`, id: id, step: step, name: name, placeholder: placeholder, type: type || "text", ...optional, value: value, onChange: onChange ||
                    ((e) => {
                        setValue(e.target.value);
                    }), onClick: () => error && setError(false) }), error &&
                (dontShowErrorText || (_jsxs(_Fragment, { children: [_jsx("br", {}), _jsx("span", { className: "text-xs font-light text-red-600", children: errorText || "This is a required field." })] })))] }));
};
// Input field new
export function NewInput({ id = Math.random() + "jkhsaieor", name, shouldUnregister = false, errors = {}, errorText = "", register, type = "text", label, required = false, placeholder = "", showError = true, className = "", step, labelClassName = "", }) {
    return (_jsxs(_Fragment, { children: [label && (_jsxs(_Fragment, { children: [_jsx("label", { className: `my-6 ${errors && errors[name] && "text-red-600"} text-sm ${labelClassName}`, htmlFor: id, children: label }), _jsx("br", {})] })), _jsx("input", { className: `mt-[6px] w-full p- rounded  focus:ring-primary-btn focus:border-primary-btn  py-3 border-primary-btn shadow-md placeholder:text-primary-grey-400   placeholder:capitalize text-primary-grey-600 text-sm ${className}`, id: id, step: step, ...register(name, { required, shouldUnregister }), placeholder: placeholder, type: type || "text" }), showError && errors && errors[name] && (_jsxs(_Fragment, { children: [_jsx("br", {}), _jsx("span", { className: "text-xs font-light text-red-600", children: errorText || " This is a required field." }), _jsx("br", {})] }))] }));
}
// password new
export function Password({ id = Math.random() + "jkhsaieor", name, errors = {}, errorText = "", register, label, required = false, placeholder = "", showError = true, className = "", step, labelClassName = "", }) {
    const [visiblity, setVisiblity] = useState(false);
    return (_jsxs(_Fragment, { children: [label && (_jsxs(_Fragment, { children: [_jsx("label", { className: `my-6 ${errors && errors[name] && "text-red-600"} text-sm ${labelClassName}`, htmlFor: id, children: label }), _jsx("br", {})] })), _jsxs("div", { className: "relative", children: [_jsx("input", { className: `mt-[6px] w-full p- rounded pr-8  focus:ring-primary-btn focus:border-primary-btn  py-3 border-primary-btn shadow-md placeholder:text-primary-grey-400   placeholder:capitalize text-primary-grey-600 text-sm ${className}`, id: id, step: step, ...register(name, { required }), placeholder: placeholder, type: visiblity ? "text" : "password" }), _jsx("div", { className: "right-1 top-4 absolute", onClick: () => {
                            setVisiblity(!visiblity);
                        }, children: visiblity ? _jsx(VisibilityIcon, {}) : _jsx(VisibilityOffIcon, {}) })] }), showError && errors && errors[name] && (_jsxs(_Fragment, { children: [_jsx("br", {}), _jsx("span", { className: "text-xs font-light text-red-600", children: errorText || " This is a required field." }), _jsx("br", {})] }))] }));
}
// Input disabled field
export const InputDisabled = ({ label, id = Math.random() + "jkhsaieor", name, value, type = "text", dataTitle, dataValue, }) => {
    const optional = {};
    dataTitle && (optional[dataTitle] = dataValue);
    return (_jsxs(_Fragment, { children: [_jsx("label", { className: "my-6 text-sm", htmlFor: id, children: label }), _jsx("br", {}), _jsx("input", { className: " mt-[6px] w-full p- rounded   focus:ring-primary-btn     bg-primary-grey-100 border-primary-grey-400  shadow-md placeholder:text-primary-grey-400    text-primary-grey-700 text-sm", id: id, name: name, disabled: true, type: type || "text", ...optional, value: value || "" })] }));
};
// select disabled
export const SelectDisabled = ({ label, id = Math.random() + "jkhsaieor", name, value, setValue, type = "text", dataTitle, dataValue, className = "", }) => {
    const optional = {};
    dataTitle && (optional[dataTitle] = dataValue);
    return (_jsxs(_Fragment, { children: [_jsx("label", { className: `my-6 text-sm `, htmlFor: id, children: label }), _jsx("br", {}), _jsx("select", { className: ` mt-[6px] w-full p- rounded   focus:ring-primary-btn     bg-primary-grey-100 border-primary-grey-400  shadow-md placeholder:text-primary-grey-400    text-primary-grey-700 text-sm ${className}`, id: id, name: name, disabled: true, type: type, defaultValue: value, ...optional, onChange: (e) => {
                    setValue(e.target.value);
                }, children: _jsx("option", { value: "", children: value }) })] }));
};
// Select
export function Select({ label, id = Math.random() + "jkhsaieor", name, value, selected, setSelected, dataTitle, dataValue, error, setError, }) {
    let options;
    selected === "Select"
        ? (options = ["Select", ...value])
        : (options = [...value]);
    const optional = {};
    dataTitle && (optional[dataTitle] = dataValue);
    return (_jsxs(_Fragment, { children: [_jsx("label", { className: `my-6 text-sm ${error && "text-red-600"}`, htmlFor: id, children: label }), _jsx("select", { value: selected, onClick: () => error && setError(false), onChange: (e) => {
                    setSelected(e.target.value);
                }, name: name, id: id, ...optional, className: `w-full p-2 ${label && " mt-[6px] "}  cursor-pointer rounded  focus:ring-primary-btn     shadow-md placeholder:text-primary-grey-400   text-primary-grey-700 text-sm  border-primary-field  required:border-red-600 required:animate-pulse 
        }`, children: options?.map((curr) => (_jsx("option", { value: curr, children: curr }, curr))) }), error && (_jsxs(_Fragment, { children: [_jsx("span", { className: "text-xs font-light text-red-600", children: "This is a required field." }), _jsx("br", {})] }))] }));
}
// Multiple select
export function MultipleSelect({ id = Math.random() + "jkhsaieor", name, error, setError, label, value: options, //array
setSelected, selected, //array
dataTitle, dataValue, }) {
    // const [err, setErr] = useState();
    // let err = false;
    // useEffect(() => {
    //   console.log(err, name);
    //   error && !(selected.length === 0) ? setErr(true) : setErr(false);
    //   console.log(err);
    // }, [error]);
    const optional = {};
    dataTitle && (optional[dataTitle] = dataValue);
    return (_jsxs(_Fragment, { children: [_jsx("label", { className: `my-6 text-sm  ${error && " text-red-600"}`, htmlFor: id, children: label }), _jsx(Listbox, { value: selected, onChange: (e) => {
                    setSelected(e);
                }, onClick: () => error && setError(false), multiple: true, children: _jsxs("div", { className: "relative mt-[6px]", children: [_jsxs(Listbox.Button, { id: id, name: name, className: "  h-[38px]  p- rounded focus:ring-primary-btn focus:ring-2 border px-2   border-primary-field shadow-md placeholder:text-primary-grey-400    text-primary-grey-700 text-sm relative w-full text-left  ", children: [_jsx("span", { className: "block pr-2 truncate", children: selected.map((person) => person).join(", ") }), error && (_jsx("span", { className: "text-red-600", children: "This field is required" })), _jsx("span", { className: "absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none", children: _jsx(ChevronUpDownIcon, { className: "w-5 h-5 text-gray-400", "aria-hidden": "true" }) })] }), _jsx(Transition, { as: Fragment, leave: "transition ease-in duration-100", leaveFrom: "opacity-100", leaveTo: "opacity-0", children: _jsx(Listbox.Options, { className: "max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm absolute w-full py-1 mt-1 overflow-auto text-base bg-white rounded-md shadow-lg", children: options.map((person, personIdx) => (_jsx(Listbox.Option, { className: ({ active }) => `relative cursor-default select-none py-2 pl-10 pr-4 ${active
                                        ? "bg-blue-400 text-white "
                                        : "text-primary-grey-600"}`, value: person, children: ({ selected }) => (_jsxs(_Fragment, { children: [_jsx("span", { className: `block truncate ${selected ? "font-medium" : "font-normal"}`, children: person }), selected ? (_jsx("span", { className: " absolute inset-y-0 left-0 flex items-center pl-3", children: _jsx(CheckIcon, { className: "w-5 h-5", "aria-hidden": "true" }) })) : null] })) }, personIdx))) }) })] }) })] }));
}
export function SearchBar({ id, dataTitle, dataValue, value, setValue }) {
    const optional = {};
    dataTitle && (optional[dataTitle] = dataValue);
    return (_jsxs("div", { className: " relative w-full", children: [_jsx("div", { className: "top-1 absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none", children: _jsx("svg", { "aria-hidden": "true", className: "text-primary-grey-600 w-5 h-5", fill: "currentColor", viewBox: "0 0 20 20", xmlns: "http://www.w3.org/2000/svg", children: _jsx("path", { fillRule: "evenodd", d: "M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z", clipRule: "evenodd" }) }) }), _jsx("input", { type: "text", id: id, ...optional, className: "bg-gray-50 mt-[6px] border border-primary-grey-400 text-primary-grey-600 text-sm rounded focus:ring-primary-btn block w-full pl-10 p-2 ", placeholder: "Search", value: value || "", onChange: (e) => {
                    setValue(e.target.value);
                } })] }));
}
export const Upload = ({ label, name, error, setError, value, setValue, dataTitle, dataValue, uploadText, id = Math.random() + "jkhsaieor", }) => {
    const optional = {};
    dataTitle && (optional[dataTitle] = dataValue);
    return (_jsxs(_Fragment, { children: [_jsx("label", { htmlFor: id, className: ` ${error && " text-red-600 "} block text-sm`, children: label }), _jsx("div", { className: " mt-[6px] sm:col-span-2 ", children: _jsx("div", { className: " flex w-full px-3 py-1.5 border-2 border-gray-300 border-dashed rounded-md", children: _jsx("div", { className: " w-full space-y-1", children: _jsxs("label", { htmlFor: id, className: "text-primary-grey-700 -indigo-600 hover:text-focus-within:outline-none focus-within:ring- focus-within:ring-offset-0 flex items-center justify-between w-full text-sm bg-white rounded-md cursor-pointer", children: [_jsx("div", { children: uploadText || "Upload here" }), _jsx("div", { className: "text-primary-btn", children: _jsx(UploadOutlined, {}) }), _jsx("input", { id: id, name: name, type: "file", className: "sr-only", ...optional, value: value, onChange: (e) => {
                                        error && setError(false);
                                        setValue(e.target.value);
                                    } })] }) }) }) }), error && (_jsxs(_Fragment, { children: [_jsx("br", {}), _jsx("span", { className: "text-xs font-light text-red-600", children: "This is a required field" })] }))] }));
};
export const UploadPhoto = ({ label, name, error, setError, value, setValue, dataTitle, dataValue, uploadText, id = Math.random() + "jkhsaieor", }) => {
    const optional = {};
    dataTitle && (optional[dataTitle] = dataValue);
    return (_jsx(_Fragment, { children: _jsxs("div", { className: "", children: [_jsx("label", { htmlFor: id, className: `${error && "text-red-600 "} block text-sm`, children: label }), _jsx("div", { className: "mt-[6px] sm:mt-0 sm:col-span-2", children: _jsxs("div", { className: "text-primary-gray-700 flex items-center", children: [_jsx("span", { className: " w-12 h-12 overflow-hidden rounded-full", children: _jsx("svg", { className: "w-full h-full text-gray-300", fill: "currentColor", viewBox: "0 0 24 24", children: _jsx("path", { d: "M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" }) }) }), _jsx("input", { type: "file", className: "text-primary-gray- hover:bg-gray-50 focus:outline-none focus:ring- focus:ring-offset-2 hidden px-3 py-2 ml-5 text-sm font-medium leading-4 bg-white rounded-md", name: name, id: id, value: value, onChange: (e) => {
                                    setValue(e.target.value);
                                }, ...optional, onClick: () => {
                                    error && setError(false);
                                } }), _jsx("label", { htmlFor: id, className: "bg-primary-grey-200 cursor-pointer border-primary-field border-[1px] rounded ml-2 p-1 text-primary-grey-700", children: uploadText || "Choose a file to upload" })] }) }), error && (_jsxs(_Fragment, { children: [_jsx("span", { className: "text-xs font-light text-red-600", children: "This is a required field" }), _jsx("br", {})] }))] }) }));
};
export const Textarea = ({ id = Math.random() + "jkhsaieor", name, error, setError, row, label, value, setValue, placeholder = "", dataTitle, dataValue, }) => {
    const optional = {};
    dataTitle && (optional[dataTitle] = dataValue);
    return (_jsxs(_Fragment, { children: [_jsx("label", { className: `my-6 text-sm ${error && " text-red-600"}`, htmlFor: id, children: label }), _jsx("br", {}), _jsx("textarea", { ...optional, name: name, id: id, row: row || 20, placeholder: placeholder, value: value, onChange: (e) => {
                    setValue(e.target.value);
                }, onClick: () => {
                    error && setError(false);
                }, className: "resize-none  mt-[6px] w-full p- rounded  focus:ring-primary-btn  h-52  border-primary-field shadow-md placeholder:text-primary-grey-400    text-primary-grey-700 text-sm" }), error && (_jsxs(_Fragment, { children: [_jsx("br", {}), _jsx("span", { className: "text-xs font-light text-red-600", children: "This is a required field." }), _jsx("br", {})] }))] }));
};
