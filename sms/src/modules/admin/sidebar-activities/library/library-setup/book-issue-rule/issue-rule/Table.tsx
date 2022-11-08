import React, { useState } from 'react';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
// import noticeApi from '../../../../../../api/admin/dashboard/admin/noticeApi';
// import { SearchBar } from '../../../../../../components/common/fields';
import RenderTable from './RenderTable';

export default function Table() {
  const { register, handleSubmit, watch } = useForm();

  const [data, setData] = useState([
    {
      name: 'Student',
    },
    {
      name: 'Staff',
    },
  ]);
  //   useEffect(() => {
  //     (async () => {
  //       try {
  //         const data = await noticeApi.get();
  //         const datas = data?.data?.data;
  //         setData(datas?.data);
  //       } catch (e) {
  //         console.warn(e);
  //       }
  //     })();
  //   }, []);
  return (
    <div className=" w-full my-6">
      <div className="my-3">
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
                      Member type
                    </th>

                    <th
                      scope="col"
                      className="px-3 py-3.5  text-left text-sm font-medium text-primary-grey-700  "
                    >
                      Subsmission time ( in days)
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5  text-left text-sm font-medium text-primary-grey-700  "
                    >
                      Book lend at a time (units)
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5  text-left text-sm font-medium text-primary-grey-700  "
                    >
                      Renew times (max)
                    </th>

                    <th
                      scope="col"
                      className="px-3 py-3.5 w-10  text-left text-sm font-medium text-primary-grey-700  "
                    >
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  <RenderTable currentItems={data} />
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
