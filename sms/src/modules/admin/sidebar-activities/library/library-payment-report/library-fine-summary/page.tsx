import React from 'react';
import Breadnav from '../../../../../../components/common/navigation/Breadnav';
import Form from './Form';
const pages = [
  { name: 'Library' },
  {
    name: 'Payment Report',
  },
  {
    name: 'Fine summary',
    href: '/admin/dashboard/library/library-payment-report/summary',
  },
];
export default function LibraryFineSummary() {
  return (
    <>
      <Breadnav pages={pages} />
      <Form />
    </>
  );
}
