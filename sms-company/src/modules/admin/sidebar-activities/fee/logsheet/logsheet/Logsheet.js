import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { useParams } from "react-router-dom";
import Breadnav from "../../../../../../components/common/Breadnav";
import { Form } from "./Form";
import LogTable from "./LogTable";
import Profile from "./Profile";
export default function Logsheet() {
    const { student } = useParams();
    const pages = [
        { name: "Fee", href: "#", current: false },
        {
            name: "Student logsheet",
            href: "/fee/student-logsheet",
            current: false,
        },
        {
            name: `${student.split("-")[0][0].toUpperCase() +
                student.split("-")[0].substring(1)}'s logsheet`,
            href: "#",
            current: true,
        },
    ];
    return (_jsxs(_Fragment, { children: [_jsx(Breadnav, { pages: pages }), _jsx(Profile, {}), _jsx(Form, {}), _jsx(LogTable, {})] }));
}
