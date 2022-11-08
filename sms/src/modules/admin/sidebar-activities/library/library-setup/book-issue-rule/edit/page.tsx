import React from 'react';
import Break from '../../../../../../../components/common/Break';
import Breadnav from '../../../../../../../components/common/navigation/Breadnav';
import Form from './Form';

function LibraryBookIssueRule() {
  const pages = [
    { name: 'Library' },
    {
      name: 'Setup',
      href: '/admin/dashboard/library/library-member/staff',
    },
    {
      name: 'Book issue rule',
      href: '/admin/dashboard/library/library-setup/book-issue-rule',
    },
    {
      name: 'edit',
      href: '/admin/dashboard/library/library-setup/book-issue-rule/:idk',
    },
  ];
  return (
    <div>
      <Breadnav pages={pages} />

      <Break title="Add rule" />
      <Form />
    </div>
  );
}

export default LibraryBookIssueRule;
