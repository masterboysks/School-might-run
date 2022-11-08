import React from 'react';
import Breadnav from '../../../../../../../components/common/navigation/Breadnav';
import Table from './Table';
const pages = [
  { name: 'Library' },
  {
    name: 'Setup',
  },
  {
    name: 'Fine setup',
    href: '/admin/dashboard/library/library-setup/fine-setup',
  },
];
function LibraryFineSetup() {
  return (
    <div>
      <Breadnav pages={pages} />
      <Table />
    </div>
  );
}

export default LibraryFineSetup;
