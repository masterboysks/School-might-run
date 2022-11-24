import React from 'react';
import Breadnav from '../../common/navigation/Breadnav';
import Steps from '../../common/navigation/Steps';

const pages = [
  { name: 'Student' },
  {
    name: 'Student Information',
    href: '/admin/dashboard/student/student-information/',
  },
  {
    name: 'Add Student',
    href: '/admin/dashboard/student/student-information/add-student-details',
  },
];

const AboveForm = (props) => {
  return (
    <>
      <Breadnav pages={pages} />
      <Steps {...props} />
    </>
  );
};

export default AboveForm;
