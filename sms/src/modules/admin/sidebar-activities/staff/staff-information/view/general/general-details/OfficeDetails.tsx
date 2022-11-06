import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import StaffGeneralDetailsView from '../../../../../../../../contex/admin/staff/StaffGeneralDetailsView';

export default function OfficeDetails() {
  const generaldetails = useContext(StaffGeneralDetailsView);
  const data = generaldetails?.data?.office;
  console.log(data);
  return (
    <div className="my-6">
      <div className="sm:flex sm:items-center my-3">
        <div className="sm:flex-auto">
          <h1 className="text-primary-grey-700 text-xl font-semibold">
            Office details
          </h1>
        </div>
        <div className="sm:mt-0 sm:ml-16 sm:flex-none mt-4">
          <Link to="add" className="primary_btn">
            Edit
          </Link>
        </div>
      </div>
      <div className="">
        <div className="flex flex-wrap justify-between">
          <div className="font-medium text-primary-grey-700  tracking-wide">
            Staff type:
          </div>
          <div className="capitalize">{data?.type}</div>
        </div>
        <div className="flex flex-wrap justify-between">
          <div className="font-medium text-primary-grey-700  tracking-wide">
            Username:
          </div>
          <div>{data?.username}</div>
        </div>
        <div className="flex flex-wrap justify-between">
          <div className="font-medium text-primary-grey-700  tracking-wide">
            Department:
          </div>
          <div>{data?.department_name}</div>
        </div>
        <div className="flex flex-wrap justify-between">
          <div className="font-medium text-primary-grey-700  tracking-wide">
            Designation:
          </div>
          <div>{data?.designation_name}</div>
        </div>
      </div>
    </div>
  );
}
