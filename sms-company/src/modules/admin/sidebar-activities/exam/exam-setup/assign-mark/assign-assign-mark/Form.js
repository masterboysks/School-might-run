import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { MultipleSelect, Select, } from "../../../../../../../components/common/oldFields";
const arrayExamNames = [
    "sun",
    "Devon Webb",
    "Tom Cook",
    "Tanya Fox",
    "Hellen Schmidt",
];
export default function Form() {
    const arrayClassSemester = ["djhfgsa", "dsfjkhg", "dsjfkg"];
    const [selectedExamNames, setSelectedExamNames] = useState([]);
    const [classSemester, setClassSemester] = useState("Select");
    return (_jsx("form", { className: "form-solid w-full my-6 rounded-md", children: _jsxs("div", { className: "sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 grid grid-cols-1 gap-4", children: [_jsx("div", { className: "", children: _jsx(Select, { label: "Class/Semester*", value: arrayClassSemester, selected: classSemester, setSelected: setClassSemester }) }), _jsxs("div", { className: "col-span-full xl:col-span-3", children: [_jsx(MultipleSelect, { label: "Exam name*", value: arrayExamNames, selected: selectedExamNames, setSelected: setSelectedExamNames }), _jsx("div", { className: "mt-3", children: "*Note:You can select multiple items at once." })] })] }) }));
}
