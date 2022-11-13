import React from 'react';
import Breadnav from '../../../../../../components/common/navigation/Breadnav';
import Form from './Form';
import Table from './Table';
const pages = [
  { name: 'Fee' },

  {
    name: 'Generate invoice',
    // href: '/admin/dashboard/fee/generate-invoice',
  },
];
export default function GenerateInvoice() {
  return (
    <>
      <Breadnav pages={pages} />
      <Form />
      <Table />
    </>
  );
}
