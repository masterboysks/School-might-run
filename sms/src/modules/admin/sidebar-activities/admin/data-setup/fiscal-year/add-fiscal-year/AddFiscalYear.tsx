import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import fiscalYearApi from "../../../../../../../api/admin/dashboard/admin/data-setup/fiscalYearApi";
import Breadnav from "../../../../../../../components/common/Breadnav";
import Break from "../../../../../../../components/common/Break";
import {
  Checkbox,
  YearInput,
} from "../../../../../../../components/common/fields";

const pages = [
  { name: "Admin", href: "#" },
  {
    name: "Date setup",
    href: "#",
  },
  {
    name: "Fiscal year",
    href: "/admin/dashboard/admin/data-setup/fiscal-year",
  },
  {
    name: "Add",
    href: "/admin/dashboard/admin/data-setup/fiscal-year/add",
  },
];
const AddFiscalYear = () => {
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
    console.log(d);
    const res = await fiscalYearApi.create(d);
    res?.status === 201
      ? navigate("/admin/dashboard/admin/data-setup/designation")
      : setError("Failed to create Fiscal year");
  };
  return (
    <>
      <Breadnav pages={pages} />
      <Break title="Add fiscal year" />
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

export default AddFiscalYear;
