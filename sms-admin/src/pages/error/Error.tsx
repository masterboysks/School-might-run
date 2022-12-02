import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
export default function Error() {
  const path = useLocation().pathname;
  const navigate = useNavigate();
  return (
    <div className="text-center  flex w-screen h-screen items-center justify-center bg-gradient-to-tr from-primary-base/70 to-primary-secondary/30  flex-col">
      <h2 className="text-6xl ">Cannot find page: {path}</h2>
      <div className="space-x-6 ">
        <Link to="/" className="my-12">
          Return to home
        </Link>
        <button
          onClick={() => {
            navigate(-1);
          }}
          className="mt-12"
        >
          Return back
        </button>
      </div>
    </div>
  );
}
