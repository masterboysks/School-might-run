import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import {
  Input,
  Radio,
  Select,
} from "../../../../../../../components/common/fields";
import Breadnav from "../../../../../../../components/common/Breadnav";
import Break from "../../../../../../../components/common/Break";
import { useEffect } from "react";
import levelApi from "../../../../../../../api/admin/dashboard/admin/data-setup/levelApi";
import { useForm } from "react-hook-form";
import subjectApi from "../../../../../../../api/admin/dashboard/admin/data-setup/subjectApi";
const pages = [
  { name: "Admin", href: "#", current: false },
  {
    name: "Date setup",
    href: "#",
    current: false,
  },
  {
    name: "Subject",
    href: "/admin/dashboard/admin/data-setup/subject",
    current: false,
  },
  {
    name: "Add",
    href: "/admin/dashboard/admin/data-setup/subject/add",
    current: true,
  },
];
const arraySubjectTypes = [
  { name: "Compulsary subject", id: 1 },
  { name: "Elective subject", id: 2 },
];
const AddSubject = () => {
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm();
  const [arrayLevel, setArrayLevel] = useState([]);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const onSubmit = async (d) => {
    console.log(d);
    const res = await subjectApi.create(d);
    console.log(res);
    res?.status === 201
      ? navigate("/admin/dashboard/admin/data-setup/subject")
      : setError("Failed to create subject");
  };
  useEffect(() => {
    (async () => {
      const data = await levelApi.getAll();
      setArrayLevel(data?.data?.data);
    })();
  }, []);
  return (
    <>
      <Breadnav pages={pages} />
      <Break title="Add subject" />
      <form
        className="form-solid w-full my-6 rounded-md"
        onSubmit={handleSubmit(onSubmit)}
      >
        {" "}
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
              register={register}
              selected="Select"
              errors={errors}
              required={true}
              name="level_id"
            />
          </div>
          <div>
            <Input
              label="Subject*"
              placeholder="Science"
              register={register}
              errors={errors}
              required={true}
              name="subject_name"
            />
          </div>
          <div>
            <Input
              label="Credit hours*"
              type="number"
              placeholder="80"
              name="credit_hours"
              register={register}
              required={true}
              errors={errors}
            />
          </div>
          <div className="col-span-full flex my-3 space-x-4">
            <Radio
              value={arraySubjectTypes}
              register={register}
              errors={errors}
              required={true}
              name="subject_type"
            />
          </div>
        </div>
        <div className="sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-4 grid grid-cols-1 gap-4">
          <div className="md:flex-row col-span-full xl:col-span-3 flex flex-col my-6 ml-auto">
            <div className=" w-fit">
              <Link
                to="/admin/dashboard/admin/data-setup/subject"
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

export default AddSubject;
