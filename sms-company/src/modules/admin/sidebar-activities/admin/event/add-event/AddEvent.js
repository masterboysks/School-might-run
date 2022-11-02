import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useParams } from "react-router-dom";
import Breadnav from "../../../../../../components/common/Breadnav";
import Break from "../../../../../../components/common/Break";
import Form from "./Form";
function AddEvent() {
    const { date } = useParams();
    const pages = [
        { name: "Admin", href: "#", current: false },
        {
            name: "Event",
            href: "/admin/dashboard/admin/event-calender",
            current: false,
        },
        {
            name: "Add",
            href: "#",
            current: false,
        },
        {
            name: date,
            href: `/admin/event/add/${date}`,
            current: true,
        },
    ];
    return (_jsxs("div", { children: [_jsx(Breadnav, { pages: pages }), _jsx(Break, { title: "Add event" }), _jsx(Form, { date: date })] }));
}
export default AddEvent;
