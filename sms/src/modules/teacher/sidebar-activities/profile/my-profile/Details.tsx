import React from 'react';
import profile from './profile.png';

export default function Details() {
  return (
    <div className="md:flex ring-black ring-opacity-5 ring-1 form-solid p-4 rounded-md shadow my-6">
      <img
        src={profile}
        alt="Ranjit sherstha"
        className="md:mr-2 h-fit mx-auto rounded"
      />
      <div className="flex-1">
        <div className="md:grid-cols-2 gap-x-5 gap-y-2 xl:grid-cols-3 grid grid-cols-1">
          <span className="md:text-start col-span-full text-primary-grey-700 text-lg font-medium text-center">
            Ranjit Sherstha
          </span>
          <div className="flex justify-between py-2 border-b-[1px] border-b-primary-grey-300 ">
            <span className="text-primary-grey-600">Staff ID:</span>
            <span className="text-primary-grey-700">1234</span>
          </div>
          <div className="flex justify-between py-2 border-b-[1px] border-b-primary-grey-300 ">
            <span className="text-primary-grey-600">Staff type:</span>
            <span className="text-primary-grey-700">2022/02/01</span>
          </div>
          <div className="flex justify-between py-2 border-b-[1px] border-b-primary-grey-300 ">
            <span className="text-primary-grey-600">Address:</span>
            <span className="text-primary-grey-700"></span>
          </div>
          <div className="flex justify-between py-2 border-b-[1px] border-b-primary-grey-300 ">
            <span className="text-primary-grey-600">Joined date:</span>
            <span className="text-primary-grey-700">Nursery</span>
          </div>
          <div className="flex justify-between py-2 border-b-[1px] border-b-primary-grey-300 ">
            <span className="text-primary-grey-600">Citizenship number:</span>
            <span className="text-primary-grey-700">9800223300</span>
          </div>
          <div className="flex justify-between py-2 border-b-[1px] border-b-primary-grey-300 ">
            <span className="text-primary-grey-600">Emergency no:</span>
            <span className="text-primary-grey-700">Active</span>
          </div>
          <div className="flex justify-between py-2 border-b-[1px] border-b-primary-grey-300 ">
            <span className="text-primary-grey-600">Status:</span>
            <span className="text-primary-grey-700">Shyam sherstha</span>
          </div>
          <div className="flex justify-between py-2 border-b-[1px] border-b-primary-grey-300 ">
            <span className="text-primary-grey-600">Pan no.:</span>
            <span className="text-primary-grey-700"></span>
          </div>
          <div className="flex justify-between py-2 border-b-[1px] border-b-primary-grey-300 ">
            <span className="text-primary-grey-600">Blood group:</span>
            <span className="text-primary-grey-700">Brother</span>
          </div>
          <div className="flex justify-between py-2 border-b-[1px] border-b-primary-grey-300 ">
            <span className="text-primary-grey-600">Department:</span>
            <span className="text-primary-grey-700"></span>
          </div>
          <div className="flex justify-between py-2 border-b-[1px] border-b-primary-grey-300 ">
            <span className="text-primary-grey-600">Email:</span>
            <span className="text-primary-grey-700">B</span>
          </div>
          <div className="flex justify-between py-2 border-b-[1px] border-b-primary-grey-300 ">
            <span className="text-primary-grey-600 ">DOB:</span>
            <span className="text-primary-grey-700">abc@hotmail.com</span>
          </div>
          <div className="flex justify-between py-2 border-b-[1px] border-b-primary-grey-300 xl:border-none">
            <span className="text-primary-grey-600">Designation:</span>
            <span className="text-primary-grey-700">9818756958</span>
          </div>
          <div className="flex justify-between py-2 border-b-[1px] border-b-primary-grey-300 xl:border-none">
            <span className="text-primary-grey-600">Mobile no.:</span>
            <span className="text-primary-grey-700">9818756958</span>
          </div>

          <div className=" flex justify-between py-2">
            <span className="text-primary-grey-600">Martial status:</span>
            <span className="text-primary-grey-700">22</span>
          </div>
        </div>
      </div>
    </div>
  );
}
