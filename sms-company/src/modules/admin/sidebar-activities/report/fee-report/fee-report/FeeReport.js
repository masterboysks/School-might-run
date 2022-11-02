import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import LanguageIcon from "@mui/icons-material/Language";
import Table from "./Table";
import Breadnav from "../../../../../../components/common/Breadnav";
import Form from "./Form";
const pages = [
    { name: "Report", href: "#", current: false },
    {
        name: "Fee Report",
        href: "/report/fee-report",
        current: true,
    },
];
export default function FeeStatement() {
    return (_jsxs(_Fragment, { children: [_jsx(Breadnav, { pages: pages }), _jsx(Form, {}), _jsx("div", { className: "text-primary-btn w-full", children: _jsxs("div", { className: "w-fit flex items-center ml-auto", children: [_jsx("div", { className: "", children: "Publish invoice" }), _jsx("div", { className: " text-primary-btn ml-2", children: _jsx(LanguageIcon, {}) })] }) }), _jsx(Table, {})] }));
}
