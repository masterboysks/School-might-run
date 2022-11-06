import React from 'react';
import { Input } from '../../../../../../../../components/common/fields';
import LocationForm from '../../../../../../../../components/common/LocationForm';

const PermanentAddressForm = ({ register, errors, watch }) => {
  return (
    <div className="form-solid my-6 rounded-md">
      <div className="sm:grid-cols-2  lg:grid-cols-3 xl:grid-cols-4 grid grid-cols-1 gap-4">
        <LocationForm register={register} errors={errors} watch={watch} />

        <div className="">
          <Input
            label="Ward*"
            required={true}
            errors={errors}
            register={register}
            name="ward"
            placeholder="11"
          />
        </div>
        <div className="">
          <Input
            label="Tole*"
            register={register}
            name="tole"
            required={true}
            errors={errors}
            placeholder="Surya tole"
          />
        </div>
      </div>
    </div>
  );
};

export default PermanentAddressForm;
