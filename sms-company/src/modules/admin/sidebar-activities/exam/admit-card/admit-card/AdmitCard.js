import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import Breadnav from "../../../../../../components/common/Breadnav";
import Form from "./Form";
import Table from "./Table";
const pages = [
    { name: "Exam", href: "#", current: false },
    {
        name: "Admit card",
        href: "/admin/dashboard/exam/admit-card",
        current: true,
    },
];
export default function AdmitCard() {
    return (_jsxs(_Fragment, { children: [_jsx(Breadnav, { pages: pages }), _jsx(Form, {}), _jsx(Table, {})] }));
}
