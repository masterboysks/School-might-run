import React, { useState } from 'react';
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
const schema = yup.object().shape({
  // 'class.admission_date': yup.string().required(),
  'class.level_id': yup.string().required(),
  'class.class_semester_id': yup.string().required(),
  'class.faculty_id': yup.string(),
  'class.subfaculty_id': yup.string(),
  'class.section_id': yup.string().required(),
  'class.prev_school_name': yup.string(),
  'class.prev_school_addr': yup.string(),
  'class.prev_school_grade': yup.string(),
  'class.status': yup.string().required(),
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
  const {
    register,
    watch,
    formState: { isValid, errors },
    handleSubmit,
  } = useForm({
    mode: 'onBlur',
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

  const navigate = useNavigate();
  const [dateofAddmission, setDateofAddmission] = useState('');

  return (
    <form className="form-solid my-6 rounded-md">
      <div className="sm:grid-cols-2  lg:grid-cols-3 xl:grid-cols-4 grid grid-cols-1 gap-4 my-6">
        <div className="">
          <DateInput
            label="Date of addmission"
            selected={dateofAddmission}
            setSelected={setDateofAddmission}
          />
        </div>
        <div className="">
          {/* {// console.log(data)} */}
          <Select
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
            label="Address of previous school*"
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
          <div
            onClick={() => {
              navigate(-1);
            }}
            className="secondary_btn cursor-pointer"
          >
            Back
          </div>
          <Link
            to={`/admin/dashboard/student/student-information/add-fee-details`}
            className="primary_btn"
          >
            Next
          </Link>
        </div>
      </div>
    </form>
  );
}

export default ClassForm;
