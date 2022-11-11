import React from 'react';
import Breadnav from '../../../../../../../components/common/navigation/Breadnav';
import Break from '../../../../../../../components/common/Break';

import Form from './Form';
import { useParams } from 'react-router-dom';

export default function AddExamName() {
  const { id } = useParams();
  const pages = [
    { name: 'Exam' },
    {
      name: 'Exam setup',
    },
    {
      name: 'Exam name',
      href: '/admin/dashboard/exam/exam-setup/exam-name',
    },
    {
      name: id ? 'Edit' : 'Add',
    },
  ];
  return (
    <>
      <Breadnav pages={pages} />
      <Break title="Add exam name" />
      <Form />
    </>
  );
}
