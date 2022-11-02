import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import Breadnav from "../../../../../../../components/common/Breadnav";
import Tables from "./Tables";
const pages = [
    { name: "Admin", href: "#", current: false },
    {
        name: "Date setup",
        href: "#",
        current: false,
    },
    {
        name: "University/Board",
        href: "/admin/dashboard/admin/data-setup/university-board",
        current: true,
    },
];
const UniversityBoard = () => {
    return (_jsxs(_Fragment, { children: [_jsx(Breadnav, { pages: pages }), _jsx(Tables, {})] }));
};
export default UniversityBoard;
