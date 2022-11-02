import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { Link } from "react-router-dom";
import Breadnav from "../../../../../../components/common/Breadnav";
import Break from "../../Break";
import { MultipleSelect, Select, } from "../../../../../../components/common/fields";
import { useForm } from "react-hook-form";
const pages = [
    { name: "Staff", href: "#", current: false },
    {
        name: "Teacher assign",
        href: "/staff/teacher-assign/",
        current: false,
    },
    {
        name: "Assign Teacher",
        href: "/staff/teacher-assign/assign-teacher",
        current: true,
    },
];
const arrayDepartment = [
    { id: 1, name: "THis" },
    { id: 2, name: "All" },
];
function AssignTeacher() {
    const { register, formState: { errors }, control, handleSubmit, } = useForm();
    return (_jsxs(_Fragment, { children: [_jsx(Breadnav, { pages: pages }), _jsx("div", { className: "ring-black ring-opacity-5 ring-1 form-solid lg:w-4/6 p-4 my-6 rounded-md shadow", children: _jsxs("div", { className: "md:grid-cols-2 gap-x-5 gap-y-2 grid grid-cols-1", children: [_jsxs("div", { className: "flex justify-between py-2 border-b-[1px] border-b-primary-grey-300 ", children: [_jsx("span", { className: "text-primary-grey-600", children: "Class:" }), _jsx("span", { className: "text-primary-grey-700", children: "1" })] }), _jsxs("div", { className: "flex justify-between py-2 border-b-[1px] border-b-primary-grey-300 ", children: [_jsx("span", { className: "text-primary-grey-600", children: "Section:" }), _jsx("span", { className: "text-primary-grey-700", children: "B" })] }), _jsxs("div", { className: "flex justify-between py-2 border-b-[1px] border-b-primary-grey-300 ", children: [_jsx("span", { className: "text-primary-grey-600", children: "Level:" }), _jsx("span", { className: "text-primary-grey-700", children: "School level" })] }), _jsxs("div", { className: "flex justify-between py-2 border-b-[1px] border-b-primary-grey-300 ", children: [_jsx("span", { className: "text-primary-grey-600", children: "No of students:" }), _jsx("span", { className: "text-primary-grey-700", children: "1" })] }), _jsxs("div", { className: " flex justify-between py-2", children: [_jsx("span", { className: "text-primary-grey-600", children: "Faculty:" }), _jsx("span", { className: "text-primary-grey-700" })] })] }) }), _jsx(Break, { title: "Assign teacher" }), _jsxs("form", { className: "form-solid my-6 rounded-md", children: [_jsxs("div", { className: "sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 grid grid-cols-1 gap-4", children: [_jsx("div", { className: "", children: _jsx(Select, { register: register, name: "department", value: arrayDepartment, label: "Department*" }) }), _jsx("div", { className: "", children: _jsx(Select, { register: register, name: "designation", value: arrayDepartment, label: "Designation*" }) }), _jsx("div", { className: "", children: _jsx(Select, { label: "Teacher name*", name: "teacher_name", value: arrayDepartment, register: register }) }), _jsx("div", { className: "", children: _jsx(Select, { label: "Teacher ID*", value: arrayDepartment, register: register, name: "teacher_id" }) }), _jsxs("div", { className: "", children: [_jsx(MultipleSelect, { control: control, label: "Subject*", value: arrayDepartment, name: "subject" }), _jsx("div", { className: "mt-3", children: "*Note : You can select multiple subject at once" })] })] }), _jsx("div", { className: "w-full my-6", children: _jsxs("div", { className: " w-fit ml-auto", children: [_jsx(Link, { to: "/admin/dashboard/staff/teacher-assign", className: "secondary_btn", children: "Back" }), _jsx(Link, { to: "/admin/dashboard/staff/teacher-assign", className: "primary_btn", children: "Save" })] }) })] })] }));
}
export default AssignTeacher;
