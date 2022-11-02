import React from "react";

export default function Details({ data }) {
  return (
    <div className=" my-12">
      <div className="ring-black ring-opacity-5 ring-1 form-solid lg:w-4/6 p-4 rounded-md shadow">
        <div className="md:grid-cols-2 gap-x-5 gap-y-2 grid grid-cols-1">
          <div className="flex justify-between py-2 border-b-[1px] border-b-primary-grey-300 ">
            <span className="text-primary-grey-600">Assigned data:</span>
            <span className="text-primary-grey-700">{data.assigned_date}</span>
          </div>
          <div className="flex justify-between py-2 border-b-[1px] border-b-primary-grey-300 ">
            <span className="text-primary-grey-600">Total points:</span>
            <span className="text-primary-grey-700">{data.total_points}</span>
          </div>
          <div className="flex justify-between py-2 border-b-[1px] border-b-primary-grey-300 ">
            <span className="text-primary-grey-600">Deadline:</span>
            <span className="text-primary-grey-700">{data.deadline}</span>
          </div>
          <div className="flex justify-between py-2 border-b-[1px] border-b-primary-grey-300 ">
            <span className="text-primary-grey-600">No of checked:</span>
            <span className="text-primary-grey-700">{data.checked_no}</span>
          </div>
          <div className="flex justify-between py-2 border-b-[1px] border-b-primary-grey-300 ">
            <span className="text-primary-grey-600">
              No Reference material:
            </span>
            <span className="text-primary-grey-700 underline">
              <a href={data.reference}>View</a>
            </span>
          </div>
          <div className="flex justify-between py-2 border-b-[1px] border-b-primary-grey-300 ">
            <span className="text-primary-grey-600">No of Submission:</span>
            <span className="text-primary-grey-700">{data.submitted}</span>
          </div>
          <div className="flex justify-between py-2 border-b-[1px] md:border-b-0 border-b-primary-grey-300 ">
            <span className="text-primary-grey-600">Question:</span>
            <span className="text-primary-grey-700 underline">
              <a href={data.assignment}>View</a>
            </span>
          </div>
          <div className=" flex justify-between py-2">
            <span className="text-primary-grey-600">No of not submitted:</span>
            <span className="text-primary-grey-700">{data.not_submitted}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
// type prop = {
//   data: {
//     title: string,
//     description: string,
//     assigned_date: string,
//     total_points: number,
//     deadline: string,
//     checked_no: string,
//     submitted: string,
//     not_submitted: string,
//     assignment: string,
//     reference: string,
//   },
// };
