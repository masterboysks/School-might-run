import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import Steps from "../../Steps";
import Form from "./PersonalDetailsForm";
const steps = [
    {
        id: "01",
        name: "Personal details",
        href: "#",
        status: "current",
    },
    {
        id: "02",
        name: "Address details",
        href: "#",
        status: "upcomming",
    },
    {
        id: "03",
        name: "Office details",
        href: "#",
        status: "upcomming",
    },
];
const AddStaffGeneralPersonal = () => {
    return (_jsxs(_Fragment, { children: [_jsx(Steps, { steps: steps, title: "Personal details" }), _jsx(Form, {})] }));
};
export default AddStaffGeneralPersonal;
