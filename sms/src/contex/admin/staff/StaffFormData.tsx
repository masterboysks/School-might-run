import React, { createContext, useContext, useState } from 'react';

const StaffFormData = createContext<{
  dataForm: {
    personal: {};
    address: {};
    general: {};
  };
  setForm: React.Dispatch<
    SetStateAction<{ personal: {}; address: {}; general: {} }>
  >;
  reset: () => void;
}>();
export const StaffFormDataCOntex = ({ children }) => {
  const initial = {
    personal: {},
    address: {},
    general: {},
  };
  const [formData, setFormData] = useState(initial);
  const reset = () => setFormData(initial);
  return (
    <StaffFormData.Provider
      value={{ dataForm: formData, setForm: setFormData, reset }}
    >
      {children}
    </StaffFormData.Provider>
  );
};

export default StaffFormDataCOntex;
export const useStaffFormData = () => useContext(StaffFormData);
