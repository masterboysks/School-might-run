import React from 'react';
import { Outlet, useParams } from 'react-router-dom';
import Breadnav from '../../../../../../../components/common/navigation/Breadnav';
import Details from './Details';
export default function LibrarySingleStudentLayout() {
  const { student } = useParams();
  const pages = [
    { name: 'Library' },
    {
      name: 'Student',
      href: '/admin/dashboard/library/library-member/',
    },
    {
      name: student,
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
