import React from 'react';
import { useState } from 'react';
import RenderTable from './RenderTable';

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
  return (
    <>
      <div className="w-full text-center text-lg font-medium text-primary-grey-600">
        First term examination
      </div>
      <div className="my-6">
        {/*  */}

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
                      CLass/semester
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
                      Subjcet
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5  text-left text-sm font-medium text-primary-grey-700  "
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
    </>
  );
}
