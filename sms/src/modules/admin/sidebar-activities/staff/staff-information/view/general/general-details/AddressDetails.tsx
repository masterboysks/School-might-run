import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import StaffGeneralDetailsView from '../../../../../../../../contex/admin/staff/StaffGeneralDetailsView';

export default function AddressDetails() {
  const generaldetails = useContext(StaffGeneralDetailsView);
  const data = generaldetails?.data?.address;
  console.log(data, 'address');
  return (
    <div className="my-6">
      <div className="sm:flex sm:items-center my-3">
        <div className="sm:flex-auto">
          <h1 className="text-primary-grey-700 text-xl font-semibold">
            Address details
          </h1>
        </div>
        <div className="sm:mt-0 sm:ml-16 sm:flex-none mt-4">
          <Link to="add" className="primary_btn">
            Edit
          </Link>
        </div>
      </div>
      {data?.same_as_permanent_address === undefined ||
        data?.same_as_permanent_address || (
          <div className="relative">
            <div
              className="absolute inset-0 flex items-center"
              aria-hidden="true"
            >
              <div className="w-full border-t border-gray-300" />
            </div>
            <div className="relative flex justify-center">
              <span className="bg-white px-3 text-lg font-medium text-gray-900">
                Permenant address
              </span>
            </div>
          </div>
        )}

      <div className="">
        <div className="flex flex-wrap justify-between">
          <div className="font-medium text-primary-grey-700  tracking-wide">
            Country:
          </div>
          <div>{data?.country_name}</div>
        </div>
        <div className="flex flex-wrap justify-between">
          <div className="font-medium text-primary-grey-700  tracking-wide">
            Province:
          </div>
          <div>{data?.province_name}</div>
        </div>
        <div className="flex flex-wrap justify-between">
          <div className="font-medium text-primary-grey-700  tracking-wide">
            District:
          </div>
          <div>{data?.district_name}</div>
        </div>
        <div className="flex flex-wrap justify-between">
          <div className="font-medium text-primary-grey-700  tracking-wide">
            VDC municipality:
          </div>
          <div>{data?.vdc_municipality_name}</div>
        </div>
        <div className="flex flex-wrap justify-between">
          <div className="font-medium text-primary-grey-700  tracking-wide">
            Ward:
          </div>
          <div>{data?.ward_no}</div>
        </div>
        <div className="flex flex-wrap justify-between">
          <div className="font-medium text-primary-grey-700  tracking-wide">
            Tole:
          </div>
          <div>{data?.tole}</div>
        </div>

        {data?.same_as_permanent_address === undefined ||
          data?.same_as_permanent_address || (
            <div className="relative">
              <div
                className="absolute inset-0 flex items-center"
                aria-hidden="true"
              >
                <div className="w-full border-t border-gray-300" />
              </div>
              <div className="relative flex justify-center">
                <span className="bg-white px-3 text-lg font-medium text-gray-900">
                  Temporary address
                </span>
              </div>
            </div>
          )}
        {data?.same_as_permanent_address === undefined ||
          data?.same_as_permanent_address || (
            <div className="">
              <div className="flex flex-wrap justify-between">
                <div className="font-medium text-primary-grey-700  tracking-wide">
                  Country:
                </div>
                <div>{data?.temp_country_name}</div>
              </div>
              <div className="flex flex-wrap justify-between">
                <div className="font-medium text-primary-grey-700  tracking-wide">
                  Province:
                </div>
                <div>{data?.temp_province_name}</div>
              </div>
              <div className="flex flex-wrap justify-between">
                <div className="font-medium text-primary-grey-700  tracking-wide">
                  District:
                </div>
                <div>{data?.temp_district_name}</div>
              </div>
              <div className="flex flex-wrap justify-between">
                <div className="font-medium text-primary-grey-700  tracking-wide">
                  VDC municipality:
                </div>
                <div>{data?.temp_vdc_municipality_name}</div>
              </div>
              <div className="flex flex-wrap justify-between">
                <div className="font-medium text-primary-grey-700  tracking-wide">
                  Ward:
                </div>
                <div>{data?.temp_ward_no}</div>
              </div>
              <div className="flex flex-wrap justify-between">
                <div className="font-medium text-primary-grey-700  tracking-wide">
                  Tole:
                </div>
                <div>{data?.temp_tole}</div>
              </div>
            </div>
          )}
      </div>
    </div>
  );
}
