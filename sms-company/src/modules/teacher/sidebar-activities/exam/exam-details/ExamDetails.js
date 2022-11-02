import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { useParams } from "react-router-dom";
import Breadnav from "../../../../../components/common/Breadnav";
import Table from "./Table";
export default function ExamDetails() {
    const { examName } = useParams();
    const pages = [
        { name: "Exam", href: "#", current: false },
        {
            name: "Exam marks",
            href: "/teacher/dashboard/exam/exam-marks/",
            current: false,
        },
        {
            name: examName,
            href: "#",
            current: true,
        },
    ];
    return (_jsxs(_Fragment, { children: [_jsx(Breadnav, { pages: pages }), "level", _jsx(Table, {})] }));
}
