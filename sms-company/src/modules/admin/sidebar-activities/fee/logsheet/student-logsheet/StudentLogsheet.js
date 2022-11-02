import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import Breadnav from "../../../../../../components/common/Breadnav";
import Form from "./Form";
import Table from "./Table";
const pages = [
    { name: "Fee", href: "#", current: false },
    {
        name: "Student logsheet",
        href: "/fee/student-logsheet",
        current: true,
    },
];
export default function StudentLogsheet() {
    return (_jsxs(_Fragment, { children: [_jsx(Breadnav, { pages: pages }), _jsx(Form, {}), _jsx(Table, {})] }));
}
