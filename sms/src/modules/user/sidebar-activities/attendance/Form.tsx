import React from 'react';
import { useForm } from 'react-hook-form';
import {
  Input,
  Textarea,
  UploadPhoto,
} from '../../../../components/common/fields';

export default function Form() {
  const {
    register,
    formState: { errors, isValid },
    watch,
  } = useForm();
  return (
    <form className="my-6 space-y-4">
      <div className="grid grid-cols-2 gap-3 ">
        <div className="">
          <Input
            label="Start date*"
            required={true}
            name="start_date"
            type="date"
            errors={errors}
            register={register}
          />
        </div>
        <div
          className="
        "
        >
          <Input
            label="End date*"
            required={true}
            name="end_date"
            type="date"
            errors={errors}
            register={register}
          />
        </div>
      </div>
      <UploadPhoto
        label="Application for leave*"
        required={true}
        name="leave_application"
        watch={watch}
        errors={errors}
        register={register}
      />
      <div className="">
        <Textarea
          label="Reason for leave *"
          required={true}
          name="reason_for_leave"
          errors={errors}
          register={register}
        />
      </div>
    </form>
  );
}
