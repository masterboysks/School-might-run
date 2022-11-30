import Profile from './Profile';
import Form from './Form';
import Table from './Table';
import { useParams } from 'react-router-dom';
import React from 'react';
import Breadnav from '../../../../../../components/common/navigation/Breadnav';

const StudentAttendenceStudent = () => {
  const { classOfSchool, section, studentName } = useParams();
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
    {
      name: `${studentName}`,
      href: `/admin/dashboard/student/student-attendance/${classOfSchool}/${section}/${studentName}`,
    },
  ];
  return (
    <>
      <div className="pt-9">
        <Breadnav pages={pages} />
      </div>
      <Profile />
      <Form />
      <Table />
    </>
  );
};

export default StudentAttendenceStudent;
