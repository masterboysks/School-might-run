import { Link } from "react-router-dom";
import Breadnav from "../../../../../../components/common/Breadnav";
import Break from "../../Break";
import {
  MultipleSelect,
  Select,
} from "../../../../../../components/common/fields";
import { useForm } from "react-hook-form";

const pages = [
  { name: "Staff", href: "#", current: false },
  {
    name: "Teacher assign",
    href: "/staff/teacher-assign/",
    current: false,
  },

  {
    name: "Assign Teacher",
    href: "/staff/teacher-assign/assign-teacher",
    current: true,
  },
];
const arrayDepartment = [
  { id: 1, name: "THis" },
  { id: 2, name: "All" },
];
function AssignTeacher() {
  const {
    register,
    formState: { errors },
    control,
    handleSubmit,
  } = useForm();
  return (
    <>
      <Breadnav pages={pages} />
      <div className="ring-black ring-opacity-5 ring-1 form-solid lg:w-4/6 p-4 my-6 rounded-md shadow">
        <div className="md:grid-cols-2 gap-x-5 gap-y-2 grid grid-cols-1">
          <div className="flex justify-between py-2 border-b-[1px] border-b-primary-grey-300 ">
            <span className="text-primary-grey-600">Class:</span>
            <span className="text-primary-grey-700">1</span>
          </div>
          <div className="flex justify-between py-2 border-b-[1px] border-b-primary-grey-300 ">
            <span className="text-primary-grey-600">Section:</span>
            <span className="text-primary-grey-700">B</span>
          </div>
          <div className="flex justify-between py-2 border-b-[1px] border-b-primary-grey-300 ">
            <span className="text-primary-grey-600">Level:</span>
            <span className="text-primary-grey-700">School level</span>
          </div>
          <div className="flex justify-between py-2 border-b-[1px] border-b-primary-grey-300 ">
            <span className="text-primary-grey-600">No of students:</span>
            <span className="text-primary-grey-700">1</span>
          </div>
          <div className=" flex justify-between py-2">
            <span className="text-primary-grey-600">Faculty:</span>
            <span className="text-primary-grey-700"></span>
          </div>
        </div>
      </div>
      <Break title="Assign teacher" />
      <form className="form-solid my-6 rounded-md">
        <div className="sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 grid grid-cols-1 gap-4">
          <div className="">
            <Select
              register={register}
              name="department"
              value={arrayDepartment}
              label="Department*"
            />
          </div>
          <div className="">
            <Select
              register={register}
              name="designation"
              value={arrayDepartment}
              label="Designation*"
            />
          </div>

          <div className="">
            <Select
              label="Teacher name*"
              name="teacher_name"
              value={arrayDepartment}
              register={register}
            />
          </div>

          <div className="">
            <Select
              label="Teacher ID*"
              value={arrayDepartment}
              register={register}
              name="teacher_id"
            />
          </div>
          <div className="">
            <MultipleSelect
              control={control}
              label="Subject*"
              value={arrayDepartment}
              name="subject"
            />

            <div className="mt-3">
              *Note : You can select multiple subject at once
            </div>
          </div>
        </div>
        <div className="w-full my-6">
          <div className=" w-fit ml-auto">
            <Link
              to="/admin/dashboard/staff/teacher-assign"
              className="bg-primary-grey-50 text-primary-grey-700 hover: focus:outline-none focus:ring- focus:ring-offset-2 sm:w-auto inline-flex items-center justify-center px-4 py-3 mr-3 text-sm font-medium border border-transparent rounded-md shadow-sm"
            >
              Back
            </Link>
            <Link
              to="/admin/dashboard/staff/teacher-assign"
              className="bg-primary-btn hover: focus:outline-none focus:ring- focus:ring-offset-2 sm:w-auto inline-flex items-center justify-center px-4 py-3 text-sm font-medium text-white border border-transparent rounded-md shadow-sm"
            >
              Save
            </Link>
          </div>
        </div>
      </form>
    </>
  );
}

export default AssignTeacher;
