import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import Breadnav from "../../../../../../components/common/Breadnav";
import Form from "./Form";
import Table from "./Table";
const pages = [
    { name: "Staff", href: "#", current: false },
    {
        name: "Teacher assign",
        href: "/staff/teacher-assign/",
        current: true,
    },
];
function TeacherAssign() {
    return (_jsxs(_Fragment, { children: [_jsx(Breadnav, { pages: pages }), _jsx(Form, {}), _jsx(Table, {})] }));
}
export default TeacherAssign;
