import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Breadnav from "../../../../../../components/common/Breadnav";
import Table from "./Table";
const pages = [
    { name: "Admin", href: "#", current: false },
    {
        name: "Push notification",
        href: "/admin/dashboard/admin/notice",
        current: true,
    },
];
function Notice() {
    return (_jsxs("div", { children: [_jsx(Breadnav, { pages: pages }), _jsx(Table, {})] }));
}
export default Notice;
