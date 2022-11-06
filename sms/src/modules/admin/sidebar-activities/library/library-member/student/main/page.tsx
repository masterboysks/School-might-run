import React from 'react';
import Breadnav from '../../../../../../../components/common/navigation/Breadnav';
import Table from './Table';
const pages = [
  { name: 'Library' },
  {
    name: 'Student',
    href: '/admin/dashboard/library/library-member/student',
  },
];
export default function LibraryMemberStudentMain() {
  return (
    <>
      <Breadnav pages={pages} />
      {/* search */}
      <Table />
    </>
  );
}
