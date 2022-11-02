import React from "react";
import ContexForDeleteModal from "./common/ContexForDeleteModal";
import { StaffFormPersonalDetailsPictureContex } from "./staff/StaffFormPersonalDetailsPicture";
import { StaffGeneralDetailsViewContex } from "./staff/StaffGeneralDetailsView";
import { StudentFormPicture } from "./student/StudentFormStudentPictureAndGurdainPicture";

export default function Admin({ children }) {
  return (
    <StaffFormPersonalDetailsPictureContex>
      <StaffGeneralDetailsViewContex>
        <StudentFormPicture>
          <ContexForDeleteModal>{children}</ContexForDeleteModal>
        </StudentFormPicture>
      </StaffGeneralDetailsViewContex>
    </StaffFormPersonalDetailsPictureContex>
  );
}
