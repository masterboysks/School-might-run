import React from 'react';
import { useParams } from 'react-router-dom';
import Breadnav from '../../../../../../components/common/navigation/Breadnav';
import Details from './Details';
import Form from './Form';
import Table from './Table';

const StudentAttendenceClass = () => {
  const { classOfSchool, section } = useParams();
  const pages = [
    { name: 'Student' },
    {
      name: 'Student Attendance',
      href: '/admin/dashboard/student/student-attendance/',
    },
    {
      name: `${classOfSchool}-${section}`,
      href: `/admin/dashboard/student/student-attendance/${classOfSchool}/${section}`,
    },
  ];
  return (
    <>
      <div className="pt-9">
        <Breadnav pages={pages} />
      </div>
      <Details />
      <Form />
      <Table />
    </>
  );
};

export default StudentAttendenceClass;
