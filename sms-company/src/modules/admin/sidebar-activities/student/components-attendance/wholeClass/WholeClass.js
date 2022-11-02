import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useParams } from "react-router-dom";
import Breadnav from "../../../../../../components/common/Breadnav";
import Details from "./Details";
import Form from "./Form";
import Table from "./Table";
const WholeClass = () => {
    const { classOfSchool, section } = useParams();
    const pages = [
        { name: "Student", href: "#", current: false },
        {
            name: "Student Attendance",
            href: "/student/student-attendance/",
            current: false,
        },
        {
            name: `${classOfSchool}-${section}`,
            href: `/student/student-attendance/${classOfSchool}/${section}`,
            current: true,
        },
    ];
    return (_jsx("div", { className: " sm:ml-[72px] box-border md:ml-0 md:w-full  md:min-w-0 flex-1", children: _jsx("div", { className: "top-28 sm:mt-9 md:block sm:static -z-10 absolute left-0 w-full", children: _jsxs("div", { className: "-z-10 w-11/12 mx-auto text-sm", children: [_jsx("div", { className: "pt-9", children: _jsx(Breadnav, { pages: pages }) }), _jsx(Details, {}), _jsx(Form, {}), _jsx(Table, {})] }) }) }));
};
export default WholeClass;
