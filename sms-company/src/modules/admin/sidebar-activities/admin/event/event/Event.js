import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Breadnav from "../../../../../../components/common/Breadnav";
import Calendar from "./Calendar";
const pages = [
    { name: "Admin", href: "#", current: false },
    {
        name: "Event",
        href: "/admin/dashboard/admin/event-calender",
        current: true,
    },
];
function Event() {
    return (_jsxs("div", { children: [_jsx(Breadnav, { pages: pages }), _jsx(Calendar, {})] }));
}
export default Event;
