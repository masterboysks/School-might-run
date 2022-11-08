import React from 'react';
import Breadnav from '../../../../../../components/common/navigation/Breadnav';
import Form from './Form';
const pages = [
  { name: 'Library' },
  {
    name: 'Report',
  },
  {
    name: 'Book transaction report',
    href: '/admin/dashboard/library/library-book-report/book-transaction-report',
  },
];
export default function LibraryBookTransactionReport() {
  return (
    <>
      <Breadnav pages={pages} />
      <Form />
    </>
  );
}
