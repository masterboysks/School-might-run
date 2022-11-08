import React from 'react';

export default function Details() {
  return (
    <div className=" my-12">
      <div className="ring-black ring-opacity-5 ring-1 form-solid lg:w-4/6 p-4 rounded-md shadow">
        <div className="md:grid-cols-2 gap-x-5 gap-y-2 grid grid-cols-1">
          <div className="flex justify-between py-2 border-b-[1px] border-b-primary-grey-300 ">
            <span className="text-primary-grey-600">Book title:</span>
            <span className="text-primary-grey-700">1</span>
          </div>
          <div className="flex justify-between py-2 border-b-[1px] border-b-primary-grey-300 ">
            <span className="text-primary-grey-600">Sub Category:</span>
            <span className="text-primary-grey-700">B</span>
          </div>
          <div className="flex justify-between py-2 border-b-[1px] border-b-primary-grey-300 ">
            <span className="text-primary-grey-600">Author name:</span>
            <span className="text-primary-grey-700">School khsf</span>
          </div>
          <div className="flex justify-between py-2 border-b-[1px] border-b-primary-grey-300 ">
            <span className="text-primary-grey-600">Status:</span>
            <span className="text-primary-grey-700">1</span>
          </div>
          <div className=" flex justify-between py-2 md:border-none border-b-[1px] border-b-primary-grey-300">
            <span className="text-primary-grey-600">Category:</span>
            <span className="text-primary-grey-700"></span>
          </div>
          <div className=" flex justify-between py-2">
            <span className="text-primary-grey-600">Total book units:</span>
            <span className="text-primary-grey-700">5 Views</span>
          </div>
        </div>
      </div>
    </div>
  );
}
