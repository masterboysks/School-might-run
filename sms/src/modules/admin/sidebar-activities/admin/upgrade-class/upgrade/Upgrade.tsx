import Table from './Table';
import Breadnav from '../../../../../../components/common/navigation/Breadnav';
import Form from './Form';
import React from 'react';
const pages = [
  { name: 'Admin' },
  {
    name: 'Upgrade Class',
    href: '/admin/dashboard/admin/upgrade/',
  },
];

export default function Upgrade() {
  return (
    <div>
      <Breadnav pages={pages} />
      <Form />
      <Table />
    </div>
  );
}
