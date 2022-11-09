import React from 'react';
import { useParams } from 'react-router-dom';
import Breadnav from '../../../../../../components/common/navigation/Breadnav';
import Break from '../../../../../../components/common/Break';
import AttendanceTopper from './AttendanceTopper';
import Details from './Details';
import ExamTopper from './ExamTopper';

export default function TopperReportClass() {
  const { classOfSchool } = useParams();

  const pages = [
    { name: 'Report' },
    {
      name: 'Topper Report',
      href: '/admin/dashboard/report/topper-report',
    },
    {
      name: classOfSchool,
    },
  ];
  return (
    <>
      <Breadnav pages={pages}></Breadnav>
      <Details />
      <Break title="Exam topper" />
      <ExamTopper />
      <Break title="Attendance topper" />
      <AttendanceTopper />
    </>
  );
}
