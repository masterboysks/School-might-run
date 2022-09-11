import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { Input, Select } from "../../../../../../../components/common/fields";
import Breadnav from "../../../../../../../components/common/Breadnav";
import Break from "../../../../../../../components/common/Break";
import facultyApi from "../../../../../../../api/admin/dashboard/admin/data-setup/facultyApi";
import { useForm } from "react-hook-form";
import { useEffect } from "react";
import subFacultyApi from "../../../../../../../api/admin/dashboard/admin/data-setup/subFacultyApi";
const pages = [
  { name: "Admin", href: "#", current: false },
  {
    name: "Date setup",
    href: "#",
    current: false,
  },
  {
    name: "Sub-Faculty",
    href: "/admin/dashboard/admin/data-setup/sub-faculty",
    current: false,
  },
  {
    name: "Add",
    href: "#",
    current: true,
  },
];
const AddSubFaculty = () => {
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm();
  const [arrayFaculty, setArrayFaculty] = useState([]);
  const [error, setError] = useState("");
  useEffect(() => {
    (async () => {
      const data = await facultyApi.getAll();
      setArrayFaculty(data?.data?.data);
    })();
  }, []);
  const navigate = useNavigate();
  const onSubmit = async (d) => {
    const res = await subFacultyApi.create(d);
    res?.status === 201
      ? navigate("/admin/dashboard/admin/data-setup/sub-faculty")
      : setError("Failed to create sub-faculty");
  };
  return (
    <>
      <Breadnav pages={pages} />
      <Break title="Add Sub-faculty" />
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
              value={arrayFaculty}
              label="Faculty*"
              required={true}
              selected="Select"
              errors={errors}
              register={register}
              name="faculty_id"
            />
          </div>
          <div>
            <Input
              label="Sub-faculty*"
              placeholder="Bio"
              id="subFaculty"
              required={true}
              errors={errors}
              register={register}
              name="subfaculty_name"
            />
          </div>
        </div>
        <div className="sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 grid grid-cols-1 gap-4">
          <div className="md:flex-row w-fit col-span-full lg:col-span-2 flex flex-col my-6 ml-auto">
            <div className=" w-fit">
              <Link
                to="/admin/dashboard/admin/data-setup/sub-faculty"
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

export default AddSubFaculty;
