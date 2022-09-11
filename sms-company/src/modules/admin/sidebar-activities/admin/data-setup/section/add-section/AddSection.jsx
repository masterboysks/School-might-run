import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import sectionsApi from "../../../../../../../api/admin/dashboard/admin/data-setup/sectionsApi";
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
    name: "Section",
    href: "/admin/dashboard/admin/data-setup/section",
    current: false,
  },
  {
    name: "Add",
    href: "/admin/dashboard/admin/data-setup/section/add",
    current: true,
  },
];
const AddSection = () => {
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm();

  const [error, setError] = useState("");

  const navigate = useNavigate();
  const onSubmit = async (d) => {
    const res = await sectionsApi.create(d);
    res?.status === 201
      ? navigate("/admin/dashboard/admin/data-setup/section")
      : setError("Failed to create section");
  };

  return (
    <>
      <Breadnav pages={pages} />
      <Break title="Add section" />
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
              label="Section*"
              type="text"
              placeholder="A"
              register={register}
              name="section_name"
              errors={errors}
              required={true}
            />
          </div>
        </div>
        <div className="sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 grid grid-cols-1 gap-4">
          <div className="md:flex-row w-fit flex flex-col my-6 ml-auto">
            <div className=" w-fit my-auto">
              <Link
                to="/admin/dashboard/admin/data-setup/section"
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

export default AddSection;
