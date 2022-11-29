import { PrinterIcon } from '@heroicons/react/20/solid';
import React from 'react';
import Pagination from '../../../../../../components/common/navigation/Pagination';
import RenderTable from './RenderTable';

export default function Table({ data, setPage }) {
  return (
    <>
      <div className="flex items-center justify-between">
        <div className="md:block hidden text-xl">Generate invoice</div>
        <div className=" flex items-center gap-3">
          <div className="text-primary-btn font-semibold">Print</div>
          <div className="icon text-primary-btn w-5">
            <PrinterIcon />
          </div>
        </div>
      </div>

      <div className="my-3">
        <div className=" ring-1 ring-black ring-opacity-5 min-w-full overflow-x-auto rounded-lg shadow">
          <div className="inline-block w-full align-middle">
            <div className=" w-full rounded-lg">
              <table className="min-w-full divide-y divide-gray-300 table-auto">
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className=" py-3.5 px-3 text-left text-sm font-semibold text-primary-grey-700"
                    >
                      Std.ID
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-medium text-primary-grey-700   "
                    >
                      Name
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-medium text-primary-grey-700   "
                    >
                      Invoice no
                    </th>

                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-medium text-primary-grey-700   "
                    >
                      Total
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-medium text-primary-grey-700   "
                    >
                      Print status
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
        <Pagination pagination={data?.pagination} setPage={setPage} />
      </div>
    </>
  );
}
{
  /* <nav
className=" flex items-center justify-between py-3 bg-white border-t border-gray-200"
aria-label="Pagination"
>
<div className="sm:block hidden">
  <p className="text-sm text-gray-700">{message}</p>
</div>
<div className="sm:justify-end flex justify-between flex-1">
  <button
    disabled={indexOfFirstItem === 0}
    onClick={onPreviousPage}
    className="disabled:opacity-80 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md"
  >
    Previous
  </button>
  <button
    disabled={indexOfLastItem >= people.length}
    onClick={onNextPage}
    className="disabled:opacity-80 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 ml-3 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md"
  >
    Next
  </button>
</div>
</nav> */
}
