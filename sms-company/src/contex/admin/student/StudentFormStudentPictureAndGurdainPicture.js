import { jsx as _jsx } from "react/jsx-runtime";
import { createContext, useState } from "react";
const StudentFormStudentPictureAndGurdainPicture = createContext({});
export const StudentFormPicture = ({ children }) => {
    const [photo, setPhoto] = useState({});
    return (_jsx(StudentFormStudentPictureAndGurdainPicture.Provider, { value: { photo, setPhoto }, children: children }));
};
export default StudentFormStudentPictureAndGurdainPicture;
