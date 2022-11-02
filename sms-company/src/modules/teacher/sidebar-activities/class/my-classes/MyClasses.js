import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import Breadnav from "../../../../../components/common/Breadnav";
import Table from "./Table";
const pages = [
    { name: "Class", href: "#", current: false },
    {
        name: "My classes",
        href: "/teacher/dashboard/class/my-classes/",
        current: true,
    },
];
export default function MyClasses() {
    return (_jsxs(_Fragment, { children: [_jsx(Breadnav, { pages: pages }), _jsx(Table, {})] }));
}
