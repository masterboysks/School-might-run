import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { PrimaryButton, SecondaryButton, } from "../../../../../../components/common/Buttons";
import { Input, Select, SelectDisabled, } from "../../../../../../components/common/oldFields";
export default function Form({ children }) {
    const navigate = useNavigate();
    const arrayClassSemester = ["jkfdh", "dsfjhk"];
    const arrayFaculty = ["jkfdh", "dsfjhk"];
    const [level, setLevel] = useState("Select");
    const [classSemester, setClassSemester] = useState("Select");
    const [faculty, setFaculty] = useState("Select");
    const [examStartTime, setExamStartTime] = useState("");
    const [examEndTime, setExamEndTime] = useState("");
    const [errorClassSemester, setErrorClassSemester] = useState(false);
    const [errorExamStartTime, setErrorExamStartTime] = useState(false);
    const [errorExamEndTime, setErrorExamEndTime] = useState(false);
    const handleSubmit = () => {
        console.log({ classSemester, examEndTime, faculty, examStartTime });
        let temp = false;
        classSemester === "Select" && (temp = true) && setErrorClassSemester(true);
        examStartTime || ((temp = true) && setErrorExamStartTime(true));
        examEndTime || ((temp = true) && setErrorExamEndTime(true));
        temp || navigate(-1);
    };
    return (_jsxs(_Fragment, { children: [_jsx("form", { className: "form-solid w-full my-6 rounded-md", children: _jsxs("div", { className: "sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 grid grid-cols-1 gap-4", children: [_jsx("div", { className: "", children: _jsx(SelectDisabled, { value: level, label: "Level" }) }), _jsx("div", { className: "", children: _jsx(Select, { label: "Class/Semester*", error: errorClassSemester, setError: setErrorClassSemester, value: arrayClassSemester, selected: classSemester, setSelected: setClassSemester }) }), _jsx("div", { className: "", children: _jsx(Select, { label: "Faculty", value: arrayFaculty, selected: faculty, setSelected: setFaculty }) }), _jsx("div", { className: "", children: _jsx(Input, { label: "Exam start time*", type: "time", value: examStartTime, setValue: setExamStartTime, error: errorExamStartTime, setError: setErrorExamStartTime }) }), _jsx("div", { className: "", children: _jsx(Input, { label: "Exam end time*", type: "time", value: examEndTime, setValue: setExamStartTime, error: errorExamEndTime, setError: setErrorExamEndTime }) })] }) }), children, _jsxs("div", { className: "w-fit ml-auto my-6 flex", children: [_jsx("div", { onClick: () => navigate(-1), children: _jsx(SecondaryButton, { children: "Cancel" }) }), _jsx(PrimaryButton, { onClick: handleSubmit, children: "Save" })] })] }));
}
