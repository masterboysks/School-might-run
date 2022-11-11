import React, { useEffect, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { Link } from 'react-router-dom';
import RenderTable from './RenderTable';
import feeTypeApi from '../../../../../../api/admin/dashboard/fee/feeTypeApi';
import Pagination from '../../../../../../components/common/navigation/Pagination';

const people = [
  {
    level: 'NEB',
    paymentMethod: 'jhdgsgasfd',
    feeName: 'no',
  },
  {
    level: 'TU',
    paymentMethod: 'gfstrft',
    feeName: 'no',
  },
];

export default function Table() {
  const [page, setPage] = useState(1);
  const [pagination, setPagination] = useState({});
  const { data, isFetching, isLoading } = useQuery({
    queryKey: ['fee/fee-type', page],
    queryFn: () => feeTypeApi.get(page),
    staleTime: Infinity,
    select: (d) => d?.data.data,
  });
  useEffect(() => {
    setPagination(data?.pagination);
  }, [data]);

  return (
    <div className="mt-11 w-full">
      <div className="sm:flex sm:items-center justify-between">
        <div className="w-72 relative max-w-full">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg
              aria-hidden="true"
              className="text-primary-grey-600 w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <input
            type="text"
            id="simple-search"
            className="bg-gray-50 border border-primary-grey-400 text-primary-grey-600 text-sm rounded-lg focus:ring-primary-btn block w-full pl-10 p-2.5 "
            placeholder="Search"
            required
          />
        </div>
        <div className="sm:mt-0 sm:ml-16 sm:flex-none mt-4">
          <Link to="/admin/dashboard/fee/fee-type/add" className="primary_btn">
            Add
          </Link>
        </div>
      </div>
      <div className="my-6">
        {isFetching || isLoading ? 'isLoading' : null}
        <div className=" ring-1 ring-black ring-opacity-5 overflow-x-auto rounded-lg shadow">
          <div className="inline-block w-full align-middle">
            <div className=" w-full rounded-lg">
              <table className="min-w-full divide-y divide-gray-300 table-auto">
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className="px-3 py-3.5  text-left text-sm font-medium text-primary-grey-700    "
                    >
                      Fee name
                    </th>

                    <th
                      scope="col"
                      className="px-3 py-3.5  text-left text-sm font-medium text-primary-grey-700  "
                    >
                      Level
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5  text-left text-sm font-medium text-primary-grey-700  "
                    >
                      Payement method
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
                  <RenderTable currentItems={data?.data} page={page} />
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <Pagination pagination={pagination} setPage={setPage} />
      </div>
    </div>
  );
}
