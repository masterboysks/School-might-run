import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import ClassTable from "./classTable/ClassTable";
import Form from "./Form";
import Breadnav from "../../../../../components/common/Breadnav";
const pages = [
    { name: "Student", href: "#", current: false },
    {
        name: "Student Attendance",
        href: "/student/student-attendance/",
        current: true,
    },
];
const Main = () => {
    return (_jsxs("div", { children: [_jsx(Breadnav, { pages: pages }), _jsx(Form, {}), _jsx(ClassTable, {})] }));
};
export default Main;
