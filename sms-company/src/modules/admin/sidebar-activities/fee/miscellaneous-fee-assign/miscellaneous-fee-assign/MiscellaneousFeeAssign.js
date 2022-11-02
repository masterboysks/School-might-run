import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Breadnav from "../../../../../../components/common/Breadnav";
import Table from "./Table";
const pages = [
    { name: "Fee", href: "#", current: false },
    {
        name: "Miscellaneous fee assign",
        href: "/fee/miscellaneous-fee-assign",
        current: true,
    },
];
function Notice() {
    return (_jsxs("div", { children: [_jsx(Breadnav, { pages: pages }), _jsx(Table, {})] }));
}
export default Notice;
