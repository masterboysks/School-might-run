import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { PrimaryButton } from "../../components/commom/buttons";
import { Checkbox } from "../../components/commom/checkbox";
import Input from "../../components/commom/input";
import logo from "/logo.png";
export default function Index() {
  const [username, setUsername] = useState("");
  const navigate = useNavigate();
  const [errorUsername, setErrorUsername] = useState(false);
  const [password, setPassword] = useState("");
  const [errorPassword, setErrorPassword] = useState(false);
  const [remember, setRemember] = useState(false);
  const saveData = () => {
    localStorage.setItem("user", JSON.stringify(username));
    return 1;
  };
  const handleSubmit = () => {
    console.log({ username });
    let temp = true;
    username || ((temp = false) && setErrorUsername(true));
    password || ((temp = false) && setErrorPassword(true));
    temp && saveData() && navigate("/admin/dashboard");
  };
  useEffect(() => {}, []);

  return (
    <>
      <div className="min-w-[100vw] min-h-[100vh] flex items-center justify-center  bg-primary-grey-100 text-primary-grey  text-">
        <div className=" box-border flex flex-col md:flex-row w-11/12 max-w-5xl justify-between">
          <div className="inline-flex  flex-col items-center justify-center text-center max-w-md flex-grow   md:mr-3">
            <Link to="/">
              <img src={logo}></img>
            </Link>

            <h1 className="text-2xl  font-semibold text-primary-secondary  text-center  my-12  ">
              School Management System
            </h1>
          </div>
          <div className="flex-grow max-w-sm ">
            <div className=" mx-auto  px-5 shadow-2xl  bg-white  rounded-xl box-border my-3 py-5">
              <Input
                placeholder="username"
                value={username}
                setValue={setUsername}
                error={errorUsername}
                setError={setErrorUsername}
                dontShowErrorText={true}
                className="mb-4"
              />
              <br />
              <Input
                placeholder="Password"
                value={password}
                setValue={setPassword}
                type="password"
                error={errorPassword}
                setError={setErrorPassword}
                errorText="Invalid credentials."
                className="mb-4"
              />

              <Checkbox
                label="Remember me:"
                selected={remember}
                setSelected={setRemember}
                className="mt-3"
                id="remember_me"
              />
              <br />
              <button
                className=" w-full  mb-5 focus:border-primary-base focus:ring-primary-base focus:ring-2 focus:outline-none  "
                onClick={handleSubmit}
              >
                <PrimaryButton className=" w-full text-center sm:w-full ">
                  Login
                </PrimaryButton>
              </button>
              <Link
                to="forgot-password"
                className="text-primary-base text-center block focus:outline-none focus:ring-2 focus:ring-primary-base"
              >
                Forgot password?
              </Link>
            </div>
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
