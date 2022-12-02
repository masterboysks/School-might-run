import Search from '@mui/icons-material/SearchOutlined';
import React, { useEffect, useState } from 'react';
import Table from './Table';
import { useQuery } from '@tanstack/react-query';
import { useForm } from 'react-hook-form';
import { Input, Select } from '../../../../../../components/common/fields';
import Break from '../../../../../../components/common/Break';
import levelApi from '../../../../../../api/admin/dashboard/admin/data-setup/levelApi';
import classApi from '../../../../../../api/admin/dashboard/admin/data-setup/classApi';
import facultyApi from '../../../../../../api/admin/dashboard/admin/data-setup/facultyApi';
import subFacultyApi from '../../../../../../api/admin/dashboard/admin/data-setup/subFacultyApi';
import sectionsApi from '../../../../../../api/admin/dashboard/admin/data-setup/sectionsApi';
import studentLogsheetApi from '../../../../../../api/admin/dashboard/fee/studentLogsheetApi';

export default function Form() {
  const {
    register,
    watch,
    setValue,
    formState: { errors, isValid },
    handleSubmit,
  } = useForm();

  const [page, setPage] = useState(1);
  const [query, setQuery] = useState<any>('');
  const level_id = watch('level_id');
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

  const { data: arrfaculty } = useQuery({
    queryFn: () => facultyApi.getAll(level_id),
    queryKey: ['facultyapigetall', level_id],
    enabled: !!level_id,
    select: (d) => d.data.data,
    staleTime: Infinity,
  });

  const { data: arrSection } = useQuery({
    queryFn: () => sectionsApi.getAll(),
    queryKey: ['sectionapigetall'],
    select: (d) => d.data.data,
    staleTime: Infinity,
  });
  const { data } = useQuery({
    queryFn: () => studentLogsheetApi.getStudent({ ...query, page }),
    queryKey: ['studentlogsheetapigetstudent', query, page],
    enabled: !!query,
    select: (d) => d.data.data,
    onSuccess: (d) => console.log(d),
    retry: 0,
  });
  const onSubmit = (d) => setQuery(d);
  useEffect(() => {
    setValue('class_id', '');
    setValue('faculty_id', '');
  }, [level_id]);

  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="sm:grid-cols-2  lg:grid-cols-3 xl:grid-cols-4 ring-1 ring-black ring-opacity-5 form-solid grid grid-cols-1 gap-4 p-4 my-6 rounded-md shadow"
      >
        <div className="">
          <Input
            errors={errors}
            placeholder="557332"
            register={register}
            label="Student Id"
            name="student_code"
          />
        </div>
        <div className="">
          <Input
            errors={errors}
            label="Student name"
            name="student_name"
            placeholder="Prahlad"
            register={register}
          />
        </div>
        <div className="">
          <Select
            errors={errors}
            label="Level"
            name="level_id"
            disabled={!arrayLevel}
            key={arrayLevel ? 1 : 2}
            value={arrayLevel}
            register={register}
          />
        </div>
        <div className="">
          <Select
            label="Class/Semester*"
            name="class_id"
            register={register}
            disabled={!arrayClass}
            key={arrayClass ? 1 : 2}
            value={arrayClass}
            errors={errors}
          />
        </div>
        <div className="">
          <Select
            label="Faculty"
            name="faculty_id"
            disabled={!arrfaculty}
            key={arrfaculty ? 1 : 2}
            register={register}
            errors={errors}
            value={arrfaculty}
          />
        </div>

        <div className="">
          <Select
            label="Section"
            name="section_id"
            disabled={!arrSection}
            key={arrSection ? 1 : 2}
            register={register}
            value={arrSection}
            errors={errors}
          />
        </div>
        <button
          type="submit"
          className="h-fit w-fit bg-primary-btn sm:col-start-2 lg:col-start-3 xl:col-start-4 sm:box-content  box-border px-4 pl-3 py-3 mt-auto ml-auto text-white rounded cursor-pointer"
        >
          {/* <span className="sm:hidden text-primary-grey-100 text-sm">Search</span> */}
          <div className="w-4 mx-auto">
            <Search />
          </div>
        </button>
      </form>
      <Break title="Student logsheet"></Break>
      <Table data={data} setPage={setPage} />
    </>
  );
}
// useEffect(() => setValue('subfaculty_id', ''), [faculty_id]);

// const { data: arrSubFaculty } = useQuery({
//   queryFn: () => subFacultyApi.getAll(faculty_id),
//   queryKey: ['subfacultyapigetall', faculty_id],
//   select: (d) => d.data.data,
//   enabled: !!faculty_id,
//   staleTime: Infinity,
// });
{
  /* <div className="">
          <Select
            name="subfaculty_id"
            label="Sub Faculty"
            disabled={!arrSubFaculty}
            key={arrSubFaculty ? 1 : 2}
            register={register}
            errors={errors}
            value={arrSubFaculty}
          />
        </div> */
}
