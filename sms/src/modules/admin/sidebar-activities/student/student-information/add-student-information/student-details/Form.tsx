import { useQuery } from '@tanstack/react-query';
import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';

import { Link, useNavigate } from 'react-router-dom';
import batchApi from '../../../../../../../api/admin/dashboard/admin/data-setup/batchApi';
import {
  Checkbox,
  DateInput,
  Input,
  Password,
  Select,
  Upload,
} from '../../../../../../../components/common/fields';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import StudentFormStudentPictureAndGurdainPicture from '../../../../../../../contex/admin/student/StudentFormStudentPictureAndGurdainPicture';
const schema = yup.object().shape({
  batch_id: yup.string().required(''),
  first_name: yup
    .string()
    .required('')
    .min(2, 'Enter at lest 2 characters.')
    .max(255, 'Enter at lest 255 characters.'),
  middle_name: yup
    .string()
    .nullable()
    .transform((v, o) => (o === '' ? null : v))
    .min(2, 'Enter at lest 2 characters.')
    .max(255, 'Enter at lest 255 characters.'),
  last_name: yup
    .string()
    .required('')
    .min(2, 'Enter at lest 2 characters.')
    .max(255, 'Enter at lest 255 characters.'),
  username: yup.string().required(''),
  email: yup.string().required(''),
  mobile_number: yup
    .number()
    .min(1000000000, 'Enter 10 digit number.')
    .max(10000000000 - 1, 'Enter 10 digit number.'),
  password: yup.string().required(''),
  gender: yup.string().required(''),
  blood_group: yup.string().required(''),
  has_siblings: yup.boolean(),
});
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
  const navigator = useNavigate();
  const formState = useContext(StudentFormStudentPictureAndGurdainPicture);
  const [date, setDate] = useState<string>(formState.values?.dob || '');
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors, isValid },
  } = useForm({
    resolver: yupResolver(schema),
    mode: 'onBlur',
    defaultValues: { ...formState.values?.personal },
  });
  const { data: batchOptions } = useQuery({
    queryFn: () => batchApi.getAll(),
    queryKey: ['batchapigetall'],
    select: (d) => d.data.data,
    staleTime: Infinity,
  });
  const onSubmit = (d) => {
    formState?.setValues((c) => {
      return {
        ...c,
        personal: { ...d, dob: date },
      };
    });
    navigator('guardian');
  };
  return (
    <form
      className="form-solid my-6 rounded-md"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="sm:grid-cols-2  lg:grid-cols-3 xl:grid-cols-4 grid grid-cols-1 gap-4">
        <div>
          <Input
            label="First Name*"
            placeholder="Roshan"
            register={register}
            name="first_name"
            errors={errors}
          />
        </div>
        <div className="">
          <Input
            label="Middle Name"
            placeholder="Bahadur"
            register={register}
            name="middle_name"
            errors={errors}
          />
        </div>
        <div className="">
          <Input
            label="Last Name*"
            placeholder="Dahal"
            register={register}
            errors={errors}
            name="last_name"
          />
        </div>
        <div className="">
          <Select
            disabled={!batchOptions}
            key={batchOptions ? 1 : 2}
            value={batchOptions}
            errors={errors}
            register={register}
            label="Batch*"
            name="batch_id"
          />
        </div>
        <div className="">
          <Input
            label="Username*"
            placeholder="@roshandahal"
            name="username"
            errors={errors}
            register={register}
          />
        </div>
        <div className="">
          <Password
            label="Password*"
            placeholder="Password"
            name="password"
            register={register}
            errors={errors}
          ></Password>
        </div>
        <div className="">
          <Input
            label="Mobile Number"
            errors={errors}
            placeholder="981234567"
            register={register}
            name="mobile_number"
          />
        </div>
        <div className="">
          <Input
            label="Email"
            placeholder="mail@hoymail.com"
            errors={errors}
            type="email"
            register={register}
            name="email"
          />
        </div>
        <div className="">
          <Select
            value={arrayGender}
            label="Gender*"
            register={register}
            errors={errors}
            name="gender"
          />
        </div>
        <div className="">
          <Select
            label="BLood Group*"
            errors={errors}
            value={arrayBloodGroup}
            register={register}
            name="blood_group"
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
            name="birth_cit_certificate"
            accept="image/*,.pdf"
            label="Birth/Citizenship Certificate*"
            errors={errors}
            watch={watch}
            required
            register={register}
            id="556565565_Form_birth_certificate"
          />
        </div>
        <div className="">
          <Upload
            name="profile_picture"
            accept="image/*"
            label="Photo*"
            required
            errors={errors}
            watch={watch}
            id="6456463546_Form_photo"
            register={register}
          />
        </div>
      </div>

      <div className="w-full">
        <div className=" w-fit ml-auto">
          <Link
            to="/admin/dashboard/student/student-information/"
            className="secondary_btn"
          >
            Cancel
          </Link>
          <button
            type="submit"
            // to={`/admin/dashboard/student/student-information/add-student-details/guardian-${
            //   anotherChild || 'true'
            // }`}
            // disabled={!isValid}
            className="primary_btn"
          >
            Next
          </button>
        </div>
      </div>
    </form>
  );
};

export default DetailsForm;
