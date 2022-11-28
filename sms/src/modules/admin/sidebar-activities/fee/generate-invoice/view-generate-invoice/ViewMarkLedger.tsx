import React from 'react';
import { useParams } from 'react-router-dom';
import Breadnav from '../../../../../../components/common/navigation/Breadnav';
import TableWrapper from './TableWrapper';

export default function ViewGenerateInvoice() {
  const { sectionName, className } = useParams();
  const pages = [
    { name: 'Fee' },

    {
      name: 'Generate invoice',
      href: '/admin/dashboard/fee/generate-invoice',
    },
    {
      name: `${className} - ${sectionName}`,
    },
  ];
  return (
    <>
      <Breadnav pages={pages} />
      {/* <Details /> */}
      <TableWrapper />
    </>
  );
}
