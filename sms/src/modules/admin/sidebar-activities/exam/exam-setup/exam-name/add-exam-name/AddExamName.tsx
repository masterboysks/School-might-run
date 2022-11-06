import React from 'react';
import Breadnav from '../../../../../../../components/common/navigation/Breadnav';
import Break from '../../../../../../../components/common/Break';

import Form from './Form';

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
    name: 'Add',
    href: '/admin/dashboard/exam/exam-setup/exam-name/add',
  },
];
export default function AddExamName() {
  return (
    <>
      <Breadnav pages={pages} />
      <Break title="Add exam name" />
      <Form />
    </>
  );
}
