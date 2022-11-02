import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import staffAPI from "../../../../../../api/admin/dashboard/staff/staffAPI";
import Pagination from "../../../../../../components/common/Pagination";
import RenderTable from "./RenderTable";

export default function Table({ setPage, data, pagination }) {
  //

  return (
    <div className="mt-11 mb-6">
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <h1 className="text-primary-grey-700 text-xl font-semibold">
            Staff Details
          </h1>
          <p className="mt-2 text-sm text-gray-700">
            A list of all the users in your account including their name, title,
            email and role.
          </p>
        </div>
        <div className="sm:mt-0 sm:ml-16 sm:flex-none mt-4">
          <Link
            to="/admin/dashboard/staff/staff-information/add-staff/general/personal-details"
            className="primary_btn"
          >
            Add Staff
          </Link>
        </div>
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
                          Staff ID
                        </th>
                        <th
                          scope="col"
                          className="px-3 py-3.5 text-left text-sm font-medium text-primary-grey-700   "
                        >
                          Staff Name
                        </th>
                        <th
                          scope="col"
                          className="px-3 py-3.5 text-left text-sm font-medium text-primary-grey-700   "
                        >
                          Department
                        </th>
                        <th
                          scope="col"
                          className="px-3 py-3.5 text-left text-sm font-medium text-primary-grey-700   "
                        >
                          Designation
                        </th>
                        <th
                          scope="col"
                          className="px-3 py-3.5 text-left text-sm font-medium text-primary-grey-700   "
                        >
                          Type
                        </th>
                        <th
                          scope="col"
                          className="px-3 py-3.5 text-left text-sm font-medium text-primary-grey-700   "
                        >
                          Gender
                        </th>

                        <th
                          scope="col"
                          className="px-3 py-3.5 text-left text-sm font-medium text-primary-grey-700   "
                        >
                          Mobile Number
                        </th>
                        <th
                          scope="col"
                          className="px-3 py-3.5 text-left text-sm font-medium text-primary-grey-700   "
                        >
                          Status
                        </th>
                        <th
                          scope="col"
                          className="px-3 py-3.5 text-left text-sm font-medium text-primary-grey-700  "
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
          <Pagination setPage={setPage} pagination={pagination} />
        </>
      )}
      {/* <nav
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
      </nav> */}
    </div>
  );
}
