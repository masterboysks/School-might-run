import React, { useState } from "react";
import MainLayout from "../../../layout/admin/MainLayout";
import { useForm } from "react-hook-form";
import Input, {
  InputWithSuffix,
  Select,
} from "../../../components/commom/input";
import { PrimaryButton } from "../../../components/commom/buttons";
import { useNavigate } from "react-router-dom";
import Breadnav from "../../../components/admin/Breadnav";

const pages = [
  { name: "Plan", href: "/admin/plan", current: false },
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
    <MainLayout className="text-primary-grey">
      <Breadnav pages={pages} />

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="grid  gap-5 bg-white rounded-md px-9 pb-6 pt-3 max-w-2xl  mx-auto mt-4"
      >
        <h1 className="text-lg  mt-5 "> Edit Plan</h1>
        <div className="border-b "></div>
        <div className="">
          <Input
            register={register}
            label="Name*"
            name="name"
            required={true}
            errors={errors}
          />
        </div>
        <div className="">
          <Input
            register={register}
            label="Price *"
            name="price"
            errors={errors}
            required={true}
          />
        </div>
        <div className="">
          <Input
            register={register}
            label="Duration *"
            name="duration"
            errors={errors}
            required={true}
          />
        </div>
        <div className="">
          <Input
            register={register}
            label="Confirm password *"
            name="confirmPassword"
            required={true}
            errors={errors}
          />
        </div>
        <div className="">
          <Select
            register={register}
            label="Plan "
            name="plan"
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
            name="subDomain"
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
