import React from 'react';
import Breadnav from '../../../../../../../components/common/navigation/Breadnav';
import Table from './Table';
const pages = [
  { name: 'Exam' },
  {
    name: 'Exam setup',
  },
  {
    name: 'Exam name',
    href: '/admin/dashboard/exam/exam-setup/exam-name',
  },
];
export default function ExamName() {
  return (
    <>
      <Breadnav pages={pages} />
      <Table />
    </>
  );
}
