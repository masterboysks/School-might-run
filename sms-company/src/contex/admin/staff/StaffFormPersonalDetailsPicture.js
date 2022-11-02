import { jsx as _jsx } from "react/jsx-runtime";
import { createContext, useState } from "react";
const StaffFormPersonalDetailsPicture = createContext({});
export const StaffFormPersonalDetailsPictureContex = ({ children }) => {
    const [photo, setPhoto] = useState({});
    return (_jsx(StaffFormPersonalDetailsPicture.Provider, { value: { photo, setPhoto }, children: children }));
};
export default StaffFormPersonalDetailsPicture;
