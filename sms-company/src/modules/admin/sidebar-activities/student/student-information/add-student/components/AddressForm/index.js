import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import PermanentAddressForm from "./PermanentAddressForm";
import TemporaryAddressForm from "./TemporaryAddressForm";
function AddressForm() {
    const { register, watch, reset, handleSubmit, formState: { errors }, } = useForm();
    const onSubmit = async (d) => {
        console.log(d);
    };
    const onBack = () => {
        navigate(-1);
    };
    const sameAsPermenantAddress = watch("same_as_permanent_address");
    const navigate = useNavigate();
    return (_jsxs("form", { onSubmit: handleSubmit(onSubmit), children: [_jsx(PermanentAddressForm, { register: register, watch: watch, errors: errors }), _jsx(TemporaryAddressForm, { register: register, watch: watch, errors: errors, handleBack: onBack })] }));
}
export default AddressForm;
