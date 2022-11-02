import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useForm } from "react-hook-form";
import { Select } from "../../../../../../components/common/fields";
import { Link } from "react-router-dom";
import RenderTable from "./RenderTable";
import { PrinterIcon } from "@heroicons/react/20/solid";
import { useEffect } from "react";
import { useState } from "react";
import classSheduleApi from "../../../../../../api/admin/dashboard/admin/classSheduleApi";
const arrayDays = [
    { name: "Sun", id: 7 },
    { name: "Mon", id: 1 },
    { name: "Tue", id: 2 },
    { name: "Wed", id: 3 },
    { name: "Thur", id: 4 },
    { id: 5, name: "Fri" },
    { name: "Sat", id: 6 },
];
export default function Table() {
    const { register, handleSubmit, watch, formState: { errors }, } = useForm();
    const [data, setData] = useState([]);
    useEffect(() => {
        (async () => {
            try {
                const data = await classSheduleApi.get();
                const datas = data?.data?.data;
                setData(datas?.data);
            }
            catch (e) {
                console.warn(e);
            }
        })();
    }, []);
    return (_jsxs("div", { className: "mt-11 w-full", children: [_jsxs("div", { className: "sm:grid lg:grid-cols-4 sm:items-center justify-between grid-cols-2", children: [_jsx("div", { className: "col-span-2", children: _jsx("div", { className: "", children: _jsx(Select, { id: "day", label: "Day*", value: arrayDays, required: true, register: register, name: "days", errors: errors }) }) }), _jsxs("div", { className: " flex col-span-2 mt-3 lg:mt-auto ml-auto", children: [_jsxs("div", { className: "text-primary-btn print flex items-center p-2 mx-1 mt-auto font-medium", children: [_jsx("span", { className: "mx-1", children: "Print" }), _jsx("div", { className: "w-7", children: _jsx(PrinterIcon, { fontSize: "medium" }) })] }), _jsx(Link, { to: "#", className: "secondary_btn", children: "Edit" }), _jsx(Link, { to: "/admin/dashboard/admin/class-schedule/add", className: "primary_btn", children: "Add" })] })] }), _jsx("div", { className: "my-6", children: _jsx("div", { className: " ring-1 ring-black ring-opacity-5 overflow-x-auto rounded-lg shadow", children: _jsx("div", { className: "inline-block w-full align-middle", children: _jsx("div", { className: " w-full rounded-lg", children: _jsxs("table", { className: "min-w-full divide-y divide-gray-300 table-auto", children: [_jsx("thead", { className: "bg-gray-50", children: _jsxs("tr", { children: [_jsx("th", { scope: "col", className: "px-3 py-3.5  text-left text-sm font-medium text-primary-grey-700    ", children: "Subject" }), _jsx("th", { scope: "col", className: "px-3 py-3.5  text-left text-sm font-medium text-primary-grey-700  ", children: "Start time" }), _jsx("th", { scope: "col", className: "px-3 py-3.5  text-left text-sm font-medium text-primary-grey-700  ", children: "End time" }), _jsx("th", { scope: "col", className: "px-3 py-3.5  text-left text-sm font-medium text-primary-grey-700  ", children: "Subject teacher" })] }) }), _jsx("tbody", { className: "bg-white divide-y divide-gray-200", children: _jsx(RenderTable, { currentItems: data }) })] }) }) }) }) })] }));
}
