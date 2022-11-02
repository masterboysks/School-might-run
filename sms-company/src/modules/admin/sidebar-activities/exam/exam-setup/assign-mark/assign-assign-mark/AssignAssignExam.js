import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { useParams } from "react-router-dom";
import Breadnav from "../../../../../../../components/common/Breadnav";
import Break from "../../../../../../../components/common/Break";
import Form from "./Form";
import Table from "./Table";
export default function AssignAssignExam() {
    const { classOfSchool, section } = useParams();
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
            current: false,
        },
        {
            name: `${classOfSchool}-${section}`,
            href: "#",
            current: true,
        },
    ];
    return (_jsxs(_Fragment, { children: [_jsx(Breadnav, { pages: pages }), _jsx(Break, { title: "Assign marks" }), _jsx(Form, {}), _jsx(Table, {})] }));
}
