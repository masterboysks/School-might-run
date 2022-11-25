import React from 'react';
import Break from '../../../../../../components/common/Break';
import Breadnav from '../../../../../../components/common/navigation/Breadnav';
import Form from './Form';
const pages = [
  { name: 'Fee' },
  {
    name: 'Fee assign',
    href: 'admin/dashboard/fee/fee-assign/',
  },
];
export default function Assign() {
  return (
    <>
      <Breadnav pages={pages} />
      <Break title="Class info" />
      <Form />
    </>
  );
}
