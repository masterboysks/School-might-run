import React from 'react';
import Breadnav from '../../../../../../../components/common/navigation/Breadnav';
import Tables from './Tables';
const pages = [
  { name: 'Admin' },
  {
    name: 'Date setup',
  },
  {
    name: 'Batch',
    href: '/admin/dashboard/admin/data-setup/batch',
  },
];
const Batch = () => {
  return (
    <>
      <Breadnav pages={pages} />
      <Tables />
    </>
  );
};

export default Batch;
