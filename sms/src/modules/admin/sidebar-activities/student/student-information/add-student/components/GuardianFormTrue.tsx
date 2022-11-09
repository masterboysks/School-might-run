import React from 'react';
import { Link } from 'react-router-dom';
import Search from '@mui/icons-material/SearchOutlined';
import FatheAndMotherDetail from './FatheAndMotherDetail';
import { useForm } from 'react-hook-form';

const GuardianFormFalse = () => {
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors, isValid },
  } = useForm();
  return (
    <form className="form-solid my-6 rounded-md">
      <div className="sm:grid-cols-2  lg:grid-cols-3 xl:grid-cols-4 grid grid-cols-1 gap-4">
        <div className="sm:grid-cols-2  lg:grid-cols-3 xl:grid-cols-4 col-span-full grid grid-cols-1 gap-4">
          <div className="">
            <label className="py-6 text-sm" htmlFor="Student Id">
              Mobile Number*
            </label>
            <br />
            <input
              className="mt-[6px] w-full p- rounded  focus:ring-primary-btn    border-primary-field shadow-md placeholder:text-primary-grey-400    text-primary-grey-700 text-sm"
              type="number"
              placeholder="9818756958"
            />
          </div>
          <div className="sm:w-1/2 mt-auto">
            <Link
              to="/admin/dashboard/student/student-information/add-student-details"
              className=" bg-primary-btn h-fit w-fit hover: focus:outline-none focus:ring- focus:ring-offset-2 flex items-center justify-center p-2 text-sm font-medium text-white border border-transparent rounded-md shadow-sm"
            >
              <Search />
            </Link>
          </div>
        </div>
        <div>
          <label className="py-6 text-sm" htmlFor="Student Id">
            First Name*
          </label>
          <br />
          <input
            className="mt-[6px] w-full p- rounded  focus:ring-primary-btn    border-primary-grey-400 bg-primary-grey-100 shadow-md placeholder:text-primary-grey-400    text-primary-grey-700 text-sm"
            disabled
            type="text"
            placeholder="First name"
          />
        </div>
        <div className="">
          <label className="py-6 text-sm" htmlFor="Student Id">
            Middle Name
          </label>
          <br />
          <input
            className="mt-[6px] w-full p- rounded  focus:ring-primary-btn    border-primary-grey-400 bg-primary-grey-100 shadow-md placeholder:text-primary-grey-400    text-primary-grey-700 text-sm"
            disabled
            type="text"
            placeholder="Middle name"
          />
        </div>
        <div className="">
          <label className="py-6 text-sm" htmlFor="Student Id">
            Last Name*
          </label>
          <br />
          <input
            className="mt-[6px] w-full p- rounded  focus:ring-primary-btn    border-primary-grey-400 bg-primary-grey-100 shadow-md placeholder:text-primary-grey-400    text-primary-grey-700 text-sm"
            disabled
            type="text"
            placeholder="Last name"
          />
        </div>

        <div className="">
          <label className="py-6 text-sm" htmlFor="Student Id">
            Email
          </label>
          <br />
          <input
            className="mt-[6px] w-full p- rounded  focus:ring-primary-btn    border-primary-grey-400 bg-primary-grey-100 shadow-md placeholder:text-primary-grey-400    text-primary-grey-700 text-sm"
            disabled
            type="Email"
            placeholder="mail@gmail.com"
          />
        </div>
        <div className="">
          <label className="py-6 text-sm" htmlFor="Student Id">
            Occupation*
          </label>
          <br />
          <input
            className="mt-[6px] w-full p- rounded  focus:ring-primary-btn    border-primary-grey-400 bg-primary-grey-100 shadow-md placeholder:text-primary-grey-400    text-primary-grey-700 text-sm"
            disabled
            type="text"
            placeholder="Occupation"
          />
        </div>
        <div className="">
          <label className="py-6 text-sm" htmlFor="Student Id">
            Relation*
          </label>
          <br />
          <input
            className="mt-[6px] w-full p- rounded  focus:ring-primary-btn    border-primary-grey-400 bg-primary-grey-100 shadow-md placeholder:text-primary-grey-400    text-primary-grey-700 text-sm"
            disabled
            type="text"
            placeholder="Mother"
          />
        </div>
        <div className="">
          <label className="py-6 text-sm" htmlFor="Student Id">
            Username*
          </label>
          <br />
          <input
            className="mt-[6px] w-full p- rounded  focus:ring-primary-btn    border-primary-grey-400 bg-primary-grey-100 shadow-md placeholder:text-primary-grey-400    text-primary-grey-700 text-sm"
            disabled
            type="text"
            placeholder="Username"
          />
        </div>
        <div className="">
          <label className="py-6 text-sm" htmlFor="Student Id">
            Password*
          </label>
          <br />
          <input
            className="mt-[6px] w-full p- rounded  focus:ring-primary-btn    border-primary-grey-400 bg-primary-grey-100 shadow-md placeholder:text-primary-grey-400    text-primary-grey-700 text-sm"
            disabled
            type="password"
            placeholder="Password"
          />
        </div>
      </div>
      <FatheAndMotherDetail register={register} errors={errors} />
      <div className="w-full">
        <div className=" w-fit ml-auto">
          <Link
            to="/admin/dashboard/student/student-information/add-address-details"
            className="secondary_btn"
          >
            Back
          </Link>
          <Link
            to={`/admin/dashboard/student/student-information/add-address-details`}
            className="primary_btn"
          >
            Next
          </Link>
        </div>
      </div>
    </form>
  );
};

export default GuardianFormFalse;
