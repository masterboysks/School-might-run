import React from 'react';
import Breadnav from '../../../../../../../components/common/navigation/Breadnav';
import Form from './Form';
import Table from './Table';
const pages = [
  { name: 'Report' },
  {
    name: 'Attendance report',
  },
  {
    name: 'Student attendance report',
    href: '/report/attendance-report/student-attendance-report',
  },
];
export default function StudentAttendanceReportClasses() {
  return (
    <>
      <Breadnav pages={pages} />
      <Form />
      <Table />
    </>
  );
}
