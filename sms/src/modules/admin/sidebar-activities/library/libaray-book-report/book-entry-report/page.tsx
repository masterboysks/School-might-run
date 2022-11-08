import React from 'react';
import Breadnav from '../../../../../../components/common/navigation/Breadnav';
import Table from './Table';
const pages = [
  { name: 'Library' },
  {
    name: 'Book Report',
  },
  {
    name: 'Book entery report',
    href: '/admin/dashboard/library/library-book-report/book-entry-report',
  },
];
export default function LibraryBookEntryReport() {
  return (
    <>
      <Breadnav pages={pages} />
      <Table />
    </>
  );
}
