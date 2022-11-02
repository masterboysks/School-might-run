import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { useParams } from "react-router-dom";
import Breadnav from "../../../../../../../components/common/Breadnav";
import Details from "./Details";
import Form from "./Form";
import Table from "./Table";
export default function StudentAttendanceReportClass() {
    const { classOfSchool, section } = useParams();
    const pages = [
        { name: "Report", href: "#", current: false },
        {
            name: "Attendance report",
            href: "#",
            current: false,
        },
        {
            name: "Student attendance report",
            href: "/report/attendance-report/student-attendance-report",
            current: false,
        },
        {
            name: `${classOfSchool}-${section}`,
            href: "#",
            current: true,
        },
    ];
    return (_jsxs(_Fragment, { children: [_jsx(Breadnav, { pages: pages }), _jsx(Details, {}), _jsx(Form, {}), _jsx(Table, {})] }));
}
