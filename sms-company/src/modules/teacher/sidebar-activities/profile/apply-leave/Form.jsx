import React from "react";
import { useForm } from "react-hook-form";
import { Input, Textarea } from "../../../../../components/common/fields";

export default function Form() {
  const {
    register,
    formState: { errors },
  } = useForm();
  return (
    <div className="my-6">
      <div className="">
        <Input
          register={register}
          name="start-date"
          type="date"
          label="Start date*"
          required={true}
          errors={errors}
        />
      </div>
      <div
        className="
        "
      >
        <Input
          register={register}
          name="end-date"
          type="date"
          label="End date*"
          required={true}
          errors={errors}
        />
      </div>
      <div className="">
        <Textarea register={register} name="reason" label="Reason " />
      </div>
    </div>
  );
}
