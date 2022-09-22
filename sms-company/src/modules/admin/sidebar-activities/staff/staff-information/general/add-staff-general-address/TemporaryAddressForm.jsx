import React from "react";
import Break from "../../../Break";
import { useRoutes, Link } from "react-router-dom";
import { Checkbox, Input } from "../../../../../../../components/common/fields";
import LocationForm from "../../../../../../../components/common/LocationForm";
const TemporaryAddressForm = ({ register, watch, errors }) => {
  //   const route = useRoutes();
  return (
    <>
      <Break title="Temporary address" />
      <div className="my-5">
        <Checkbox
          label="Same as permenant address"
          id="sameAsPermenantAddress"
          register={register}
          name="sameAsPermenantAddress"
        />
      </div>
      <div className="form-solid mb-6 rounded-md">
        <div className="sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 grid grid-cols-1 gap-4">
          <LocationForm
            register={register}
            errors={errors}
            watch={watch}
            prefix="temp"
          />
          <div className="">
            <Input
              label="Ward*"
              required={true}
              errors={errors}
              register={register}
              name="temp_ward_number"
              placeholder="11"
            />
          </div>
          <div className="">
            <Input
              label="Tole"
              register={register}
              name="temp_tole"
              placeholder="Surya tole"
            />
          </div>
        </div>
        <div className="w-full my-6">
          <div className=" w-fit ml-auto">
            <Link
              to="/admin/dashboard/staff/staff-information/add-staff/general/personal-details"
              className="bg-primary-grey-50 text-primary-grey-700 hover: focus:outline-none focus:ring- focus:ring-offset-2 sm:w-auto inline-flex items-center justify-center px-4 py-3 mr-3 text-sm font-medium border border-transparent rounded-md shadow-sm"
            >
              Back
            </Link>
            <Link
              to={`/admin/dashboard/staff/staff-information/add-staff/general/office-details`}
              className="bg-primary-btn hover: focus:outline-none focus:ring- focus:ring-offset-2 sm:w-auto inline-flex items-center justify-center px-4 py-3 text-sm font-medium text-white border border-transparent rounded-md shadow-sm"
            >
              Next
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default TemporaryAddressForm;
