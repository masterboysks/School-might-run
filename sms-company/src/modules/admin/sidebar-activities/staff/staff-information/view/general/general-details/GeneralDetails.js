import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import AddressDetails from "./AddressDetails";
import OfficeDetails from "./OfficeDetails";
import PersonalDetails from "./PersonalDetails";
export default function GeneralDetails() {
    return (_jsxs("div", { children: [_jsx(PersonalDetails, {}), _jsx(OfficeDetails, {}), _jsx(AddressDetails, {})] }));
}
