import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import Search from "@mui/icons-material/SearchOutlined";
import { useState } from "react";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import departmentApi from "../../../../../../api/admin/dashboard/admin/data-setup/departmentApi";
import designationApi from "../../../../../../api/admin/dashboard/admin/data-setup/designationApi";
import Breadnav from "../../../../../../components/common/Breadnav";
import { Input, Select, SelectDisabled, } from "../../../../../../components/common/fields";
const pages = [
    { name: "Staff", href: "#", current: false },
    {
        name: "Staff Information",
        href: "/admin/dashboard/staff/staff-information",
        current: true,
    },
];
const arrayStatus = [
    {
        name: "Active",
        id: 1,
    },
    {
        name: "Inactive",
        id: 0,
    },
];
const arrayOrderBy = [
    {
        name: "Status",
        id: "is_active",
    },
    {
        name: "Staff Id",
        id: "id",
    },
    {
        name: "Staff Name",
        id: "first_name",
    },
    {
        name: "Staff type",
        id: "type",
    },
];
const Form = ({ onSubmit, page }) => {
    const { register, watch, reset, getValues, handleSubmit } = useForm();
    const department = watch("department_id");
    const [arrayStaffType, setArrayStaffType] = useState([
        { name: "Teachers", id: "teacher" },
        { name: "Parent", id: "parent" },
        { name: "Admins", id: "admin" },
    ]);
    const [arrayDepartment, setArrayDepartment] = useState([]);
    const [arrayDesignation, setArrayDesignation] = useState([]);
    useEffect(() => {
        (async () => {
            try {
                const temp = await designationApi.getAll(department);
                setArrayDesignation(temp?.data?.data);
            }
            catch (e) {
                console.warn(e);
            }
        })();
        reset({ ...getValues(), designation_id: "" });
    }, [department]);
    useEffect(() => {
        (async () => {
            try {
                const temp = await departmentApi.getAll();
                setArrayDepartment(temp?.data?.data);
            }
            catch (e) {
                console.warn(e);
            }
        })();
    }, []);
    useEffect(() => {
        onSubmit(getValues(), page);
    }, [page]);
    return (_jsxs(_Fragment, { children: [_jsx(Breadnav, { pages: pages }), _jsxs("form", { className: "sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 ring-1 ring-black ring-opacity-5 form-solid grid grid-cols-1 gap-4 p-4 my-6 rounded-md shadow", onSubmit: handleSubmit(onSubmit), children: [_jsx("div", { className: "", children: _jsx(Input, { register: register, label: "Staff ID", name: "staff_id", placeholder: "9852" }) }), _jsx("div", { className: "", children: _jsx(Input, { register: register, label: "Staff Name", placeholder: "Yogya", name: "staff_name" }) }), _jsx("div", { className: "", children: arrayDepartment.length !== 0 ? (_jsx(Select, { label: "Department", value: arrayDepartment, register: register, name: "department_id" })) : (_jsx(SelectDisabled, { label: "Department*" })) }), _jsx("div", { className: "", children: department && arrayDesignation.length !== 0 ? (_jsx(Select, { label: "Designation", register: register, name: "designation_id", value: arrayDesignation })) : (_jsx(SelectDisabled, { label: "Designation*" })) }), _jsx("div", { className: "", children: arrayStaffType.length !== 0 ? (_jsx(Select, { value: arrayStaffType, register: register, name: "staff_type", label: "Staff type" })) : (_jsx(SelectDisabled, { label: "Staff type" })) }), _jsx("div", { className: "", children: _jsx(Select, { label: "Status", value: arrayStatus, register: register, name: "staff_status" }) }), _jsx("div", { className: "", children: _jsx(Select, { label: "Order By", value: arrayOrderBy, register: register, name: "order_by" }) }), _jsx("button", { type: "submit", className: "h-fit w-fit bg-primary-btn sm:box-content lg:col-span-2 xl:col-span-1 box-border px-4 py-3 mt-auto ml-auto text-white rounded cursor-pointer", children: _jsx(Search, { className: "w-4 mx-auto" }) })] })] }));
};
export default Form;
