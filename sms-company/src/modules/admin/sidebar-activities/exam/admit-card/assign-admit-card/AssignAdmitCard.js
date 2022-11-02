import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import Breadnav from "../../../../../../components/common/Breadnav";
import Break from "../../../../../../components/common/Break";
import Details from "./Details";
import Table from "./Table";
const pages = [
    { name: "Exam", href: "#", current: false },
    {
        name: "Admit card",
        href: "/admin/dashboard/exam/admit-card",
        current: false,
    },
    {
        name: "Assign admit card",
        href: "#",
        current: true,
    },
];
export default function AssignAdmitCard() {
    return (_jsxs(_Fragment, { children: [_jsx(Breadnav, { pages: pages }), _jsx(Details, {}), _jsx(Break, { title: "Assign admit card" }), _jsx(Table, {})] }));
}
