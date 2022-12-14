import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import batchApi from '../../../../../../../api/admin/dashboard/admin/data-setup/batchApi';
import { SearchBar } from '../../../../../../../components/common/fields';
import Pagination from '../../../../../../../components/common/navigation/Pagination';
import RenderTable from './RenderTable';

export default function Table() {
  const { register, watch } = useForm();
  const [page, setPage] = useState(1);
  const [pagination, setPagination] = useState({});
  // const [data, setData] = useState([]);
  const { data, refetch } = useQuery({
    queryFn: () => batchApi.get(page),
    queryKey: ['admin/datasetup/batch', page],
    select: (d) => d.data.data,
    onSuccess: (d) => setPagination(d.pagination),
  });
  // useEffect(() => {
  //   (async () => {
  //     try {
  //       const data = await universityBoardApi.get();
  //       const datas = data?.data?.data;
  //       setData(datas?.data);
  //       // setData();
  //     } catch (e) {
  //       // console.warn(e);
  //     }
  //   })();
  // }, []);

  return (
    <div className="mt-11 lg:w-2/3 w-full">
      <div className="sm:flex sm:items-center justify-between">
        <div className="w-72 relative max-w-full">
          <SearchBar register={register} name="search" />
        </div>
        <div className="sm:mt-0 sm:ml-16 sm:flex-none mt-4">
          <Link to="add" className="primary_btn">
            Add
          </Link>
        </div>
      </div>
      <div className="my-6">
        <div className=" ring-1 ring-black ring-opacity-5 overflow-x-auto rounded-lg shadow">
          <div className="inline-block w-full align-middle">
            <div className=" w-full rounded-lg">
              <table className="min-w-full divide-y divide-gray-300 table-fixed">
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-medium text-primary-grey-700    "
                    >
                      Batch
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
                  <RenderTable refetch={refetch} currentItems={data?.data} />
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
