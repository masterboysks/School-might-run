import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { Select } from "../../../../../../../components/common/oldFields";
import Search from "@mui/icons-material/SearchOutlined";
export default function Form() {
    const arrayLevel = ["jhdgs", "fjkdhgs", "hdsg", "djkshf"];
    const arrayClass = ["jhdgs", "fjkdhgs", "hdsg", "djkshf"];
    const arrayFaculty = ["jhdgs", "fjkdhgs", "hdsg", "djkshf"];
    const arraySection = ["jhdgs", "fjkdhgs", "hdsg", "djkshf"];
    const [level, setLevel] = useState("Select");
    const [classSemester, setClassSemester] = useState("Select");
    const [faculty, setFaculty] = useState("Select");
    const [section, setSection] = useState("Select");
    const handleSearch = () => {
        console.log({ level, classSemester, faculty, section });
    };
    return (_jsxs("form", { className: "sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 ring-1 ring-black ring-opacity-5 form-solid grid grid-cols-1 gap-4 p-4 my-6 rounded-md shadow", children: [_jsx("div", { className: "", children: _jsx(Select, { id: "level", name: "level", label: "Level", value: arrayLevel, selected: level, setSelected: setLevel }) }), _jsx("div", { className: "", children: _jsx(Select, { id: "class-semester", name: "class-semester", label: "Class/Semester", value: arrayClass, selected: classSemester, setSelected: setClassSemester }) }), _jsx("div", { className: "", children: _jsx(Select, { id: "faculty", name: "faculty", label: "Faculty", value: arrayFaculty, selected: faculty, setSelected: setFaculty }) }), _jsx("div", { className: "", children: _jsx(Select, { id: "section", name: "section", label: "Section", value: arraySection, selected: section, setSelected: setSection }) }), _jsx("div", { className: "h-fit w-fit bg-primary-btn lg:col-span-2 xl:col-span-full sm:box-content col-span-full box-border px-4 py-3 mt-auto ml-auto text-white rounded cursor-pointer", children: _jsx(Search, { className: "w-4 mx-auto", onClick: handleSearch }) })] }));
}
