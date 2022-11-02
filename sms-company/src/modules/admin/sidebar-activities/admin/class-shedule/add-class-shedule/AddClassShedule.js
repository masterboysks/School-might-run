import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { Link, useNavigate } from "react-router-dom";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import { Input, MultipleSelect, Select, } from "../../../../../../components/common/fields";
import { useState } from "react";
import Breadnav from "../../../../../../components/common/Breadnav";
import Break from "../../../../../../components/common/Break";
import subjectApi from "../../../../../../api/admin/dashboard/admin/data-setup/subjectApi";
import teacherApi from "../../../../../../api/admin/dashboard/staff/teacher/teacherApi";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import classSheduleApi from "../../../../../../api/admin/dashboard/admin/classSheduleApi";
const pages = [
    { name: "Admin", href: "#", current: false },
    {
        name: "Class schedule",
        href: "/admin/dashboard/admin/class-schedule/",
        current: false,
    },
    {
        name: "Class 1 'A'",
        href: "/admin/dashboard/admin/class-schedule/add/class-1-a",
        current: true,
    },
];
const arrayDays = [
    { name: "Sun", id: 7 },
    { name: "Mon", id: 1 },
    { name: "Tue", id: 2 },
    { name: "Wed", id: 3 },
    { name: "Thur", id: 4 },
    { id: 5, name: "Fri" },
    { name: "Sat", id: 6 },
];
function AddClassShedule() {
    const { register, handleSubmit, control, formState: { errors }, } = useForm();
    const [error, setError] = useState("");
    const [arrayTeachers, setArrayTeachers] = useState([]);
    const [arraySubjects, setArraySubjects] = useState([]);
    const navigate = useNavigate();
    const onSubmit = async (data) => {
        const d = {
            ...data,
            weekdays: data.weekdays?.map((c) => c.id),
            class_id: 1,
            level_id: 1,
            section_id: 1,
        };
        console.log(d);
        const res = await classSheduleApi.create(d);
        res?.status === 201
            ? navigate("/admin/dashboard/admin/class-schedule")
            : setError("Failed to create class shedule");
    };
    useEffect(() => {
        (async () => {
            const data = await teacherApi.getAll();
            setArrayTeachers(data?.data?.data);
        })();
        (async () => {
            const data = await subjectApi.getAll();
            setArraySubjects(data?.data?.data);
        })();
    }, []);
    // const [days, setDays] = useState([]); //array for multiple
    // const [daysError, setDaysError] = useState(false);
    return (_jsx(_Fragment, { children: _jsxs("div", { children: [_jsx(Breadnav, { pages: pages }), _jsx("div", { className: "lg:flex my-12", children: _jsx("div", { className: "ring-black ring-opacity-5 ring-1 form-solid lg:w-4/6 p-4 rounded-md shadow", children: _jsxs("div", { className: "md:grid-cols-2 gap-x-5 gap-y-2 grid grid-cols-1", children: [_jsxs("div", { className: "flex justify-between py-2 border-b-[1px] border-b-primary-grey-300 ", children: [_jsx("span", { className: "text-primary-grey-600", children: "Class:" }), _jsx("span", { className: "text-primary-grey-700", children: "1" })] }), _jsxs("div", { className: "flex justify-between py-2 border-b-[1px] border-b-primary-grey-300 ", children: [_jsx("span", { className: "text-primary-grey-600", children: "Section:" }), _jsx("span", { className: "text-primary-grey-700", children: "B" })] }), _jsxs("div", { className: "flex justify-between py-2 border-b-[1px] border-b-primary-grey-300 ", children: [_jsx("span", { className: "text-primary-grey-600", children: "Level:" }), _jsx("span", { className: "text-primary-grey-700", children: "School level" })] }), _jsxs("div", { className: "flex justify-between py-2 border-b-[1px] border-b-primary-grey-300 ", children: [_jsx("span", { className: "text-primary-grey-600", children: "No of students:" }), _jsx("span", { className: "text-primary-grey-700", children: "1" })] }), _jsxs("div", { className: " flex justify-between py-2", children: [_jsx("span", { className: "text-primary-grey-600", children: "Faculty:" }), _jsx("span", { className: "text-primary-grey-700" })] })] }) }) }), _jsx(Break, { title: "Class schedule" }), _jsxs("form", { className: "form-solid w-full my-6 rounded-md", onSubmit: handleSubmit(onSubmit), children: [error && (_jsxs(_Fragment, { children: [_jsx("div", { className: "text-lg font-medium text-red-600", children: error }), _jsx("br", {})] })), _jsxs("div", { className: "sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 grid grid-cols-1 gap-4", children: [_jsxs("div", { className: "col-span-full", children: [_jsx(MultipleSelect, { name: "weekdays", label: "Days*", value: arrayDays, control: control, errors: errors, required: true }), _jsx("div", { className: "mt-3", children: "*Note:You can select multiple items at once." })] }), _jsx("div", { children: _jsx(Select, { id: "subject", value: arraySubjects, label: "Subject*", required: true, errors: errors, register: register, name: "subject_id" }) }), _jsx("div", { children: _jsx(Input, { id: "startTimer", name: "start_time", type: "time", label: "Start time*", errors: errors, register: register, required: true }) }), _jsx("div", { children: _jsx(Input, { id: "endTimer", name: "end_time", type: "time", label: "End time*", register: register, errors: errors, required: true }) }), _jsx("div", { children: _jsx(Select, { id: "subject-teacher", name: "teacher_id", label: "Subject teacher*", required: true, register: register, errors: errors, value: arrayTeachers }) }), _jsxs("div", { className: "col-span-full flex", children: ["Add subject", _jsx(Link, { to: "/admin/dashboard/admin/data-setup/subject/add", children: _jsx("div", { className: "outline outline-1 outline-primary-grey-700 mx-2 rounded cursor-pointer", children: _jsx(AddOutlinedIcon, { fontSize: "inherit", className: "text-primary-grey-700" }) }) })] }), _jsx("div", { className: "col-span-full ml-auto", children: _jsxs("div", { className: " w-fit my-auto", children: [_jsx(Link, { to: "/admin/dashboard/admin/class-schedule", className: "secondary_btn", children: "Cancel" }), _jsx("button", { type: "submit", className: "primary_btn", children: "Save" })] }) })] })] })] }) }));
}
export default AddClassShedule;
