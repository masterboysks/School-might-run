import React from 'react';
import Breadnav from '../../../../../../../components/common/navigation/Breadnav';
import Form from './Form';
import Table from './Table';
const pages = [
  { name: 'Library' },
  {
    name: 'Student',
    href: '/admin/dashboard/library/library-member/',
  },
  {
    name: '',
    href: '/admin/dashboard/library/library-member/register',
  },
];
export default function LibraryRegisterStudent() {
  return (
    <>
      <Breadnav pages={pages} />
      <Form />
      <Table />
    </>
  );
}
