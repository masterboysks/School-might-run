import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { PrimaryButton } from "../../components/commom/buttons";
import Input, { Password } from "../../components/commom/input";
import logo from "/logo.png";

export default function ForgotPassword() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const saveData = (data) => {
    localStorage.setItem("user", JSON.stringify(data.username));
    return 1;
  };
  const onSubmit = (data) => {
    saveData(data);
    navigate("/admin/dashboard");
  };
  useEffect(() => {
    localStorage.getItem("user") && navigate(-1);
  }, []);

  return (
    <>
      <div className="min-w-[100vw] min-h-[100vh] flex items-center justify-center  bg-primary-grey-100 text-primary-grey  text-">
        <div className=" box-border flex flex-col md:flex-row w-11/12 max-w-5xl justify-between items-center">
          <div className="inline-flex  flex-col items-center justify-center text-center max-w-md flex-grow   md:mr-3">
            <Link to="/">
              <img src={logo}></img>
            </Link>

            <h1 className="text-2xl  font-semibold text-primary-secondary  text-center  my-12  ">
              School Management System
            </h1>
          </div>
          <div className="flex-grow max-w-sm ">
            <form
              className=" mx-auto  px-5 shadow-2xl  bg-white  rounded-xl box-border my-3 py-5"
              onSubmit={handleSubmit(onSubmit)}
            >
              <Input
                label="Your registered email."
                placeholder="email"
                register={register}
                required={true}
                // showError={false}
                className="mb-4"
                type="email"
                name="email"
                errors={errors}
              />

              <button
                className=" w-full  mb-5 primary-btn rounded  "
                type="submit"
              >
                <PrimaryButton className=" w-full text-center sm:w-full ">
                  Send
                </PrimaryButton>
              </button>
              <Link
                to="/login"
                replace={true}
                className="text-primary-base text-center block focus:outline-none focus:ring-2 focus:ring-primary-base"
              >
                Log in
              </Link>
            </form>
            <div className=" text-center pt-8">
              <p className=" max-w-md">
                Use the application according to policy rules. Any kinds of
                violations will be subject to sanctions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
