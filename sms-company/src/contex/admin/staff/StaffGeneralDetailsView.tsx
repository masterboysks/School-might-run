import React, { createContext, useState } from "react";

const StaffGeneralDetailsView = createContext({});

export const StaffGeneralDetailsViewContex = ({ children }) => {
  const [data, setData] = useState({});

  return (
    <StaffGeneralDetailsView.Provider value={{ data, setData }}>
      {children}
    </StaffGeneralDetailsView.Provider>
  );
};

export default StaffGeneralDetailsView;
