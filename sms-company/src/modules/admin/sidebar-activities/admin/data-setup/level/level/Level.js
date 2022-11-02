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
        name: "Level",
        href: "/admin/dashboard/admin/data-setup/level",
        current: true,
    },
];
const Level = () => {
    return (_jsxs(_Fragment, { children: [_jsx(Breadnav, { pages: pages }), _jsx(Table, {})] }));
};
export default Level;
