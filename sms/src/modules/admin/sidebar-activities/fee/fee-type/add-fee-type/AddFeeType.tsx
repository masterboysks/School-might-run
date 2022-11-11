import React from 'react';
import Breadnav from '../../../../../../components/common/navigation/Breadnav';
import Break from '../../break';
import Form from './Form';
const pages = [
  { name: 'Fee' },
  {
    name: 'Fee type',
    href: 'admin/dashboard/fee/fee-type/',
  },
  {
    name: 'Add',
    href: 'admin/dashboard/fee/fee-type/add',
  },
];
export default function AddFeeType() {
  return (
    <>
      <Breadnav pages={pages} />
      <Break title="Add fee" />
      <Form />
    </>
  );
}
