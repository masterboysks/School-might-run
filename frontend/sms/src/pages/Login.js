import React from "react";
import { Checkbox, Input, Password } from "../components/common/fields";
import logo from "../assets/logoHeader.png";
import { PrimaryButton } from "../components/common/Buttons";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const onSubmit = (data) => {
    console.log(data);
    switch (data.username) {
      case "admin":
        navigate("/admin/dashboard/");
        break;
      case "student":
        navigate("student/dashboard");
        break;
      case "parent":
        navigate("parent/dashboard");
        break;
      case "teacher":
        navigate("teacher/dashboard");
        break;
      default:
    }
  };
  return (
    <>
      <div className="min-w-[100vw] min-h-[100vh] flex items-center justify-center  bg-primary-grey-100 text-primary-grey  text-">
        <div className=" md:flex-row box-border flex flex-col items-center justify-between w-11/12 max-w-5xl">
          <div className="md:mr-3 md:max-w-md inline-flex flex-col justify-center flex-grow max-w-sm -mt-8">
            <Link to="/">
              <img src={logo} width={100}></img>
            </Link>

            <h1 className="text-primary-grey-600 my-12 text-2xl font-semibold text-left">
              Amrit College Of Science And Technology
            </h1>
          </div>
          <div className=" flex-grow max-w-sm">
            <form
              className=" rounded-xl box-border px-5 py-5 mx-auto my-3 bg-white shadow-2xl"
              onSubmit={handleSubmit(onSubmit)}
            >
              <Input
                placeholder="username"
                register={register}
                required={true}
                // showError={false}
                className="mb-4"
                name="username"
                errors={errors}
              />
              <br />
              <Password
                placeholder="Password"
                name="password"
                register={register}
                type="password"
                errorText="Invalid credentials."
                errors={errors}
                className="mb-4"
                required={true}
              />

              <Checkbox
                label="Remember me:"
                name="remember"
                register={register}
                className="mt-3"
                id="remember_me"
              />
              <br />
              <button className=" primary-btn w-full mb-5" type="submit">
                <PrimaryButton className=" sm:w-full w-full text-center">
                  Login
                </PrimaryButton>
              </button>
              <Link
                to="forgot-password"
                replace={true}
                className="text-primary-base focus:outline-none focus:ring-2 focus:ring-primary-base block text-center"
              >
                Forgot password?
              </Link>
            </form>
            <div className=" pt-8 text-center">
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
