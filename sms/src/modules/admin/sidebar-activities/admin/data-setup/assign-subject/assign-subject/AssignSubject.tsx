import React from 'react';
import Breadnav from '../../../../../../../components/common/navigation/Breadnav';
import Table from './Table';

const pages = [
  { name: 'Admin' },
  {
    name: 'Date setup',
  },
  {
    name: 'Assign Subject',
    href: '/admin/dashboard/admin/data-setup/assign-subject',
  },
];
const AssignSubject = () => {
  return (
    <>
      <Breadnav pages={pages} />
      <Table />
    </>
  );
};

export default AssignSubject;
