import React from 'react';
import Breadnav from '../../../../../../components/common/navigation/Breadnav';
import Table from './Table';
const pages = [
  { name: 'Library' },
  {
    name: 'Report',
  },
  {
    name: 'Book report',
    href: '/admin/dashboard/library/library-book-report/book-report',
  },
];
export default function LibraryBookReport() {
  return (
    <>
      <Breadnav pages={pages} />
      {/* form */}
      <Table />
    </>
  );
}
