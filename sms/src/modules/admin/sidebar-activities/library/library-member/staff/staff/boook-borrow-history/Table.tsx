import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import RenderTable from './RenderTable';

export default function Table() {
  // const { register, watch } = useForm();
  const [data, setData] = useState([
    { subfaculty_name: 'hi' },
    { subfaculty_name: 'hlo' },
  ]);
  // const [page, setPage] = useState(1);
  // const [pagination, setPagination] = useState({});
  // useEffect(() => {
  //   (async () => {
  //     try {
  //       const data = await subFacultyApi.get(page);
  //       const datas = data?.data?.data;
  //       setData(datas?.data);
  //       setPagination(datas?.pagination);
  //     } catch (e) {
  //       // console.warn(e);
  //     }
  //   })();
  // }, [page]);
  return (
    <div className="mt-11 w-full">
      {/* <div className="sm:flex sm:items-center justify-between">
        <div className="w-72 relative max-w-full">
          <SearchBar register={register} name="search" />
        </div>
        <div className="sm:mt-0 sm:ml-16 sm:flex-none mt-4">
          <Link
            to="/admin/dashboard/admin/data-setup/sub-faculty/add"
            className="primary_btn"
          >
            Add
          </Link>
        </div>
      </div> */}
      <div className="my-6">
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
                      Call number
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5  text-left text-sm font-medium text-primary-grey-700  "
                    >
                      Book title
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5  text-left text-sm font-medium text-primary-grey-700  "
                    >
                      Auther name
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5  text-left text-sm font-medium text-primary-grey-700  "
                    >
                      Borrowed date
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5  text-left text-sm font-medium text-primary-grey-700  "
                    >
                      Deadline
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5  text-left text-sm font-medium text-primary-grey-700  "
                    >
                      Submitted date
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5  text-left text-sm font-medium text-primary-grey-700  "
                    >
                      Fine ammount
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5  text-left text-sm font-medium text-primary-grey-700  "
                    >
                      Paid ammount
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5  text-left text-sm font-medium text-primary-grey-700    "
                    >
                      Due ammount
                    </th>

                    {/* <th
                      scope="col"
                      className="px-3 py-3.5 w-10 text-left text-sm font-medium text-primary-grey-700  "
                    >
                      Action
                    </th> */}
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  <RenderTable currentItems={data} setData={setData} />
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      {/* <Pagination pagination={pagination} setPage={setPage} /> */}
    </div>
  );
}
