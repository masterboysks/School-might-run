import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Table from "./Table";
import Breadnav from "../../../../../../components/common/Breadnav";
import Form from "./Form";
const pages = [
    { name: "Admin", href: "#", current: false },
    {
        name: "Upgrade Class",
        href: "/admin/dashboard/admin/upgrade/",
        current: true,
    },
];
export default function Upgrade() {
    return (_jsxs("div", { children: [_jsx(Breadnav, { pages: pages }), _jsx(Form, {}), _jsx(Table, {})] }));
}
