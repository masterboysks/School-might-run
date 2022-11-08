import React from 'react';
import { useParams } from 'react-router-dom';
import Tabs from '../../../../../../../../components/common/navigation/Tabs';
import Table from './Table';

export default function BookBorrowHistory() {
  const { student } = useParams();
  const tabs = [
    {
      name: 'Enroll/Renew history',
      href: `/admin/dashboard/library/library-member/student/${student}/enroll-renew`,
      current: false,
    },
    {
      name: 'Book borrow history',
      href: '',
      current: true,
    },
  ];
  return (
    <>
      <Tabs tabs={tabs}></Tabs>
      <Table />
    </>
  );
}
