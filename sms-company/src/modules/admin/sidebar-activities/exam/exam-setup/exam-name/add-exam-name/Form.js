import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import { Input, Select, } from "../../../../../../../components/common/oldFields";
import { PrimaryButton, SecondaryButton, } from "../../../../../../../components/common/Buttons";
export default function Form() {
    const arrayLevel = ["dsfjkh", "dsfsdajkh"];
    const [addExamName, setAddExamName] = useState([]);
    const [level, setLevel] = useState("Select");
    const [examName, setExamName] = useState("");
    const [errorLevel, setErrorLevel] = useState(false);
    const [errorExamName, setErrorExamName] = useState(false);
    const navigate = useNavigate();
    const handleSubmit = () => {
        console.log({ examName, level, addExamName });
        let temp = false;
        examName || ((temp = true) && setErrorExamName(true));
        level === "Select" && (temp = true) && setErrorLevel(true);
        temp || navigate("/admin/dashboard/exam/exam-setup/exam-name");
    };
    return (_jsxs("form", { className: "form-solid w-full my-6 rounded-md", children: [_jsxs("div", { className: "sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 grid grid-cols-1 gap-4", children: [_jsx("div", { children: _jsx(Select, { label: "Level*", value: arrayLevel, selected: level, setSelected: setLevel, error: errorLevel, setError: setErrorLevel }) }), _jsxs("div", { className: "lg:row-start-auto row-start-2", children: [_jsx(Input, { label: "Exam name*", placeholder: "First term", value: examName, setValue: setExamName, error: errorExamName, setError: setErrorExamName }), _jsx(_Fragment, { children: addExamName.map((c, i, array) => (_jsxs("div", { className: " relative h-fit", children: [_jsx(Input, { placeholder: "Preboard", className: " h-fit ", value: c.value, 
                                            // value={c.value}
                                            onChange: (e) => {
                                                let temp = [...array];
                                                temp[i]["value"] = e.target.value;
                                                setAddExamName(temp);
                                            } }), _jsx("div", { className: " -right-10 text-primary-grey-700 top-[10px] absolute p-1 bg-white rounded-full shadow", onClick: () => {
                                                setAddExamName(addExamName.slice(0, -1));
                                            }, children: _jsx(CloseOutlinedIcon, { fontSize: "inherit" }) })] }, i))) }), _jsxs("div", { className: "text-primary-grey-700 flex items-center justify-end mt-3", onClick: () => {
                                    setAddExamName([...addExamName, { value: "" }]);
                                }, children: [_jsx("div", { className: "", children: "Add" }), _jsx("div", { className: "icon border-primary-field p-1 ml-2 border rounded-lg", children: _jsx(AddOutlinedIcon, { fontSize: "inherit" }) })] })] })] }), _jsx("div", { className: "sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 grid grid-cols-1 gap-4", children: _jsx("div", { className: "md:flex-row w-fit lg:col-span-2 flex flex-col my-6 ml-auto", children: _jsxs("div", { className: " w-fit", children: [_jsx(Link, { to: "/admin/dashboard/exam/exam-setup/exam-name", children: _jsx(SecondaryButton, { children: "Cancel" }) }), _jsx(PrimaryButton, { onClick: handleSubmit, children: "Save" })] }) }) })] }));
}
