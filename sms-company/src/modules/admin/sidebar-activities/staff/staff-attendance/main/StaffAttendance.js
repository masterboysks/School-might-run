import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import staffAPI from "../../../../../../api/admin/dashboard/staff/staffAPI";
import Breadnav from "../../../../../../components/common/Breadnav";
import Break from "../../Break";
import Form from "./Form";
import Table from "./Table";
const pages = [
    { name: "Staff", href: "#", current: false },
    {
        name: "Staff attendance",
        href: "/staff/staff-attendance/",
        current: true,
    },
];
function StaffAttendance() {
    const [message, setMessage] = useState("Search for Data");
    const [data, setData] = useState([]);
    const onSubmit = async (data, page = 1) => {
        (async () => {
            const res = await staffAPI.search(page, data);
            res.status === 204 && setMessage("No data was found.");
            setData(res?.data?.data?.data);
        })();
    };
    return (_jsxs(_Fragment, { children: [_jsx(Breadnav, { pages: pages }), _jsx(Form, { onSubmit: onSubmit }), _jsx(Break, { title: "Attendance" }), data.length === 0 ? (_jsx("div", { className: "my-6 w-full text-center font-medium text-primary-grey-700 text-3xl", children: message })) : (_jsx(Table, { data: data }))] }));
}
export default StaffAttendance;
