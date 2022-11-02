import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { Link } from "react-router-dom";
import { Checkbox, Input, } from "../../../../../../../../components/common/fields";
import LocationForm from "../../../../../../../../components/common/LocationForm";
import Break from "../../../../../staff/Break";
const TemporaryAddressForm = ({ register, watch, errors, handleBack }) => {
    const asAsPermenantAddress = watch("same_as_permanent_address");
    return (_jsxs(_Fragment, { children: [_jsx(Break, { title: "Temporary address" }), _jsx("div", { className: "my-5", children: _jsx(Checkbox, { label: "Same as permenant address", id: "same_as_permanent_address", register: register, name: "same_as_permanent_address" }) }), _jsxs("div", { className: "form-solid mb-6 rounded-md", children: [asAsPermenantAddress || (_jsxs("div", { className: "sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 grid grid-cols-1 gap-4", children: [_jsx(LocationForm, { register: register, errors: errors, watch: watch, prefix: "temp" }), _jsx("div", { className: "", children: _jsx(Input, { label: "Ward*", required: true, errors: errors, register: register, name: "temp_ward", placeholder: "11" }) }), _jsx("div", { className: "", children: _jsx(Input, { label: "Tole", register: register, name: "temp_tole", placeholder: "Surya tole" }) })] })), _jsx("div", { className: "w-full my-6", children: _jsxs("div", { className: " w-fit ml-auto", children: [_jsx("button", { onClick: handleBack, className: "secondary_btn", children: "Back" }), _jsx(Link, { to: `/admin/dashboard/student/student-information/add-class-details`, className: "primary_btn", children: "Next" })] }) })] })] }));
};
export default TemporaryAddressForm;
