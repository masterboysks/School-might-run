import React from 'react';
import { Link } from 'react-router-dom';
import Break from '../../../../../../../../components/common/Break';
import {
  Checkbox,
  Input,
} from '../../../../../../../../components/common/fields';
import LocationForm from '../../../../../../../../components/common/LocationForm';
const TemporaryAddressForm = ({ register, watch, errors, handleBack }) => {
  const asAsPermenantAddress = watch('same_as_permanent_address');
  return (
    <>
      <Break title="Temporary address" />
      <div className="my-5">
        <Checkbox
          label="Same as permenant address"
          id="same_as_permanent_address"
          register={register}
          name="same_as_permanent_address"
        />
      </div>
      <div className="form-solid mb-6 rounded-md">
        {asAsPermenantAddress || (
          <div className="sm:grid-cols-2  lg:grid-cols-3 xl:grid-cols-4 grid grid-cols-1 gap-4">
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
                name="temp_ward"
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
        )}
        <div className="w-full my-6">
          <div className=" w-fit ml-auto">
            <button onClick={handleBack} className="secondary_btn">
              Back
            </button>
            <Link
              to={`/admin/dashboard/student/student-information/add-class-details`}
              className="primary_btn"
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
