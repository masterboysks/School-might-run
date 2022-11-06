import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { SearchBar } from '../../../../../components/common/oldFields';
import RenderTable from './RenderTable';

const people = [
  {
    department: 'Non-Academic',
  },
  {
    department: 'Academic',
  },
];
export default function Table() {
  const [search, setSearch] = useState('');
  return (
    <>
      <div className="mt-11 lg:w-2/3 w-full">
        <div className="sm:flex sm:items-center justify-between">
          <div className="w-72 relative max-w-full">
            <SearchBar value={search} setValue={setSearch} />
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
                    <RenderTable currentItems={people} />
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
