import { Link } from 'react-router-dom';
import Breadnav from '../../../../../../components/common/navigation/Breadnav';
import {
  MultipleSelect,
  Select,
} from '../../../../../../components/common/fields';
import { useForm } from 'react-hook-form';
import React, { useEffect } from 'react';
import Break from '../../../../../../components/common/Break';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useQuery } from '@tanstack/react-query';
import departmentApi from '../../../../../../api/admin/dashboard/admin/data-setup/departmentApi';
import designationApi from '../../../../../../api/admin/dashboard/admin/data-setup/designationApi';
import teacherApi from '../../../../../../api/admin/dashboard/staff/teacher/teacherApi';
import staffGeneralApi from '../../../../../../api/admin/dashboard/staff/staffGeneralApi';
import subjectApi from '../../../../../../api/admin/dashboard/admin/data-setup/subjectApi';
const schema = yup.object().shape({
  department_id: yup.string().required(''),
  designation_id: yup.string().required(''),
  teacher_name: yup.string().required(''),
  teacher_id: yup.string().required(''),
  subject: yup.array().min(1, 'Select at least 1 item.'),
});
const pages = [
  { name: 'Staff' },
  {
    name: 'Teacher assign',
    href: '/staff/teacher-assign/',
  },

  {
    name: 'Assign Teacher',
    href: '/staff/teacher-assign/assign-teacher',
  },
];
const arrayDepartment = [
  { id: 1, name: 'THis' },
  { id: 2, name: 'All' },
];
function AssignTeacher() {
  const {
    register,
    formState: { errors, isValid },
    control,
    watch,
    handleSubmit,
    resetField,
  } = useForm({
    defaultValues: {
      department_id: '',
      designation_id: '',
      teacher_id: '',
      teacher_name: '',
      subject: [],
    },
    resolver: yupResolver(schema),
    mode: 'onBlur',
  });
  const [departmentValue, designationValue, teacherName] = watch([
    'department_id',
    'designation_id',
    'teacher_name',
  ]);
  const { data: departmentOption } = useQuery({
    queryFn: () => departmentApi.getAll(),
    queryKey: ['departmentapigetall'],
    select: (d) => {
      return d?.data.data;
    },
    staleTime: Infinity,
  });
  const { data: designationOption } = useQuery({
    queryFn: () => designationApi.getAll(departmentValue),
    queryKey: ['designationapigetall', departmentValue],
    select: (d) => {
      return d?.data.data;
    },
    staleTime: Infinity,
    enabled: !!departmentValue,
  });
  const { data: teacherOptions } = useQuery({
    queryFn: () =>
      teacherApi.getAll({
        department_id: departmentValue,
        designation_id: designationValue,
      }),

    queryKey: ['teacherapigetall', departmentValue, designationValue],
    select: (d) => {
      return d?.data.data;
    },
    staleTime: Infinity,
    enabled: !!designationValue,
  });
  const { data: teacherIdOptions } = useQuery({
    queryFn: () =>
      staffGeneralApi.getIdByName({
        department_id: departmentValue,
        designation_id: designationValue,
        name: teacherName,
      }),

    queryKey: ['staffgeneralapigetidbyname', designationValue, teacherName],
    select: (d) => {
      return d?.data.data?.map((c) => {
        return { name: c.teacher_id, id: c.teacher_id };
      });
    },
    staleTime: Infinity,
    enabled: !!teacherName,
  });
  const { data: subjectOptions } = useQuery({
    queryFn: () => subjectApi.getAll(),

    queryKey: ['subjectapigetall'],
    select: (d) => {
      return d?.data.data;
    },
    staleTime: Infinity,
  });
  useEffect(() => {
    resetField('designation_id');
  }, [departmentValue]);
  useEffect(() => {
    resetField('teacher_name');
  }, [designationValue]);
  useEffect(() => {
    resetField('teacher_id');
  }, [teacherName]);
  const onSubmit = (d) => console.log(d);
  return (
    <>
      <Breadnav pages={pages} />
      <div className="ring-black ring-opacity-5 ring-1 form-solid lg:w-4/6 p-4 my-6 rounded-md shadow">
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
      <Break title="Assign teacher" />
      <form
        className="form-solid my-6 rounded-md"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="sm:grid-cols-2  lg:grid-cols-3 xl:grid-cols-4 grid grid-cols-1 gap-4">
          <div className="">
            <Select
              errors={errors}
              key={!departmentOption ? 1 : 2}
              disabled={!departmentOption}
              register={register}
              name="department_id"
              value={departmentOption}
              label="Department*"
            />
          </div>
          <div className="">
            <Select
              errors={errors}
              key={!designationOption ? 1 : 2}
              disabled={!designationOption}
              register={register}
              name="designation_id"
              value={designationOption}
              label="Designation*"
            />
          </div>

          <div className="">
            <Select
              errors={errors}
              key={!teacherOptions ? 1 : 2}
              disabled={!teacherOptions}
              label="Teacher name*"
              name="teacher_name"
              value={teacherOptions}
              register={register}
            />
          </div>

          <div className="">
            <Select
              errors={errors}
              key={!teacherIdOptions ? 1 : 2}
              disabled={!teacherIdOptions}
              label="Teacher ID*"
              value={teacherIdOptions}
              register={register}
              name="teacher_id"
            />
          </div>
          <div className="">
            <MultipleSelect
              errors={errors}
              key={!subjectOptions ? 1 : 2}
              disabled={!subjectOptions}
              control={control}
              label="Subject*"
              value={subjectOptions}
              name="subject"
            />

            <div className="mt-3">
              *Note : You can select multiple subject at once
            </div>
          </div>
        </div>
        <div className="w-full my-6">
          <div className=" w-fit ml-auto">
            <Link
              to="/admin/dashboard/staff/teacher-assign"
              className="secondary_btn"
            >
              Back
            </Link>
            <button type="submit" className="primary_btn">
              Save
            </button>
          </div>
        </div>
      </form>
    </>
  );
}

export default AssignTeacher;
``;
