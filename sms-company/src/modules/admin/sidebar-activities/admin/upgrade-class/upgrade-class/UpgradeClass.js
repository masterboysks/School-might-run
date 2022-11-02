import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useParams } from "react-router-dom";
import Form from "./Form";
import Filter from "./Filter";
import Table from "./Table";
import Breadnav from "../../../../../../components/common/Breadnav";
export default function UpgradeClass() {
    let { classname } = useParams();
    const pages = [
        { name: "Admin", href: "#", current: false },
        {
            name: "Upgrade Class",
            href: "/admin/dashboard/admin/upgrade/",
            current: false,
        },
        {
            name: classname,
            href: `/admin/upgrade/${classname}`,
            current: true,
        },
    ];
    return (_jsxs("div", { children: [_jsx(Breadnav, { pages: pages }), _jsx(Form, {}), _jsx(Filter, {}), _jsx(Table, {})] }));
}
