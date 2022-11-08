import React from 'react';
import { Outlet, useParams } from 'react-router-dom';
import Breadnav from '../../../../../../../components/common/navigation/Breadnav';
import Details from './Details';
export default function LibrarySingleStaffLayout() {
  const { staff } = useParams();
  const pages = [
    { name: 'Library' },
    {
      name: 'Staff',
      href: '/admin/dashboard/library/library-member/staff',
    },
    {
      name: staff,
    },
  ];
  return (
    <>
      <Breadnav pages={pages} />
      <Details />
      <div className="my-6">
        <Outlet />
      </div>
    </>
  );
}
