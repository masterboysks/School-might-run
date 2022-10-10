import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Fragment } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import staffAPI from "../../../../../../api/admin/dashboard/staff/staffAPI";
import Pagination from "../../../../../../components/common/Pagination";
import RenderTable from "./RenderTable";

export default function Table({ data, pagination, setPage }) {
  const {
    register,
    watch,
    reset,
    getValues,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    console.log(data);

    const res = await staffAPI.attendance(data);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-full my-6">
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
                      Staff Id
                    </th>

                    <th
                      scope="col"
                      className="px-3 py-3.5  text-left text-sm font-medium text-primary-grey-700  "
                    >
                      Staff name
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5  text-left text-sm font-medium text-primary-grey-700  "
                    >
                      Department
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5  text-left text-sm font-medium text-primary-grey-700  "
                    >
                      Designation
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 w-10 text-left  text-sm font-medium text-primary-grey-700  "
                    >
                      Present
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 w-10 text-left  text-sm font-medium text-primary-grey-700  "
                    >
                      Absent
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 w-10 text-left  text-sm font-medium text-primary-grey-700  "
                    >
                      Half leave
                    </th>

                    <th
                      scope="col"
                      className="px-3 py-3.5 w-10  text-left text-sm font-medium text-primary-grey-700  "
                    >
                      Reason
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {data?.map((curr) => {
                    return (
                      <Fragment key={curr.staff_id}>
                        <RenderTable
                          curr={curr}
                          register={register}
                          errors={errors}
                          watch={watch}
                        />
                      </Fragment>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      {/* <Pagination setPage={setPage} pagination={pagination} /> */}
      <div className=" w-fit ml-auto">
        <Link
          to="#"
          className="bg-primary-grey-50 text-primary-grey-700 hover: focus:outline-none focus:ring- focus:ring-offset-2 sm:w-auto inline-flex items-center justify-center px-4 py-3 mr-3 text-sm font-medium border border-transparent rounded-md shadow-sm"
        >
          Cancel
        </Link>
        <button
          type="submit"
          className="bg-primary-btn hover: focus:outline-none focus:ring- focus:ring-offset-2 sm:w-auto inline-flex items-center justify-center px-4 py-3 text-sm font-medium text-white border border-transparent rounded-md shadow-sm"
        >
          Save
        </button>
      </div>
    </form>
  );
}
