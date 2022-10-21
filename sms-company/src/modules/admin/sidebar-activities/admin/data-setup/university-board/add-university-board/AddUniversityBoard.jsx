import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import universityBoardApi from "../../../../../../../api/admin/dashboard/admin/data-setup/universityBoardApi";
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
    name: "University/Board",
    href: "/admin/dashboard/admin/data-setup/university-board",
    current: false,
  },
  {
    name: "Add",
    href: "/admin/dashboard/admin/data-setup/university-board/add",
    current: true,
  },
];
const AddUniversityBoard = () => {
  const [error, setError] = useState("");
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const onSubmit = async (d) => {
    console.log(d);
    try {
      const res = await universityBoardApi.create(d);
      res?.status === 201
        ? navigate("/admin/dashboard/admin/data-setup/university-board")
        : setError("Failed to add university");
    } catch (errors) {
      console.warn(errors);
    }

    // university
    //   ? navigate("/admin/data-setup/university-board")
    //   : setErrorUniversity(true);
  };
  return (
    <>
      <Breadnav pages={pages} />
      <Break title="Add university/Board details" />

      <form
        className="form-solid w-full my-6 rounded-md"
        onSubmit={handleSubmit(onSubmit)}
      >
        {error && (
          <>
            <div className="text-red-600 font-medium text-lg">{error}</div>
            <br />
          </>
        )}
        <div className="sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 grid grid-cols-1 gap-4">
          <div>
            <Input
              label="University/Board*"
              placeholder="National Education Board"
              name="name"
              required={true}
              register={register}
              errors={errors}
            />
          </div>
        </div>
        <div className="sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 grid grid-cols-1 gap-4">
          <div className="md:flex-row w-fit flex flex-col my-6 ml-auto">
            <div className=" w-fit my-auto">
              <Link
                to="/admin/dashboard/admin/data-setup/university-board"
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

export default AddUniversityBoard;
