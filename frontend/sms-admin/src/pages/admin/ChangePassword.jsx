import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Input, {
  InputWithSuffix,
  Password,
  Select,
} from "../../components/commom/input";
import { useNavigate } from "react-router-dom";
import Breadnav from "../../components/admin/Breadnav";
import MainLayout from "../../layout/admin/MainLayout";
import { PrimaryButton } from "../../components/commom/buttons";

const pages = [
  { name: "Change password", href: "/admin/change-password", current: true },
];
const plans = ["jkdsfh", "dsfkjh"];
export default function ChangePassword() {
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
        <h1 className="text-lg  mt-5 "> Change Password</h1>
        <div className="border-b "></div>

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
        <div>
          <Password
            register={register}
            label="Password *"
            name="password"
            errors={errors}
            required={true}
            type="newPassword"
          />
        </div>
        <div className="">
          <Password
            register={register}
            label="Confirm password *"
            name="confirmPassword"
            required={true}
            errors={errors}
            type="password"
          />
        </div>

        <button type="submit" className="col-span-full ml-auto">
          <PrimaryButton>Submit</PrimaryButton>
        </button>
      </form>
    </MainLayout>
  );
}
