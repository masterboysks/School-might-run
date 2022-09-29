import React from "react";
import { StaffFormPersonalDetailsPictureContex } from "./admin/staff/StaffFormPersonalDetailsPicture";
import { StaffGeneralDetailsViewContex } from "./admin/staff/StaffGeneralDetailsView";
import { AuthProvider } from "./AuthProvider";

export default function ContexProvider({ children }) {
  return (
    <AuthProvider>
      <StaffFormPersonalDetailsPictureContex>
        <StaffGeneralDetailsViewContex>
          {children}
        </StaffGeneralDetailsViewContex>
      </StaffFormPersonalDetailsPictureContex>
    </AuthProvider>
  );
}
