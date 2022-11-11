import React from 'react';
import Breadnav from '../../../../../../components/common/navigation/Breadnav';
import Table from './Table';
const pages = [
  { name: 'Fee' },
  {
    name: 'Fee type',
    href: 'admin/dashboard/fee/fee-type/',
  },
];
export default function FeeType() {
  return (
    <>
      <Breadnav pages={pages} />
      <Table />
    </>
  );
}
