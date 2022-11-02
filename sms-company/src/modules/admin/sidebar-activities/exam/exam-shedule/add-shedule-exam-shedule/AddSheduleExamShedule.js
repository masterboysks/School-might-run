import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { useParams } from "react-router-dom";
import Breadnav from "../../../../../../components/common/Breadnav";
import Break from "../../../../../../components/common/Break";
import Form from "./Form";
import Table from "./Table";
export default function AddSheduleExamShedule() {
    const { examName } = useParams();
    const pages = [
        { name: "Exam", href: "#", current: false },
        {
            name: "Exam shedule",
            href: "/admin/dashboard/exam/exam-shedule",
            current: false,
        },
        {
            name: examName,
            href: `/exam/exam-shedule/shedule/${examName}`,
            current: false,
        },
        {
            name: "Add",
            href: `/exam/exam-shedule/shedule/${examName}/add`,
            current: true,
        },
    ];
    return (_jsxs(_Fragment, { children: [_jsx(Breadnav, { pages: pages }), _jsx(Break, { title: "Exam schedule" }), _jsx(Form, { children: _jsx(Table, {}) })] }));
}
