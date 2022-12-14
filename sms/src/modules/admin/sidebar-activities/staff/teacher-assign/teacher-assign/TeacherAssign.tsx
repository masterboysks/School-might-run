import React from 'react';
import Breadnav from '../../../../../../components/common/navigation/Breadnav';
import Form from './Form';
import Table from './Table';

const pages = [
  { name: 'Staff' },
  {
    name: 'Teacher assign',
    href: '/staff/teacher-assign/',
  },
];
function TeacherAssign() {
  return (
    <>
      <Breadnav pages={pages} />
      <Form />
      <Table />
    </>
  );
}

export default TeacherAssign;
