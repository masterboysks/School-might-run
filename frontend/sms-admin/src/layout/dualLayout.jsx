import React from "react";
import { Link } from "react-router-dom";
import logo from "/logo.png";
export default function DualLayout({ children }) {
  return (
    <div className="w-screen h-screen  flex text-skin-grey justify-center">
      <div className="lg:w-1/2 w-10/12 flex flex-col items-center justify-center">
        <div id="logo" className="text-xl font-semibold mb-9  lg:hidden">
          <Link to="/">
            <div className="w-fit mx-auto">
              <img src={logo} />
            </div>
          </Link>
          <h2 className="text-lg sm:text-xl  mt-2 capitalize">
            School management system
          </h2>
        </div>
        <div className=" flex flex-col  mx-5 w-9/12">{children}</div>
      </div>
      <div
        id="section"
        className=" w-full lg:flex flex-col items-center justify-center h-full bg-gradient-to-tr from-primary-base/70 to-primary-secondary/30 hidden "
      >
        <Link className="text-3xl text-white" to="/">
          <img src={logo} />
        </Link>
        <h2 className="text-xl mt-2 font-semibold capitalize">
          School management system
        </h2>
      </div>
    </div>
  );
}
