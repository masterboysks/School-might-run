import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import Breadnav from "../../../../../components/common/Breadnav";
import Break from "../../../../../components/common/Break";
import Form from "./Form";
const pages = [
    { name: "Admin", href: "#", current: false },
    {
        name: "Organization setup",
        href: "/admin/dashboard/admin/organization-setup",
        current: true,
    },
];
const OrginazationSetup = () => {
    return (_jsxs(_Fragment, { children: [_jsx(Breadnav, { pages: pages }), _jsx(Break, { title: "Organization details" }), _jsx(Form, {})] }));
};
export default OrginazationSetup;
