import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import Breadnav from "../../../../../../../components/common/Breadnav";
import Form from "./Form";
import Table from "./Table";
const pages = [
    { name: "Exam", href: "#", current: false },
    {
        name: "Exam setup",
        href: "#",
        current: false,
    },
    {
        name: "Exam name",
        href: "/admin/dashboard/exam/exam-setup/assign-mark",
        current: true,
    },
];
export default function AssignExam() {
    return (_jsxs(_Fragment, { children: [_jsx(Breadnav, { pages: pages }), _jsx(Form, {}), _jsx(Table, {})] }));
}
