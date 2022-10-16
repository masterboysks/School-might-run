import { createContext, useState } from "react";

const StudentFormStudentPictureAndGurdainPicture = createContext({});

export const StudentFormPicture = ({ children }) => {
  const [photo, setPhoto] = useState({});

  return (
    <StudentFormStudentPictureAndGurdainPicture.Provider
      value={{ photo, setPhoto }}
    >
      {children}
    </StudentFormStudentPictureAndGurdainPicture.Provider>
  );
};

export default StudentFormStudentPictureAndGurdainPicture;
