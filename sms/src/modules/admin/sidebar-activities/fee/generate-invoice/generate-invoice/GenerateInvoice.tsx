import React from 'react';
import Break from '../../../../../../components/common/Break';
import Breadnav from '../../../../../../components/common/navigation/Breadnav';
import TableWrapper from './TableWrapper';
import GenerateForm from './GenerateForm';
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
      <Break title="Generate invoice" />
      <GenerateForm />
      <Break title="Search class" />
      <TableWrapper />
    </>
  );
}
