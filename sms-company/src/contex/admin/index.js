import { jsx as _jsx } from "react/jsx-runtime";
import ContexForDeleteModal from "./common/ContexForDeleteModal";
import { StaffFormPersonalDetailsPictureContex } from "./staff/StaffFormPersonalDetailsPicture";
import { StaffGeneralDetailsViewContex } from "./staff/StaffGeneralDetailsView";
import { StudentFormPicture } from "./student/StudentFormStudentPictureAndGurdainPicture";
export default function Admin({ children }) {
    return (_jsx(StaffFormPersonalDetailsPictureContex, { children: _jsx(StaffGeneralDetailsViewContex, { children: _jsx(StudentFormPicture, { children: _jsx(ContexForDeleteModal, { children: children }) }) }) }));
}
