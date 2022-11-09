import { CheckIcon } from '@heroicons/react/20/solid';

import { Link } from 'react-router-dom';
import Breadnav from '../../../../../../../components/common/navigation/Breadnav';
import Steps from '../../../../../../../components/common/navigation/Steps';
import React from 'react';

const pages = [
  { name: 'Student' },
  {
    name: 'Student Information',
    href: '/student/student-information/',
  },
  {
    name: 'Add Student',
    href: '/admin/dashboard/student/student-information/add-student-details',
  },
];

const AboveForm = (props) => {
  return (
    <>
      <Breadnav pages={pages} />
      <Steps {...props} />
    </>
  );
};

export default AboveForm;
