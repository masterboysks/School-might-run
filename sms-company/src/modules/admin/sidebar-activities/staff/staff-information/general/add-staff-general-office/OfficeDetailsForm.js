import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import departmentApi from "../../../../../../../api/admin/dashboard/admin/data-setup/departmentApi";
import { DateInput, Input, Password, Select, SelectDisabled, } from "../../../../../../../components/common/fields";
import { useState, useEffect, useContext } from "react";
import designationApi from "../../../../../../../api/admin/dashboard/admin/data-setup/designationApi";
import staffAPI from "../../../../../../../api/admin/dashboard/staff/staffAPI";
import StaffFormPersonalDetailsPicture from "../../../../../../../contex/admin/staff/StaffFormPersonalDetailsPicture";
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
const PermanentAddressForm = () => {
    const [message, setMessage] = useState("");
    const [date, setDate] = useState("");
    const photo = useContext(StaffFormPersonalDetailsPicture);
    const { register, watch, reset, getValues, handleSubmit, formState: { errors }, } = useForm();
    const navigate = useNavigate();
    const department = watch("department_id");
    const [arrayDepartment, setArrayDepartment] = useState([]);
    const [arrayDesignation, setArrayDesignation] = useState([]);
    const [arrayStaffType, setArrayStaffType] = useState([
        { name: "Teacher", id: "teacher" },
        { name: "Staff", id: "staff" },
    ]);
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
    const onSubmit = async (d) => {
        const form = new FormData();
        const address = JSON.parse(localStorage.getItem("adgdsas"));
        if (address.same_as_permanent_address) {
            delete address.temp_country;
            delete address.temp_district;
            delete address.temp_province;
            delete address.temp_vdc_municipality;
            delete address.temp_tole;
            delete address.temp_ward;
        }
        const personal = JSON.parse(localStorage.getItem("pdgdsas"));
        for (const name in address) {
            form.append(`address[${name}]`, address[name]);
        }
        for (const name in personal) {
            form.append(`personal[${name}]`, personal[name]);
        }
        for (const name in d) {
            form.append(`general[${name}]`, d[name]);
        }
        form.delete("personal[photo]");
        form.append("personal[profile_picture]", photo?.photo && photo?.photo[0]);
        form.append("general.joined_date", date);
        staffAPI.create(form).then((data) => {
            console.log(data);
            data?.response?.status === 422 &&
                setMessage(data?.response?.data?.errors);
            if (data?.status === 201) {
                navigate("/admin/dashboard/staff/staff-information/");
            }
        });
        // .catch((e) => {
        //   console.log("this is eroor functin");
        //   console.log(e);
        //   // e===422?sete(e)
        //   e === 422 && console.log(e);
        // });
    };
    const handelBack = (data) => {
        localStorage.setItem("odgdsas", JSON.stringify(data));
        navigate("/admin/dashboard/staff/staff-information/add-staff/general/address-details");
    };
    useEffect(() => {
        (async () => {
            const temp = await JSON.parse(localStorage.getItem("odgdsas"));
            reset(temp);
        })();
    }, []);
    return (_jsxs("form", { className: "form-solid my-6 rounded-md", onSubmit: handleSubmit(onSubmit), children: [message.length !== 0 && (_jsxs(_Fragment, { children: [_jsx("div", { className: "!text-red-600 font-medium text-lg", children: _jsx("ul", { children: message?.map((curr) => (_jsx("li", { children: curr }, curr))) }) }), _jsx("br", {})] })), _jsxs("div", { className: "sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 grid grid-cols-1 gap-4", children: [_jsx("div", { className: "", children: _jsx(Select, { label: "Staff type*", value: arrayStaffType, register: register, errors: errors, name: "type", required: true }) }), _jsx("div", { className: "", children: arrayDepartment.length !== 0 ? (_jsx(Select, { label: "Department*", value: arrayDepartment, register: register, errors: errors, name: "department_id", required: true })) : (_jsx(SelectDisabled, { label: "Department*" })) }), _jsx("div", { className: "", children: department && arrayDesignation.length !== 0 ? (_jsx(Select, { label: "Designation*", required: true, name: "designation_id", value: arrayDesignation, errors: errors, register: register })) : (_jsx(SelectDisabled, { label: "Designation*" })) }), _jsx("div", { className: "", children: _jsx(DateInput, { label: "Joined date*", selected: date, setSelected: setDate }) }), _jsx("div", { className: "", children: _jsx(Input, { label: "Username*", name: "username", required: true, register: register, errors: errors, placeholder: "Levli72" }) }), _jsx("div", { className: "", children: _jsx(Password, { label: "Password*", placeholder: "Jhbash88_@33JDSjaSkeow457qjds8JKF74ww4F", register: register, errors: errors, required: true, name: "password" }) }), _jsx("div", { className: "", children: _jsx(Select, { label: "Status*", value: arrayStatus, register: register, required: true, errors: errors, name: "is_active" }) })] }), _jsx("div", { className: "w-full my-6", children: _jsxs("div", { className: " w-fit ml-auto", children: [_jsx("button", { onClick: handleSubmit(handelBack), className: "secondary_btn", children: "Back" }), _jsx("button", { type: "submit", className: "primary_btn", children: "Save" })] }) })] }));
};
export default PermanentAddressForm;
