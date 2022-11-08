import React from 'react';
import { useParams } from 'react-router-dom';
import Tabs from '../../../../../../../../components/common/navigation/Tabs';
import RenderTable from './RenderTable';
import Table from './Table';

export default function LibraryEnrollRenewHistory() {
  const { student } = useParams();
  const tabs = [
    {
      name: 'Enroll/Renew history',
      href: '',
      current: true,
    },
    {
      name: 'Book borrow history',
      href: `/admin/dashboard/library/library-member/student/${student}/book-borrow-history`,
      current: false,
    },
  ];
  return (
    <>
      <Tabs tabs={tabs} />

      <Table />
    </>
  );
}
