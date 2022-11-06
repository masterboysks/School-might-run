import React from 'react';
import Break from '../../../../../../../components/common/Break';
import Breadnav from '../../../../../../../components/common/navigation/Breadnav';
import Form from './Form';
const pages = [
  { name: 'Library' },
  {
    name: 'Lend books',
    href: '/admin/dashboard/library/library-activities/lend-book',
  },
  {
    name: 'Lend',
    href: '#',
  },
];
export default function LendBookLend() {
  return (
    <>
      <Breadnav pages={pages} />
      <Break title="Lend book" />
      <Form />
    </>
  );
}
