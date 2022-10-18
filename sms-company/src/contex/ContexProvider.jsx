import React from "react";
import ContexForDeleteModal from "./admin/common/ContexForDeleteModal";
import { StaffFormPersonalDetailsPictureContex } from "./admin/staff/StaffFormPersonalDetailsPicture";
import { StaffGeneralDetailsViewContex } from "./admin/staff/StaffGeneralDetailsView";
import { StudentFormPicture } from "./admin/student/StudentFormStudentPictureAndGurdainPicture";
import { AuthProvider } from "./AuthProvider";

export default function ContexProvider({ children }) {
  return (
    <AuthProvider>
      <StaffFormPersonalDetailsPictureContex>
        <StaffGeneralDetailsViewContex>
          <StudentFormPicture>
            <ContexForDeleteModal>{children}</ContexForDeleteModal>
          </StudentFormPicture>
        </StaffGeneralDetailsViewContex>
      </StaffFormPersonalDetailsPictureContex>
    </AuthProvider>
  );
}
