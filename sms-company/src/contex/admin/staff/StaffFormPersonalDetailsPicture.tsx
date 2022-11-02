import React, { createContext, useState } from "react";

const StaffFormPersonalDetailsPicture = createContext({});

export const StaffFormPersonalDetailsPictureContex = ({ children }) => {
  const [photo, setPhoto] = useState({});

  return (
    <StaffFormPersonalDetailsPicture.Provider value={{ photo, setPhoto }}>
      {children}
    </StaffFormPersonalDetailsPicture.Provider>
  );
};

export default StaffFormPersonalDetailsPicture;
