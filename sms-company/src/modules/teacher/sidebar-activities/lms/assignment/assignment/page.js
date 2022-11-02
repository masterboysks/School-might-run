import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import Breadnav from "../../../../../../components/common/Breadnav";
import Table from "./Table";
const pages = [
    { name: "Lms", href: "#", current: false },
    {
        name: "Assignment",
        href: "/teacher/dashboard/lms/assignment/",
        current: true,
    },
];
export default function Assignment() {
    return (_jsxs(_Fragment, { children: [_jsx(Breadnav, { pages: pages }), "aaignnent search", _jsx(Table, {})] }));
}
