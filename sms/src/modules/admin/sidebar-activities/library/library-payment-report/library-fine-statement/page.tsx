import React from 'react';
import Breadnav from '../../../../../../components/common/navigation/Breadnav';
import Form from './Form';
const pages = [
  { name: 'Library' },
  {
    name: 'Payment Report',
  },
  {
    name: 'Fine statement',
    href: '/admin/dashboard/library/library-payment-report/statement',
  },
];
export default function LibraryFineStatement() {
  return (
    <>
      <Breadnav pages={pages} />
      <Form />
    </>
  );
}
