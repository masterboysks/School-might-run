import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { Select } from "../../../../../../components/common/oldFields";
import SearchIcon from "../../../../../../components/common/SearchIcon";
export default function Form() {
    const arrayLevel = ["hfjgk", "dsfjhg", "jkhfd"];
    const arrayClassSemester = ["hfjgk", "dsfjhg", "jkhfd"];
    const arrayFaculty = ["hfjgk", "dsfjhg", "jkhfd"];
    const arraySection = ["hfjgk", "dsfjhg", "jkhfd"];
    const [level, setLevel] = useState("Select");
    const [classSemester, setClassSemester] = useState("Select");
    const [faculty, setFaculty] = useState("Select");
    const [section, setSection] = useState("Select");
    const [errorLevel, setErrorLevel] = useState(false);
    const [errorClassSemester, setErrorClassSemester] = useState(false);
    const [errorSection, setErrorSection] = useState(false);
    const handleSubmit = () => {
        console.log({ level, classSemester, faculty, section });
        let temp = false;
        level === "Select" && (temp = true) && setErrorLevel(true);
        classSemester === "Select" && (temp = true) && setErrorClassSemester(true);
        section === "Select" && (temp = true) && setErrorSection(true);
    };
    return (_jsxs("form", { className: "sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 ring-1 ring-black ring-opacity-5 form-solid grid grid-cols-1 gap-4 p-4 my-6 rounded-md shadow", children: [_jsx("div", { className: "", children: _jsx(Select, { label: "Level*", value: arrayLevel, selected: level, setSelected: setLevel, error: errorLevel, setError: setErrorLevel }) }), _jsx("div", { className: "", children: _jsx(Select, { label: "Class/Semester*", value: arrayClassSemester, selected: classSemester, setSelected: setClassSemester, error: errorClassSemester, setError: setErrorClassSemester }) }), _jsx("div", { className: "", children: _jsx(Select, { label: "Faculty", value: arrayFaculty, selected: faculty, setSelected: setFaculty }) }), _jsx("div", { className: "", children: _jsx(Select, { label: "Section*", value: arraySection, selected: section, setSelected: setSection, error: errorSection, setError: setErrorSection }) }), _jsx(SearchIcon, { className: " lg:col-span-2 xl:col-span-full sm:box-content col-span-full mt-auto ml-auto", onClick: handleSubmit })] }));
}
