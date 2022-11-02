import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { useParams } from "react-router-dom";
import Breadnav from "../../../../../../components/common/Breadnav";
import Break from "../../../../../../components/common/Break";
import AttendanceTopper from "./AttendanceTopper";
import Details from "./Details";
import ExamTopper from "./ExamTopper";
export default function TopperReportClass() {
    const { classOfSchool } = useParams();
    const pages = [
        { name: "Report", href: "#", current: false },
        {
            name: "Topper Report",
            href: "/report/topper-report",
            current: false,
        },
        {
            name: classOfSchool,
            href: "#",
            current: true,
        },
    ];
    return (_jsxs(_Fragment, { children: [_jsx(Breadnav, { pages: pages }), _jsx(Details, {}), _jsx(Break, { title: "Exam topper" }), _jsx(ExamTopper, {}), _jsx(Break, { title: "Attendance topper" }), _jsx(AttendanceTopper, {})] }));
}
