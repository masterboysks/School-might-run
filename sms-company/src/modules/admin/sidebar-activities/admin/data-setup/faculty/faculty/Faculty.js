import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import Breadnav from "../../../../../../../components/common/Breadnav";
import Table from "./Table";
const pages = [
    { name: "Admin", href: "#", current: false },
    {
        name: "Date setup",
        href: "#",
        current: false,
    },
    {
        name: "Faculty",
        href: "/admin/dashboard/admin/data-setup/faculty",
        current: true,
    },
];
const Faculty = () => {
    return (_jsxs(_Fragment, { children: [_jsx(Breadnav, { pages: pages }), _jsx(Table, {})] }));
};
export default Faculty;
