import { jsx as _jsx } from "react/jsx-runtime";
import { createContext, useState } from "react";
const StaffGeneralDetailsView = createContext({});
export const StaffGeneralDetailsViewContex = ({ children }) => {
    const [data, setData] = useState({});
    return (_jsx(StaffGeneralDetailsView.Provider, { value: { data, setData }, children: children }));
};
export default StaffGeneralDetailsView;
