import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate, useParams } from "react-router-dom";
import staffAPI from "../../../../../../../../api/admin/dashboard/staff/staffAPI";
import {
  Input,
  Select,
} from "../../../../../../../../components/common/fields";
const arrayLevel = [
  {
    name: "Secondary level",
    id: "Secondary level",
  },
  {
    name: "Higher secondary",
    id: "Higher secondary",
  },
  {
    name: "Under graduate",
    id: "Under graduate",
  },
  {
    name: "Graduate",
    id: "Graduate",
  },
  {
    name: "Post Graduate",
    id: "Post Graduate",
  },
];
const arrayDivision = [
  {
    name: "A+",
    id: "A+",
  },
  {
    name: "A",
    id: "A",
  },
  {
    name: "B+",
    id: "B+",
  },
  {
    name: "B",
    id: "B",
  },
  {
    name: "C+",
    id: "C+",
  },
  {
    name: "C",
    id: "C",
  },
  {
    name: "D",
    id: "D",
  },
];
const AddAcademicDetailsForm = () => {
  const [message, setMessage] = useState("");
  const navigate = useNavigate();
  const {
    register,
    watch,
    reset,
    getValues,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { id } = useParams();
  const onSubmit = async (data) => {
    console.log(data);

    try {
      const res = await staffAPI.createAcademic(id, data);
      res.status === 201
        ? navigate(`/admin/dashboard/staff/staff-information/${id}/academic`)
        : setMessage(res?.response?.data?.message);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <form
      className="form-solid my-6 rounded-md"
      onSubmit={handleSubmit(onSubmit)}
    >
      {message && (
        <>
          <div className="!text-red-600 font-medium text-lg">{message}</div>
          <br />
        </>
      )}
      <div className="sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 grid grid-cols-1 gap-4">
        <div className="">
          <Input
            label="Board/University*"
            placeholder="Tribhuvan University"
            name="board_university"
            required={true}
            errors={errors}
            register={register}
          />
        </div>
        <div className="">
          <Select
            name="level"
            label="Level*"
            required={true}
            errors={errors}
            register={register}
            value={arrayLevel}
          />
        </div>
        <div className="">
          <Input
            label="Program"
            name="program"
            required="true"
            errors={errors}
            register={register}
            placeholder="BBA"
          />
        </div>
        <div className="">
          {" "}
          <Select
            name="division"
            label="Division*"
            required={true}
            errors={errors}
            register={register}
            value={arrayDivision}
          />
        </div>
        <div className="">
          {" "}
          <Input
            name="institution_name"
            label="Institution name*"
            required={true}
            errors={errors}
            register={register}
          />
        </div>
        <div className="">
          {" "}
          <Input
            name="institution_address"
            label="Institution address*"
            required={true}
            errors={errors}
            register={register}
          />
        </div>

        <div className="">
          {" "}
          <Input
            name="passed_year"
            label="Passed year*"
            placeholder="2010"
            required={true}
            errors={errors}
            register={register}
          />
        </div>
      </div>
      <div className="w-full my-6">
        <div className=" w-fit ml-auto">
          <Link
            to={`/admin/dashboard/staff/staff-information/${id}/academic`}
            className="secondary_btn"
          >
            Back
          </Link>
          <button type="submit" className="primary_btn">
            Save
          </button>
        </div>
      </div>
    </form>
  );
};
export default AddAcademicDetailsForm;
