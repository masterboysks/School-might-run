import React from "react";
import { useForm } from "react-hook-form";
import Break from "../../../../../../components/common/Break";
import {
  Input,
  Upload,
  UploadPhoto,
} from "../../../../../../components/common/fields";
export default function VehicleSetupAdd() {
  const {
    register,
    watch,
    formState: { errors },
    handleSubmit,
  } = useForm();
  return (
    <div>
      <Break title="Add vehicle details" />
      <div className="sm:grid-cols-2 mt-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 grid grid-cols-1 gap-4">
        <div className="">
          <Input
            label="Vehicle no.*"
            required={true}
            name="vehicle_no"
            register={register}
            errors={errors}
            placeholder="Ba 1521"
          />
        </div>
        <div className="">
          <Input
            label="Vehicle name*"
            required={true}
            placeholder="Bus 2"
            errors={errors}
            name="vechicle_name"
            register={register}
          />
        </div>
        <div className="">
          <Input
            label="Model no."
            placeholder="Honda 552100344"
            name="model_no"
            register={register}
          />
        </div>
      </div>
      <Break title="Add driver details" />
      <div className="sm:grid-cols-2 mt-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 grid grid-cols-1 gap-4">
        <div className="">
          <Input
            label="Driver name*"
            required={true}
            errors={errors}
            name="driver_name"
            placeholder="Shuvam koirala"
            register={register}
          />
        </div>
        <div className="">
          <Input
            label="Driver modile no.*"
            required={true}
            errors={errors}
            name="driver_ph_no"
            register={register}
            placeholder="9876543210"
          />
        </div>
        <div className="">
          <Input
            label="Driver licence number*"
            placeholder="0113KA077-11-3"
            required={true}
            errors={errors}
            name="driver_license_no"
            register={register}
          />
        </div>
        <div className="">
          <Upload
            watch={watch}
            label="Driver license*"
            required={true}
            errors={errors}
            name="driver_license"
            register={register}
          />
        </div>
        <div className="">
          <Upload
            watch={watch}
            label="Driver citizenship*"
            required={true}
            errors={errors}
            name="driver_citizenship"
            register={register}
          />
        </div>
        <div className="">
          <Upload
            watch={watch}
            label="Driver photo*"
            name="driver photo"
            register={register}
          />
        </div>
      </div>
      <Break title="Add driver-details" />
      <div className="sm:grid-cols-2  mt-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 grid grid-cols-1 gap-4">
        <div className="">
          <Input
            label="Assistant name*"
            required={true}
            errors={errors}
            name="assistant_name"
            register={register}
          />
        </div>
        <div className="">
          <Input
            label="Assistant modile no.*"
            required={true}
            errors={errors}
            name="assistant_ph_no"
            register={register}
          />
        </div>

        <div className="">
          <Upload
            watch={watch}
            label="Assistant citizenship*"
            required={true}
            errors={errors}
            name="assistant_citizenship"
            register={register}
          />
        </div>
        <div className="">
          <Upload
            watch={watch}
            label="Assistant photo*"
            name="assistant photo"
            register={register}
          />
        </div>
      </div>
    </div>
  );
}
