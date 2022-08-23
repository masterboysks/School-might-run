import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { PrimaryButton } from "../../components/commom/buttons";
import { Checkbox } from "../../components/commom/checkbox";
import Input from "../../components/commom/input";
import logo from "/logo.png";
export default function Index() {
  const [username, setUsername] = useState("");
  const [errorUsername, setErrorUsername] = useState(false);
  const [password, setPassword] = useState("");
  const [errorPassword, setErrorPassword] = useState(false);
  const [remember, setRemember] = useState(false);
  const handleSubmit = () => {};
  useEffect(() => {}, []);

  return (
    <>
      <div className="min-w-[100vw] min-h-[100vh] flex items-center justify-center  text-primary-grey bggrad text-">
        <div className=" box-border flex flex-col md:flex-row w-9/12 max-w-2xl">
          <div className="inline-flex  flex-col  max-w-md flex-grow  pt-10 md:mr-3">
            <Link to="/">
              <img src={logo}></img>
            </Link>

            <h1 className="text-2xl  font-semibold text-primary-secondary    my-6">
              School Management System
            </h1>
          </div>
          <div className="flex-grow max-w-md">
            <div className=" mx-auto  px-3 py-4 bg-primary-grey-100 rounded-lg box-border my-3">
              <Input
                placeholder="username"
                value={username}
                setValue={setUsername}
                label="Login"
                error={errorUsername}
                setError={setErrorUsername}
                dontShowErrorText={true}
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
              />
              <br />

              <Checkbox
                label="Remember me:"
                selected={remember}
                setSelected={setRemember}
                className="mt-4"
                id="remember_me"
              />
              <br />
              <button className=" w-full" onClick={handleSubmit}>
                <PrimaryButton className=" w-full text-center sm:w-full mb-3 ">
                  Login
                </PrimaryButton>
              </button>
              <Link to="forgot-password" className="text-primary-base ">
                Forgot password?
              </Link>
            </div>
            <div className=" text-center">
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
