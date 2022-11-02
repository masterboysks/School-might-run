import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import AboveForm from "./components/AboveForm";
import FeeForm from "./components/FeeForm";
import FeeInstallmentDuration from "./components/FeeInstallmentDuration";
const steps = [
    {
        id: "01",
        name: "Student details",
        href: "/admin/dashboard/student/student-information/add-student-details",
        status: "complete",
    },
    {
        id: "02",
        name: "Guardian details",
        href: "/admin/dashboard/student/student-information/add-student-details/guardian-false",
        status: "complete",
    },
    {
        id: "03",
        name: "Address details",
        href: "/student/student-information/add-address-details",
        status: "complete",
    },
    {
        id: "04",
        name: "Class details",
        href: "/student/student-information/add-class-details",
        status: "complete",
    },
    { id: "05", name: "Fee details", href: "#", status: "current" },
];
function AddFeeDetails() {
    return (_jsx("div", { className: "sm:ml-[72px] box-border md:ml-0 md:w-full sm:pt-2 md:min-w-0 flex-1z ", children: _jsx("div", { className: " top-28 sm:mt-9 md:block sm:static -z-10 absolute left-0 w-full", children: _jsxs("div", { className: "-z-10 w-11/12 mx-auto text-sm", children: [_jsx(AboveForm, { steps: steps, title: "Fee details" }), _jsx(FeeForm, {}), _jsx(FeeInstallmentDuration, {})] }) }) }));
}
export default AddFeeDetails;
