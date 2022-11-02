import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { Outlet, useParams } from "react-router-dom";
import Tabs from "../../Tabs";
export default function ViewGeneral() {
    const { id } = useParams();
    const tabs = [
        {
            name: "General details",
            href: "",
            current: true,
        },
        {
            name: "Academic details",
            href: `/admin/dashboard/staff/staff-information/${id}/academic`,
            current: false,
        },
        {
            name: "Documents",
            href: `/admin/dashboard/staff/staff-information/${id}/document`,
            current: false,
        },
    ];
    return (_jsxs(_Fragment, { children: [_jsx(Tabs, { tabs: tabs }), _jsx("div", { className: "my-6", children: _jsx(Outlet, {}) })] }));
}
