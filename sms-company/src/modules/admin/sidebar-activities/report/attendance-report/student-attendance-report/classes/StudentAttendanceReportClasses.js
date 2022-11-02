import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import Breadnav from "../../../../../../../components/common/Breadnav";
import Form from "./Form";
import Table from "./Table";
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
        current: true,
    },
];
export default function StudentAttendanceReportClasses() {
    return (_jsxs(_Fragment, { children: [_jsx(Breadnav, { pages: pages }), _jsx(Form, {}), _jsx(Table, {})] }));
}
