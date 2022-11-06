import React from 'react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Select } from '../../../../../components/common/fields';
import RenderTable from './RenderTable';
const arrayDays = [
  { name: 'Sun', id: 7 },
  { name: 'Mon', id: 1 },
  { name: 'Tue', id: 2 },
  { name: 'Wed', id: 3 },
  { name: 'Thur', id: 4 },
  { name: 'Fri', id: 5 },
  { name: 'Sat', id: 6 },
];
export default function Table() {
  const [data, setData] = useState([
    {
      class: 'dsjkhjkah',
      level: 'jkhdkhak',
      faculty: 'jkhdkhak',
      section: 'kjjhdsfjkh',
      subject: 'dfkljf',
      time: 'jjshdf',
      id: 'jdshfgjhdg',
    },
    {
      class: 'dsjkhjkah',
      level: 'jkhdkhak',
      faculty: 'jkhdkhak',
      section: 'kjjhdsfjkh',
      subject: 'dfkljf',
      time: 'jjshdf',
      id: 'jdsrtyhfgjhdg',
    },
    {
      class: 'dsjkhjkah',
      level: 'jkhdkhak',
      faculty: 'jkhdkhak',
      section: 'kjjhdsfjkh',
      subject: 'dfkljf',
      time: 'jjshdf',
      id: 'jdsdhfhfgjhdg',
    },
  ]);
  const { register } = useForm();
  return (
    <div className="my-6">
      <div className="sm:grid-cols-2  lg:grid-cols-3 xl:grid-cols-4 grid grid-cols-1 gap-4">
        <div>
          <Select
            register={register}
            label="Day*"
            value={arrayDays}
            name="days"
          />
        </div>
      </div>
      {/*  */}
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
                      Class/Semester
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
                      Faculty
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5  text-left text-sm font-medium text-primary-grey-700  "
                    >
                      Section
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5  text-left text-sm font-medium text-primary-grey-700  "
                    >
                      Subject
                    </th>

                    <th
                      scope="col"
                      className="px-3 py-3.5 w-10  text-left text-sm font-medium text-primary-grey-700  "
                    >
                      Time
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
