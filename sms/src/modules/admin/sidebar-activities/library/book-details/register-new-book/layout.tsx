import React from 'react';
import { Outlet } from 'react-router-dom';
import Breadnav from '../../../../../../components/common/navigation/Breadnav';

const pages = [
  { name: 'Library' },
  {
    name: 'Book details',
    href: '/admin/dashboard/admin/class-schedule/',
  },
  {
    name: 'Register',
    href: '#',
  },
];
export default function LayoutBookDetails() {
  return (
    <>
      <Breadnav pages={pages} />
      <Outlet />
    </>
  );
}
