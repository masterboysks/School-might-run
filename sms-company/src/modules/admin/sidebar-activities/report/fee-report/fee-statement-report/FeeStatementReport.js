import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { useParams } from "react-router-dom";
import Breadnav from "../../../../../../components/common/Breadnav";
import Break from "../../../../../../components/common/Break";
import Details from "./Details";
import Table from "./Table";
export default function ClassStatement() {
    const { classOfSchool, section } = useParams();
    const pages = [
        { name: "Report", href: "#", current: false },
        {
            name: "Fee report",
            href: "#",
            current: false,
        },
        {
            name: classOfSchool + "-" + section,
            href: "#",
            current: true,
        },
    ];
    return (_jsxs(_Fragment, { children: [_jsx(Breadnav, { pages: pages }), _jsx(Details, {}), _jsx(Break, { title: "Fee statement" }), _jsx(Table, {})] }));
}
