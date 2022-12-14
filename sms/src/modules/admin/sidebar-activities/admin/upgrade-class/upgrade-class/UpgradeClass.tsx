import { useParams } from 'react-router-dom';
import Form from './Form';
import Filter from './Filter';
import { Tab } from '@headlessui/react';
import Table from './Table';
import Breadnav from '../../../../../../components/common/navigation/Breadnav';
import React from 'react';
export default function UpgradeClass() {
  let { classname } = useParams();
  const pages = [
    { name: 'Admin' },
    {
      name: 'Upgrade Class',
      href: '/admin/dashboard/admin/upgrade/',
    },
    {
      name: classname,
      href: `/admin/upgrade/${classname}`,
    },
  ];
  return (
    <div>
      <Breadnav pages={pages} />
      <Form />
      <Filter />
      <Table />
    </div>
  );
}
