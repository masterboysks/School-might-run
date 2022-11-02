import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { useParams } from "react-router-dom";
import Breadnav from "../../../../../../../components/common/Breadnav";
import Details from "./Details";
import Table from "./Table";
export default function OpenMarksheet() {
    const { classOfSchool, section, studentName, studentId } = useParams();
    const pages = [
        { name: "Exam", href: "#", current: false },
        {
            name: "Marksledger",
            href: "/admin/dashboard/exam/marks-ledger",
            current: false,
        },
        {
            name: `${classOfSchool} - ${section}`,
            href: `/exam/marks-ledger/view/${classOfSchool}/${section}`,
            current: false,
        },
        {
            name: studentName,
            href: `/exam/marks-ledger/view/${classOfSchool}/${section}/${studentName}/${studentId}`,
            current: true,
        },
    ];
    return (_jsxs(_Fragment, { children: [_jsx(Breadnav, { pages: pages }), _jsx(Details, {}), _jsx(Table, {})] }));
}
