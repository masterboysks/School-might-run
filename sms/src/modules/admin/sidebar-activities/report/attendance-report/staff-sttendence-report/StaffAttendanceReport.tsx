import React from 'react';
import Breadnav from '../../../../../../components/common/navigation/Breadnav';
import Form from './Form';
import Table from './Table';
const pages = [
  { name: 'Report' },
  {
    name: 'Attendance report',
  },
  {
    name: 'Staff attendance report',
    href: '/admin/dashboard/report/attendance-report/staff-attendance-report',
  },
];
export default function StaffAttendanceReport() {
  return (
    <>
      <Breadnav pages={pages} />
      <Form />
      <Table />
    </>
  );
}
