import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import Search from "@mui/icons-material/SearchOutlined";
import { useForm } from "react-hook-form";
import Breadnav from "../../../../../components/common/Breadnav";
import { Input, Select } from "../../../../../components/common/fields";
const pages = [
    { name: "Student", href: "#", current: false },
    {
        name: "Student Information",
        href: "/student/student-information/",
        current: true,
    },
];
const arrayLevel = [
    { name: "anish", id: 7 },
    { name: "saurav", id: 4 },
    { name: "asmita", id: 3 },
    { name: "prahlad", id: 2 },
];
const Form = () => {
    const { register, handleSubmit, reset, watch, formState: { errors }, } = useForm();
    return (_jsxs(_Fragment, { children: [_jsx(Breadnav, { pages: pages }), _jsxs("form", { className: "sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 ring-1 ring-black ring-opacity-5 form-solid grid grid-cols-1 gap-4 p-4 my-6 rounded-md shadow", children: [_jsx("div", { className: "", children: _jsx(Input, { label: "Student ID", placeholder: "9955112", register: register, name: "student_id" }) }), _jsx("div", { className: "", children: _jsx(Input, { label: "Student Name", placeholder: "Susank", register: register, name: "student_name" }) }), _jsx("div", { className: "", children: _jsx(Select, { value: arrayLevel, register: register, name: "class_id", label: "Class/ Semester" }) }), _jsx("div", { className: "", children: _jsx(Select, { value: arrayLevel, register: register, name: "faculty", label: "Faculty" }) }), _jsx("div", { className: "", children: _jsx(Select, { value: arrayLevel, register: register, name: "section", label: "Section" }) }), _jsx("div", { className: "", children: _jsx(Select, { value: arrayLevel, register: register, name: "status", label: "Status" }) }), _jsx("div", { className: "", children: _jsx(Select, { value: arrayLevel, register: register, name: "order_by", label: "Order By" }) }), _jsx("div", { className: "h-fit w-fit bg-primary-btn sm:box-content lg:col-span-2 xl:col-span-1 box-border px-4 py-3 mt-auto ml-auto text-white rounded cursor-pointer", children: _jsx(Search, { className: "w-4 mx-auto" }) })] })] }));
};
export default Form;
