import React from 'react';
import { Input, Select } from '../../../../../../components/common/fields';
import Search from '@mui/icons-material/SearchOutlined';
import { useForm } from 'react-hook-form';
export default function Form() {
  const { register, handleSubmit } = useForm();
  const onSubmit = async (d) => {
    // console.log(d);
  };
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="sm:grid-cols-2  lg:grid-cols-3 xl:grid-cols-4 ring-1 ring-black ring-opacity-5 form-solid grid grid-cols-1 gap-4 p-4 my-6 rounded-md shadow"
    >
      <div className="">
        <Input
          id="date"
          name="date"
          label="Date"
          register={register}
          type="date"
        />
      </div>
      <div className="">
        <Input
          name="student_name"
          register={register}
          label="Student name"
          placeholder="Ram Singh"
        />
      </div>
      <div className="">
        <Input
          placeholder="5521332"
          type="number"
          name="student id"
          label="Student ID"
          register={register}
        />
      </div>
      <div className="">
        <Select name="status" label="Status" register={register} />
      </div>
      <button
        type="submit"
        className="h-fit w-fit bg-primary-btn lg:col-span-2 xl:col-span-full sm:box-content col-span-full box-border px-4 py-3 mt-auto ml-auto text-white rounded cursor-pointer"
      >
        {/* <span className="sm:hidden text-primary-grey-100 text-sm">Search</span> */}
        <Search className="w-4 mx-auto" />
      </button>
    </form>
  );
}
