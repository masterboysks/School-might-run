import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Input } from "../../../../../../../../components/common/fields";
import LocationForm from "../../../../../../../../components/common/LocationForm";
const PermanentAddressForm = ({ register, errors, watch }) => {
    return (_jsx("div", { className: "form-solid my-6 rounded-md", children: _jsxs("div", { className: "sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 grid grid-cols-1 gap-4", children: [_jsx(LocationForm, { register: register, errors: errors, watch: watch }), _jsx("div", { className: "", children: _jsx(Input, { label: "Ward*", required: true, errors: errors, register: register, name: "ward", placeholder: "11" }) }), _jsx("div", { className: "", children: _jsx(Input, { label: "Tole*", register: register, name: "tole", required: true, errors: errors, placeholder: "Surya tole" }) })] }) }));
};
export default PermanentAddressForm;
