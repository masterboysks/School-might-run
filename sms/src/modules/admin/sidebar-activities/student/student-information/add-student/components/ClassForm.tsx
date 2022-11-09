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

function ClassForm() {
  const { data, isLoading } = useQuery({
    queryFn: () => levelApi.getAll(),
    queryKey: ['levelapigetall'],
  });
  const navigate = useNavigate();
  const [dateofAddmission, setDateofAddmission] = useState('');
  const {
    register,
    formState: { isValid, errors },
    handleSubmit,
  } = useForm();

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
          {console.log(data)}
          <Select
            value={data?.data.data || {}}
            label="Level Id"
            name="level_id"
            register={register}
            errors={errors}
          />
        </div>
        <div className="">
          <label className="py-6 text-sm" htmlFor="Student Id">
            Class/Semester*
          </label>
          <br />
          <select
            className="mt-[6px] w-full p- rounded  focus:ring-primary-btn    border-primary-field shadow-md placeholder:text-primary-grey-400    text-primary-grey-700 text-sm"
            name="class"
            id="class"
          >
            <option value="test">Select</option>
          </select>
        </div>
        <div className="">
          <label className="py-6 text-sm" htmlFor="Student Id">
            Faculty
          </label>
          <br />
          <select
            className="mt-[6px] w-full p- rounded  focus:ring-primary-btn    border-primary-field shadow-md placeholder:text-primary-grey-400    text-primary-grey-700 text-sm"
            name="class"
            id="class"
          >
            <option value="test">Select</option>
          </select>
        </div>
        <div className="">
          <label className="py-6 text-sm" htmlFor="Student Id">
            Section
          </label>
          <br />
          <select
            className="mt-[6px] w-full p- rounded  focus:ring-primary-btn    border-primary-field shadow-md placeholder:text-primary-grey-400    text-primary-grey-700 text-sm"
            name="class"
            id="class"
          >
            <option value="test">Select</option>
          </select>
        </div>
        <div className="">
          <label className="py-6 text-sm" htmlFor="Student Id">
            Previous school
          </label>
          <br />
          <input
            className="mt-[6px] w-full p- rounded  focus:ring-primary-btn    border-primary-field shadow-md placeholder:text-primary-grey-400    text-primary-grey-700 text-sm"
            type="text"
            placeholder="AVM school"
          />
        </div>
        <div className="">
          <label className="py-6 text-sm" htmlFor="Student Id">
            Address of previous school*
          </label>
          <br />
          <input
            className="mt-[6px] w-full p- rounded  focus:ring-primary-btn    border-primary-field shadow-md placeholder:text-primary-grey-400    text-primary-grey-700 text-sm"
            type="text"
            placeholder="Kalimati, Kathmandu"
          />
        </div>
        <div className="">
          <label className="py-6 text-sm" htmlFor="Student Id">
            Grade in previous school
          </label>
          <br />
          <input
            className="mt-[6px] w-full p- rounded  focus:ring-primary-btn    border-primary-field shadow-md placeholder:text-primary-grey-400    text-primary-grey-700 text-sm"
            type="text"
            placeholder="3.45"
          />
        </div>
        <div className="">
          <label className="py-6 text-sm" htmlFor="Student Id">
            Status
          </label>
          <br />
          <select
            className="mt-[6px] w-full p- rounded  focus:ring-primary-btn    border-primary-field shadow-md placeholder:text-primary-grey-400    text-primary-grey-700 text-sm"
            name="status"
            id="status"
          >
            <option value="test">Select</option>
          </select>
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
