import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import {
  Input,
  InputNumber,
  Password,
  UploadPhoto,
} from '../../../../../../../components/common/fields';
import FatheAndMotherDetail from './FatheAndMotherDetail';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useQuery } from '@tanstack/react-query';
import studentApi from '../../../../../../../api/admin/dashboard/student/studentApi';
import StudentFormStudentPictureAndGurdainPicture from '../../../../../../../contex/admin/student/StudentFormStudentPictureAndGurdainPicture';
const schema = yup.object().shape({
  local_guardian: yup.object().shape({
    first_name: yup
      .string()
      .required('')
      .min(2, 'Enter at least 2 characters.')
      .max(255, 'Cannot enter more than 255'),
    middle_name: yup
      .string()
      .nullable()
      .transform((v, o) => (o === '' ? null : v))
      .min(2, 'Enter at least 2 characters.')
      .max(255, 'Cannot enter more than 255'),
    last_name: yup
      .string()
      .required('')
      .min(2, 'Enter at least 2 characters.')
      .max(255, 'Cannot enter more than 255'),
    mobile_number: yup
      .number()
      .required('')
      .typeError('Enter a valid number')
      .min(1000000000, ''),

    email: yup.string().email('Please enter a valid mail.'),
    occupation: yup.string().required(''),
    relation: yup.string().required(''),
    username: yup.string().required(''),
    password: yup.string(),
    // .matches(/(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$"/,'Please * character long password')
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
    mobile_number: yup
      .number()
      .required('')
      .typeError('Enter a valid number')
      .min(1000000000, ''),
    email: yup.string(),

    occupation: yup.string().required(''),
  }),
  mother: yup.object().shape({
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
    mobile_number: yup
      .number()
      .required('')
      .typeError('Enter a valid number')
      .min(1000000000, ''),
    email: yup.string(),

    occupation: yup.string().required(''),
  }),
});
const GuardianDetailForm = () => {
  const navigate = useNavigate();

  const formState = useContext(StudentFormStudentPictureAndGurdainPicture);

  const [disabledFields, setDisabledFields] = useState<boolean>(
    formState?.values?.local_guardian?.already_exists || false
  );
  const {
    register,
    handleSubmit,
    reset,
    watch,
    getValues,
    formState: { errors, isValid },
  } = useForm({
    mode: 'onBlur',
    resolver: yupResolver(schema),
    defaultValues: {
      ...formState?.values?.local_guardian,
      ...formState?.values?.mother,
      ...formState?.values?.father,
    },
  });

  const mobile_value = watch('local_guardian.mobile_number');
  const { data } = useQuery({
    queryFn: () => studentApi.getLocalGurdain(mobile_value),
    queryKey: ['studentapigetlocalgurdain', mobile_value],
    enabled: mobile_value?.toString().length >= 10,
    retry: 0,
    onError: () => {
      // reset({
      //   ...getValues(),
      //   local_guardian: {
      //     email: '',
      //     first_name: '',
      //     last_name: '',
      //     middle_name: '',
      //     occupation: '',
      //     password: '',
      //     profile_picture: '',
      //     username: '',
      //   },
      // });
      setDisabledFields(false);
    },
    select: (d) => {
      return d?.data.data;
    },
    onSuccess: (d) => {
      console.log({ ...getValues(), local_guardian: { ...d } });
      reset({ ...getValues(), local_guardian: { ...d } });
      setDisabledFields(true);
    },
  });
  const onSubmit = (d) => {
    formState?.setValues((c) => {
      return {
        ...c,
        ...d,
        local_guardian: { already_exists: disabledFields },
      };
    });
    navigate(
      '/admin/dashboard/student/student-information/add-address-details'
    );
  };
  const onBack = (e) => {
    e.preventDefault();
    formState?.setValues((c) => {
      return {
        ...c,
        ...getValues(),
        local_guardian: { already_exists: disabledFields },
      };
    });
    navigate(-1);
  };
  // console.log(isValid);
  // console.log(mobile_value?.toString().length >= 10);
  return (
    <form
      className="form-solid my-6 rounded-md"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="sm:grid-cols-2  lg:grid-cols-3 xl:grid-cols-4  grid grid-cols-1 gap-4">
        <div className="">
          <InputNumber
            min={0}
            label="Mobile Number*"
            placeholder="9860625009"
            name="local_guardian.mobile_number"
            errors={errors}
            register={register}
          />
        </div>{' '}
        <div className="">
          <Input
            label="Relation*"
            name="local_guardian.relation"
            errors={errors}
            register={register}
            placeholder="Mother"
          />
        </div>
        <div>
          <Input
            label="First Name*"
            name="local_guardian.first_name"
            register={register}
            errors={errors}
            placeholder="Shuvam"
            disabled={disabledFields}
          />
        </div>
        <div className="">
          <Input
            label="Middle Name"
            name="local_guardian.middle_name"
            errors={errors}
            disabled={disabledFields}
            register={register}
            placeholder="Prashad"
          />
        </div>
        <div className="">
          <Input
            label="Last Name*"
            register={register}
            name="local_guardian.last_name"
            disabled={disabledFields}
            errors={errors}
            placeholder="Koirala"
          />
        </div>
        <div className="">
          <Input
            label="Email"
            errors={errors}
            disabled={disabledFields}
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
            disabled={disabledFields}
            errors={errors}
            register={register}
            placeholder="An architect"
          />
        </div>
        <div className="">
          <Input
            label="Username*"
            name="local_guardian.username"
            disabled={disabledFields}
            register={register}
            errors={errors}
            placeholder="@shuvamkoirala"
          />
        </div>
        <div className="">
          <Input
            label="Password"
            name="local_guardian.password"
            register={register}
            required
            errors={errors}
            placeholder="•••••••7"
          />
          <div className="mt-2">
            Input password only if you want to change it.
          </div>
        </div>
        <div className="">
          <UploadPhoto
            name="local_guardian.profile_picture"
            errors={errors}
            disabled={disabledFields}
            label="Picture"
            register={register}
            watch={watch}
            id="3131113152_Form_photo"
          />
        </div>
        <div className="flex items-center gap-2">
          <div className="">
            <button
              className="secondary_btn"
              onClick={(e) => {
                e.preventDefault();
                const temp = getValues();
                const mother = { ...getValues().local_guardian };
                delete mother.username;
                delete mother.profile_picture;
                delete mother.relation;
                delete mother.password;

                reset({
                  ...temp,
                  mother: { ...mother },
                });
              }}
            >
              Mother
            </button>
          </div>
          <div className="">
            <button
              className="secondary_btn"
              onClick={(e) => {
                e.preventDefault();
                const temp = getValues();
                const father = { ...getValues().local_guardian };
                delete father.username;
                delete father.profile_picture;
                delete father.relation;
                delete father.password;

                reset({
                  ...temp,
                  father: { ...father },
                });
              }}
            >
              Father
            </button>
          </div>
        </div>
      </div>
      <FatheAndMotherDetail errors={errors} register={register} />
      <div className="w-full">
        <div className=" w-fit ml-auto">
          <button className="secondary_btn" onClick={onBack}>
            Back
          </button>
          <button type="submit" className="primary_btn" disabled={!isValid}>
            Next
          </button>
        </div>
      </div>
    </form>
  );
};

export default GuardianDetailForm;
