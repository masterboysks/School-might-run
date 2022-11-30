import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useParams } from 'react-router-dom';
import studentLogsheetApi from '../../../../../../api/admin/dashboard/fee/studentLogsheetApi';
import Breadnav from '../../../../../../components/common/navigation/Breadnav';
import { Form } from './Form';
import LogTable from './LogTable';
import Profile from './Profile';

export default function Logsheet() {
  const { student } = useParams();
  const { data } = useQuery({
    queryFn: () => studentLogsheetApi.getOneStudent(student),
    queryKey: ['studentlogsheetapigetonestudent', student],
    select: (d) => d.data.data,
    onSuccess: (d) => console.log(d),
  });
  const pages = [
    { name: 'Fee' },
    {
      name: 'Student logsheet',
      href: '/admin/dashboard/fee/student-logsheet',
    },
    {
      name: (
        <span key={data?.student_name ? 1 : 2}>
          {`${data?.student_name}`}'s logsheet
        </span>
      ),
    },
  ];
  return (
    <>
      <Breadnav pages={pages} />
      <Profile data={data}></Profile>
      <Form />
      <LogTable />
    </>
  );
}
