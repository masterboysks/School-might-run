import React, { useState } from 'react';
import RefreshIcon from '@mui/icons-material/Refresh';

import { Link } from 'react-router-dom';
import { SearchBar } from '../../../../../../../components/common/oldFields';
import RenderTable from './RenderTable';
import { useQuery } from '@tanstack/react-query';
import ExamNameApi from '../../../../../../../api/admin/dashboard/exam/exam-setup/ExamNameApi';
import Pagination from '../../../../../../../components/common/navigation/Pagination';
const people = [
  {
    level: 'School level',
    examName: ['First term', 'Second term', 'Third term'],
  },
  {
    examName: ['First term', 'Second term', 'Third term'],
    level: 'School level',
  },
];

export default function Table() {
  const [page, setPage] = useState(1);
  const [pagination, setPagination] = useState({});

  const { refetch, data, error, isFetching, isLoading } = useQuery({
    queryFn: () => ExamNameApi.get(page),
    queryKey: ['exam/exam-setup/examname', page],
    staleTime: Infinity,
    onSuccess: (d) => setPagination(d?.pagination),
    select: (d) => d?.data.data,
    keepPreviousData: true,
  });
  const [searchFilter, setSearchFilter] = useState('');
  return (
    <div className="mt-11 lg:w-2/3 w-full">
      <div className="sm:flex sm:items-center justify-between">
        <div className="flex gap-3 items-center">
          <div className="w-72 relative max-w-full">
            <SearchBar value={searchFilter} setValue={setSearchFilter} />
          </div>
          <button className="" onClick={() => refetch()} disabled={isFetching}>
            <RefreshIcon />
          </button>
        </div>
        <div className="sm:mt-0 sm:ml-16 sm:flex-none mt-4">
          <Link
            to="/admin/dashboard/exam/exam-setup/exam-name/edit"
            className="primary_btn"
          >
            Edit
          </Link>
        </div>
      </div>
      <div className="my-6">
        {(isLoading || isFetching) && 'Loading...'}
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
                      Level
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5  text-left text-sm font-medium text-primary-grey-700    "
                    >
                      Exam name
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
                  <RenderTable currentItems={data?.data} />
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
