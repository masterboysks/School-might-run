import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Input, {
  InputWithSuffix,
  Password,
  Select,
  Upload,
} from "../../../components/commom/input";
import { useNavigate } from "react-router-dom";
import Breadnav from "../../../components/admin/Breadnav";

const pages = [
  { name: "Company", href: "/admin/company", current: false },
  { name: "Add", href: "#", current: true },
];
const plans = ["jkdsfh", "dsfkjh"];
export default function AddCompany() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  //
  // subdomain
  //
  const [suffix, setSuffix] = useState("spellinnovation.com.np");
  const onSubmit = (data) => {
    console.log(data);

    navigate("/admin/company");
  };

  return (
    <>
      <Breadnav pages={pages} />

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="grid  gap-5 bg-white rounded-md px-9 pb-6 pt-3 max-w-2xl  mx-auto mt-4"
      >
        <h1 className="text-lg  mt-5 "> Add new company</h1>
        <div className="border-b "></div>
        <div className="">
          <Input
            register={register}
            label="Company name *"
            name="company_name"
            required={true}
            errors={errors}
          />
        </div>
        <div className="">
          <Input
            register={register}
            label="Username *"
            name="username"
            required={true}
            errors={errors}
          />
        </div>
        <div className="">
          <Input
            register={register}
            label="Email *"
            name="email"
            type="email"
            errors={errors}
            required={true}
          />
        </div>
        <div className="">
          <Password
            register={register}
            label="Password *"
            name="password"
            errors={errors}
            required={true}
            type="password"
          />
        </div>
        <div className="">
          <Password
            register={register}
            label="Confirm password *"
            name="password_confirmation"
            required={true}
            errors={errors}
            type="password"
          />
        </div>
        <div className="">
          <Select
            register={register}
            label="Plan "
            name="plan" //jkhdsf
            required={true}
            errors={errors}
            value={plans}
            selected="Select"
          />
        </div>
        <div className="">
          <InputWithSuffix
            register={register}
            label="Sub-Domain *"
            name="domain"
            required={true}
            suffix={suffix}
            errors={errors}
          />
        </div>
        <div className="">
          <Upload
            register={register}
            label="Upload Logo"
            name="logo" //gfdgf
            required={true}
            errors={errors}
            id="company-logo"
          />
        </div>
        <button
          type="submit"
          className="col-span-full ml-auto primary-btn rounded"
        >
          Submit
        </button>
      </form>
    </>
  );
}
