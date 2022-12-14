import React from 'react';
import Breadnav from '../../../../../../../components/common/navigation/Breadnav';
import Table from './Table';
const pages = [
  { name: 'Exam' },
  {
    name: 'Exam setup',
  },
  {
    name: 'Exam marks name',
    href: '/admin/dashboard/exam/exam-setup/exam-marks-name',
  },
];
export default function ExamMarksName() {
  return (
    <>
      <Breadnav pages={pages} />
      <Table />
    </>
  );
}
