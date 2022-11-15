import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

import { Link } from 'react-router-dom';
import {
  Checkbox,
  DateInput,
  Input,
  Password,
  Select,
  Upload,
} from '../../../../../../../components/common/fields';
const arrayGender = [
  {
    id: 1,
    name: 'Boy',
  },
  {
    id: 2,
    name: 'Girl',
  },
];
const arrayBloodGroup = [
  {
    name: 'A+',
    id: 1,
  },
  {
    name: 'A-',
    id: 2,
  },
  {
    name: 'B+',
    id: 3,
  },
  {
    name: 'B-',
    id: 4,
  },
  {
    name: 'O+',
    id: 5,
  },
  {
    name: 'O-',
    id: 6,
  },
  {
    name: 'AB+',
    id: 7,
  },
  {
    name: 'Ab-',
    id: 8,
  },
];
const DetailsForm = () => {
  const [date, setDate] = useState('');
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors, isValid },
  } = useForm();
  const anotherChild = watch('has_siblings');
  // personal.dob
  return (
    <form className="form-solid my-6 rounded-md">
      <div className="sm:grid-cols-2  lg:grid-cols-3 xl:grid-cols-4 grid grid-cols-1 gap-4">
        <div>
          <Input
            label="First Name*"
            placeholder="Roshan"
            register={register}
            name="personal[first_name]"
            errors={errors}
            required={true}
          />
        </div>
        <div className="">
          <Input
            label="Middle Name"
            placeholder="Bahadur"
            register={register}
            name="personal[middle_name]"
          />
        </div>
        <div className="">
          <Input
            label="Last Name*"
            placeholder="Dahal"
            register={register}
            errors={errors}
            required={true}
            name="personal[last_name]"
          />
        </div>

        <div className="">
          <Input
            label="Username"
            placeholder="@roshandahal"
            name="personal[username]"
            register={register}
            required={true}
            errors={errors}
          />
        </div>
        <div className="">
          <Password
            label="Password"
            placeholder="Password"
            name="personal[password]"
            register={register}
            required={true}
            errors={errors}
          ></Password>
        </div>
        <div className="">
          <Input
            label="Mobile Number"
            placeholder="981234567"
            register={register}
            name="personal[mobile_number]"
          />
        </div>
        <div className="">
          <Input
            label="Email"
            placeholder="mail@hoymail.com"
            type="email"
            register={register}
            name="personal[email]"
          />
        </div>
        <div className="">
          <Select
            value={arrayGender}
            label="Gender*"
            required={true}
            register={register}
            errors={errors}
            name="personal[gender]"
          />
        </div>
        <div className="">
          <Select
            label="BLood Group"
            value={arrayBloodGroup}
            register={register}
            name="personal[blood_group]"
          />
        </div>
        <div className="">
          <DateInput
            selected={date}
            setSelected={setDate}
            label="Date of birth"
          />
        </div>
        <div className="">
          <Upload
            name="personal[birth_cit_certificate]"
            accept="image/*,.pdf"
            label="Birth/Citizenship Certificate*"
            required={true}
            errors={errors}
            watch={watch}
            register={register}
            id="556565565_Form_birth_certificate"
          />
        </div>
        <div className="">
          <Upload
            name="personal[profile_picture]"
            accept="image/*"
            label="Photo*"
            required={true}
            errors={errors}
            watch={watch}
            id="6456463546_Form_photo"
            register={register}
          />
        </div>
      </div>

      <div className="relative z-0 flex items-start mt-6">
        <Checkbox
          register={register}
          id="956526565_form_checkbox"
          name="personal[has_siblings]"
          label="Has another child admitted"
        />
      </div>
      <div className="w-full">
        <div className=" w-fit ml-auto">
          <Link
            to="/admin/dashboard/student/student-information/"
            className="secondary_btn"
          >
            Cancel
          </Link>
          <Link
            to={`/admin/dashboard/student/student-information/add-student-details/guardian-${
              anotherChild || 'true'
            }`}
            className="primary_btn"
          >
            Next
          </Link>
        </div>
      </div>
    </form>
  );
};

export default DetailsForm;
