import { jsx as _jsx } from "react/jsx-runtime";
import { useState } from "react";
import { createContext } from "react";
export const DeleteModalContex = createContext({});
export default function ContexForDeleteModal({ children }) {
    const [modalData, setModalData] = useState(null);
    return (_jsx(DeleteModalContex.Provider, { value: { value: modalData, setValue: setModalData }, children: children }));
}
