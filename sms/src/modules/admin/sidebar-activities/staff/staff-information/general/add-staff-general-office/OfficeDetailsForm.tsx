import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import departmentApi from '../../../../../../../api/admin/dashboard/admin/data-setup/departmentApi';
import {
  DateInput,
  Input,
  Password,
  Select,
} from '../../../../../../../components/common/fields';

import { useState, useEffect } from 'react';
import designationApi from '../../../../../../../api/admin/dashboard/admin/data-setup/designationApi';
import staffAPI from '../../../../../../../api/admin/dashboard/staff/staffAPI';
import React from 'react';
import { useStaffFormData } from '../../../../../../../contex/admin/staff/StaffFormData';
import { useQuery } from '@tanstack/react-query';

const arrayStatus = [
  {
    name: 'Active',
    id: 1,
  },
  {
    name: 'Inactive',
    id: 0,
  },
];
const PermanentAddressForm = () => {
  const { dataForm, setForm } = useStaffFormData();

  const [message, setMessage] = useState<undefined | []>();
  const [date, setDate] = useState('');
  const {
    register,
    watch,
    reset,
    setValue,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm();
  const navigate = useNavigate();
  const department = watch('department_id');
  const [arrayStaffType, setArrayStaffType] = useState([
    { name: 'Teacher', id: 'teacher' },
    { name: 'Staff', id: 'staff' },
  ]); // api left
  useEffect(() => setValue('designation_id', ''), [department]);

  const { data: arrayDesignation } = useQuery({
    queryFn: () => designationApi.getAll(department),
    queryKey: ['designationapigetall', department],
    select: (d) => d.data.data,
    retry: 0,
    enabled: !!department,
  });
  const { data: arrayDepartment } = useQuery({
    queryFn: () => departmentApi.getAll(),
    queryKey: ['departmentapigetall'],
    select: (d) => d.data.data,
    retry: 0,
  });

  const onSubmit = async (d) => {
    const form = new FormData();
    const address = dataForm.address;
    if (address.same_as_permanent_address) {
      delete address.temp_country;
      delete address.temp_district;
      delete address.temp_province;
      delete address.temp_vdc_municipality;
      delete address.temp_tole;
      delete address.temp_ward;
    }
    const personal = dataForm.personal;
    for (const name in address) {
      form.append(`address[${name}]`, address[name]);
    }
    for (const name in personal) {
      form.append(`personal[${name}]`, personal[name]);
    }
    for (const name in d) {
      form.append(`general[${name}]`, d[name]);
    }
    form.delete('personal[photo]');
    form.append(
      'personal[profile_picture]',
      personal?.profile_picture && personal?.profile_picture[0]
    );
    form.append('general[joined_date]', date);

    staffAPI.create(form).then((data) => {
      // console.log(data);
      data?.response?.status === 422 &&
        setMessage(data?.response?.data?.errors);
      if (data?.status === 201) {
        navigate('/admin/dashboard/staff/staff-information/');
      }
    });
  };
  const handelBack = (data) => {
    setForm((c) => {
      return { ...c, general: { ...data } };
    });
    navigate(
      '/admin/dashboard/staff/staff-information/add-staff/general/address-details'
    );
  };
  useEffect(() => reset(dataForm.general), []);
  return (
    <form
      className="form-solid my-6 rounded-md"
      onSubmit={handleSubmit(onSubmit)}
    >
      {message ? (
        <>
          <div className="!text-red-600 font-medium text-lg">
            <ul>
              {message?.map((curr) => (
                <li key={curr}>{curr}</li>
              ))}
            </ul>
          </div>
          <br />
        </>
      ) : null}
      <div className="sm:grid-cols-2  lg:grid-cols-3 xl:grid-cols-4 grid grid-cols-1 gap-4">
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
          <Select
            label="Department*"
            value={arrayDepartment || []}
            register={register}
            errors={errors}
            name="department_id"
            required={true}
            disabled={!arrayDepartment}
            key={arrayDepartment ? 7254871627416274 : 33872568732687523}
          />
        </div>
        <div className="">
          <Select
            label="Designation*"
            required={true}
            name="designation_id"
            value={arrayDesignation || []}
            errors={errors}
            register={register}
            disabled={!arrayDesignation}
            key={arrayDesignation ? 7254877416274 : 33873258732687523}
          />
        </div>
        <div className="">
          <DateInput
            label="Joined date*"
            selected={date}
            setSelected={setDate}
          />
        </div>
        <div className="">
          <Input
            label="Username*"
            name="username"
            required={true}
            register={register}
            errors={errors}
            placeholder="Levli72"
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
          <button onClick={handleSubmit(handelBack)} className="secondary_btn">
            Back
          </button>
          <button type="submit" className="primary_btn" disabled={!isValid}>
            Save
          </button>
        </div>
      </div>
    </form>
  );
};

export default PermanentAddressForm;
