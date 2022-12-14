import React from 'react';
import { Link } from 'react-router-dom';
import RenderTable from './RenderTable';

const people = [
  {
    id: 115,
    name: 'Ranjit',
    department: 'Academic',
    designation: 'Primary teacher',
  },
  {
    id: 116,
    name: 'Ranjit',
    department: 'Academic',
    designation: 'Primary teacher',
  },
  {
    id: 1155,
    name: 'Ranjit',
    department: 'Academic',
    designation: 'Primary teacher',
  },
  {
    id: 11532,
    name: 'Ranjit',
    department: 'Academic',
    designation: 'Primary teacher',
  },
  {
    id: 1152,
    name: 'Ranjit',
    department: 'Academic',
    designation: 'Primary teacher',
  },
];

export default function Table() {
  return (
    <div className="w-full my-6">
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
                      Student ID
                    </th>

                    <th
                      scope="col"
                      className="px-3 py-3.5  text-left text-sm font-medium text-primary-grey-700  "
                    >
                      Student name
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5  text-left text-sm font-medium text-primary-grey-700  "
                    >
                      Roll no.
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5  text-left text-sm font-medium text-primary-grey-700  "
                    >
                      Status
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 w-10 text-left  text-sm font-medium text-primary-grey-700  "
                    >
                      Reason
                    </th>

                    <th
                      scope="col"
                      className="px-3 py-3.5 w-10  text-left text-sm font-medium text-primary-grey-700  "
                    >
                      Application
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {people.map((curr) => {
                    return (
                      <React.Fragment key={curr.id}>
                        <RenderTable curr={curr} />
                      </React.Fragment>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <div className=" w-fit ml-auto">
        <Link to="#" className="secondary_btn">
          Cancel
        </Link>
        <Link to="#" className="primary_btn">
          Save
        </Link>
      </div>
    </div>
  );
}
