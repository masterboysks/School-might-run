import React from 'react';
import Breadnav from '../../../../../../components/common/navigation/Breadnav';
import Form from './Form';
import Table from './Table';

const pages = [
  { name: 'Report' },
  {
    name: 'Topper Report',
    href: '/report/topper-report',
  },
];
export default function TopperReportClasses() {
  return (
    <>
      <Breadnav pages={pages}></Breadnav>
      <Form />
      <Table />
    </>
  );
}
