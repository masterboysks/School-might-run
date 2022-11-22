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
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
const schema = yup.object().shape({
  local_guardian: yup.object().shape({
    already_exists: yup.string().required(''),
    first_name: yup
      .string()
      .required('')
      .min(2, 'Enter at least 2 characters.')
      .max(255, 'Cannot enter more than 255'),
    middle_name: yup
      .string()
      .min(2, 'Enter at least 2 characters.')
      .max(255, 'Cannot enter more than 255'),
    last_name: yup
      .string()
      .required('')
      .min(2, 'Enter at least 2 characters.')
      .max(255, 'Cannot enter more than 255'),
    mobile_number: yup.number().required('').typeError('Enter a valid number'),
    email: yup.string().email('Please enter a valid mail.'),
    occupation: yup.string().required(''),
    relation: yup.string().required(''),
    username: yup.string().required(''),
    password: yup.string().required(''),
  }),
  father: yup.object().shape({
    first_name: yup
      .string()
      .required('')
      .min(2, 'Please enter at least 2 characters.')
      .max(255, 'Cannot be longer than 255.'),
    middle_name: yup
      .string()
      .nullable()
      .min(2, 'Please enter at least 2 characters.')
      .max(255, 'Cannot be longer than 255.'),
    last_name: yup
      .string()
      .required('')
      .min(2, 'Please enter at least 2 characters.')
      .max(255, 'Cannot be longer than 255.'),
    mobile_number: yup.string().required(''),
    email: yup.string().nullable(),

    occupation: yup.string().required(''),
  }),
});
const GuardianDetailForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors, isValid },
  } = useForm({
    mode: 'onBlur',
    resolver: yupResolver(schema),
    defaultValues: {
      local_guardian: {
        first_name: '',
        middle_name: '',
        last_name: '',
        mobile_name: '',
        email: '',
        occupation: '',
        relation: '',
        username: '',
        password: '',
        picture: '',
      },
    },
  });
  return (
    <form className="form-solid my-6 rounded-md">
      <div className="sm:grid-cols-2  lg:grid-cols-3 xl:grid-cols-4  grid grid-cols-1 gap-4">
        <div>
          <Input
            label="First Name*"
            name="local_guardian.first_name"
            register={register}
            errors={errors}
            placeholder="Shuvam"
          />
        </div>
        <div className="">
          <Input
            label="Middle Name"
            name="local_guardian.middle_name"
            errors={errors}
            register={register}
            placeholder="Prashad"
          />
        </div>
        <div className="">
          <Input
            label="Last Name*"
            register={register}
            name="local_guardian.last_name"
            errors={errors}
            placeholder="Koirala"
          />
        </div>
        <div className="">
          <InputNumber
            min={0}
            label="Mobile Number*"
            placeholder="9860625009"
            name="local_guardian.mobile_number"
            errors={errors}
            register={register}
          />
        </div>
        <div className="">
          <Input
            label="Email"
            errors={errors}
            type="email"
            placeholder="abc@yahoo.com"
            name="local_guardian.email"
            register={register}
          />
        </div>
        <div className="">
          <Input
            label="Occupation*"
            name="local_guardian.occupation"
            errors={errors}
            register={register}
            placeholder="An architect"
          />
        </div>
        <div className="">
          <Input
            label="Relation*"
            name="local_guardian.relation"
            errors={errors}
            register={register}
            placeholder="Mother"
          />
        </div>
        <div className="">
          <Input
            label="Username*"
            name="local_guardian.username"
            register={register}
            errors={errors}
            placeholder="@shuvamkoirala"
          />
        </div>

        <div className="">
          <UploadPhoto
            name="local_guardian.profile_picture"
            errors={errors}
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

export default GuardianDetailForm;
