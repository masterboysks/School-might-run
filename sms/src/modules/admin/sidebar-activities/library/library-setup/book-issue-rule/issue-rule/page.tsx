import React from 'react';
import Breadnav from '../../../../../../../components/common/navigation/Breadnav';
import Table from './Table';
const pages = [
  { name: 'Library' },
  {
    name: 'Setup',
  },
  {
    name: 'Book issue rule',
    href: '/admin/dashboard/library/library-setup/book-issue-rule',
  },
];
function LibraryBookIssueRule() {
  return (
    <div>
      <Breadnav pages={pages} />
      <Table />
    </div>
  );
}

export default LibraryBookIssueRule;
