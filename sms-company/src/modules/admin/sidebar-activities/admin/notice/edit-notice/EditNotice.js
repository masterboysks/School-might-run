import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { Input, MultipleSelect, Textarea, UploadPhoto, DateInput, } from "../../../../../../components/common/fields";
import Breadnav from "../../../../../../components/common/Breadnav";
import Break from "../../../../../../components/common/Break";
import { useForm } from "react-hook-form";
import noticeApi from "../../../../../../api/admin/dashboard/admin/noticeApi";
import { useEffect } from "react";
const pages = [
    { name: "Admin", href: "#", current: false },
    {
        name: "Push notification",
        href: "/admin/dashboard/admin/notice",
        current: false,
    },
    {
        name: "Edit notice",
        href: "#",
        current: true,
    },
];
function NewNotice() {
    const [date, setDate] = useState("");
    const [defaultDate, setDefaultDate] = useState("");
    const { register, handleSubmit, watch, reset, control, formState: { errors }, } = useForm();
    const [arraySendTo, setArraySendTo] = useState([]);
    const [error, setError] = useState("");
    const navigate = useNavigate();
    const onSubmit = async (data) => {
        const d = {
            ...data,
            send_to: JSON.stringify(data.send_to?.map((c) => c.id)),
        };
        const form = new FormData();
        for (const name in d) {
            form.append(name, d[name]);
        }
        d.document.length === 1
            ? form.append("document", d.document[0])
            : form.append("document", "");
        const res = await noticeApi.edit(form);
        res?.status === 201
            ? navigate("/admin/dashboard/admin/notice")
            : setError("Failed to edit a notice");
    };
    useEffect(() => {
        (async () => {
            try {
                const temp = JSON.parse(localStorage.getItem("Mb5sVJt5Qp") || "");
                const data = await noticeApi.sendTo();
                setArraySendTo(data?.data?.data?.data);
                setDefaultDate(temp.expiry_date);
                reset(temp);
            }
            catch (e) {
                console.warn(e);
            }
        })();
    }, []);
    return (_jsxs("div", { children: [_jsx(Breadnav, { pages: pages }), _jsx(Break, { title: "New notice" }), _jsxs("form", { className: "form-solid w-full my-4 space-y-4 rounded-md", onSubmit: handleSubmit(onSubmit), children: [error && (_jsxs(_Fragment, { children: [_jsx("div", { className: "text-lg font-medium text-red-600", children: error }), _jsx("br", {})] })), _jsx("div", { className: "sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 grid grid-cols-1 gap-4", children: _jsxs("div", { className: "col-span-2", children: [_jsx(MultipleSelect, { value: arraySendTo, label: "Send to*", name: "send_to", control: control, errors: errors, required: true }), "Note:You can select multiple items"] }) }), _jsx("div", { className: "sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 grid grid-cols-1 gap-4", children: _jsx("div", { className: "col-span-2", children: _jsx(Input, { label: "Notice title*", register: register, required: true, errors: errors, name: "title", placeholder: "National Education Board" }) }) }), _jsx("div", { className: "sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 grid grid-cols-1 gap-4", children: _jsx("div", { className: "col-span-2", children: _jsx(Textarea, { label: "Notice description*", placeholder: " Description here", id: "notice_description", name: "description", register: register, errors: errors, required: true }) }) }), _jsxs("div", { className: "sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 grid grid-cols-1 gap-4", children: [_jsx("div", { children: _jsx(UploadPhoto, { label: "Document", id: "document_form", name: "document", register: register, watch: watch }) }), _jsx("div", { className: "", children: _jsx(DateInput, { selected: date, setSelected: setDate, label: "Date", defaultDate: defaultDate }) })] }), _jsx("div", { className: "sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 grid grid-cols-1 gap-4", children: _jsx("div", { className: "md:flex-row w-fit col-span-full lg:col-span-2 flex flex-col my-6 ml-auto", children: _jsxs("div", { className: " w-fit", children: [_jsx(Link, { to: "/admin/dashboard/admin/notice", className: "secondary_btn", children: "Cancel" }), _jsx("button", { type: "submit", className: "primary_btn", children: "Save" })] }) }) })] })] }));
}
export default NewNotice;
