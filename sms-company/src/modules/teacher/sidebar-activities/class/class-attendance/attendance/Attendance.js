import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { useParams } from "react-router-dom";
import Breadnav from "../../../../../../components/common/Breadnav";
import Break from "../../../../../../components/common/Break";
import Table from "./Table";
import Form from "./Form";
export default function Attendance() {
    const { classOfSchool, section } = useParams();
    const pages = [
        { name: "Class", href: "#", current: false },
        {
            name: "Classess",
            href: "/teacher/dashboard/class/classess/",
            current: false,
        },
        {
            name: `${classOfSchool}-${section}`,
            href: "#",
            current: true,
        },
    ];
    return (_jsxs(_Fragment, { children: [_jsx(Breadnav, { pages: pages }), _jsx(Break, { title: "Attendance" }), _jsx(Form, {}), _jsx(Table, {})] }));
}
