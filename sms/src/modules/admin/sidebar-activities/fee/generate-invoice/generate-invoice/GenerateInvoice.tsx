import React from 'react';
import Break from '../../../../../../components/common/Break';
import Breadnav from '../../../../../../components/common/navigation/Breadnav';
import Form from './Form';
import GenerateForm from './GenerateForm';
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
      <Break title="Generate invoice" />
      <GenerateForm />
      <Break title="Search class" />
      <Form />
      <Table />
    </>
  );
}
