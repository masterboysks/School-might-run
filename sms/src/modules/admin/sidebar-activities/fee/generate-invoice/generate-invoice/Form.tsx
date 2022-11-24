import { useQuery } from '@tanstack/react-query';
import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import classApi from '../../../../../../api/admin/dashboard/admin/data-setup/classApi';
import levelApi from '../../../../../../api/admin/dashboard/admin/data-setup/levelApi';
import getSectionFacultiesApi from '../../../../../../api/common/unknown/class/getSectionFacultiesApi';
import { Select } from '../../../../../../components/common/fields';
import SearchIcon from '../../../../../../components/common/SearchIcon';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

const schema = yup.object().shape({
  level_id: yup.string().required(''),
  class_id: yup.string().required(''),
});
export default function Form({ setSearch }) {
  const {
    handleSubmit,
    watch,
    formState: { errors, isValid },
    register,
  } = useForm({ resolver: yupResolver(schema), mode: 'onBlur' });

  const [valueLevel, valueClass, valueBatch] = watch([
    'level_id',
    'class_id',
    'batch_id',
  ]);

  const { data: arrLevel } = useQuery({
    queryKey: ['levelapigetall'],
    staleTime: Infinity,
    queryFn: () => levelApi.getAll(),
    select: (d) => d?.data.data,
  });
  const { data: arrClass } = useQuery({
    queryFn: () => classApi.getAll(valueLevel),
    queryKey: ['classapigetall', valueLevel],
    staleTime: Infinity,
    enabled: !!valueLevel,

    select: (d) => d?.data.data,
  });
  const { data: facultyData } = useQuery({
    queryKey: ['getsectionfacultiesapi', valueClass],
    staleTime: Infinity,
    enabled: !!valueClass,
    select: (d) => d.data.data,
    onError: (err) => console.log(err),

    queryFn: () => getSectionFacultiesApi.getSectionFaculties(valueClass),
  });
  const onSubmit = (d) =>
    setSearch({
      ...d,
      faculty_id: facultyData?.faculty?.id || null,
      subfaculty_id: facultyData?.subfaculty?.id || null,
    });
  useEffect(() => {
    setSearch();
  }, [watch]);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className=" ring-1 ring-black ring-opacity-5 form-solid sm:flex  gap-4 p-4 my-6 rounded-md shadow lg:w-2/3 "
    >
      <div className="sm:grid-cols-2 flex-1  grid grid-cols-1 gap-4">
        <div className="">
          <Select
            label="Level"
            register={register}
            name="level_id"
            value={arrLevel}
            disabled={!arrLevel}
            errors={errors}
            key={arrLevel ? 1 : 2}
          />
        </div>
        <div className="">
          <Select
            label="Class/Semester"
            value={arrClass}
            errors={errors}
            name="class_id"
            register={register}
            disabled={!arrClass}
            key={arrClass ? 1 : 2}
          />
        </div>
      </div>
      <button
        type="submit"
        className=" sm:col-span-2 mt-4 lg:col-span-1 h-fit sm:mt-auto "
      >
        <SearchIcon className="sm:col-start-2 lg:col-start-3 xl:col-start-4  sm:box-content col-span-full  mt-auto ml-auto " />
      </button>
    </form>
  );
}
