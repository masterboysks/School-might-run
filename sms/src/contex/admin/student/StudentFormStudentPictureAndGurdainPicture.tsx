import React, { createContext, useState } from 'react';
interface studentContes {
  values: Object;
  setValues: React.Dispatch<React.SetStateAction<{}>>;
}
const StudentFormStudentPictureAndGurdainPicture = createContext<studentContes>(
  { values: {}, setValues: () => undefined }
);

export const StudentFormPicture = ({ children }) => {
  const [values, setValues] = useState({});

  return (
    <StudentFormStudentPictureAndGurdainPicture.Provider
      value={{ values, setValues }}
    >
      {children}
    </StudentFormStudentPictureAndGurdainPicture.Provider>
  );
};

export default StudentFormStudentPictureAndGurdainPicture;
