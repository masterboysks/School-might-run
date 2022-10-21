import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import departmentApi from "../../../../../../../api/admin/dashboard/admin/data-setup/departmentApi";
import Breadnav from "../../../../../../../components/common/Breadnav";
import Break from "../../../../../../../components/common/Break";
import { Input } from "../../../../../../../components/common/fields";

const pages = [
  { name: "Admin", href: "#", current: false },
  {
    name: "Date setup",
    href: "#",
    current: false,
  },
  {
    name: "Department",
    href: "/admin/dashboard/admin/data-setup/department",
    current: false,
  },
  {
    name: "Add",
    href: "/admin/dashboard/admin/data-setup/department/add",
    current: true,
  },
];
const AddDepartment = () => {
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm();

  const [error, setError] = useState("");

  const navigate = useNavigate();
  const onSubmit = async (d) => {
    const res = await departmentApi.create(d);
    res?.status === 201
      ? navigate("/admin/dashboard/admin/data-setup/department")
      : setError("Failed to create department");
  };
  return (
    <>
      <Breadnav pages={pages} />
      <Break title="Add department" />
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
            <Input
              label="Department*"
              register={register}
              errors={errors}
              required={true}
              name="department_name"
              placeholder="Non-academic"
              type="text"
            />
          </div>
        </div>
        <div className="sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 grid grid-cols-1 gap-4">
          <div className="md:flex-row w-fit flex flex-col my-6 ml-auto">
            <div className=" w-fit my-auto">
              <Link
                to="/admin/dashboard/admin/data-setup/department"
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

export default AddDepartment;
