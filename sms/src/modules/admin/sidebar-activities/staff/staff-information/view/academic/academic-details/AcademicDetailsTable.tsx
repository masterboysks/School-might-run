// import  React, { useEffect, useState } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import staffAPI from "../../../../../../../../api/admin/dashboard/staff/staffAPI";
import Pagination from "../../../../../../../../components/common/navigation/Pagination";
import RenderTable from "./RenderTable";

export default function AcademicTable() {
  const { id } = useParams();
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [pagination, setPagination] = useState({});
  useEffect(() => {
    (async () => {
      try {
        const data = await staffAPI.getAcademic(id, page);
        const datas = data?.data?.data;
        setData(datas?.data);
        setPagination(datas?.pagination);
      } catch (e) {
        console.warn(e);
      }
    })();
  }, [page]);
  return (
    <div className="mt-11">
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <h1 className="text-primary-grey-700 text-xl font-semibold">
            Academic Details
          </h1>
          <p className="mt-2 text-sm text-gray-700">
            A list of all the users in your account including their name, title,
            email and role.
          </p>
        </div>
        <div className="sm:mt-0 sm:ml-16 sm:flex-none mt-4">
          <Link to="add" className="primary_btn">
            Add
          </Link>
        </div>
      </div>
      <div className="my-6">
        <div className=" ring-1 ring-black ring-opacity-5 min-w-full overflow-x-auto rounded-lg shadow">
          <div className="inline-block w-full align-middle">
            <div className=" w-full rounded-lg">
              <table className="min-w-full divide-y divide-gray-300 table-auto">
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-medium text-primary-grey-700    "
                    >
                      Board/University
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-medium text-primary-grey-700   "
                    >
                      Level
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-medium text-primary-grey-700   "
                    >
                      Program
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-medium text-primary-grey-700   "
                    >
                      Passed year
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-medium text-primary-grey-700   "
                    >
                      Division/Grade
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-medium text-primary-grey-700   "
                    >
                      Institution name
                    </th>

                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-medium text-primary-grey-700   "
                    >
                      Institution address line
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
        <Pagination pagination={pagination} setPage={setPage} />
      </div>
    </div>
  );
}
