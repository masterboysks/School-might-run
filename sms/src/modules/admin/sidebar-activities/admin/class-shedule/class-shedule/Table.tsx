import React from 'react';
import { useForm } from 'react-hook-form';
import { Select } from '../../../../../../components/common/fields';

import { Link } from 'react-router-dom';
import RenderTable from './RenderTable';
import { PrinterIcon } from '@heroicons/react/20/solid';
import Pagination from '../../../../../../components/common/navigation/Pagination';
import { useEffect } from 'react';
import { useState } from 'react';
import classSheduleApi from '../../../../../../api/admin/dashboard/admin/classSheduleApi';
const arrayDays = [
  { name: 'Sun', id: 7 },
  { name: 'Mon', id: 1 },
  { name: 'Tue', id: 2 },
  { name: 'Wed', id: 3 },
  { name: 'Thur', id: 4 },
  { id: 5, name: 'Fri' },
  { name: 'Sat', id: 6 },
];
export default function Table({ data, setPage, query }) {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isValid },
  } = useForm();

  // const [data, setData] = useState([]);
  // useEffect(() => {
  //   (async () => {
  //     try {
  //       const data = await classSheduleApi.get();
  //       const datas = data?.data?.data;
  //       setData(datas?.data);
  //     } catch (e) {
  //       // console.warn(e);
  //     }
  //   })();
  // }, []);
  if (!data) return '';
  return (
    <div className="mt-11 w-full">
      <div className=" flex col-span-2 mt-3 lg:mt-auto ml-auto justify-end">
        <div className="text-primary-btn print flex items-center p-2 mx-1 mt-auto font-medium">
          <span className="mx-1">Print</span>
          <div className="w-7">
            <PrinterIcon fontSize="medium" />
          </div>
        </div>

        <Link
          to={`add/${query.class_id}/${query.section_id}/${query.level_id}`}
          className="primary_btn"
        >
          Add
        </Link>
      </div>
      <div className="my-6">
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
                      Subject
                    </th>

                    <th
                      scope="col"
                      className="px-3 py-3.5  text-left text-sm font-medium text-primary-grey-700  "
                    >
                      Start time
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5  text-left text-sm font-medium text-primary-grey-700  "
                    >
                      End time
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5  text-left text-sm font-medium text-primary-grey-700  "
                    >
                      Subject teacher
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
      </div>
      <Pagination pagination={data?.pagination} setPage={setPage} />
    </div>
  );
}
