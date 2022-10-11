import { Link, useNavigate } from "react-router-dom";

import AddOutlinedIcon from "@mui/icons-material/AddOutlined";

import {
  Input,
  MultipleSelect,
  Select,
} from "../../../../../../components/common/fields";
import { useState } from "react";
import Breadnav from "../../../../../../components/common/Breadnav";
import Break from "../../../../../../components/common/Break";
import subjectApi from "../../../../../../api/admin/dashboard/admin/data-setup/subjectApi";
import teacherApi from "../../../../../../api/admin/dashboard/staff/teacher/teacherApi";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import classSheduleApi from "../../../../../../api/admin/dashboard/admin/classSheduleApi";
const pages = [
  { name: "Admin", href: "#", current: false },
  {
    name: "Class schedule",
    href: "/admin/dashboard/admin/class-schedule/",
    current: false,
  },
  {
    name: "Class 1 'A'",
    href: "/admin/dashboard/admin/class-schedule/add/class-1-a",
    current: true,
  },
];
const arrayDays = [
  { name: "Sun", id: 7 },
  { name: "Mon", id: 1 },
  { name: "Tue", id: 2 },
  { name: "Wed", id: 3 },
  { name: "Thur", id: 4 },
  { id: 5, name: "Fri" },
  { name: "Sat", id: 6 },
];
function AddClassShedule() {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  const [error, setError] = useState("");
  const [arrayTeachers, setArrayTeachers] = useState([]);
  const [arraySubjects, setArraySubjects] = useState([]);
  const navigate = useNavigate();
  const onSubmit = async (data) => {
    const d = {
      ...data,
      weekdays: data.weekdays?.map((c) => c.id),
      class_id: 1,
      level_id: 1,
      section_id: 1,
    };

    console.log(d);
    const res = await classSheduleApi.create(d);
    res?.status === 201
      ? navigate("/admin/dashboard/admin/class-schedule")
      : setError("Failed to create class shedule");
  };
  useEffect(() => {
    (async () => {
      const data = await teacherApi.getAll();
      setArrayTeachers(data?.data?.data);
    })();
    (async () => {
      const data = await subjectApi.getAll();
      setArraySubjects(data?.data?.data);
    })();
  }, []);
  // const [days, setDays] = useState([]); //array for multiple
  // const [daysError, setDaysError] = useState(false);

  return (
    <>
      <div>
        <Breadnav pages={pages} />
        {/* details */}
        <div className="lg:flex my-12">
          <div className="ring-black ring-opacity-5 ring-1 form-solid lg:w-4/6 p-4 rounded-md shadow">
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
        </div>
        <Break title="Class schedule" />
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
            {/* multiple select */}
            <div className="col-span-full">
              <MultipleSelect
                name="weekdays"
                label="Days*"
                value={arrayDays}
                control={control}
                errors={errors}
                required={true}
              ></MultipleSelect>

              <div className="mt-3">
                *Note:You can select multiple items at once.
              </div>
            </div>
            <div>
              <Select
                id="subject"
                value={arraySubjects}
                label="Subject*"
                required={true}
                errors={errors}
                register={register}
                name="subject_id"
              ></Select>
            </div>
            <div>
              <Input
                id="startTimer"
                name="start_time"
                type="time"
                label="Start time*"
                errors={errors}
                register={register}
                required={true}
              />
              {/*cannot not place placeholder for type time */}
            </div>
            {/* input without placeholder */}
            <div>
              <Input
                id="endTimer"
                name="end_time"
                type="time"
                label="End time*"
                register={register}
                errors={errors}
                required={true}
              />
            </div>
            {/* select */}
            <div>
              <Select
                id="subject-teacher"
                name="teacher_id"
                label="Subject teacher*"
                required={true}
                register={register}
                errors={errors}
                value={arrayTeachers}
              ></Select>
            </div>
            <div className="col-span-full flex">
              Add subject
              <Link to="/admin/dashboard/admin/data-setup/subject/add">
                <div className="outline outline-1 outline-primary-grey-700 mx-2 rounded cursor-pointer">
                  <AddOutlinedIcon
                    text="sm"
                    className="text-primary-grey-700"
                  />
                </div>
              </Link>
            </div>

            <div className="col-span-full ml-auto">
              <div className=" w-fit my-auto">
                <Link
                  to="/admin/dashboard/admin/class-schedule"
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
      </div>
    </>
  );
}

export default AddClassShedule;
