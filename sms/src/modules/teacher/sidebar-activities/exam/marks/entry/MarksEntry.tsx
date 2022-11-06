import React from 'react';
import { useParams } from 'react-router-dom';
import Breadnav from '../../../../../../components/common/navigation/Breadnav';
import Break from '../../../../../../components/common/Break';
import Table from './Table';

export default function MarksEntry() {
  const { classOfSchool, section } = useParams();
  const pages = [
    { name: 'Exam' },
    {
      name: 'Exam marks',
      href: '/teacher/dashboard/exam/exam-marks/',
    },
    {
      name: `${classOfSchool}-${section}`,
    },
  ];
  return (
    <>
      <Breadnav pages={pages} />
      <Break title="Marks entry" />
      <Table />
    </>
  );
}
