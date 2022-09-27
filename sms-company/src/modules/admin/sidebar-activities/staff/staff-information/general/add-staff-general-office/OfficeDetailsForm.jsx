import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import departmentApi from "../../../../../../../api/admin/dashboard/admin/data-setup/departmentApi";
import {
  Input,
  Password,
  Select,
  SelectDisabled,
} from "../../../../../../../components/common/fields";

import { useState, useEffect, useContext } from "react";
import designationApi from "../../../../../../../api/admin/dashboard/admin/data-setup/designationApi";
import StaffFormPersonalDetailsPicture from "../../../../../../../contex/StaffFormPersonalDetailsPicture";
import staffAPI from "../../../../../../../api/admin/dashboard/staff/staffAPI";

const arrayStatus = [
  {
    name: "Active",
    id: 1,
  },
  {
    name: "Inactive",
    id: 0,
  },
];
const PermanentAddressForm = () => {
  const [message, setMessage] = useState("");
  const photo = useContext(StaffFormPersonalDetailsPicture);
  const {
    register,
    watch,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const department = watch("department_id");
  const [arrayDepartment, setArrayDepartment] = useState([]);
  const [arrayDesignation, setArrayDesignation] = useState([]);
  const [arrayStaffType, setArrayStaffType] = useState([
    { name: "Teacher", id: "teacher" },
    { name: "Staff", id: "staff" },
  ]);
  useEffect(() => {
    (async () => {
      try {
        const temp = await designationApi.getAll(department);
        setArrayDesignation(temp?.data?.data);
      } catch (e) {
        console.warn(e);
      }
    })();
  }, [department]);

  useEffect(() => {
    (async () => {
      try {
        const temp = await departmentApi.getAll();
        setArrayDepartment(temp?.data?.data);
      } catch (e) {
        console.warn(e);
      }
    })();
    console.log(photo.photo);
  }, []);
  const onSubmit = async (d) => {
    const form = new FormData();
    const address = JSON.parse(localStorage.getItem("adgdsas"));
    if (address.same_as_permanent_address) {
      delete address.temp_country;
      delete address.temp_district;
      delete address.temp_province;
      delete address.temp_vdc_municipality;
      delete address.temp_tole;
      delete address.temp_ward;
    }
    const personal = JSON.parse(localStorage.getItem("pdgdsas"));
    for (const name in address) {
      form.append(`address[${name}]`, address[name]);
    }
    for (const name in personal) {
      form.append(`personal[${name}]`, personal[name]);
    }
    for (const name in d) {
      form.append(`general[${name}]`, d[name]);
    }
    form.delete("personal[photo]");
    form.append(`personal[profile_picture]`, photo?.photo && photo?.photo[0]);
    const res = await staffAPI.create(form);
    console.log(res);
    // navigate("/admin/dashboard/staff/staff-information/");
  };
  const handelBack = (data) => {
    localStorage.setItem("odgdsas", JSON.stringify(data));
    navigate(
      "/admin/dashboard/staff/staff-information/add-staff/general/address-details"
    );
  };
  useEffect(() => {
    (async () => {
      const temp = await JSON.parse(localStorage.getItem("odgdsas"));
      reset(temp);
    })();
  }, []);
  return (
    <form
      className="form-solid my-6 rounded-md"
      onSubmit={handleSubmit(onSubmit)}
    >
      {" "}
      {message && (
        <>
          <div
            className={`${
              error && "!text-red-600"
            } text-green-500 font-medium text-lg`}
          >
            {message}
          </div>
          <br />
        </>
      )}
      <div className="sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 grid grid-cols-1 gap-4">
        <div className="">
          <Select
            label="Staff type*"
            value={arrayStaffType}
            register={register}
            errors={errors}
            name="type"
            required={true}
          />
        </div>
        <div className="">
          {arrayDepartment.length !== 0 ? (
            <Select
              label="Department*"
              value={arrayDepartment}
              register={register}
              errors={errors}
              name="department_id"
              required={true}
            />
          ) : (
            <SelectDisabled label="Department*" />
          )}
        </div>
        <div className="">
          {department && arrayDesignation.length !== 0 ? (
            <Select
              label="Designation*"
              required={true}
              name="designation_id"
              value={arrayDesignation}
              errors={errors}
              register={register}
            />
          ) : (
            <SelectDisabled label="Designation*" />
          )}
        </div>
        <div className="">
          <Input
            label="Joined date*"
            name="joined_date"
            type="date"
            required={true}
            errors={errors}
            register={register}
          />
        </div>
        <div className="">
          <Input
            label="Username*"
            name="username"
            required={true}
            register={register}
            errors={errors}
          />
        </div>
        <div className="">
          <Password
            label="Password*"
            placeholder="Jhbash88_@33JDSjaSkeow457qjds8JKF74ww4F"
            register={register}
            errors={errors}
            required={true}
            name="password"
          />
        </div>
        <div className="">
          <Select
            label="Status*"
            value={arrayStatus}
            register={register}
            required={true}
            errors={errors}
            name="is_active"
          />
        </div>
      </div>
      <div className="w-full my-6">
        <div className=" w-fit ml-auto">
          <button
            onClick={handleSubmit(handelBack)}
            className="bg-primary-grey-50 text-primary-grey-700 hover: focus:outline-none focus:ring- focus:ring-offset-2 sm:w-auto inline-flex items-center justify-center px-4 py-3 mr-3 text-sm font-medium border border-transparent rounded-md shadow-sm"
          >
            Back
          </button>
          <button
            type="submit"
            className="bg-primary-btn hover: focus:outline-none focus:ring- focus:ring-offset-2 sm:w-auto inline-flex items-center justify-center px-4 py-3 text-sm font-medium text-white border border-transparent rounded-md shadow-sm"
          >
            Save
          </button>
        </div>
      </div>
    </form>
  );
};

export default PermanentAddressForm;
