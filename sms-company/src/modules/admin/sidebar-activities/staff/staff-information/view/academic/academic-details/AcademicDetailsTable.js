import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
// import React, { useEffect, useState } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import staffAPI from "../../../../../../../../api/admin/dashboard/staff/staffAPI";
import Pagination from "../../../../../../../../components/common/Pagination";
import RenderTable from "./RenderTable";
export default function AcademicTable() {
    const { id } = useParams();
    const [data, setData] = useState([]);
    const [page, setPage] = useState(1);
    const [pagination, setPagination] = useState({});
    useEffect(() => {
        (async () => {
            try {
                const data = await staffAPI.getAcademic(id, page);
                const datas = data?.data?.data;
                setData(datas?.data);
                setPagination(datas?.pagination);
            }
            catch (e) {
                console.warn(e);
            }
        })();
    }, [page]);
    return (_jsxs("div", { className: "mt-11", children: [_jsxs("div", { className: "sm:flex sm:items-center", children: [_jsxs("div", { className: "sm:flex-auto", children: [_jsx("h1", { className: "text-primary-grey-700 text-xl font-semibold", children: "Academic Details" }), _jsx("p", { className: "mt-2 text-sm text-gray-700", children: "A list of all the users in your account including their name, title, email and role." })] }), _jsx("div", { className: "sm:mt-0 sm:ml-16 sm:flex-none mt-4", children: _jsx(Link, { to: "add", className: "primary_btn", children: "Add" }) })] }), _jsxs("div", { className: "my-6", children: [_jsx("div", { className: " ring-1 ring-black ring-opacity-5 min-w-full overflow-x-auto rounded-lg shadow", children: _jsx("div", { className: "inline-block w-full align-middle", children: _jsx("div", { className: " w-full rounded-lg", children: _jsxs("table", { className: "min-w-full divide-y divide-gray-300 table-auto", children: [_jsx("thead", { className: "bg-gray-50", children: _jsxs("tr", { children: [_jsx("th", { scope: "col", className: "px-3 py-3.5 text-left text-sm font-medium text-primary-grey-700    ", children: "Board/University" }), _jsx("th", { scope: "col", className: "px-3 py-3.5 text-left text-sm font-medium text-primary-grey-700   ", children: "Level" }), _jsx("th", { scope: "col", className: "px-3 py-3.5 text-left text-sm font-medium text-primary-grey-700   ", children: "Program" }), _jsx("th", { scope: "col", className: "px-3 py-3.5 text-left text-sm font-medium text-primary-grey-700   ", children: "Passed year" }), _jsx("th", { scope: "col", className: "px-3 py-3.5 text-left text-sm font-medium text-primary-grey-700   ", children: "Division/Grade" }), _jsx("th", { scope: "col", className: "px-3 py-3.5 text-left text-sm font-medium text-primary-grey-700   ", children: "Institution name" }), _jsx("th", { scope: "col", className: "px-3 py-3.5 text-left text-sm font-medium text-primary-grey-700   ", children: "Institution address line" }), _jsx("th", { scope: "col", className: "px-3 py-3.5 text-left text-sm font-medium text-primary-grey-700  ", children: "Action" })] }) }), _jsx("tbody", { className: "bg-white divide-y divide-gray-200", children: _jsx(RenderTable, { currentItems: data }) })] }) }) }) }), _jsx(Pagination, { pagination: pagination, setPage: setPage })] })] }));
}
