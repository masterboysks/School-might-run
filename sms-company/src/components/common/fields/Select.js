import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";
import { Fragment } from "react";
import { useController } from "react-hook-form";
export function select({ id = Math.random() + "jkhsaieor", name, errors = {}, errorText = "", register, value: options, label, required = false, showError = true, className = "", labelClassName = "", }) {
    return (_jsxs(_Fragment, { children: [label && (_jsxs(_Fragment, { children: [_jsx("label", { className: `my-6 ${errors && errors[name] && "text-red-600"} text-sm ${labelClassName}`, htmlFor: id, children: label }), _jsx("br", {})] })), _jsxs("select", { ...register(name, { required }), id: id, className: `mt-[6px] w-full p- rounded  focus:ring-primary-btn focus:border-primary-btn  py-3 border-primary-btn shadow-md placeholder:text-primary-grey-400    text-primary-grey-600 text-sm ${className}`, children: [_jsx("option", { value: "", children: "--Select--" }), options?.map((curr) => (_jsx("option", { value: curr.id, children: curr?.name }, curr.name + name + curr.id)))] }), showError && errors && errors[name] && (_jsxs(_Fragment, { children: [_jsx("br", {}), _jsx("span", { className: "text-xs font-light text-red-600", children: errorText || " This is a required field." }), _jsx("br", {})] }))] }));
}
export function multipleSelect({ name, label, value: options, control, errors = {}, required, }) {
    const { field: { onChange, value }, } = useController({
        name,
        control,
        people: options,
        rules: { required: required },
    });
    // console.log(value, onChange);
    return (_jsx(_Fragment, { children: _jsxs(Listbox, { value: value || [], onChange: onChange, multiple: true, children: [_jsx(Listbox.Label, { children: _jsx("label", { className: `my-6 text-sm  ${errors && errors[name] && " text-red-600"}`, children: label }) }), _jsxs("div", { className: "relative mt-[6px]", children: [_jsxs(Listbox.Button, { className: "  h-[46px]  p- rounded focus:ring-primary-btn focus:ring-1 ring-inset border px-2   border-primary-btn shadow-md placeholder:text-primary-grey-400    text-primary-grey-700 text-sm relative w-full text-left  ", children: [_jsx("span", { className: "block pr-2 truncate", children: options
                                        ?.filter((c) => value?.includes(c))
                                        ?.map((person) => person.name)
                                        .join(", ") }), errors && errors[name] && (_jsx("span", { className: "text-red-600", children: "This field is required" })), _jsx("span", { className: "absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none", children: _jsx(ChevronUpDownIcon, { className: "w-5 h-5 text-gray-400", "aria-hidden": "true" }) })] }), _jsx(Transition, { as: Fragment, leave: "transition ease-in duration-100", leaveFrom: "opacity-100", leaveTo: "opacity-0", children: _jsx(Listbox.Options, { className: "max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm absolute w-full py-1 mt-1 overflow-auto text-base bg-white rounded-md shadow-lg", children: options?.map((person, personIdx) => (_jsx(Listbox.Option, { className: ({ active }) => `relative cursor-default select-none py-2 pl-10 pr-4 ${active
                                        ? "bg-blue-400 text-white "
                                        : "text-primary-grey-600"}`, value: person, children: ({ selected }) => (_jsxs(_Fragment, { children: [_jsx("span", { className: `block truncate ${selected ? "font-medium" : "font-normal"}`, children: person?.name }), selected ? (_jsx("span", { className: " absolute inset-y-0 left-0 flex items-center pl-3", children: _jsx(CheckIcon, { className: "w-5 h-5", "aria-hidden": "true" }) })) : null] })) }, personIdx))) }) })] })] }) }));
}
export const selectDisabled = ({ label, value = "Select", className }) => {
    return (_jsxs(_Fragment, { children: [_jsx("label", { className: `my-6 text-sm `, children: label }), _jsx("br", {}), _jsx("select", { className: ` mt-[6px] w-full p- rounded   focus:ring-primary-btn py-3    bg-primary-grey-100 border-primary-grey-400  shadow-md placeholder:text-primary-grey-400    text-primary-grey-700 text-sm ${className}`, disabled: true, defaultValue: value, children: _jsx("option", { value: "", children: value }) })] }));
};
