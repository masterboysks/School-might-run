import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { Link } from "react-router-dom";
import RenderTable from "./RenderTable";
import { SearchBar } from "../../../../../../../components/common/fields";
import { useState } from "react";
import Breadnav from "../../../../../../../components/common/Breadnav";
import Pagination from "../../../../../../../components/common/Pagination";
import departmentApi from "../../../../../../../api/admin/dashboard/admin/data-setup/departmentApi";
import { useForm } from "react-hook-form";
import { useEffect } from "react";
const pages = [
    { name: "Admin", href: "#", current: false },
    {
        name: "Date setup",
        href: "#",
        current: false,
    },
    {
        name: "Department",
        href: "/admin/dashboard/admin/data-setup/department",
        current: true,
    },
];
const Department = () => {
    const { register, watch } = useForm();
    const [data, setData] = useState([]);
    const [page, setPage] = useState(1);
    const [pagination, setPagination] = useState({});
    useEffect(() => {
        (async () => {
            try {
                const data = await departmentApi.get(page);
                const datas = data?.data?.data;
                setData(datas?.data);
                setPagination(datas?.pagination);
            }
            catch (e) {
                console.warn(e);
            }
        })();
    }, [page]);
    return (_jsxs(_Fragment, { children: [_jsx(Breadnav, { pages: pages }), _jsxs("div", { className: "mt-11 lg:w-2/3 w-full", children: [_jsxs("div", { className: "sm:flex sm:items-center justify-between", children: [_jsx("div", { className: "w-72 relative max-w-full", children: _jsx(SearchBar, { register: register, name: "search" }) }), _jsx("div", { className: "sm:mt-0 sm:ml-16 sm:flex-none mt-4", children: _jsx(Link, { to: "/admin/dashboard/admin/data-setup/department/add", className: "primary_btn", children: "Add" }) })] }), _jsx("div", { className: "my-6", children: _jsx("div", { className: " ring-1 ring-black ring-opacity-5 overflow-x-auto rounded-lg shadow", children: _jsx("div", { className: "inline-block w-full align-middle", children: _jsx("div", { className: " w-full rounded-lg", children: _jsxs("table", { className: "min-w-full divide-y divide-gray-300 table-fixed", children: [_jsx("thead", { className: "bg-gray-50", children: _jsxs("tr", { children: [_jsx("th", { scope: "col", className: "px-3 py-3.5 text-left text-sm font-medium text-primary-grey-700    ", children: "Department" }), _jsx("th", { scope: "col", className: "px-3 py-3.5 w-10 text-left text-sm font-medium text-primary-grey-700  ", children: "Action" })] }) }), _jsx("tbody", { className: "bg-white divide-y divide-gray-200", children: _jsx(RenderTable, { currentItems: data, setData: setData }) })] }) }) }) }) }), _jsx(Pagination, { pagination: pagination, setPage: setPage })] })] }));
};
export default Department;
