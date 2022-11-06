import React from 'react';
import { Outlet, useParams } from 'react-router-dom';
import Breadnav from '../../../../../../../components/common/navigation/Breadnav';
import Tabs from '../../Tabs';

const AcademicsView = () => {
  const { id } = useParams();
  const tabs = [
    {
      name: 'General details',
      href: `/admin/dashboard/staff/staff-information/${id}/general`,
      current: false,
    },
    {
      name: 'Academic details',
      href: '',
      current: true,
    },
    {
      name: 'Documents',
      href: `/admin/dashboard/staff/staff-information/${id}/document`,
      current: false,
    },
  ];
  return (
    <>
      {/* <Breadnav pages={pages} /> */}
      <Tabs tabs={tabs} />
      <Outlet></Outlet>
    </>
  );
};
export default AcademicsView;
