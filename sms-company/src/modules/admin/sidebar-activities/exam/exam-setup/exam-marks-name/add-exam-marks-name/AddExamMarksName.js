import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Breadnav from "../../../../../../../components/common/Breadnav";
import Break from "../../../../../../../components/common/Break";
import { PrimaryButton, SecondaryButton, } from "../../../../../../../components/common/Buttons";
import { Input } from "../../../../../../../components/common/oldFields";
const pages = [
    { name: "Exam", href: "#", current: false },
    {
        name: "Exam setup",
        href: "#",
        current: false,
    },
    {
        name: "Exam marks name",
        href: "/admin/dashboard/exam/exam-setup/exam-marks-name",
        current: false,
    },
    {
        name: "add",
        href: "/admin/dashboard/exam/exam-setup/exam-marks-name/add",
        current: true,
    },
];
export default function ExamMarksName() {
    const [examMarksName, setExamMarksName] = useState("");
    const [errorExamMarksName, setErrorExamMarksName] = useState(false);
    const navigate = useNavigate();
    const handleSubmit = () => {
        console.log({ examMarksName });
        examMarksName
            ? navigate("/admin/dashboard/exam/exam-setup/exam-marks-name")
            : setErrorExamMarksName(true);
    };
    return (_jsxs(_Fragment, { children: [_jsx(Breadnav, { pages: pages }), _jsx(Break, { title: "Add" }), _jsxs("form", { className: "form-solid w-full my-6 rounded-md", children: [_jsx("div", { className: "sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 grid grid-cols-1 gap-4", children: _jsx("div", { children: _jsx(Input, { label: "Exam marks name*", value: examMarksName, setValue: setExamMarksName, error: errorExamMarksName, setError: setErrorExamMarksName, placeholder: "Partical marks" }) }) }), _jsx("div", { className: "sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 grid grid-cols-1 gap-4", children: _jsx("div", { className: "md:flex-row w-fit flex flex-col my-6 ml-auto", children: _jsxs("div", { className: " w-fit my-auto", children: [_jsx(Link, { to: "/admin/dashboard/exam/exam-setup/exam-marks-name", children: _jsx(SecondaryButton, { children: "Cancel" }) }), _jsx("span", { onClick: handleSubmit, children: _jsx(PrimaryButton, { children: "Save" }) })] }) }) })] })] }));
}
