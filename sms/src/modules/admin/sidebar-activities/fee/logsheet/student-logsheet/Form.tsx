import Search from '@mui/icons-material/SearchOutlined';
import React from 'react';
import Table from './Table';
import { useQuery } from '@tanstack/react-query';
import { useForm } from 'react-hook-form';
import { Input, Select } from '../../../../../../components/common/fields';
import Break from '../../../../../../components/common/Break';
const arrayLevel = [{ name: 'hi', id: '6' }];
export default function Form() {
  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
  } = useForm();
  // const {register}=useQuery({

  // })
  const onSubmit = (d) => console.log(d);
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
            value={arrayLevel}
            register={register}
          />
        </div>
        <div className="">
          <Select
            label="Class/Semester*"
            name="class_id"
            register={register}
            errors={errors}
            value={arrayLevel}
          />
        </div>
        <div className="">
          <Select
            label="Faculty"
            name="faculty_id"
            register={register}
            errors={errors}
            value={arrayLevel}
          />
        </div>
        <div className="">
          <Select
            name="sub_faculty_id"
            label="Sub Faculty"
            register={register}
            errors={errors}
            value={arrayLevel}
          />
        </div>
        <div className="">
          <Select
            label="Section"
            name="section_id"
            register={register}
            value={arrayLevel}
            errors={errors}
          />
        </div>
        <div className="h-fit w-fit bg-primary-btn sm:col-start-2 lg:col-start-3 xl:col-start-4 sm:box-content  box-border px-4 py-3 mt-auto ml-auto text-white rounded cursor-pointer">
          {/* <span className="sm:hidden text-primary-grey-100 text-sm">Search</span> */}
          <button className="w-4 mx-auto" type="submit">
            <Search />
          </button>
        </div>
      </form>
      <Break title="Student logsheet"></Break>
      <Table />
    </>
  );
}
