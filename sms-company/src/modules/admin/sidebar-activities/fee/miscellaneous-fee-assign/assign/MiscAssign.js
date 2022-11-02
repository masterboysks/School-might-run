import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import Breadnav from "../../../../../../components/common/Breadnav";
import Break from "../../break";
import Form from "./Form";
const pages = [
    { name: "Fee", href: "#", current: false },
    {
        name: "Miscellaneous fee assign",
        href: "/fee/miscellaneous-fee-assign",
        current: false,
    },
    {
        name: "Assign",
        href: "/fee/miscellaneous-fee-assign/assign",
        current: true,
    },
];
export default function MiscAssign() {
    return (_jsxs(_Fragment, { children: [_jsx(Breadnav, { pages: pages }), _jsx(Break, { title: "Assign misc. fee" }), _jsx(Form, {})] }));
}
