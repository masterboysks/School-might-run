import Search from '@mui/icons-material/SearchOutlined';
import { useForm } from 'react-hook-form';
import React, { useEffect, useState } from 'react';
import { Input, Select } from '../../../../../../components/common/fields';
import Breadnav from '../../../../../../components/common/navigation/Breadnav';
import Table from './Table';
import { useQuery } from '@tanstack/react-query';
import levelApi from '../../../../../../api/admin/dashboard/admin/data-setup/levelApi';
import classApi from '../../../../../../api/admin/dashboard/admin/data-setup/classApi';
import facultyApi from '../../../../../../api/admin/dashboard/admin/data-setup/facultyApi';
import subFacultyApi from '../../../../../../api/admin/dashboard/admin/data-setup/subFacultyApi';
import sectionsApi from '../../../../../../api/admin/dashboard/admin/data-setup/sectionsApi';
import studentLogsheetApi from '../../../../../../api/admin/dashboard/fee/studentLogsheetApi';

const pages = [
  { name: 'Student' },
  {
    name: 'Student Information',
    href: '/admin/dashboard/student/student-information/',
  },
];
const arrayLevel = [
  { name: 'anish', id: 7 },
  { name: 'saurav', id: 4 },
  { name: 'asmita', id: 3 },
  { name: 'prahlad', id: 2 },
];

const Form = () => {
  const {
    register,
    setValue,
    handleSubmit,
    reset,
    watch,
    formState: { errors, isValid },
  } = useForm();

  const [page, setPage] = useState(1);
  const [query, setQuery] = useState<any>('');
  const [level_id, faculty_id] = watch(['level_id', 'faculty_id']);
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
  const { data, isLoading } = useQuery({
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
      <Breadnav pages={pages} />
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="sm:grid-cols-2  lg:grid-cols-3 xl:grid-cols-4 ring-1 ring-black ring-opacity-5 form-solid grid grid-cols-1 gap-4 p-4 my-6 rounded-md shadow"
      >
        <div className="">
          <Input
            label="Student ID"
            placeholder="9955112"
            register={register}
            name="student_code"
          />
        </div>
        <div className="">
          <Input
            label="Student Name"
            placeholder="Susank"
            register={register}
            name="student_name"
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
            register={register}
            name="class_id"
            disabled={!arrayClass}
            key={arrayClass ? 1 : 2}
            value={arrayClass}
            label="Class/ Semester"
          />
        </div>
        <div className="">
          <Select
            value={arrfaculty}
            register={register}
            name="faculty_id"
            disabled={!arrfaculty}
            key={arrfaculty ? 1 : 2}
            label="Faculty"
          />
        </div>
        <div className="">
          <Select
            value={arrSection}
            register={register}
            disabled={!arrSection}
            key={arrSection ? 1 : 2}
            name="section_id"
            label="Section"
          />
        </div>
        <div className="">
          <Select
            value={arrayLevel}
            register={register}
            name="status"
            label="Status"
          />
        </div>
        <div className="">
          <Select
            value={arrayLevel}
            register={register}
            name="order_by"
            label="Order By"
          />
        </div>
        <button
          type="submit"
          className="h-fit w-fit bg-primary-btn sm:box-content sm:col-start-2 lg:col-start-3 xl:col-start-4 box-border px-4 py-3 mt-auto ml-auto text-white rounded cursor-pointer"
        >
          <Search className="w-4 mx-auto" />
        </button>
      </form>

      <Table isLoading={isLoading} data={data} setPage={setPage} />
    </>
  );
};

export default Form;
// const { data: arrSubFaculty } = useQuery({
//   queryFn: () => subFacultyApi.getAll(faculty_id),
//   queryKey: ['subfacultyapigetall', faculty_id],
//   select: (d) => d.data.data,
//   enabled: !!faculty_id,
//   staleTime: Infinity,
// });
//   useEffect(() => setValue('subfaculty_id', ''), [faculty_id]);
