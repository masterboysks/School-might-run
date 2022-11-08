import React from 'react';
import Break from '../../../../../../../components/common/Break';
import Breadnav from '../../../../../../../components/common/navigation/Breadnav';
import Form from './Form';
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
  {
    name: 'Add',
    href: '/admin/dashboard/library/library-setup/book-category/add',
  },
];
export default function LibraryBookCategoryAdd() {
  return (
    <>
      <Breadnav pages={pages} />
      <Break title="Add book category" />
      <Form />
    </>
  );
}
