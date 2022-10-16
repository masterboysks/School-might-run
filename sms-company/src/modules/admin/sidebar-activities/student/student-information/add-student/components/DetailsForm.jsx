import Upload from "@mui/icons-material/UploadOutlined";
import { useForm } from "react-hook-form";

import { Link } from "react-router-dom";
import { Input, Select } from "../../../../../../../components/common/fields";
const arrayGender = [
  {
    id: 1,
    name: "Boy",
  },
  {
    id: 2,
    name: "Girl",
  },
];
const arrayBloodGroup = [
  {
    name: "A+",
    id: 1,
  },
  {
    name: "A-",
    id: 2,
  },
  {
    name: "B+",
    id: 3,
  },
  {
    name: "B-",
    id: 4,
  },
  {
    name: "O+",
    id: 5,
  },
  {
    name: "O-",
    id: 6,
  },
  {
    name: "AB+",
    id: 7,
  },
  {
    name: "Ab-",
    id: 8,
  },
];
const DetailsForm = ({ anotherChildToggle, anotherChild }) => {
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm();
  return (
    <form className="form-solid my-6 rounded-md">
      <div className="sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 grid grid-cols-1 gap-4">
        <div>
          <Input
            label="First Name*"
            placeholder="Roshan"
            register={register}
            name="first_name"
            errors={errors}
            required={true}
          />
        </div>
        <div className="">
          <Input
            label="Middle Name"
            placeholder="Bahadur"
            register={register}
            name="middle_name"
          />
        </div>
        <div className="">
          <Input
            label="Last Name*"
            placeholder="Dahal"
            register={register}
            errors={errors}
            required={true}
            name="last_name"
          />
        </div>
        <div className="">
          <Input
            label="Mobile Number"
            placeholder="981234567"
            register={register}
            name="mobile_number"
          />
        </div>
        <div className="">
          <Input
            label="Email"
            placeholder="mail@hoymail.com"
            type="email"
            register={register}
            name="email"
          />
        </div>
        <div className="">
          <Select
            value={arrayGender}
            label="Gender*"
            required={true}
            register={register}
            errors={errors}
            name="gender"
          />
        </div>
        <div className="">
          <Select
            label="BLood Group"
            value={arrayBloodGroup}
            register={register}
            name="blood_group"
          />
        </div>
        <div className="">
          <label className="my-6 text-sm" htmlFor="Student Id">
            Date Of Birth
          </label>
          <br />
          <input
            className=" mt-[6px] w-full p- rounded  focus:ring-primary-btn    border-primary-field shadow-md placeholder:text-primary-grey-40 text-primary-grey-700 text-sm"
            type="date"
            placeholder="Id"
          />
        </div>
        <div className="">
          <label htmlFor="cover-photo" className=" block text-sm">
            Birth/Citizenship Certificate*
          </label>
          <div className=" mt-[6px] sm:col-span-2 ">
            <div className=" flex w-full px-3 py-2 border-2 border-gray-300 border-dashed rounded-md">
              <div className=" w-full space-y-1">
                <div className=" w-full text-sm">
                  <label
                    htmlFor="file-upload"
                    className="text-primary-grey-700 -indigo-600 hover:text-focus-within:outline-none focus-within:ring- focus-within:ring-offset-0 flex items-center justify-between w-full text-sm bg-white rounded-md cursor-pointer"
                  >
                    <div>Upload here</div>
                    <div className="text-primary-btn">
                      <Upload />
                    </div>
                    <input
                      id="file-upload"
                      name="file-upload"
                      type="file"
                      className="sr-only"
                    />
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="photo" className=" block text-sm">
            Photo
          </label>
          <div className="mt-[6px] sm:mt-0 sm:col-span-2">
            <div className="text-primary-gray-700 flex items-center">
              <span className=" w-12 h-12 overflow-hidden rounded-full">
                <svg
                  className="w-full h-full text-gray-300"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </span>
              <input
                type="file"
                className="text-primary-gray- hover:bg-gray-50 focus:outline-none focus:ring- focus:ring-offset-2 hidden px-3 py-2 ml-5 text-sm font-medium leading-4 bg-white rounded-md"
                name="file"
                id="file"
              />
              <label
                htmlFor="file"
                className="bg-primary-grey-200 cursor-pointer border-primary-field border-[1px] rounded ml-2 p-1 text-primary-grey-700"
              >
                Choose a file to upload
              </label>
            </div>
          </div>
        </div>
      </div>

      <div className="relative z-0 flex items-start mt-6">
        <div className="flex items-center h-5">
          <input
            id="comments"
            name="comments"
            type="checkbox"
            checked={anotherChild}
            className="focus:ring- text-primary-btn focus:ring-0 focus:ring-offset-0 w-4 h-4 border-gray-300 rounded"
            onChange={() => {
              anotherChildToggle(!anotherChild);
            }}
          />
        </div>
        <div className="ml-3 text-sm">
          <label htmlFor="comments" className="font-sm text-primary-grey-700">
            Has another child admitted
          </label>
        </div>
      </div>
      <div className="w-full">
        <div className=" w-fit ml-auto">
          <Link
            to="/admin/dashboard/student/student-information/"
            className="bg-primary-grey-50 text-primary-grey-700 hover: focus:outline-none focus:ring- focus:ring-offset-2 sm:w-auto inline-flex items-center justify-center px-4 py-3 mr-3 text-sm font-medium border border-transparent rounded-md shadow-sm"
          >
            Cancel
          </Link>
          <Link
            to={`/admin/dashboard/student/student-information/add-student-details/guardian-${anotherChild}`}
            className="bg-primary-btn hover: focus:outline-none focus:ring- focus:ring-offset-2 sm:w-auto inline-flex items-center justify-center px-4 py-3 text-sm font-medium text-white border border-transparent rounded-md shadow-sm"
          >
            Next
          </Link>
        </div>
      </div>
    </form>
  );
};

export default DetailsForm;
