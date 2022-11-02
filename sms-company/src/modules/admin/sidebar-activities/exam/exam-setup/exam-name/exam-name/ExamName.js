import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import Breadnav from "../../../../../../../components/common/Breadnav";
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
        href: "/admin/dashboard/exam/exam-setup/exam-name",
        current: true,
    },
];
export default function ExamName() {
    return (_jsxs(_Fragment, { children: [_jsx(Breadnav, { pages: pages }), _jsx(Table, {})] }));
}
