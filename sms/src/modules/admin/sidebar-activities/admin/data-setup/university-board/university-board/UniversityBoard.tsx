import React from 'react';
import Breadnav from '../../../../../../../components/common/navigation/Breadnav';
import Tables from './Tables';
const pages = [
  { name: 'Admin' },
  {
    name: 'Date setup',
  },
  {
    name: 'University/Board',
    href: '/admin/dashboard/admin/data-setup/university-board',
  },
];
const UniversityBoard = () => {
  return (
    <>
      <Breadnav pages={pages} />
      <Tables />
    </>
  );
};

export default UniversityBoard;
