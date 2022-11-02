import { jsx as _jsx } from "react/jsx-runtime";
import Admin from "./admin";
import { AuthProvider } from "./AuthProvider";
export default function ContexProvider({ children }) {
    return (_jsx(AuthProvider, { children: _jsx(Admin, { children: children }) }));
}
