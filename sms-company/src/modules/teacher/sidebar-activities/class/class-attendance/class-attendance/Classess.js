import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import Breadnav from "../../../../../../components/common/Breadnav";
import Table from "./Table";
const pages = [
    { name: "Class", href: "#", current: false },
    {
        name: "Classess",
        href: "/teacher/dashboard/class/classess/",
        current: true,
    },
];
export default function Classess() {
    return (_jsxs(_Fragment, { children: [_jsx(Breadnav, { pages: pages }), "Level", _jsx(Table, {})] }));
}
