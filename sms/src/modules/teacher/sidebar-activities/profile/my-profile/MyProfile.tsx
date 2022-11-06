import React from 'react';
import Breadnav from '../../../../../components/common/navigation/Breadnav';
import Details from './Details';
import Table from './Table';
const pages = [
  { name: 'Profile' },
  {
    name: 'My profile',
    href: '/teacher/dashboard/profile/my-profile/',
  },
];
export default function MyProfile() {
  return (
    <>
      <Breadnav pages={pages}></Breadnav>
      <Details />
      <Table />
    </>
  );
}
