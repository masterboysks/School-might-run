import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { Link, useNavigate } from "react-router-dom";
import { Input, MultipleSelect, Select, } from "../../../../../../../components/common/fields";
import { useState } from "react";
import Breadnav from "../../../../../../../components/common/Breadnav";
import Break from "../../../../../../../components/common/Break";
import sectionsApi from "../../../../../../../api/admin/dashboard/admin/data-setup/sectionsApi";
import subFacultyApi from "../../../../../../../api/admin/dashboard/admin/data-setup/subFacultyApi";
import levelApi from "../../../../../../../api/admin/dashboard/admin/data-setup/levelApi";
import classApi from "../../../../../../../api/admin/dashboard/admin/data-setup/classApi";
import facultyApi from "../../../../../../../api/admin/dashboard/admin/data-setup/facultyApi";
import subjectApi from "../../../../../../../api/admin/dashboard/admin/data-setup/subjectApi";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import AssignClassSubject from "../../../../../../../components/admin/admin/AssignClassSubject";
const pages = [
    { name: "Admin", href: "#", current: false },
    {
        name: "Date setup",
        href: "#",
        current: false,
    },
    {
        name: "Class/semester",
        href: "/admin/dashboard/admin/data-setup/class-semester",
        current: false,
    },
    {
        name: "Add",
        href: "/admin/dashboard/admin/data-setup/class-semester/add",
        current: true,
    },
];
const AddClassSemester = () => {
    const { register, handleSubmit, control, formState: { errors }, } = useForm();
    const [sectionsOption, setSectionsOption] = useState([]);
    const [subFacultyOption, setSubFacultyOption] = useState([]);
    const [facultyOption, setFacultyOption] = useState([]);
    const [levelOption, setLevelOption] = useState([]);
    const [arrayCompalsarySubjects, setArrayCompalsarySubjects] = useState([]);
    const [arrayElectiveSubjects, setArrayElectiveSubjects] = useState([]);
    const [error, setError] = useState("");
    useEffect(() => {
        (async () => {
            const data = await sectionsApi.getAll();
            setSectionsOption(data?.data?.data);
        })();
        (async () => {
            const data = await subFacultyApi.getAll();
            setSubFacultyOption(data?.data?.data);
        })();
        (async () => {
            const data = await facultyApi.getAll();
            setFacultyOption(data?.data?.data);
        })();
        (async () => {
            const data = await levelApi.getAll();
            setLevelOption(data?.data?.data);
        })();
        (async () => {
            const data = await subjectApi.getAll();
            setArrayCompalsarySubjects(data?.data?.data.filter((c) => c.subject_type === 1));
            setArrayElectiveSubjects(data?.data?.data.filter((c) => c.subject_type === 2));
        })();
    }, []);
    const navigate = useNavigate();
    const onSubmit = async (d) => {
        // console.log({
        //   ...d,
        //   section_ids: d.section_ids?.map((c) => c.id),
        //   subject_ids: [
        //     ...arrayCompalsarySubjects
        //       .filter((c, i) => d[`compalsarySubjects${i}`])
        //       .map((c) => c.id),
        //     ...arrayElectiveSubjects
        //       .filter((c, i) => d[`electiveSubjects${i}`])
        //       .map((c) => c.id),
        //   ],
        // });
        try {
            const res = await classApi.create({
                ...d,
                section_ids: d.section_ids?.map((c) => c.id),
                subject_ids: [
                    ...arrayCompalsarySubjects
                        ?.filter((c, i) => d[`compalsarySubjects${i}`])
                        ?.map((c) => c?.id),
                    ...arrayElectiveSubjects
                        ?.filter((c, i) => d[`electiveSubjects${i}`])
                        ?.map((c) => c?.id),
                ],
            });
            res?.status === 201
                ? navigate("/admin/dashboard/admin/data-setup/class-semester")
                : setError("Failed to add class");
        }
        catch (error) {
            console.warn(error);
        }
    };
    return (_jsxs(_Fragment, { children: [_jsx(Breadnav, { pages: pages }), _jsx(Break, { title: "Add Class/Semester" }), _jsxs("form", { className: "form-solid w-full my-6 rounded-md", onSubmit: handleSubmit(onSubmit), children: [error && (_jsxs(_Fragment, { children: [_jsx("div", { className: "text-lg font-medium text-red-600", children: error }), _jsx("br", {})] })), _jsxs("div", { className: "sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 grid grid-cols-1 gap-4", children: [_jsx("div", { children: _jsx(Select, { label: "Level*", value: levelOption, register: register, name: "level_id", required: true, errors: errors }) }), _jsx("div", { children: _jsx(Input, { label: "Class/Semester*", name: "class_name", register: register, errors: errors, required: true }) }), _jsx("div", { children: _jsx(Select, { label: "Faculty", value: facultyOption, register: register, name: "faculty_id" }) }), _jsx("div", { children: _jsx(Select, { label: "Sub faculty", value: subFacultyOption, name: "subfaculty_id", register: register }) }), _jsxs("div", { children: [_jsx(MultipleSelect, { label: "Sections*", name: "section_ids", value: sectionsOption, control: control, errors: errors, required: true }), _jsx("div", { className: " my-3", children: "*Note : You can select multiple section at once" })] })] }), _jsx(AssignClassSubject, { label: "Select for compulsary Subject*", register: register, value: arrayCompalsarySubjects, name: "compalsarySubjects" }), _jsx(AssignClassSubject, { label: "Select for elective Subject", register: register, value: arrayElectiveSubjects, name: "electiveSubjects" }), _jsx("div", { className: "sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-4 grid grid-cols-1 gap-4", children: _jsx("div", { className: "md:flex-row col-span-full xl:col-span-4 flex flex-col my-6 ml-auto", children: _jsxs("div", { className: " w-fit", children: [_jsx(Link, { to: "/admin/dashboard/admin/data-setup/class-semester", className: "secondary_btn", children: "Cancel" }), _jsx("button", { type: "submit", className: "primary_btn", children: "Save" })] }) }) })] })] }));
};
export default AddClassSemester;
