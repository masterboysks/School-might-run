import React from "react";
import { useState } from "react";
import RenderTable from "./RenderTable";

export default function Table() {
  const [data, setData] = useState([
    {
      name: "SLC marksheet",
    },
    {
      name: "+2 Marksheeet",
    },
    {
      name: "CV",
    },
  ]);
  return (
    <div className="my-6 lg:w-2/3 w-full">
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
                    University/Board
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
                <RenderTable currentItems={data} />
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
