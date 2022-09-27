import React from "react";
import { AuthProvider } from "./AuthProvider";
import { StaffFormPersonalDetailsPictureContex } from "./StaffFormPersonalDetailsPicture";

export default function ContexProvider({ children }) {
  return (
    <AuthProvider>
      <StaffFormPersonalDetailsPictureContex>
        {children}
      </StaffFormPersonalDetailsPictureContex>
    </AuthProvider>
  );
}
