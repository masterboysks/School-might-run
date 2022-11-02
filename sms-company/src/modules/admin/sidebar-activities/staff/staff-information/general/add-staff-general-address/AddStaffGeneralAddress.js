import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Steps from "../../Steps";
import PermanentAddressForm from "./PermanentAddressForm";
import TemporaryAddressForm from "./TemporaryAddressForm";
import { useEffect } from "react";
const steps = [
    {
        id: "01",
        name: "Personal details",
        href: "#",
        status: "complete",
    },
    {
        id: "02",
        name: "Address details",
        href: "#",
        status: "current",
    },
    {
        id: "03",
        name: "Office details",
        href: "#",
        status: "upcomming",
    },
];
const AddStaffGeneralPersonal = () => {
    const { register, watch, reset, handleSubmit, formState: { errors }, } = useForm();
    const sameAsPermenantAddress = watch("same_as_permanent_address");
    const navigate = useNavigate();
    useEffect(() => {
        (async () => {
            const temp = await JSON.parse(localStorage.getItem("adgdsas"));
            reset(temp);
        })();
    }, []);
    const onSubmit = async (data) => {
        console.log(data);
        let d = { ...data };
        if (sameAsPermenantAddress) {
            delete d.temp_ward;
            delete d.temp_tole;
            delete d.temp_country;
            delete d.temp_province;
            delete d.temp_district;
            delete d.temp_vdc_municipality;
        }
        localStorage.setItem("adgdsas", JSON.stringify(d));
        navigate("/admin/dashboard/staff/staff-information/add-staff/general/office-details");
    };
    return (_jsxs(_Fragment, { children: [_jsx(Steps, { steps: steps, title: "Address details" }), _jsxs("form", { onSubmit: handleSubmit(onSubmit), children: [_jsx(PermanentAddressForm, { register: register, watch: watch, errors: errors }), _jsx(TemporaryAddressForm, { register: register, watch: watch, errors: errors })] })] }));
};
export default AddStaffGeneralPersonal;
