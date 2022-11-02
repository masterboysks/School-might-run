import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Profile from "./Profile";
import Form from "./Form";
import Table from "./Table";
import Breadnav from "../../../../../../components/common/Breadnav";
import { useParams } from "react-router-dom";
const StudentProfile = () => {
    const { classOfSchool, section, studentName } = useParams();
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
            current: false,
        },
        {
            name: `${studentName}`,
            href: `/student/student-attendance/${classOfSchool}/${section}/${studentName}`,
            current: true,
        },
    ];
    return (_jsx("div", { className: " sm:ml-[72px] box-border md:ml-0 md:w-full  md:min-w-0 flex-1", children: _jsx("div", { className: "absolute left-0 w-full top-28 sm:mt-9 md:block sm:static -z-10", children: _jsxs("div", { className: "w-11/12 mx-auto text-sm -z-10", children: [_jsx("div", { className: "pt-9", children: _jsx(Breadnav, { pages: pages }) }), _jsx(Profile, {}), _jsx(Form, {}), _jsx(Table, {})] }) }) }));
};
export default StudentProfile;
