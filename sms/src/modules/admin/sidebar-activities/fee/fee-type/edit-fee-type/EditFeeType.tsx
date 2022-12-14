import React from 'react';
import Break from '../../../../../../components/common/Break';
import Breadnav from '../../../../../../components/common/navigation/Breadnav';
import Form from './Form';
const pages = [
  { name: 'Fee' },
  {
    name: 'Fee type',
    href: 'admin/dashboard/fee/fee-type/',
  },
  {
    name: 'Edit',
    href: '#',
  },
];
export default function EditFeeType() {
  return (
    <>
      <Breadnav pages={pages} />
      <Break title="Add fee" />
      <Form />
    </>
  );
}
