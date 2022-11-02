import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import Steps from "../../Steps";
import OfficeDetailsForm from "./OfficeDetailsForm";
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
        status: "complete",
    },
    {
        id: "03",
        name: "Office details",
        href: "#",
        status: "current",
    },
];
const AddStaffGeneralPersonal = () => {
    return (_jsxs(_Fragment, { children: [_jsx(Steps, { steps: steps, title: "Office details" }), _jsx(OfficeDetailsForm, {})] }));
};
export default AddStaffGeneralPersonal;
