import React from 'react';
import Break from '../../../../../../../components/common/Break';
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
    name: 'Register/ Renew student',
    href: '/admin/dashboard/library/library-member/register',
  },
];
export default function LibraryRegisterStudent() {
  return (
    <>
      <Breadnav pages={pages} />
      {/* <Form /> */}
      {/* search left */}
      <Break title="Register student" />
      <Table />
    </>
  );
}
