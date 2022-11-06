import React from 'react';
import ClassTable from './classTable/ClassTable';

import Form from './Form';
import Breadnav from '../../../../../components/common/navigation/Breadnav';
const pages = [
  { name: 'Student' },
  {
    name: 'Student Attendance',
    href: '/student/student-attendance/',
  },
];

const Main = () => {
  return (
    <div>
      <Breadnav pages={pages} />
      <Form />
      <ClassTable />
    </div>
  );
};

export default Main;
