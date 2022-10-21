import { useEffect } from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import departmentApi from "../../../../../../../api/admin/dashboard/admin/data-setup/departmentApi";
import designationApi from "../../../../../../../api/admin/dashboard/admin/data-setup/designationApi";
import Breadnav from "../../../../../../../components/common/Breadnav";
import Break from "../../../../../../../components/common/Break";
import { Input, Select } from "../../../../../../../components/common/fields";

const pages = [
  { name: "Admin", href: "#", current: false },
  {
    name: "Date setup",
    href: "#",
    current: false,
  },
  {
    name: "Designation",
    href: "/admin/dashboard/admin/data-setup/designation",
    current: false,
  },
  {
    name: "Add",
    href: "/admin/dashboard/admin/data-setup/designation/add",
    current: true,
  },
];

const AddDesignation = () => {
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm();
  const [arrayDepartment, setArrayDepartment] = useState([]);
  const [error, setError] = useState("");
  useEffect(() => {
    (async () => {
      const data = await departmentApi.getAll();
      setArrayDepartment(data?.data?.data);
    })();
  }, []);
  const navigate = useNavigate();
  const onSubmit = async (d) => {
    const res = await designationApi.create(d);
    res?.status === 201
      ? navigate("/admin/dashboard/admin/data-setup/designation")
      : setError("Failed to create designation");
  };

  return (
    <>
      <Breadnav pages={pages} />
      <Break title="Add designation" />
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
            <Select
              label="Department*"
              value={arrayDepartment}
              register={register}
              name="department_id"
              errors={errors}
              required={true}
            />
          </div>
          <div>
            <Input
              type="text"
              label="Designation*"
              register={register}
              errors={errors}
              name="designation_name"
              placeholder="Manager"
              required={true}
            />
          </div>
        </div>
        <div className="sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 grid grid-cols-1 gap-4">
          <div className="md:flex-row w-fit sm:col-span-2 flex flex-col my-6 ml-auto">
            <div className=" w-fit my-auto">
              <Link
                to="/admin/dashboard/admin/data-setup/university-board"
                className="bg-primary-grey-50 text-primary-grey-700 hover: focus:outline-none focus:ring- focus:ring-offset-2 sm:w-auto inline-flex items-center justify-center px-4 py-3 mr-3 text-sm font-medium border border-transparent rounded-md shadow-sm"
              >
                Cancel
              </Link>
              <button
                type="submit"
                className="bg-primary-btn hover: focus:outline-none focus:ring- focus:ring-offset-2 sm:w-auto inline-flex items-center justify-center px-4 py-3 text-sm font-medium text-white border border-transparent rounded-md shadow-sm"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default AddDesignation;
