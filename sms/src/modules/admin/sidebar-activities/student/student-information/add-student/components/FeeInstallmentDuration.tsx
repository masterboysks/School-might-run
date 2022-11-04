import React from "react";
import { Link } from "react-router-dom";
import Break from "./Break";

function FeeInstallmentDuration() {
  return (
    <div className="">
      <Break title="Fee installment duration" />
      <div className="mt-6" />
      <label htmlFor="fee_installment">Select fee installment duration:</label>
      <br />
      <select
        name="fee_installment"
        id="fee_installment"
        className="mt-[6px] mb-6 w-60 p- rounded  focus:ring-primary-btn    border-primary-field shadow-md placeholder:text-primary-grey-400    text-primary-grey-700 text-sm"
      >
        <option value="test">Select</option>
      </select>
      <div className="xl:flex">
        <div className="note max-w-fit bg-primary-50 p-4 mb-6 rounded">
          <h3 className="mb-3">*Note about installment duration:</h3>
          <ol>
            <li>
              1.
              <span className="text-primary-grey-700 font-bold tracking-wide">
                1 month
              </span>
              :- Fee should be paid monthly & fee invoice are generated monthly.
            </li>
            <li>
              2.
              <span className="text-primary-grey-700 font-bold tracking-wide">
                2 months
              </span>
              :- Fee should be paid after each 2 months & fee invoice is
              generated in every 2 months.
            </li>
            <li>
              3.
              <span className="text-primary-grey-700 font-bold tracking-wide">
                4 months
              </span>
              :- Fee should be paid after each 4 months & fee invoice is
              generated in every 4 months.
            </li>
            <li>
              4.
              <span className="text-primary-grey-700 font-bold tracking-wide">
                6 months
              </span>
              :- Fee should be paid after each 6 months & fee invoice is
              generated in every 6 months.
            </li>
            <li>
              5.
              <span className="text-primary-grey-700 font-bold tracking-wide">
                12 months
              </span>
              :- Fee should be paid all at once & fee invoice is generated all
              at once.
            </li>
          </ol>
        </div>
        <div className=" w-fit xl:mt-0 mt-3 mb-6 ml-auto">
          <Link
            to="/admin/dashboard/student/student-information/add-class-details"
            className="secondary_btn"
          >
            Back
          </Link>
          <Link
            to={`/admin/dashboard/student/student-information`}
            className="primary_btn"
          >
            Submit
          </Link>
        </div>
      </div>
    </div>
  );
}

export default FeeInstallmentDuration;
