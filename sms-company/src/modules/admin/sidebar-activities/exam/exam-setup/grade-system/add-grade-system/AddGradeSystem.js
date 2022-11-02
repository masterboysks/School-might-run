import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import Breadnav from "../../../../../../../components/common/Breadnav";
import Break from "../../../../../../../components/common/Break";
import Form from "./Form";
const pages = [
    { name: "Exam", href: "#", current: false },
    {
        name: "Exam setup",
        href: "#",
        current: false,
    },
    {
        name: "Grading system",
        href: "/admin/dashboard/exam/exam-setup/grading-system",
        current: false,
    },
    {
        name: "Add",
        href: "/admin/dashboard/exam/exam-setup/grading-system/add",
        current: true,
    },
];
export default function AddGradeSystem() {
    return (_jsxs(_Fragment, { children: [_jsx(Breadnav, { pages: pages }), _jsx(Break, { title: "Add grade system" }), _jsx(Form, {})] }));
}
