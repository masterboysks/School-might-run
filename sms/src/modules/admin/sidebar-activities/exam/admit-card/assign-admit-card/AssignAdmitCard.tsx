import React from 'react';
import Breadnav from '../../../../../../components/common/navigation/Breadnav';
import Break from '../../../../../../components/common/Break';

import Details from './Details';
import Table from './Table';
const pages = [
  { name: 'Exam' },
  {
    name: 'Admit card',
    href: '/admin/dashboard/exam/admit-card',
  },
  {
    name: 'Assign admit card',
  },
];
export default function AssignAdmitCard() {
  return (
    <>
      <Breadnav pages={pages} />
      <Details></Details>
      <Break title="Assign admit card" />
      <Table />
    </>
  );
}
