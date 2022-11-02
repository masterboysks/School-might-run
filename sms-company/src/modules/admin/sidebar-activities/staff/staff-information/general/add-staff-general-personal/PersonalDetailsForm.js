import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { useEffect, useContext } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { DateInput, Input, Select, UploadPhoto, } from "../../../../../../../components/common/fields";
import StaffFormPersonalDetailsPicture from "../../../../../../../contex/admin/staff/StaffFormPersonalDetailsPicture";
const arrayBloodGroup = [
    {
        name: "A+",
        id: 1,
    },
    {
        name: "A-",
        id: 2,
    },
    {
        name: "B+",
        id: 3,
    },
    {
        name: "B-",
        id: 4,
    },
    {
        name: "O+",
        id: 5,
    },
    {
        name: "O-",
        id: 6,
    },
    {
        name: "AB+",
        id: 7,
    },
    {
        name: "Ab-",
        id: 8,
    },
];
const arrayGender = [
    {
        name: "Male",
        id: 1,
    },
    {
        name: "Female",
        id: 2,
    },
];
const arrayMaritialSatus = [
    {
        name: "Married",
        id: 1,
    },
    {
        name: "Single",
        id: 2,
    },
];
const DetailsForm = () => {
    const [date, setDate] = useState("");
    const [defaultDate, setDefaultDate] = useState("");
    const photo = useContext(StaffFormPersonalDetailsPicture);
    const navigate = useNavigate();
    const { register, watch, handleSubmit, reset, formState: { errors }, } = useForm();
    useEffect(() => {
        (async () => {
            const temp = await JSON.parse(localStorage.getItem("pdgdsas"));
            console.log({ ...temp, photo: photo?.photo });
            reset({ ...temp, photo: photo?.photo });
            setDefaultDate(temp.dob);
        })();
    }, []);
    const onSubmit = async (data) => {
        console.log(data);
        photo?.setPhoto(data.photo);
        delete data.photo;
        data.dob = date;
        localStorage.setItem("pdgdsas", JSON.stringify(data));
        navigate("/admin/dashboard/staff/staff-information/add-staff/general/address-details");
    };
    return (_jsxs("form", { className: "form-solid my-6 rounded-md", onSubmit: handleSubmit(onSubmit), children: [_jsxs("div", { className: "sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 grid grid-cols-1 gap-4", children: [_jsx("div", { children: _jsx(Input, { label: "First Name*", required: true, name: "first_name", errors: errors, register: register, placeholder: "Ranjit" }) }), _jsx("div", { className: "", children: _jsx(Input, { label: "Middle Name", name: "middle_name", register: register, placeholder: "Bahadur" }) }), _jsx("div", { className: "", children: _jsx(Input, { label: "Last Name*", required: true, name: "last_name", errors: errors, register: register, placeholder: "Pokherel" }) }), _jsx("div", { className: "", children: _jsx(Input, { label: "Mobile Number*", type: "number", required: true, name: "mobile_number", errors: errors, register: register, placeholder: "9818756958" }) }), _jsx("div", { className: "", children: _jsx(Input, { label: "Email*", required: true, name: "email", type: "email", errors: errors, register: register, placeholder: "ranjitpokherel@hotmail.com" }) }), _jsx("div", { className: "", children: _jsx(Select, { value: arrayGender, label: "Gender*", required: true, errors: errors, name: "gender", register: register }) }), _jsx("div", { className: "", children: _jsx(Select, { value: arrayBloodGroup, label: "Blood Group", name: "blood_group", register: register }) }), _jsx("div", { className: "", children: _jsx(DateInput, { selected: date, setSelected: setDate, label: "Date of birth", defaultDate: defaultDate }) }), _jsx("div", { className: "", children: _jsx(Input, { label: "Citizenship number*", required: true, name: "citizenship_no", errors: errors, register: register, placeholder: "15842-078-5-02-d" }) }), _jsx("div", { className: "", children: _jsx(Input, { label: "Pan number*", required: true, name: "pan_no", errors: errors, register: register, placeholder: "55410-a85-pp99-02" }) }), _jsx("div", { className: "", children: _jsx(Select, { label: "Maritial status*", required: true, value: arrayMaritialSatus, name: "maritial_status", errors: errors, register: register }) }), _jsx("div", { className: "", children: _jsx(Input, { label: "Emergency contact*", required: true, name: "emergency_contact", errors: errors, register: register, placeholder: "9841355398" }) }), _jsx("div", { className: "sm:col-span-2", children: _jsx(UploadPhoto, { label: "Photo*", required: true, errors: errors, uploadText: "Picture of person", watch: watch, register: register, name: "photo", id: "photo_form_9988" }) })] }), _jsx("div", { className: "w-full", children: _jsxs("div", { className: " w-fit ml-auto", children: [_jsx(Link, { to: "/admin/dashboard/staff/staff-information/", className: "secondary_btn", children: "Cancel" }), _jsx("button", { type: "submit", className: "primary_btn", children: "Next" })] }) })] }));
};
export default DetailsForm;
