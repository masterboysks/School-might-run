import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import Search from "@mui/icons-material/SearchOutlined";
import { Select } from "../../../../../../components/common/oldFields";
import { useState } from "react";
import Breadnav from "../../../../../../components/common/Breadnav";
import Table from "./Table";
const pages = [
    { name: "Admin", href: "#", current: false },
    {
        name: "Class schedule",
        href: "/admin/dashboard/admin/class-schedule/",
        current: true,
    },
];
const ClassSchedule = () => {
    const arrayLevel = ["jhdgs", "fjkdhgs", "hdsg", "djkshf"];
    const arrayClass = ["jhdgs", "fjkdhgs", "hdsg", "djkshf"];
    const arrayFaculty = ["jhdgs", "fjkdhgs", "hdsg", "djkshf"];
    const arraySection = ["jhdgs", "fjkdhgs", "hdsg", "djkshf"];
    const [level, setLevel] = useState("Select");
    const [classSemester, setClassSemester] = useState("Select");
    const [faculty, setFaculty] = useState("Select");
    const [section, setSection] = useState("Select");
    const [errorLevel, setErrorLevel] = useState(false);
    const [errorClass, setErrorClass] = useState(false);
    const [errorSection, setErrorSection] = useState(false);
    const handleSearch = () => {
        // console.log({ level, classSemester, faculty, section });
        level === "Select" && setErrorLevel(true);
        classSemester === "Select" && setErrorClass(true);
        section === "Select" && setErrorSection(true);
    };
    return (_jsxs(_Fragment, { children: [_jsx(Breadnav, { pages: pages }), _jsxs("form", { className: "sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 ring-1 ring-black ring-opacity-5 form-solid grid grid-cols-1 gap-4 p-4 my-6 rounded-md shadow", children: [_jsx("div", { className: "", children: _jsx(Select, { id: "level", name: "level", error: errorLevel, setError: setErrorLevel, label: "Level*", value: arrayLevel, selected: level, setSelected: setLevel }) }), _jsx("div", { className: "", children: _jsx(Select, { id: "class-semester", name: "class-semester", error: errorClass, setError: setErrorClass, label: "Class/Semester*", value: arrayClass, selected: classSemester, setSelected: setClassSemester }) }), _jsx("div", { className: "", children: _jsx(Select, { id: "faculty", name: "faculty", label: "Faculty", value: arrayFaculty, selected: faculty, setSelected: setFaculty }) }), _jsx("div", { className: "", children: _jsx(Select, { id: "section", name: "section", error: errorSection, setError: setErrorSection, label: "Section*", value: arraySection, selected: section, setSelected: setSection }) }), _jsx("div", { className: "h-fit w-fit bg-primary-btn lg:col-span-2 xl:col-span-full sm:box-content col-span-full box-border px-4 py-3 mt-auto ml-auto text-white rounded cursor-pointer", children: _jsx(Search, { className: "w-4 mx-auto", onClick: handleSearch }) })] }), _jsx("div", { className: "lg:flex my-12", children: _jsx("div", { className: "ring-black ring-opacity-5 ring-1 form-solid lg:w-4/6 p-4 rounded-md shadow", children: _jsxs("div", { className: "md:grid-cols-2 gap-x-5 gap-y-2 grid grid-cols-1", children: [_jsxs("div", { className: "flex justify-between py-2 border-b-[1px] border-b-primary-grey-300 ", children: [_jsx("span", { className: "text-primary-grey-600", children: "Class:" }), _jsx("span", { className: "text-primary-grey-700", children: "1" })] }), _jsxs("div", { className: "flex justify-between py-2 border-b-[1px] border-b-primary-grey-300 ", children: [_jsx("span", { className: "text-primary-grey-600", children: "Section:" }), _jsx("span", { className: "text-primary-grey-700", children: "B" })] }), _jsxs("div", { className: "flex justify-between py-2 border-b-[1px] border-b-primary-grey-300 ", children: [_jsx("span", { className: "text-primary-grey-600", children: "Level:" }), _jsx("span", { className: "text-primary-grey-700", children: "School level" })] }), _jsxs("div", { className: "flex justify-between py-2 border-b-[1px] border-b-primary-grey-300 ", children: [_jsx("span", { className: "text-primary-grey-600", children: "No of students:" }), _jsx("span", { className: "text-primary-grey-700", children: "1" })] }), _jsxs("div", { className: " flex justify-between py-2", children: [_jsx("span", { className: "text-primary-grey-600", children: "Faculty:" }), _jsx("span", { className: "text-primary-grey-700" })] })] }) }) }), _jsx(Table, {})] }));
};
export default ClassSchedule;
