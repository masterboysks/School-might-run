import React from 'react';
import Breadnav from '../../../../../../components/common/navigation/Breadnav';
import Form from './Form';
import Table from './Table';
const pages = [
  { name: 'Fee' },
  {
    name: 'Student logsheet',
    href: 'admin/dashboard/fee/student-logsheet',
  },
];
export default function StudentLogsheet() {
  return (
    <>
      <Breadnav pages={pages} />
      <Form />
    </>
  );
}
