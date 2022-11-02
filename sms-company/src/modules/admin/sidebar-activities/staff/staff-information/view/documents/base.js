import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { Outlet, useParams } from "react-router-dom";
import Tabs from "../../Tabs";
const pages = [
    { name: "Staff", href: "#", current: false },
    {
        name: "Staff Information",
        href: "",
        current: false,
    },
    {
        name: "Add",
        href: "#",
        current: true,
    },
];
const DocumentView = () => {
    const { id } = useParams();
    const tabs = [
        {
            name: "General details",
            href: `/admin/dashboard/staff/staff-information/${id}/general`,
            current: false,
        },
        {
            name: "Academic details",
            href: `/admin/dashboard/staff/staff-information/${id}/academic`,
            current: false,
        },
        {
            name: "Documents",
            href: "",
            current: true,
        },
    ];
    return (_jsxs(_Fragment, { children: [_jsx(Tabs, { tabs: tabs }), _jsx(Outlet, {})] }));
};
export default DocumentView;
