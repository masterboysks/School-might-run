import React from 'react';
import Breadnav from '../../../../../../components/common/navigation/Breadnav';
import Table from './Table';
const pages = [
  { name: 'Class' },
  {
    name: 'Class routine',
    href: '/teacher/dashboard/class/class-routine/',
  },
];
export default function ClassRoutine() {
  return (
    <>
      <Breadnav pages={pages} />
      {/* Level search */}
      Level
      <Table />
    </>
  );
}
