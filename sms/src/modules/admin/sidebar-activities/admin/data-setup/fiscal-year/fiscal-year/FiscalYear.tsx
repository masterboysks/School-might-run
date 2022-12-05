import { Link } from 'react-router-dom';
import RenderTable from './RenderTable';
import { useState } from 'react';
import { SearchBar } from '../../../../../../../components/common/fields';
import Breadnav from '../../../../../../../components/common/navigation/Breadnav';
import React from 'react';
import fiscalYearApi from '../../../../../../../api/admin/dashboard/admin/data-setup/fiscalYearApi';
import { useQuery } from '@tanstack/react-query';
import RefreshIcon from '@mui/icons-material/Refresh';
import { useForm } from 'react-hook-form';

const people = [
  {
    fiscalYear: '2072',
    isRunning: false,
  },
  {
    fiscalYear: '2073',
    isRunning: true,
  },
];
const pages = [
  { name: 'Admin' },
  {
    name: 'Date setup',
  },
  {
    name: 'Fiscal year',
    href: '/admin/dashboard/admin/data-setup/fiscal-year',
  },
];
const FiscalYear = () => {
  const { register } = useForm();
  const { data, error, isFetching, refetch } = useQuery({
    queryKey: ['admin/datasetup/fiscalyear'],
    queryFn: () => fiscalYearApi.get(),
    staleTime: 20 * 1000,
  });
  return (
    <>
      <Breadnav pages={pages} />
      <div className="mt-11 lg:w-2/3 w-full">
        <div className="sm:flex sm:items-center justify-between">
          <div className="flex gap-3 items-center">
            <div className="w-72 relative max-w-full">
              <SearchBar register={register} name="search" />
            </div>
            <button
              className=""
              onClick={() => refetch()}
              disabled={isFetching}
            >
              <RefreshIcon />
            </button>
          </div>
          <div className="sm:mt-0 sm:ml-16 sm:flex-none mt-4">
            <Link
              to="/admin/dashboard/admin/data-setup/fiscal-year/add"
              className="primary_btn"
            >
              Add
            </Link>
          </div>
        </div>
        <div className="my-6">
          {isFetching ? (
            'Loading...'
          ) : (
            <div className=" ring-1 ring-black ring-opacity-5 overflow-x-auto rounded-lg shadow">
              <div className="inline-block w-full align-middle">
                <div className=" w-full rounded-lg">
                  <table className="min-w-full divide-y divide-gray-300 table-auto">
                    <thead className="bg-gray-50">
                      <tr>
                        <th
                          scope="col"
                          className="px-3 py-3.5  text-left text-sm font-medium text-primary-grey-700  "
                        >
                          Fiscal Year
                        </th>
                        <th
                          scope="col"
                          className="px-3 py-3.5  text-left text-sm font-medium text-primary-grey-700    "
                        >
                          Is running?
                        </th>

                        <th
                          scope="col"
                          className="px-3 py-3.5 w-10 text-left text-sm font-medium text-primary-grey-700  "
                        >
                          Action
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      <RenderTable
                        currentItems={data?.data.data.data}
                        refetch={refetch}
                      />
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default FiscalYear;
