import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import Table from "./table";
import Form from "./form";
import staffAPI from "../../../../../../api/admin/dashboard/staff/staffAPI";
import { useState } from "react";
const Staffs = () => {
    const [page, setPage] = useState(1);
    const [pagination, setPagination] = useState([]);
    const [data, setData] = useState([]);
    const onSubmit = async (data, page = 1) => {
        (async () => {
            const res = await staffAPI.search(page, data);
            setPagination(res?.data?.data?.pagination);
            setData(res?.data?.data?.data);
        })();
    };
    return (_jsxs(_Fragment, { children: [_jsx(Form, { onSubmit: onSubmit, page: page }), _jsx(Table, { setPage: setPage, data: data, pagination: pagination })] }));
};
export default Staffs;
