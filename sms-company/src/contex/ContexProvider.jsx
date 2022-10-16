import React from "react";
import { StaffFormPersonalDetailsPictureContex } from "./admin/staff/StaffFormPersonalDetailsPicture";
import { StaffGeneralDetailsViewContex } from "./admin/staff/StaffGeneralDetailsView";
import { StudentFormPicture } from "./admin/student/StudentFormStudentPictureAndGurdainPicture";
import { AuthProvider } from "./AuthProvider";

export default function ContexProvider({ children }) {
  return (
    <AuthProvider>
      <StaffFormPersonalDetailsPictureContex>
        <StaffGeneralDetailsViewContex>
          <StudentFormPicture>{children}</StudentFormPicture>
        </StaffGeneralDetailsViewContex>
      </StaffFormPersonalDetailsPictureContex>
    </AuthProvider>
  );
}
