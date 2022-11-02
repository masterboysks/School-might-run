import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import organizationSetupApi from "../../../../../api/admin/dashboard/admin/organizationSetupApi";
import { DateInput, Input, Select, UploadPhoto, } from "../../../../../components/common/fields";
import LocationForm from "../../../../../components/common/LocationForm";
const arrayDateFormat = [
    { id: 1, name: "AD" },
    { id: 2, name: "BS" },
];
const Form = () => {
    const { register, handleSubmit, reset, watch, formState: { errors }, } = useForm();
    const [date, setDate] = useState("");
    const [error, setError] = useState(false);
    const [message, setMessage] = useState("");
    const [defaultDate, setDefaultDate] = useState("");
    const onSubmit = async (data) => {
        const d = {
            ...data,
            established_at: date,
        };
        const form = new FormData();
        for (const name in d) {
            form.append(name, d[name]);
        }
        d.company_logo.length === 1
            ? form.append("company_logo", d.company_logo[0])
            : form.append("company_logo", "");
        try {
            const res = await organizationSetupApi.edit(form);
            if (!(res?.status === 201)) {
                setMessage("Failed to update Organization details");
                setError(true);
            }
            else {
                setError(false);
                setMessage("Organization details updated sucesfully");
            }
        }
        catch (error) {
            console.log(error);
        }
    };
    const resetData = async () => {
        const data = await organizationSetupApi.get();
        const defaultData = data?.data?.data;
        reset({
            ...defaultData,
        });
        setDate(defaultData?.established_at);
        setDefaultDate(defaultData?.established_at);
    };
    useEffect(() => {
        resetData();
    }, []);
    return (_jsxs("form", { className: "form-solid w-full my-6 rounded-md", onSubmit: handleSubmit(onSubmit), children: [message && (_jsxs(_Fragment, { children: [_jsx("div", { className: `${error && "!text-red-600"} text-green-500 font-medium text-lg`, children: message }), _jsx("br", {})] })), _jsxs("div", { className: "sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 grid grid-cols-1 gap-4", children: [_jsx("div", { children: _jsx(Input, { label: "School/College Name*", register: register, placeholder: "XYZ school", errors: errors, required: true, name: "company_name" }) }), _jsx("div", { className: "", children: _jsx(Input, { label: "Registration no.*", register: register, placeholder: "468456464584464", errors: errors, required: true, name: "registration_no", type: "number" }) }), _jsx("div", { className: "", children: _jsx(Input, { label: "Pan no.*", register: register, errors: errors, required: true, name: "pan_no", placeholder: "21445165412154", type: "number" }) }), _jsx("div", { className: "", children: _jsx(Input, { label: "Postal code", placeholder: "33650", register: register, name: "postal_code", type: "number" }) }), _jsx("div", { className: "", children: _jsx(Input, { label: "Mobile Number*", placeholder: "214451654", name: "mobile_no", errors: errors, required: true, register: register, type: "number" }) }), _jsx("div", { className: "", children: _jsx(Input, { label: "Telephone Number*", placeholder: "015521332", register: register, errors: errors, required: true, name: "tel_no", type: "number" }) }), _jsx("div", { className: "", children: _jsx(Input, { label: "Alternative Number", placeholder: "015521335", name: "alt_tel_no", register: register, type: "number" }) }), _jsx("div", { className: "", children: _jsx(Input, { label: "Website", placeholder: "https://www.xyz.com", register: register, type: "url", name: "website" }) }), _jsx("div", { className: "", children: _jsx(Input, { label: "Email", name: "company_email", type: "email", placeholder: "mail@xyz.com.edu", register: register }) }), _jsx(LocationForm, { watch: watch, register: register, errors: errors }), _jsx("div", { className: "", children: _jsx(Input, { label: "Ward no.*", name: "ward_no", register: register, errors: errors, required: true, placeholder: "11", type: "number" }) }), _jsx("div", { className: "", children: _jsx(Input, { label: "Tole.*", required: true, errors: errors, register: register, name: "tole", placeholder: "XYZ" }) }), _jsx("div", { className: "", children: _jsx(Input, { label: "Google map link", name: "google_map_link", type: "url", register: register, placeholder: "Link here" }) }), _jsxs("div", { className: "", children: [_jsx(Select, { label: "AD/BS*", value: arrayDateFormat, register: register, errors: errors, required: true, name: "date_format" }), _jsx("span", { className: "text-sm", children: "Note:Selected date format will be used in whole system." })] }), _jsx("div", { className: "", children: _jsx(DateInput, { selected: date, setSelected: setDate, label: "Established date", defaultDate: defaultDate }) }), _jsx("div", { className: "", children: _jsx(UploadPhoto, { label: "School logo", name: "company_logo", register: register, id: "company_logo", watch: watch }) })] }), _jsxs("div", { className: "md:flex-row flex flex-col justify-between w-full my-6", children: [_jsxs("div", { className: "w-44", children: ["*Note:Please upload logo of school as below", _jsx("img", { src: "/logoHeader.png", alt: "", className: "my-3" })] }), _jsxs("div", { className: " w-fit my-auto", children: [_jsx("button", { onClick: () => {
                                    resetData();
                                }, className: "secondary_btn", children: "Cancel" }), _jsx("button", { type: "submit", className: "primary_btn", children: "Save" })] })] })] }));
};
export default Form;
