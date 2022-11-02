import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { UploadPhoto } from "../../../../../../components/common/fields";
export default function RenderTable({ curr }) {
    const { watch, register } = useForm();
    const [status, setStatus] = useState(true);
    return (_jsxs("tr", { children: [_jsx("td", { className: "whitespace-nowrap px-3 py-4 text-sm text-gray-500", children: curr.id }), _jsx("td", { className: "whitespace-nowrap px-3 py-4 text-sm text-gray-500", children: curr.name }), _jsx("td", { className: "whitespace-nowrap px-3 py-4 text-sm text-gray-500", children: curr.department }), _jsx("td", { className: "whitespace-nowrap px-3 py-4 pt-6 text-sm flex items-center justify-center text-gray-500", children: _jsx("input", { type: "checkbox", checked: status, className: " ring-0 w-6 h-6 rounded-full", onChange: () => {
                        setStatus(!status);
                    } }) }), _jsx("td", { className: "whitespace-nowrap px-3 py-4 text-sm text-gray-500", children: status ? (_jsx("input", { type: "text", className: " border-primary-grey-400 bg-primary-grey-100 placeholder:text-primary-grey-400 text-primary-grey-700 text-sm rounded shadow-md", disabled: true })) : (_jsx("input", { type: "text", placeholder: "Reason", className: " focus:ring-primary-btn border-primary-field placeholder:text-primary-grey-400 text-primary-grey-700 text-sm rounded shadow-md cursor-pointer" })) }), _jsx("td", { className: "whitespace-nowrap px-3 py-4 text-sm text-gray-500", children: _jsx(UploadPhoto, { watch: watch, register: register, name: curr.name, id: curr.id + "uploadFile" }) })] }));
}
