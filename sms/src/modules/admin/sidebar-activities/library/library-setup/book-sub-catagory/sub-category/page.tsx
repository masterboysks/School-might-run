import React from 'react';
import Breadnav from '../../../../../../../components/common/navigation/Breadnav';
import Table from './Table';

const pages = [
  { name: 'Library' },
  {
    name: 'Setup',
  },
  {
    name: 'Book sub-category',
    href: '/admin/dashboard/library/library-setup/book-sub-category',
  },
];
const LibraryBookSubCatagory = () => {
  return (
    <>
      <Breadnav pages={pages} />
      <Table />
    </>
  );
};

export default LibraryBookSubCatagory;
