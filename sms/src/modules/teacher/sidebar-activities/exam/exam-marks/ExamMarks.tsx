import React from 'react';
import Breadnav from '../../../../../components/common/navigation/Breadnav';
import Table from './Table';
const pages = [
  { name: 'Exam' },
  {
    name: 'Exam marks',
    href: '/teacher/dashboard/exam/exam-marks/',
  },
];
export default function ExamMarks() {
  return (
    <>
      <Breadnav pages={pages} />
      <Table />
    </>
  );
}
