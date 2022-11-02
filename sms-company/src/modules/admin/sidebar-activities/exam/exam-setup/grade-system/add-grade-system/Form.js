import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import RenderTable from "./RenderTable";
import { Select } from "../../../../../../../components/common/oldFields";
import { PrimaryButton, SecondaryButton, } from "../../../../../../../components/common/Buttons";
import { Link, useNavigate } from "react-router-dom";
export default function Form() {
    const arrayLevel = ["kdsjhf", "dsjjkhujhg"];
    const [level, setLevel] = useState("Select");
    const [errorLevel, setErrorLevel] = useState(false);
    const [inputFileds, setInputFileds] = useState([
        { lowerLimit: "", upperLimit: "", grade: "", gpa: "" },
    ]);
    const navigate = useNavigate();
    const handleSubmit = () => {
        console.log({ inputFileds, level });
        let temp = false;
        level === Select && (temp = true) && setErrorLevel(true);
        inputFileds.map((curr) => {
            (curr.lowerLimit && curr.upperLimit && curr.grade && curr.gpa) ||
                (temp = true);
        });
        temp || navigate("/admin/dashboard/exam/exam-setup/grading-system");
    };
    return (_jsxs(_Fragment, { children: [_jsx("form", { className: "form-solid w-full my-6 rounded-md", children: _jsx("div", { className: "sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 grid grid-cols-1 gap-4", children: _jsx("div", { children: _jsx(Select, { label: "Level*", value: arrayLevel, selected: level, setSelected: setLevel, error: errorLevel, setError: setErrorLevel }) }) }) }), _jsxs("div", { className: "mt-11 lg:w-2/3 w-full", children: [_jsx("div", { className: ` ring-1 ring-black ring-opacity-5 mb-3 mt-6 min-w-full overflow-x-auto rounded-lg shadow `, children: _jsx("div", { className: " flex flex-col w-full rounded", children: _jsx("div", { className: " overflow-x-auto", children: _jsxs("table", { className: " min-w-full divide-y divide-gray-300 table-fixed", children: [_jsx("thead", { className: "bg-gray-50", children: _jsxs("tr", { className: "text-primary-grey-700", children: [_jsx("th", { scope: "col", className: " py-3.5 px-3 text-left text-sm font-semibold text-primary-active", children: "Lower Limit(%)*" }), _jsx("th", { scope: "col", className: "px-3 py-3.5 text-left text-sm font-semibold text-primary-active", children: "Upper Limit(%)*" }), _jsx("th", { scope: "col", className: "px-3 py-3.5 text-left text-sm font-semibold text-primary-active", children: "Grade*" }), _jsx("th", { scope: "col", className: "px-3 py-3.5 text-left text-sm font-semibold text-primary-active", children: "GPA*" }), _jsx("th", { className: "" })] }) }), _jsxs("tbody", { className: " bg-white divide-y divide-gray-200", children: [inputFileds.map((curr, index) => {
                                                    return (_jsx(RenderTable, { index: index, inputFiled: curr, inputFields: inputFileds, setInputFiled: setInputFileds }, index));
                                                }), _jsx("tr", { className: "bg-gray-50 ", children: _jsx("td", { colSpan: "5", children: _jsx("div", { className: `w-fit flex p-2 mx-2 ml-auto cursor-pointer
                        }`, children: _jsxs("div", { className: "w-fit flex items-center justify-center", onClick: () => {
                                                                    setInputFileds([
                                                                        ...inputFileds,
                                                                        {
                                                                            lowerLimit: "",
                                                                            upperLimit: "",
                                                                            grade: "",
                                                                            gpa: "",
                                                                        },
                                                                    ]);
                                                                }, children: [_jsx("div", { className: "text-primary-btn mx-1", children: "Add new" }), _jsx(AddIcon, { className: "text-primary-btn", fontSize: "inherit" })] }) }) }) })] })] }) }) }) }), _jsxs("div", { className: "w-fit ml-auto", children: [_jsx(Link, { to: "/admin/dashboard/exam/exam-setup/grading-system", children: _jsx(SecondaryButton, { children: "Cancel" }) }), _jsx(PrimaryButton, { onClick: handleSubmit, children: "Save" })] })] })] }));
}
