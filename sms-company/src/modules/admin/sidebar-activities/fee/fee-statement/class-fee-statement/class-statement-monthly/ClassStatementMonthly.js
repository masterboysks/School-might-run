import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { useParams } from "react-router-dom";
import Breadnav from "../../../../../../../components/common/Breadnav";
import Break from "../../../break";
import Details from "./Details";
import Table from "./Table";
export default function ClassStatement() {
    const { classOfSchool } = useParams();
    const pages = [
        { name: "Fee", href: "#", current: false },
        {
            name: "Fee statement",
            href: "#",
            current: false,
        },
        {
            name: "Class fee statement",
            href: "/fee/fee-statement/class-fee-statement",
            current: false,
        },
        {
            name: `${classOfSchool.substring(0, 1).toUpperCase()}${classOfSchool
                .substring(1)
                .split("-")
                .slice(0, -1)
                .join(" ")}-${`${classOfSchool
                .substring(1)
                .split("-")
                .slice(-1)}`.toUpperCase()}`,
            href: "",
            current: true,
        },
    ];
    return (_jsxs(_Fragment, { children: [_jsx(Breadnav, { pages: pages }), _jsx(Details, {}), _jsx(Break, { title: "Monthly fee statement" }), _jsx(Table, {})] }));
}
