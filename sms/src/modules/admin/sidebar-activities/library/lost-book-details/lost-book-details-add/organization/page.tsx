import React from 'react';
import Break from '../../../../../../../components/common/Break';
import Breadnav from '../../../../../../../components/common/navigation/Breadnav';
import Tabs from '../../../../../../../components/common/navigation/Tabs';
import Form from './Form';

const pages = [
  { name: 'Library' },
  {
    name: 'Lost book details',
    href: '/admin/dashboard/library/lost-book-details',
  },
  {
    name: 'Add Lost book details',
  },
];
const tabs = [
  {
    name: 'Lost/damaged by Organization',
    href: '',
    current: true,
  },
  {
    name: 'Lost/damage by member/staff',
    href: `/admin/dashboard/library/lost-book-details/lost-book-member`,
    current: false,
  },
];
export default function LostBookOrganization() {
  return (
    <>
      <Breadnav pages={pages} />
      <Tabs tabs={tabs} />
      <Form />
    </>
  );
}
