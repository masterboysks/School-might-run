import React from 'react';
import Breadnav from '../../../../../../../components/common/navigation/Breadnav';
import Form from './Form';
const pages = [
  { name: 'Library' },
  {
    name: 'Setup',
  },
  {
    name: 'Book sub-category',
    href: '/admin/dashboard/library/library-setup/book-sub-category',
  },
  {
    name: 'Add',
    href: '/admin/dashboard/library/library-setup/book-sub-category/add',
  },
];
export default function LibraryBookSubCategoryAdd() {
  return (
    <>
      <Breadnav pages={pages} />
      <Form />
    </>
  );
}
