import React from "react";
import { Link } from "react-router-dom";
import { PrimaryButton } from "../../components/commom/buttons";
import Input from "../../components/commom/input";
import DualLayout from "../../layout/dualLayout";

export default function Signup() {
  return (
    <DualLayout>
      <>
        <h1>Create a new account.</h1>
        <h4>
          Already have account?
          <Link to="/login" className="text-primary-base font-medium">
            Sign in
          </Link>
        </h4>
        <div className="my-5 ">
          <Input label="School name" />
          <Input label="Email address" />
          <Input label="Password" type="password" />
          <Input label="Confirm password" type="password" />
        </div>

        <PrimaryButton className="rounded-xl bg-blue-500  w-full sm:!w-full">
          Create Account
        </PrimaryButton>
      </>
    </DualLayout>
  );
}
