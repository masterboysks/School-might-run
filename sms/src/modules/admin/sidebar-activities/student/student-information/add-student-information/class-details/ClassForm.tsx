import React, { useContext, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { yupResolver } from '@hookform/resolvers/yup';
import { useQuery } from '@tanstack/react-query';

import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import {
  DateInput,
  Input,
  Select,
} from '../../../../../../../components/common/fields';
import levelApi from '../../../../../../../api/admin/dashboard/admin/data-setup/levelApi';
import classApi from '../../../../../../../api/admin/dashboard/admin/data-setup/classApi';
import facultyApi from '../../../../../../../api/admin/dashboard/admin/data-setup/facultyApi';
import sectionsApi from '../../../../../../../api/admin/dashboard/admin/data-setup/sectionsApi';
import StudentFormStudentPictureAndGurdainPicture from '../../../../../../../contex/admin/student/StudentFormStudentPictureAndGurdainPicture';
const schema = yup.object().shape({
  // 'class.admission_date': yup.string().required(),
  level_id: yup.string().required(''),
  class_semester_id: yup.string().required(''),
  faculty_id: yup.string(),
  subfaculty_id: yup.string(),
  section_id: yup.string().required(''),
  prev_school_name: yup.string(),
  prev_school_addr: yup.string(),
  prev_school_grade: yup.string(),
  status: yup.string().required(''),
});
const arrayStatus = [
  {
    id: 1,

    name: 'Active',
  },
  {
    id: 0,

    name: 'Inactive',
  },
];
function ClassForm() {
  const navigate = useNavigate();
  const formState = useContext(StudentFormStudentPictureAndGurdainPicture);

  const {
    register,
    watch,
    formState: { isValid, errors },
    handleSubmit,
    reset,
    getValues,
  } = useForm({
    mode: 'onBlur',
    defaultValues: { ...formState.values?.class },
    resolver: yupResolver(schema),
  });
  const [level_id, class_semester_id] = watch([
    'level_id',
    'class_semester_id',
  ]);
  const { data: levelapi } = useQuery({
    queryFn: () => levelApi.getAll(),
    queryKey: ['levelapigetall'],
    staleTime: 86400000,
    select: (d) => d.data.data,
  });
  const { data: classapi } = useQuery({
    queryFn: () => classApi.getAll(level_id),
    queryKey: ['classapigetall', level_id],
    select: (d) => d.data.data,
    staleTime: 86400000,
    enabled: !!level_id,
  });
  const { data: facultyapi } = useQuery({
    queryFn: () => facultyApi.getAll(level_id),
    queryKey: ['facultyapiget', level_id],
    select: (d) => d.data.data,
    staleTime: 86400000,
    enabled: !!level_id,
  });
  const { data: sectionapi } = useQuery({
    queryFn: () => sectionsApi.getByClassId(class_semester_id),
    queryKey: ['sectionapiget', class_semester_id],
    select: (d) => d.data.data,
    staleTime: 86400000,
    enabled: !!class_semester_id,
  });

  const [dateofAddmission, setDateofAddmission] = useState(
    formState.values?.class?.admission_date || ''
  );
  const onSubmit = (d) => {
    console.log('submitted');
    formState.setValues((c) => {
      return { ...c, class: { ...d, admission_date: dateofAddmission } };
    });
    navigate('/admin/dashboard/student/student-information/add-fee-details');
  };
  // to={`/admin/dashboard/student/student-information/add-fee-details`}
  const onBack = () => {
    formState.setValues((c) => {
      return {
        ...c,
        class: { ...getValues(), admission_date: dateofAddmission },
      };
    });
    navigate(
      '/admin/dashboard/student/student-information/add-address-details'
    );
  };
  return (
    <form
      className="form-solid my-6 rounded-md"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="sm:grid-cols-2  lg:grid-cols-3 xl:grid-cols-4 grid grid-cols-1 gap-4 my-6">
        <div className="">
          <DateInput
            register={register}
            label="Date of addmission"
            selected={dateofAddmission}
            setSelected={setDateofAddmission}
          />
        </div>
        <div className="">
          {/* {// console.log(data)} */}
          <Select
            key={levelapi ? 1 : 2}
            disabled={!levelapi}
            value={levelapi}
            label="Level id*"
            name="level_id"
            register={register}
            errors={errors}
          />
        </div>
        <div className="">
          <Select
            key={facultyapi ? 1 : 2}
            disabled={!facultyapi}
            value={facultyapi}
            label="Faculty"
            name="faculty_id"
            errors={errors}
            register={register}
          />
        </div>
        <div className="">
          <Select
            key={classapi ? 1 : 2}
            disabled={!classapi}
            value={classapi}
            label="Class/Semester*"
            name="class_semester_id"
            errors={errors}
            register={register}
          />
        </div>

        <div className="">
          <Select
            key={sectionapi ? 1 : 2}
            disabled={!sectionapi}
            value={sectionapi}
            label="Section"
            name="section_id"
            errors={errors}
            register={register}
          />
        </div>

        <div className="">
          <Input
            label="Previous school"
            placeholder="AVM school"
            name="prev_school_name"
            register={register}
            errors={errors}
          />
        </div>
        <div className="">
          <Input
            label="Address of previous school"
            name="prev_school_addr"
            register={register}
            errors={errors}
            placeholder="Kalamati, Kathmandu"
          />
        </div>
        <div className="">
          <Input
            label="Grade in previous school"
            name="prev_school_grade"
            register={register}
            errors={errors}
            placeholder="3.45"
          />
        </div>
        <div className="">
          <Select
            value={arrayStatus}
            register={register}
            errors={errors}
            label="Status"
            name="status"
          />
        </div>
      </div>
      <div className="w-full">
        <div className=" w-fit ml-auto">
          <button onClick={onBack} className="secondary_btn cursor-pointer">
            Back
          </button>
          <button type="submit" className="primary_btn">
            Next
          </button>
        </div>
      </div>
    </form>
  );
}

export default ClassForm;
