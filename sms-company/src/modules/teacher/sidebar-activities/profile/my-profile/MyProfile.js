import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import Breadnav from "../../../../../components/common/Breadnav";
import Details from "./Details";
import Table from "./Table";
const pages = [
    { name: "Profile", href: "#", current: false },
    {
        name: "My profile",
        href: "/teacher/dashboard/profile/my-profile/",
        current: true,
    },
];
export default function MyProfile() {
    return (_jsxs(_Fragment, { children: [_jsx(Breadnav, { pages: pages }), _jsx(Details, {}), _jsx(Table, {})] }));
}
