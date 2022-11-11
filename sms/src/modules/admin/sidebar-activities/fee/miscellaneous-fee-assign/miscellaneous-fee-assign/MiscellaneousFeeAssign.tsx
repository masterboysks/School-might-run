import React from 'react';
import Breadnav from '../../../../../../components/common/navigation/Breadnav';
import Table from './Table';
const pages = [
  { name: 'Fee' },
  {
    name: 'Miscellaneous fee assign',
    href: 'admin/dashboard/fee/miscellaneous-fee-assign',
  },
];
function Notice() {
  return (
    <div>
      <Breadnav pages={pages} />
      <Table />
    </div>
  );
}

export default Notice;
