import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { Outlet, useParams } from "react-router-dom";
import Tabs from "../../Tabs";
const AcademicsView = () => {
    const { id } = useParams();
    const tabs = [
        {
            name: "General details",
            href: `/admin/dashboard/staff/staff-information/${id}/general`,
            current: false,
        },
        {
            name: "Academic details",
            href: "",
            current: true,
        },
        {
            name: "Documents",
            href: `/admin/dashboard/staff/staff-information/${id}/document`,
            current: false,
        },
    ];
    return (_jsxs(_Fragment, { children: [_jsx(Tabs, { tabs: tabs }), _jsx(Outlet, {})] }));
};
export default AcademicsView;
