import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import RenderTable from './RenderTable';
const data = [
  {
    id: '45sad5',
    name: '445',
    route_name: 'ndnbjk',
    station: 'jhdfsjgdfs',
    trip_type: 'jkdhfjhksf',
    fee: 'jkfhjkh',
    status: 0,
  },
  {
    id: '4sa55',
    name: '445',
    route_name: 'ndnbjk',
    station: 'jhdfsjgdfs',
    trip_type: 'jkdhfjhksf',
    fee: 'jkfhjkh',
    status: 0,
  },
  {
    id: '453asfa25',
    name: '445',
    route_name: 'ndnbjk',
    station: 'jhdfsjgdfs',
    trip_type: 'jkdhfjhksf',
    fee: 'jkfhjkh',
    status: 1,
  },
  {
    id: '4fa3w55',
    name: '445',
    route_name: 'ndnbjk',
    station: 'jhdfsjgdfs',
    trip_type: 'jkdhfjhksf',
    fee: 'jkfhjkh',
    status: 0,
  },
  {
    id: '45fas5',
    name: '445',
    route_name: 'ndnbjk',
    station: 'jhdfsjgdfs',
    trip_type: 'jkdhfjhksf',
    fee: 'jkfhjkh',
    status: 1,
  },
];
export default function Table() {
  return (
    <div className="mt-11 mb-6">
      <div className="ml-auto w-fit mt-4">
        <Link to="add" className="primary_btn">
          Add
        </Link>
      </div>
      {data.length === 0 ? (
        <div className="flex justify-center text-2xl my-9">
          Please search to view Table
        </div>
      ) : (
        <>
          <div className="my-6">
            <div className=" ring-1 overflow-x-auto overflow-y-auto ring-black ring-opacity-5 min-w-full rounded-lg shadow">
              <div className="inline-block w-full align-middle">
                <div className=" w-full rounded-lg">
                  <table className="min-w-full divide-y divide-gray-300 table-auto">
                    <thead className="bg-gray-50">
                      <tr>
                        <th
                          scope="col"
                          className="px-3 py-3.5 text-left text-sm font-medium text-primary-grey-700    "
                        >
                          Route name
                        </th>
                        <th
                          scope="col"
                          className="px-3 py-3.5 text-left text-sm font-medium text-primary-grey-700   "
                        >
                          Vehicle name
                        </th>
                        <th
                          scope="col"
                          className="px-3 py-3.5 text-left text-sm font-medium text-primary-grey-700   "
                        >
                          Vehicle no
                        </th>
                        <th
                          scope="col"
                          className="px-3 py-3.5 text-left text-sm font-medium text-primary-grey-700   "
                        >
                          Driver name
                        </th>

                        <th
                          scope="col"
                          className="px-3 py-3.5 w-10 text-left text-sm font-medium text-primary-grey-700   "
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
          {/* <Pagination setPage={setPage} pagination={pagination} /> */}
        </>
      )}
    </div>
  );
}
