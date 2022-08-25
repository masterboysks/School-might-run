import React, { useState } from "react";
import MainLayout from "../../../layout/admin/MainLayout";
import { useForm } from "react-hook-form";
import Input, { InputWithSuffix } from "../../../components/commom/input";
import { PrimaryButton } from "../../../components/commom/buttons";
import { useNavigate } from "react-router-dom";

export default function AddCompany() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [suffix, setSuffix] = useState("spellinnovation.com.np");
  const onSubmit = (data) => {
    console.log(data);

    navigate("/admin/company");
  };

  return (
    <MainLayout>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="grid lg:grid-cols-2 gap-5 lg:max-w-full max-w-sm mx-auto"
      >
        <div className="">
          <Input
            register={register}
            label="Company name"
            name="companyName"
            required={true}
            errors={errors}
          />
        </div>
        <div className="">
          <Input
            register={register}
            label="Email"
            name="email"
            errors={errors}
            required={true}
          />
        </div>
        <div className="">
          <Input
            register={register}
            label="Password"
            name="password"
            errors={errors}
            required={true}
          />
        </div>
        <div className="">
          <Input
            register={register}
            label="Confirm password"
            name="confirmPassword"
            required={true}
            errors={errors}
          />
        </div>
        <div className="">
          <Input
            register={register}
            label="Plan"
            name="plan"
            required={true}
            errors={errors}
          />
        </div>
        <div className="">
          <InputWithSuffix
            register={register}
            label="Domain"
            name="domain"
            required={true}
            suffix={suffix}
            errors={errors}
          />
        </div>
        <button type="submit" className="col-span-full ml-auto">
          <PrimaryButton>Submit</PrimaryButton>
        </button>
      </form>
    </MainLayout>
  );
}
