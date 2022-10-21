import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { Input, Textarea } from "../../../../../components/common/fields";

export default function Form() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="my-6 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 grid grid-cols-1 gap-4">
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
      </div>
      <div className="my-6 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 grid grid-cols-1 gap-4">
        <div className=" col-span-2">
          <Textarea register={register} name="reason" label="Reason " />
        </div>
      </div>
      <div className="sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 grid grid-cols-1 gap-4">
        <div className="md:flex-row w-fit col-span-full lg:col-span-2 flex flex-col my-6 ml-auto">
          <div className=" w-fit">
            <Link
              to="/admin/dashboard/admin/data-setup/faculty"
              className="secondary_btn"
            >
              Cancel
            </Link>
            <button type="submit" className="primary_btn">
              Save
            </button>
          </div>
        </div>
      </div>
    </form>
  );
}
