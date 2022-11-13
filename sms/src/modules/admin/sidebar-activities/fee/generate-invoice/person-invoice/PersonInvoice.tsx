import React from 'react';
import { useParams } from 'react-router-dom';
import Breadnav from '../../../../../../components/common/navigation/Breadnav';
import Details from './Details';
import Table from './Table';

export default function PersonInvoice() {
  const { classOfSchool, section, studentName, studentId } = useParams();
  const pages = [
    { name: 'Fee' },

    {
      name: 'Generate invoice',
      href: '/admin/dashboard/fee/generate-invoice',
    },
    {
      name: `${classOfSchool} - ${section}`,
      href: `/admin/dashboard/fee/generate-invoice/view/${classOfSchool}/${section}`,
    },
    {
      name: studentName,
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
