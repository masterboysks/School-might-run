import React from 'react';
import Breadnav from '../../../../../../../components/common/navigation/Breadnav';
import Table from './Table';

const pages = [
  { name: 'Admin' },
  {
    name: 'Date setup',
  },
  {
    name: 'Sub-Faculty',
    href: '/admin/dashboard/admin/data-setup/sub-faculty',
  },
];
const SubFaculty = () => {
  return (
    <>
      <Breadnav pages={pages} />
      <Table />
    </>
  );
};

export default SubFaculty;
