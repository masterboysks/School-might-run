import React from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import sectionsApi from "../../../../../../../api/admin/dashboard/admin/data-setup/sectionsApi";
import Breadnav from "../../../../../../../components/common/Breadnav";
import Break from "../../../../../../../components/common/Break";
import { Input } from "../../../../../../../components/common/fields";

const pages = [
  { name: "Admin", href: "#" },
  {
    name: "Date setup",
    href: "#",
  },
  {
    name: "Section",
    href: "/admin/dashboard/admin/data-setup/section",
  },
  {
    name: "Add",
    href: "/admin/dashboard/admin/data-setup/section/add",
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

export default AddSection;
