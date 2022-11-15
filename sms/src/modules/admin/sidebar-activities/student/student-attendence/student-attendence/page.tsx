import React from 'react';
import Breadnav from '../../../../../../components/common/navigation/Breadnav';
import Table from './Table';
import Form from './Form';
const pages = [
  { name: 'Student' },
  {
    name: 'Student Attendance',
    href: '/student/student-attendance/',
  },
];
export default function StudentAttendenceHome() {
  return (
    <>
      {' '}
      <Breadnav pages={pages} />
      <Form />
      <Table />
    </>
  );
}
