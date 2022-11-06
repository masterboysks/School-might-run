import React from 'react';
import Breadnav from '../../../../../../components/common/navigation/Breadnav';
import Table from './Table';

const pages = [
  { name: 'Transportation' },
  {
    name: 'Vehicle setup',
    href: '/admin/dashboard/transport/vehicle-setup/',
  },
];
export default function VehicleSetup() {
  return (
    <>
      <Breadnav pages={pages} />
      Search left its custonnm
      <Table />
    </>
  );
}
