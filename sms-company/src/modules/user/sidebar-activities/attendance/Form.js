import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useForm } from "react-hook-form";
import { Input, Textarea, UploadPhoto, } from "../../../../components/common/fields";
export default function Form() {
    const { register, formState: { errors }, watch, } = useForm();
    return (_jsxs("form", { className: "my-6 space-y-4", children: [_jsxs("div", { className: "grid grid-cols-2 gap-3 ", children: [_jsx("div", { className: "", children: _jsx(Input, { label: "Start date*", required: true, name: "start_date", type: "date", errors: errors, register: register }) }), _jsx("div", { className: "\r\n        ", children: _jsx(Input, { label: "End date*", required: true, name: "end_date", type: "date", errors: errors, register: register }) })] }), _jsx(UploadPhoto, { label: "Application for leave*", required: true, name: "leave_application", watch: watch, errors: errors, register: register }), _jsx("div", { className: "", children: _jsx(Textarea, { label: "Reason for leave *", required: true, name: "reason_for_leave", errors: errors, register: register }) })] }));
}
