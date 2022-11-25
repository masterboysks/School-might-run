import React from 'react';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import organizationSetupApi from '../../../../../api/admin/dashboard/admin/organizationSetupApi';
import {
  DateInput,
  Input,
  Select,
  UploadPhoto,
} from '../../../../../components/common/fields';
import LocationForm from '../../../../../components/common/LocationForm';

import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const arrayDateFormat = [
  { id: 1, name: 'AD' },
  { id: 2, name: 'BS' },
];

const schema = yup.object().shape({
  company_name: yup.string().required('').max(255, 'Max size 255.'),
  registration_no: yup.string().required('').max(255, 'Max size 255.'),
  pan_no: yup.string().required('').max(255, 'Max size 255.'),
  postal_code: yup
    .string()
    .nullable()
    .min(4, 'Min size 4.')
    .max(255, 'Max size 255.'),
  mobile_no: yup
    .string()
    .required('')
    .min(10, 'Min size 10.')
    .max(15, 'Max size 15.'),
  tel_no: yup
    .string()
    .required('')
    .min(7, 'Min size 07.')
    .max(15, 'Max size 15.'),
  alt_tel_no: yup.string().max(15, 'Max size 15.'),
  website: yup.string().nullable().max(255, 'Max size 255.'),
  company_email: yup
    .string()
    .required('')
    .email('Please enter valid email')
    .max(255, 'Max size 255.'),
  country: yup.string().required('').max(255, 'Max size 255.'),
  province: yup.string().required('').max(255, 'Max size 255.'),
  district: yup.string().required('').max(255, 'Max size 255.'),
  vdc_municipality: yup.string().required('').max(255, 'Max size 255.'),
  ward_no: yup.string().required('').max(255, 'Max size 255.'),
  tole: yup.string().required('').max(255, 'Max size 255.'),
  google_map_link: yup.string().nullable().max(255, 'Max size 255.'),
  date_format: yup.string().required('').max(255, 'Max size 255.'),
  company_logo: yup.string(),
});
const Form = () => {
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { isValid, errors },
  } = useForm({
    mode: 'onBlur',
    resolver: yupResolver(schema),
  });
  const [date, setDate] = useState<String | Object>('');
  const [error, setError] = useState(false);
  const [message, setMessage] = useState('');
  const [defaultDate, setDefaultDate] = useState('');
  const onSubmit = async (data) => {
    // console.log(date);
    const d = {
      ...data,
      established_at: date?.date || date,
    };

    const form = new FormData();
    for (const name in d) {
      form.append(name, d[name]);
    }
    d.company_logo.length === 1
      ? form.append('company_logo', d.company_logo[0])
      : form.append('company_logo', '');

    try {
      const res = await organizationSetupApi.edit(form);
      if (!(res?.status === 201)) {
        setMessage('Failed to update Organization details');
        setError(true);
      } else {
        setError(false);
        setMessage('Organization details updated sucesfully');
      }
    } catch (error) {
      // console.log(error);
    }
  };
  const resetData = async () => {
    const data = await organizationSetupApi.get();
    const defaultData = data?.data?.data;
    reset({
      ...defaultData,
    });
    setDate(defaultData?.established_at);
    setDefaultDate(defaultData?.established_at);
  };
  useEffect(() => {
    resetData();
  }, []);

  return (
    <form
      className="form-solid w-full my-6 rounded-md"
      onSubmit={handleSubmit(onSubmit)}
    >
      {message && (
        <>
          <div
            className={`${
              error && '!text-red-600'
            } text-green-500 font-medium text-lg`}
          >
            {message}
          </div>
          <br />
        </>
      )}
      <div className="sm:grid-cols-2  lg:grid-cols-3 xl:grid-cols-4 grid grid-cols-1 gap-4">
        <div>
          <Input
            label="School/College Name*"
            register={register}
            placeholder="XYZ school"
            errors={errors}
            name="company_name"
          />
        </div>
        <div className="">
          <Input
            label="Registration no.*"
            register={register}
            placeholder="468456464584464"
            errors={errors}
            name="registration_no"
            type="number"
          />
        </div>
        <div className="">
          <Input
            label="Pan no.*"
            register={register}
            errors={errors}
            name="pan_no"
            placeholder="21445165412154"
            type="number"
          />
        </div>
        <div className="">
          <Input
            label="Postal code"
            placeholder="33650"
            register={register}
            name="postal_code"
            type="number"
          />
        </div>
        <div className="">
          <Input
            label="Mobile Number*"
            placeholder="214451654"
            name="mobile_no"
            errors={errors}
            register={register}
            type="number"
          />
        </div>
        <div className="">
          <Input
            label="Telephone Number*"
            placeholder="015521332"
            register={register}
            errors={errors}
            name="tel_no"
            type="number"
          />
        </div>
        <div className="">
          <Input
            label="Alternative Number"
            placeholder="015521335"
            name="alt_tel_no"
            register={register}
            type="number"
          />
        </div>
        <div className="">
          <Input
            label="Website"
            placeholder="https://www.xyz.com"
            register={register}
            type="url"
            name="website"
          />
        </div>
        <div className="">
          <Input
            label="Email*"
            name="company_email"
            type="email"
            placeholder="mail@xyz.com.edu"
            register={register}
            errors={errors}
          />
        </div>

        <LocationForm watch={watch} register={register} errors={errors} />
        <div className="">
          <Input
            label="Ward no.*"
            name="ward_no"
            register={register}
            errors={errors}
            placeholder="11"
            type="number"
          />
        </div>
        <div className="">
          <Input
            label="Tole.*"
            errors={errors}
            register={register}
            name="tole"
            placeholder="XYZ"
          />
        </div>
        <div className="">
          <Input
            label="Google map link"
            name="google_map_link"
            type="url"
            register={register}
            placeholder="Link here"
          />
        </div>
        <div className="">
          <Select
            label="AD/BS*"
            value={arrayDateFormat}
            register={register}
            errors={errors}
            name="date_format"
          />

          <span className="text-sm">
            Note:Selected date format will be used in whole system.
          </span>
        </div>
        <div className="">
          <DateInput
            register={register}
            selected={date}
            setSelected={setDate}
            label="Established date*"
            defaultDate={defaultDate}
          />
        </div>
        <div className="">
          <UploadPhoto
            label="School logo"
            name="company_logo"
            register={register}
            id="company_logo"
            watch={watch}
          />
        </div>
      </div>

      <div className="md:flex-row flex flex-col justify-between w-full my-6">
        <div className="w-44">
          *Note:Please upload logo of school as below
          <img src="/logoHeader.png" alt="" className="my-3" />
        </div>
        <div className=" w-fit my-auto">
          <button
            onClick={() => {
              resetData();
            }}
            className="secondary_btn"
          >
            Cancel
          </button>
          <button type="submit" className="primary_btn ">
            Save
          </button>
        </div>
      </div>
    </form>
  );
};

export default Form;
