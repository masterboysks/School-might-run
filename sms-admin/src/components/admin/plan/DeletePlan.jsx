import React from "react";

export default function DeletePlan({ del, id }) {
  return (
    <div className="text-primary-grey">
      <div className="grid  gap-5 bg-white rounded-md px-9 pb-6 pt-3 max-w-2xl  mx-auto mt-4">
        <h1 className="text-lg  mt-5 "> Confirm delete plan</h1>
        <div className="border-b "></div>

        <div className="flex w-full space-x-3 items-end">
          <button className="col-span-full  secondary-btn rounded">
            Cancel
          </button>
          <button
            className="col-span-full primary-btn rounded"
            onClick={(e) => {
              e.preventDefault();
              del(id);
            }}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
