import React from 'react';
import { useParams } from 'react-router-dom';
import Breadnav from '../../../../../../components/common/navigation/Breadnav';
import Details from './Details';
import Table from './Table';

export default function ViewGenerateInvoice() {
  const { section, classOfSchool } = useParams();
  const pages = [
    { name: 'Fee' },

    {
      name: 'Generate invoice',
      href: '/admin/dashboard/fee/generate-invoice',
    },
    {
      name: `${classOfSchool}-${section}`,
    },
  ];
  return (
    <>
      <Breadnav pages={pages} />
      <Details />
      <Table />
    </>
  );
}
