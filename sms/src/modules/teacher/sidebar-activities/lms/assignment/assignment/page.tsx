import React from 'react';
import Breadnav from '../../../../../../components/common/navigation/Breadnav';
import Table from './Table';
const pages = [
  { name: 'Lms' },
  {
    name: 'Assignment',
    href: '/teacher/dashboard/lms/assignment/',
  },
];
export default function Assignment() {
  return (
    <>
      <Breadnav pages={pages} />
      aaignnent search
      <Table />
    </>
  );
}
