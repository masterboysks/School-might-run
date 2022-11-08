import React from 'react';
import RenderTable from './RenderTable';

const people = [
  {
    level: 'NEB',
    class: '12',
    section: 'A',
    subFaculty: 'Bio',
    faculty: 'Science',
    elective: ['Opt Math', 'Computer'],
    compulsary: ['Math', 'Nepali'],
  },
];
export default function Table() {
  return (
    <>
      <div className="mt-11 w-full lg:w-2/3">
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
                      Description
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5  text-left text-sm font-medium text-primary-grey-700  "
                    >
                      Enrolled date
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-medium text-primary-grey-700  "
                    >
                      Expire date
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
    </>
  );
}
