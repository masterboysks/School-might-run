import React from 'react';
import Break from '../../../../../../../components/common/Break';
import Breadnav from '../../../../../../../components/common/navigation/Breadnav';
import Form from './Form';
import Table from './Table';
const pages = [
  { name: 'Library' },
  {
    name: 'Staff',
    href: '/admin/dashboard/library/library-member/staff',
  },
  {
    name: 'Register/ Renew staff',
    href: '/admin/dashboard/library/library-member/staff/register',
  },
];
export default function LibraryRegisterStaff() {
  return (
    <>
      <Breadnav pages={pages} />
      {/* <Form /> */}
      {/* search left */}
      <Break title="Register staff" />
      <Table />
    </>
  );
}
