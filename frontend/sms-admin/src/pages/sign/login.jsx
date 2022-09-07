import React, { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import User from "../../api/User";
import { Checkbox } from "../../components/commom/checkbox";
import Input, { Password } from "../../components/commom/input";
import logo from "/logo.png";
import { AuthContext, SetAuthContex } from "../../contex/AuthProvider";
import { authorized } from "../../api/axios";

export default function Index() {
  const auth = useContext(AuthContext);
  const setAuth = useContext(SetAuthContex);

  const [errorText, setErrorText] = useState("This is a required field");
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    let userData;
    try {
      userData = await User.login({
        username: data.username,
        password: data.password,
      });

      const { access_token, refresh_token } = userData?.data?.data?.token;
      setAuth(access_token);
      authorized.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${access_token}`;
      localStorage.setItem("akd", refresh_token);

      access_token && navigate("/admin/dashboard");
    } catch (e) {
      console.error(e);
      setError("password", { type: "focus" });
      setErrorText(() => {
        if (e.message === "Network Error") return "Network error";
        if (e.response?.status.toString().substr(0, 1) === "5")
          return "Server error";

        return "Invalid credentials";
      });
    }
  };
  useEffect(() => {
    localStorage.getItem("akd") && navigate(-1);
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
                placeholder="username"
                register={register}
                required={true}
                className="mb-2"
                name="username"
                errors={errors}
              />
              <br />
              <Password
                placeholder="Password"
                name="password"
                register={register}
                type="password"
                errors={errors}
                className="mb-4"
                errorText={errorText}
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
              <button
                className=" w-full  mb-5 primary-btn  py-2 rounded "
                type="submit"
              >
                {/* <PrimaryButton className=" w-full text-center sm:w-full "> */}
                Login
                {/* </PrimaryButton> */}
              </button>
              <Link
                to="forgot-password"
                replace={true}
                className="text-primary-base text-center block focus:outline-none focus:ring-2 focus:ring-primary-base"
              >
                Forgot password?
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
