import React from 'react';
import Breadnav from '../../../../../../components/common/navigation/Breadnav';
import Table from './Table';
const pages = [
  { name: 'Library' },
  {
    name: 'Book Report',
  },
  {
    name: 'Day log',
    href: '/admin/dashboard/library/library-book-report/library-day-log',
  },
];
export default function LibraryDayLog() {
  return (
    <>
      <Breadnav pages={pages} />
      Search left
      <Table />
    </>
  );
}
