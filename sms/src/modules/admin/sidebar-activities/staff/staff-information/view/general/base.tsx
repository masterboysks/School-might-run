import React from 'react';
import { Outlet, useParams } from 'react-router-dom';
import Tabs from '../../../../../../../components/common/navigation/Tabs';
export default function ViewGeneral() {
  const { id } = useParams();
  const tabs = [
    {
      name: 'General details',
      href: '',
      current: true,
    },
    {
      name: 'Academic details',
      href: `/admin/dashboard/staff/staff-information/${id}/academic`,
      current: false,
    },
    {
      name: 'Documents',
      href: `/admin/dashboard/staff/staff-information/${id}/document`,
      current: false,
    },
  ];
  return (
    <>
      <Tabs tabs={tabs} />
      <div className="my-6">
        <Outlet />
      </div>
    </>
  );
}
