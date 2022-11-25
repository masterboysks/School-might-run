import React from 'react';
import { useParams } from 'react-router-dom';
import Breadnav from '../../../../../../components/common/navigation/Breadnav';
import { Form } from './Form';
import LogTable from './LogTable';
import Profile from './Profile';

export default function Logsheet() {
  const { student } = useParams();
  const pages = [
    { name: 'Fee' },
    {
      name: 'Student logsheet',
      href: '/admin/dashboard/fee/student-logsheet',
    },
    {
      name: `${
        student.split('-')[0][0].toUpperCase() +
        student.split('-')[0].substring(1)
      }'s logsheet`,
    },
  ];
  return (
    <>
      <Breadnav pages={pages} />
      <Profile></Profile>
      <Form />
      {/* <LogTable /> */}
    </>
  );
}
