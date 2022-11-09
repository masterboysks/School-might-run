import React from 'react';
import Breadnav from '../../../../../../components/common/navigation/Breadnav';
import Form from './Form';
import Table from './Table';
const pages = [
  { name: 'Report' },
  {
    name: 'Transportation',
  },
  {
    name: 'Student wise report',
    href: '/admin/dashboard/report/transportation-report/student-wise-report',
  },
];
export default function StudentWiseReport() {
  return (
    <>
      <Breadnav pages={pages} />
      <Form />
      <Table />
    </>
  );
}
