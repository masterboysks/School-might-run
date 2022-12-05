import React from 'react';
import { useContext } from 'react';
import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import Breadnav from '../../../../../../components/common/navigation/Breadnav';
import { useStaffFormData } from '../../../../../../contex/admin/staff/StaffFormData';

const pages = [
  { name: 'Staff' },
  {
    name: 'Staff Information',
    href: '/admin/dashboard/staff/staff-information/',
  },
  {
    name: 'Add',
  },
];

const Base = () => {
  const { reset } = useStaffFormData();

  useEffect(() => reset(), []);
  return (
    <>
      <Breadnav pages={pages} />
      {/* <Tabs tabs={tabs} /> */}
      <Outlet />
    </>
  );
};

export default Base;
