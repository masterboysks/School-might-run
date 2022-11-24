import { useState } from 'react';
import React from 'react';
import Table from './Table';
import { useQuery } from '@tanstack/react-query';
import generateInvoiceApi from '../../../../../../api/admin/dashboard/fee/generateInvoiceApi';
import Form from './Form';
export default function TableWrapper() {
  const [search, setSearch] = useState();
  const [error, setError] = useState('');
  const { data } = useQuery({
    queryFn: () => generateInvoiceApi.getClasses(search),
    queryKey: ['generateinvoiceapigetclasses', search],
    enabled: !!search,
    select: (d) => d.data.data, //@ts-ignore
    onError: (e) => setError(e?.response?.data.message),
    retry: 0,
  });
  return (
    <>
      {error && (
        <>
          <div className="text-red-600 font-medium text-lg my-3">{error}</div>
        </>
      )}
      <Form setSearch={setSearch} />
      <Table data={data} />
    </>
  );
}
