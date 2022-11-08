import React from 'react';
import profile from '/Profile.webp';
export default function Details() {
  return (
    <div className="">
      <div className="md:flex ring-black ring-opacity-5 ring-1 form-solid p-4 rounded-md shadow my-6 xl:w-3/4">
        <div className="md:relative md:w-60 md:mr-2 h-60  w-full overflow-hidden">
          <img
            src={profile}
            alt="Ranjit sherstha"
            className=" md:h-full mx-auto rounded md:absolute md:object-cover top-0 left-0 aspect-square md:w-full"
          />
        </div>
        <div className="flex-1">
          <div className="lg:grid-cols-2 gap-x-5 gap-y-2 xl:grid-cols-2 grid grid-cols-1">
            <span className="md:text-start col-span-full text-primary-grey-700 text-lg font-medium text-center">
              Ranjit Sherstha
            </span>
            <div className="flex justify-between py-2 border-b-[1px] border-b-primary-grey-300 ">
              <span className="text-primary-grey-600">Student ID:</span>
              <span className="text-primary-grey-700">1234</span>
            </div>

            <div className="flex justify-between py-2 border-b-[1px] border-b-primary-grey-300 ">
              <span className="text-primary-grey-600">Class/semester:</span>
              <span className="text-primary-grey-700">Nursury</span>
            </div>
            <div className="flex justify-between py-2 border-b-[1px] border-b-primary-grey-300 ">
              <span className="text-primary-grey-600">Roll no:</span>
              <span className="text-primary-grey-700">199</span>
            </div>
            <div className="flex justify-between py-2 border-b-[1px] border-b-primary-grey-300 ">
              <span className="text-primary-grey-600">Faculty:</span>
              <span className="text-primary-grey-700"></span>
            </div>
            <div className="flex justify-between py-2 border-b-[1px] border-b-primary-grey-300 ">
              <span className="text-primary-grey-600">Status:</span>
              <span className="text-primary-grey-700">Active</span>
            </div>
            <div className="flex justify-between py-2 border-b-[1px] border-b-primary-grey-300 ">
              <span className="text-primary-grey-600">Section:</span>
              <span className="text-primary-grey-700">B</span>
            </div>
            <div className="flex justify-between py-2 border-b-[1px] border-b-primary-grey-300 ">
              <span className="text-primary-grey-600">Addmission date:</span>
              <span className="text-primary-grey-700">2077/01/1</span>
            </div>
            <div className="flex justify-between py-2 border-b-[1px] border-b-primary-grey-300 ">
              <span className="text-primary-grey-600">Membership ID:</span>
              <span className="text-primary-grey-700">1234556</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
