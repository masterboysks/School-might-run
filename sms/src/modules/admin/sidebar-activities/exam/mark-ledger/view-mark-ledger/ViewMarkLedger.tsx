import React from 'react';
import { useParams } from 'react-router-dom';
import Breadnav from '../../../../../../components/common/navigation/Breadnav';
import Details from './Details';
import Table from './Table';

export default function ViewMarkLedger() {
  const { section, classOfSchool } = useParams();
  const pages = [
    { name: 'Exam' },

    {
      name: 'Marksledger',
      href: '/admin/dashboard/exam/marks-ledger',
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
