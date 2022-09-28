import React from "react";
import { StaffFormPersonalDetailsPictureContex } from "./admin/staff/StaffFormPersonalDetailsPicture";
import { AuthProvider } from "./AuthProvider";

export default function ContexProvider({ children }) {
  return (
    <AuthProvider>
      <StaffFormPersonalDetailsPictureContex>
        {children}
      </StaffFormPersonalDetailsPictureContex>
    </AuthProvider>
  );
}
