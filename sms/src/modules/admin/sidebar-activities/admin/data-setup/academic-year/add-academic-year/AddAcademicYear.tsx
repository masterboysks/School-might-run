import React from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import academicyearApi from "../../../../../../../api/admin/dashboard/admin/data-setup/academicyearApi";
import Breadnav from "../../../../../../../components/common/Breadnav";
import Break from "../../../../../../../components/common/Break";
import {
  Checkbox,
  YearInput,
} from "../../../../../../../components/common/fields";

const pages = [
  { name: "Admin" },
  {
    name: "Date setup",
  },
  {
    name: "Academic year",
    href: "/admin/dashboard/admin/data-setup/academic-year",
  },
  {
    name: "Add",
    href: "/admin/dashboard/admin/data-setup/academic-year/add",
  },
];
const AddAcademicYear = () => {
  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm();
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const onSubmit = async (d) => {
    const res = await academicyearApi.create(d);
    res?.status === 201
      ? navigate("/admin/dashboard/admin/data-setup/designation")
      : setError("Failed to create Academic year");
  };
  return (
    <>
      <Breadnav pages={pages} />
      <Break title="Add Academic year" />
      <form
        className="form-solid w-full my-6 rounded-md"
        onSubmit={handleSubmit(onSubmit)}
      >
        {error && (
          <>
            <div className="text-lg font-medium text-red-600">{error}</div>
            <br />
          </>
        )}
        <div className="sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 grid grid-cols-1 gap-4">
          <div>
            <YearInput
              register={register}
              name="academic_year"
              label="Academic year*"
              required={true}
              errors={errors}
            ></YearInput>
          </div>
          <div className="col-span-full">
            <Checkbox
              register={register}
              name="is_running"
              id="Form_label_45584578"
              label="is running?"
            />
          </div>
        </div>
        <div className="sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 grid grid-cols-1 gap-4">
          <div className="md:flex-row w-fit flex flex-col my-6 ml-auto">
            <div className=" w-fit my-auto">
              <Link
                to="/admin/dashboard/admin/data-setup/academic-year"
                className="secondary_btn"
              >
                Cancel
              </Link>
              <button type="submit" className="primary_btn">
                Save
              </button>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default AddAcademicYear;
