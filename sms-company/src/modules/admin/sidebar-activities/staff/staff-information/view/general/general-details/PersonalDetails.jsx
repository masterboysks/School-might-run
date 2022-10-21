import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import StaffGeneralDetailsView from "../../../../../../../../contex/admin/staff/StaffGeneralDetailsView";

export default function PersonalDetails() {
  const generaldetails = useContext(StaffGeneralDetailsView);
  const data = generaldetails?.data?.personal;
  console.log(data);
  return (
    <div className="my-6">
      <div className="sm:flex sm:items-center my-3">
        <div className="sm:flex-auto">
          <h1 className="text-primary-grey-700 text-xl font-semibold">
            Personal details
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
            First name:
          </div>
          <div>{data?.first_name}</div>
        </div>
        <div className="flex flex-wrap justify-between">
          <div className="font-medium text-primary-grey-700  tracking-wide">
            Middle name:
          </div>
          <div>{data?.middle_name}</div>
        </div>
        <div className="flex flex-wrap justify-between">
          <div className="font-medium text-primary-grey-700  tracking-wide">
            Last name:
          </div>
          <div>{data?.last_name}</div>
        </div>
        <div className="flex flex-wrap justify-between">
          <div className="font-medium text-primary-grey-700  tracking-wide">
            Mobile number:
          </div>
          <div>{data?.mobile_number}</div>
        </div>
        <div className="flex flex-wrap justify-between">
          <div className="font-medium text-primary-grey-700  tracking-wide">
            Email:
          </div>
          <div>{data?.email}</div>
        </div>
        <div className="flex flex-wrap justify-between">
          <div className="font-medium text-primary-grey-700  tracking-wide">
            Emergency contact:
          </div>
          <div>{data?.emergency_contact}</div>
        </div>
        <div className="flex flex-wrap justify-between">
          <div className="font-medium text-primary-grey-700  tracking-wide">
            Gender:
          </div>
          <div>{data?.gender}</div>
        </div>
        <div className="flex flex-wrap justify-between">
          <div className="font-medium text-primary-grey-700  tracking-wide">
            Blood group:
          </div>
          <div>{data?.blood_group}</div>
        </div>
        <div className="flex flex-wrap justify-between">
          <div className="font-medium text-primary-grey-700  tracking-wide">
            Date of birth:
          </div>
          <div>{data?.dob}</div>
        </div>
        <div className="flex flex-wrap justify-between">
          <div className="font-medium text-primary-grey-700  tracking-wide">
            Citizenship no:
          </div>
          <div>{data?.citizenship_no}</div>
        </div>
        <div className="flex flex-wrap justify-between">
          <div className="font-medium text-primary-grey-700  tracking-wide">
            PAN number:
          </div>
          <div>{data?.pan_no}</div>
        </div>
        <div className="flex flex-wrap justify-between">
          <div className="font-medium text-primary-grey-700  tracking-wide">
            Martitial status:
          </div>
          <div>{data?.martitial_status}</div>
        </div>
      </div>
    </div>
  );
}
