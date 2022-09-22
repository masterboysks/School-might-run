import React from "react";
import { useForm } from "react-hook-form";
import { Select } from "../../../../../../components/common/fields";

import { PrinterIcon } from "@heroicons/react/20/solid";
import RenderTable from "../class-routine/RenderTable";
import { useState } from "react";
const arrayDays = [
  { name: "Sun", id: 7 },
  { name: "Mon", id: 1 },
  { name: "Tue", id: 2 },
  { name: "Wed", id: 3 },
  { name: "Thur", id: 4 },
  { name: "Fri", id: 5 },
  { name: "Sat", id: 6 },
];
export default function Table() {
  const { register, handleSubmit } = useForm();
  const [data, setData] = useState([
    {
      class: "dsjkhjkah",
      level: "jkhdkhak",
      faculty: "jkhdkhak",
      section: "kjjhdsfjkh",
      subject: "dfkljf",
      time: "jjshdf",
      id: "jdshfgjhdg",
    },
    {
      class: "dsjkhjkah",
      level: "jkhdkhak",
      faculty: "jkhdkhak",
      section: "kjjhdsfjkh",
      subject: "dfkljf",
      time: "jjshdf",
      id: "jdsrtyhfgjhdg",
    },
    {
      class: "dsjkhjkah",
      level: "jkhdkhak",
      faculty: "jkhdkhak",
      section: "kjjhdsfjkh",
      subject: "dfkljf",
      time: "jjshdf",
      id: "jdsdhfhfgjhdg",
    },
  ]);
  return (
    <>
      <div className="md:flex-row flex flex-col justify-between my-6">
        <div className=" md:w-64 w-full">
          <div>
            <Select
              label="From date(month)"
              value={arrayDays}
              register={register}
              name="days"
            />
          </div>
        </div>
        <div className="h-fit md:mt-auto md:my-0 text-primary-btn flex items-center my-6">
          <div className="">Print</div>
          <div className=" text-primary-btn w-6 ml-1">
            <PrinterIcon fontSize="mediun" />
          </div>
        </div>
      </div>
      {/*  */}
      <div className="w-full text-center text-lg font-medium text-primary-grey-600">
        Class 12 - B routine
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
                      Subject
                    </th>

                    <th
                      scope="col"
                      className="px-3 py-3.5  text-left text-sm font-medium text-primary-grey-700  "
                    >
                      Start time
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5  text-left text-sm font-medium text-primary-grey-700  "
                    >
                      End time
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5  text-left text-sm font-medium text-primary-grey-700  "
                    >
                      Subject teacher
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
