import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import Breadnav from "../../../../../../components/common/Breadnav";
import Break from "../../break";
import Form from "./Form";
const pages = [
    { name: "Fee", href: "#", current: false },
    {
        name: "Fee assign",
        href: "/fee/fee-assign/",
        current: true,
    },
];
export default function Assign() {
    return (_jsxs(_Fragment, { children: [_jsx(Breadnav, { pages: pages }), _jsx(Break, { title: "Class info" }), _jsx(Form, {})] }));
}
