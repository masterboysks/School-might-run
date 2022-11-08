import React from 'react';
import Breadnav from '../../../../../../../components/common/navigation/Breadnav';
import Table from './Table';
const pages = [
  { name: 'Library' },
  {
    name: 'Staff',
    href: '/admin/dashboard/library/library-member/staff',
  },
];
export default function LibraryMemberStaffMain() {
  return (
    <>
      <Breadnav pages={pages} />
      {/* search */}
      <Table />
    </>
  );
}
