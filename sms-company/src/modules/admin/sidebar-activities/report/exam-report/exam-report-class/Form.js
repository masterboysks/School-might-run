import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import Search from "@mui/icons-material/SearchOutlined";
import { Input, Select } from "../../../../../../components/common/oldFields";
export default function Form() {
    //
    const arrayGradingSystem = ["GPA", "Percentage"];
    const arrayResultStatus = ["kjdhf", "jhgd"];
    const arrayRemark = ["jhfgd", "fdjkh"];
    const [academicYear, setAcademicYear] = useState("");
    const [examName, setExamName] = useState("");
    const [gradingSystem, setGradingSystem] = useState("GPA");
    const [resultStatus, setResultStatus] = useState("Select");
    const [remark, setRemark] = useState("Select");
    const [errorAcademicYear, setErrorAcademicYear] = useState(false);
    const [errorExamName, setErrorExamName] = useState(false);
    //
    const handleSubmit = () => {
        console.log({
            academicYear,
            examName,
            gradingSystem,
            resultStatus,
            remark,
        });
        academicYear || setErrorAcademicYear(true);
        examName || setErrorExamName(true);
    };
    return (_jsxs("form", { className: "sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 ring-1 ring-black ring-opacity-5 form-solid grid grid-cols-1 gap-4 p-4 my-6 rounded-md shadow", children: [_jsx("div", { className: "", children: _jsx(Input, { value: academicYear, setValue: setAcademicYear, error: errorAcademicYear, setError: setErrorAcademicYear, placeholder: "2078", label: "Academic Year*" }) }), _jsx("div", { className: "", children: _jsx(Input, { value: examName, setValue: setExamName, error: errorExamName, setError: setErrorExamName, placeholder: "First term examination", label: "Exam name*" }) }), _jsx("div", { className: "", children: _jsx(Select, { label: "Grading system", value: arrayGradingSystem, setSelected: setGradingSystem, selected: gradingSystem }) }), _jsx("div", { className: "", children: _jsx(Select, { label: "Result status", value: arrayResultStatus, setSelected: setResultStatus, selected: resultStatus }) }), _jsx("div", { className: "", children: _jsx(Select, { label: "Remark", value: arrayRemark, setSelected: setRemark, selected: remark }) }), _jsx("div", { className: "h-fit w-fit bg-primary-btn sm:box-content xl:col-span-3 box-border px-4 py-3 mt-auto ml-auto text-white rounded cursor-pointer", children: _jsx(Search, { className: "w-4 mx-auto", onClick: handleSubmit }) })] }));
}
