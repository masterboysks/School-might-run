import React from 'react';
import Breadnav from '../../../../../../../components/common/navigation/Breadnav';
import Table from './Table';
const pages = [
  { name: 'Library' },
  {
    name: 'Setup',
    href: '/admin/dashboard/library/library-member/staff',
  },
  {
    name: 'Book category',
    href: '/admin/dashboard/library/library-setup/book-category',
  },
];
export default function LibraryBookCategory() {
  return (
    <>
      <Breadnav pages={pages} />
      <Table />
    </>
  );
}
