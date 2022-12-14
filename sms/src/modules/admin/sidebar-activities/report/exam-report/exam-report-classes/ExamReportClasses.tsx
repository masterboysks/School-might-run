import React from 'react';
import Breadnav from '../../../../../../components/common/navigation/Breadnav';
import Form from './Form';
import Table from './Table';
const pages = [
  { name: 'Report' },
  {
    name: 'Exam report',
    href: '/admin/dashboard/report/exam-report',
  },
];
export default function ExamReportClasses() {
  return (
    <>
      <Breadnav pages={pages} />
      <Form />
      <Table />
    </>
  );
}
