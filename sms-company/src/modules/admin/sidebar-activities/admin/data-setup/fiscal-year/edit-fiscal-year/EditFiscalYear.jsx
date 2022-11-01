import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate, useParams } from "react-router-dom";
import fiscalYearApi from "../../../../../../../api/admin/dashboard/admin/data-setup/fiscalYearApi";
import Breadnav from "../../../../../../../components/common/Breadnav";
import Break from "../../../../../../../components/common/Break";
import {
  Checkbox,
  YearInput,
} from "../../../../../../../components/common/fields";

const pages = [
  { name: "Admin", href: "#", current: false },
  {
    name: "Date setup",
    href: "#",
    current: false,
  },
  {
    name: "Fiscal year",
    href: "/admin/dashboard/admin/data-setup/fiscal-year",
    current: false,
  },
  {
    name: "Edit",
    href: "",
    current: true,
  },
];
const EditFiscalYear = () => {
  const { id } = useParams();
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
    const res = await fiscalYearApi.edit(id, d);
    res?.status === 201
      ? navigate("/admin/dashboard/admin/data-setup/designation")
      : setError("Failed to edit Fiscal year");
  };

  useEffect(() => {
    (async () => {
      const temp = await JSON.parse(localStorage.getItem("Mb5sVJt5Qp") || "");
      reset(temp);
    })();
    return () => localStorage.removeItem("Mb5sVJt5Qp");
  }, []);
  return (
    <>
      <Breadnav pages={pages} />
      <Break title="Edit fiscal year" />
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
              label="Fiscal year start*"
              name="start_year"
              register={register}
              errors={errors}
              required={true}
            />
          </div>
          <div>
            <YearInput
              label="Fiscal year end*"
              name="end_year"
              register={register}
              errors={errors}
              required={true}
            />
          </div>
          <div className="col-span-full">
            <Checkbox
              register={register}
              name="is_running"
              label="is running?"
              id="isRunning_form_54524"
            />
          </div>
        </div>
        <div className="sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 grid grid-cols-1 gap-4">
          <div className="md:flex-row sm:col-span-2 w-fit flex flex-col my-6 ml-auto">
            <div className=" w-fit my-auto">
              <Link
                to="/admin/dashboard/admin/data-setup/fiscal-year"
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

export default EditFiscalYear;
