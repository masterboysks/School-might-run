import { Link, useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import { Input, Select } from "../../../../../../../components/common/fields";
import Breadnav from "../../../../../../../components/common/Breadnav";
import Break from "../../../../../../../components/common/Break";
import { useEffect } from "react";
import levelApi from "../../../../../../../api/admin/dashboard/admin/data-setup/levelApi";
import { useForm } from "react-hook-form";
import facultyApi from "../../../../../../../api/admin/dashboard/admin/data-setup/facultyApi";
import React from "react";
const pages = [
  { name: "Admin", href: "#" },
  {
    name: "Date setup",
    href: "#",
  },
  {
    name: "Faculty",
    href: "/admin/dashboard/admin/data-setup/faculty",
  },
  {
    name: "Edit",
    href: "#",
  },
];
const EditFaculty = () => {
  const { id } = useParams();
  const {
    register,
    handleSubmit,
    reset,

    formState: { errors },
  } = useForm();
  const [arrayLevel, setArrayLevel] = useState([]);
  const [error, setError] = useState("");
  useEffect(() => {
    (async () => {
      const data = await levelApi.getAll();
      setArrayLevel(data?.data?.data);
      const temp = await JSON.parse(localStorage.getItem("Mb5sVJt5Qp") || "");
      reset(temp);
    })();
    return () => localStorage.removeItem("Mb5sVJt5Qp");
  }, []);

  const navigate = useNavigate();
  const onSubmit = async (d) => {
    const res = await facultyApi.edit(id, d);
    res?.status === 201
      ? navigate("/admin/dashboard/admin/data-setup/faculty")
      : setError("Failed to edit faculty");
  };
  return (
    <>
      <Breadnav pages={pages} />
      <Break title="Edit faculty" />
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
              label="Level*"
              value={arrayLevel}
              name="level_id"
              required={true}
              register={register}
              errors={errors}
            />
          </div>
          <div>
            <Input
              type="text"
              placeholder="Science"
              name="faculty_name"
              label="Faculty*"
              errors={errors}
              register={register}
            />
          </div>
        </div>
        <div className="sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 grid grid-cols-1 gap-4">
          <div className="md:flex-row w-fit col-span-full lg:col-span-2 flex flex-col my-6 ml-auto">
            <div className=" w-fit">
              <Link
                to="/admin/dashboard/admin/data-setup/faculty"
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

export default EditFaculty;
