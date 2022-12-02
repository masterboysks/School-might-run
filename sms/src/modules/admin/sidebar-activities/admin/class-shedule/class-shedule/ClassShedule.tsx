import Search from '@mui/icons-material/SearchOutlined';
import { Select } from '../../../../../../components/common/fields';
import { useEffect, useState } from 'react';
import Breadnav from '../../../../../../components/common/navigation/Breadnav';
import Table from './Table';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useQuery } from '@tanstack/react-query';
import levelApi from '../../../../../../api/admin/dashboard/admin/data-setup/levelApi';
import classApi from '../../../../../../api/admin/dashboard/admin/data-setup/classApi';
import sectionsApi from '../../../../../../api/admin/dashboard/admin/data-setup/sectionsApi';
import classSheduleApi from '../../../../../../api/admin/dashboard/admin/classSheduleApi';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
const schema = yup.object().shape({
  level_id: yup.string().required(''),
  class_id: yup.string().required(''),
  weekday: yup.string(),
  section_id: yup.string().required(''),
});
const pages = [
  { name: 'Admin' },
  {
    name: 'Class schedule',
    href: '/admin/dashboard/admin/class-schedule/',
  },
];
const arrayDays = [
  { name: 'Sun', id: 7 },
  { name: 'Mon', id: 1 },
  { name: 'Tue', id: 2 },
  { name: 'Wed', id: 3 },
  { name: 'Thur', id: 4 },
  { id: 5, name: 'Fri' },
  { name: 'Sat', id: 6 },
];
const ClassSchedule = () => {
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState<any>('');
  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
    watch,
    setValue,
  } = useForm({ resolver: yupResolver(schema) });

  const [level_id, class_id] = watch(['level_id', class_id]);
  const { data: arrayLevel } = useQuery({
    queryFn: () => levelApi.getAll(),
    queryKey: ['levelapigetall'],
    select: (d) => d.data.data,
    staleTime: Infinity,
  });
  const { data: arrayClass } = useQuery({
    queryFn: () => classApi.getAll(level_id),
    queryKey: ['classapigetall', level_id],
    select: (d) => d.data.data,
    enabled: !!level_id,
    staleTime: Infinity,
  });
  const { data: arraySection } = useQuery({
    queryFn: () => sectionsApi.getByClassId(class_id),
    queryKey: ['sectionapigetbyclassid', class_id],
    select: (d) => d.data.data,
    enabled: !!class_id,
    staleTime: Infinity,
  });

  const { data } = useQuery({
    queryFn: () => classSheduleApi.get({ ...query, page }),
    queryKey: ['classsheduleapiget', query, page],
    enabled: !!query,
    select: (d) => d.data.data,
    onSuccess: (d) => console.log(d),
    retry: 0,
  });
  const onSubmit = (d) => setQuery(d);

  useEffect(() => setValue('class_id', ''), [level_id]);
  useEffect(() => setValue('section_id', ''), [class_id]);
  return (
    <>
      <Breadnav pages={pages} />
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="sm:grid-cols-2  lg:grid-cols-3 xl:grid-cols-4 ring-1 ring-black ring-opacity-5 form-solid grid grid-cols-1 gap-4 p-4 my-6 rounded-md shadow"
      >
        <div className="">
          <Select
            id="level"
            name="level_id"
            label="Level*"
            disabled={!arrayLevel}
            key={arrayLevel ? 1 : 2}
            errors={errors}
            value={arrayLevel}
            register={register}
          />
        </div>
        <div className="">
          <Select
            name="class_id"
            errors={errors}
            label="Class/Semester*"
            value={arrayClass}
            register={register}
            disabled={!arrayClass}
            key={arrayClass ? 1 : 2}
          />
        </div>
        <div className="">
          <Select
            name="weekday"
            label="Days"
            value={arrayDays}
            register={register}
            errors={errors}
          />
        </div>
        <div className="">
          <Select
            name="section_id"
            errors={errors}
            label="Section*"
            disabled={!arraySection}
            key={arraySection ? 1 : 2}
            value={arraySection}
            register={register}
          />
        </div>

        <button
          type="submit"
          className="h-fit w-fit bg-primary-btn lg:col-span-2 xl:col-span-full sm:box-content col-span-full box-border px-4 py-3 mt-auto ml-auto text-white rounded cursor-pointer"
        >
          {/* <span className="sm:hidden text-primary-grey-100 text-sm">Search</span> */}

          <Search />
        </button>
      </form>

      <Table setPage={setPage} data={data} query={query} />
    </>
  );
};

export default ClassSchedule;
{
  /* <div className="lg:flex my-12">
<div className="ring-black ring-opacity-5 ring-1 form-solid lg:w-4/6 p-4 rounded-md shadow">
  <div className="md:grid-cols-2 gap-x-5 gap-y-2 grid grid-cols-1">
    <div className="flex justify-between py-2 border-b-[1px] border-b-primary-grey-300 ">
      <span className="text-primary-grey-600">Class:</span>
      <span className="text-primary-grey-700">1</span>
    </div>
    <div className="flex justify-between py-2 border-b-[1px] border-b-primary-grey-300 ">
      <span className="text-primary-grey-600">Section:</span>
      <span className="text-primary-grey-700">B</span>
    </div>
    <div className="flex justify-between py-2 border-b-[1px] border-b-primary-grey-300 ">
      <span className="text-primary-grey-600">Level:</span>
      <span className="text-primary-grey-700">School level</span>
    </div>
    <div className="flex justify-between py-2 border-b-[1px] border-b-primary-grey-300 ">
      <span className="text-primary-grey-600">No of students:</span>
      <span className="text-primary-grey-700">1</span>
    </div>
    <div className=" flex justify-between py-2">
      <span className="text-primary-grey-600">Faculty:</span>
      <span className="text-primary-grey-700"></span>
    </div>
  </div>
</div>
</div> */
}
