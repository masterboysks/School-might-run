import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import Breadnav from "../../../../../../components/common/Breadnav";
import Table from "./Table";
const pages = [
    { name: "Fee", href: "#", current: false },
    {
        name: "Fee assign",
        href: "/fee/fee-assign/",
        current: true,
    },
];
export default function FeeAssign() {
    return (_jsxs(_Fragment, { children: [_jsx(Breadnav, { pages: pages }), _jsx(Table, {})] }));
}
