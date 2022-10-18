import React from "react";
import { useState } from "react";
import { createContext } from "react";

export const DeleteModalContex = createContext(null);
export default function ContexForDeleteModal({ children }) {
  const [modalData, setModalData] = useState(null);

  return (
    <DeleteModalContex.Provider
      value={{ value: modalData, setValue: setModalData }}
    >
      {children}
    </DeleteModalContex.Provider>
  );
}
