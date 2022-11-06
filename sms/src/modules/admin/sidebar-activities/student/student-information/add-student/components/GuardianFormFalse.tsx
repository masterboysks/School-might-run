import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import {
  Input,
  InputNumber,
  Password,
  UploadPhoto,
} from '../../../../../../../components/common/fields';
import FatheAndMotherDetail from './FatheAndMotherDetail';

const GuardianFormFalse = () => {
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm();
  return (
    <form className="form-solid my-6 rounded-md">
      <div className="sm:grid-cols-2  lg:grid-cols-3 xl:grid-cols-4  grid grid-cols-1 gap-4">
        <div>
          <Input
            label="First Name*"
            name="local_guardian[first_name]"
            register={register}
            required={true}
            errors={errors}
            placeholder="Shuvam"
          />
        </div>
        <div className="">
          <Input
            label="Middle Name"
            name="local_guardian[middle_name]"
            register={register}
            placeholder="Prashad"
          />
        </div>
        <div className="">
          <Input
            label="Last Name*"
            required={true}
            register={register}
            name="local_guardian[last_name]"
            errors={errors}
            placeholder="Koirala"
          />
        </div>
        <div className="">
          <InputNumber
            label="Mobile Number*"
            required={true}
            placeholder="9860625009"
            name="local_guardian[mobile_number]"
            errors={errors}
            register={register}
          />
        </div>
        <div className="">
          <Input
            label="Email"
            type="email"
            placeholder="abc@yahoo.com"
            name="local_guardian[email]"
            register={register}
          />
        </div>
        <div className="">
          <Input
            label="Occupation*"
            name="local_guardian[occupation]"
            required={true}
            errors={errors}
            register={register}
            placeholder="An architect"
          />
        </div>
        <div className="">
          <Input
            label="Relation*"
            name="local_guardian[relation]"
            required={true}
            errors={errors}
            register={register}
            placeholder="Mother"
          />
        </div>
        <div className="">
          <Input
            label="Username*"
            name="local_guardian[username]"
            register={register}
            errors={errors}
            required={true}
            placeholder="@shuvamkoirala"
          />
        </div>
        <div className="">
          <Password
            label="Password*"
            name="local_guardian[password]"
            register={register}
            errors={errors}
            requred={true}
            placeholder="Password"
          />
        </div>
        <div className="">
          <UploadPhoto
            name="local_guardian[profile_picture]"
            label="Picture"
            register={register}
            watch={watch}
            id="3131113152_Form_photo"
          />
        </div>
      </div>
      <FatheAndMotherDetail errors={errors} register={register} />
      <div className="w-full">
        <div className=" w-fit ml-auto">
          <Link
            to="/admin/dashboard/student/student-information/add-student-details"
            className="secondary_btn"
          >
            Back
          </Link>
          <Link
            to={`/admin/dashboard/student/student-information/add-address-details`}
            className="primary_btn"
          >
            Next
          </Link>
        </div>
      </div>
    </form>
  );
};

export default GuardianFormFalse;
