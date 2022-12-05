import React from 'react';
import ContexForDeleteModal from './common/ContexForDeleteModal';
import StaffFormDataCOntex from './staff/StaffFormData';

import { StaffGeneralDetailsViewContex } from './staff/StaffGeneralDetailsView';
import { StudentFormPicture } from './student/StudentFormStudentPictureAndGurdainPicture';

export default function Admin({ children }) {
  return (
    <StaffFormDataCOntex>
      <StaffGeneralDetailsViewContex>
        <StudentFormPicture>
          <ContexForDeleteModal>{children}</ContexForDeleteModal>
        </StudentFormPicture>
      </StaffGeneralDetailsViewContex>
    </StaffFormDataCOntex>
  );
}
