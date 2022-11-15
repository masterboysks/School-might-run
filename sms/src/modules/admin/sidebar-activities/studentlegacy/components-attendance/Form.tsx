import React from 'react';
import Search from '@mui/icons-material/SearchOutlined';
import { useForm } from 'react-hook-form';
import { Select } from '../../../../../components/common/fields';
const arrayLevel = [
  { name: 'anish', id: 7 },
  { name: 'saurav', id: 4 },
  { name: 'asmita', id: 3 },
  { name: 'prahlad', id: 2 },
];
const Form = () => {
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors, isValid },
  } = useForm();
  return (
    <div className="ring-black ring-opacity-5 ring-1 form-solid mb-14 w-full p-4 my-6 rounded-md shadow">
      <form className="sm:grid-cols-2  lg:grid-cols-3 xl:grid-cols-4 grid grid-cols-1 gap-4">
        <div className="">
          <Select
            value={arrayLevel}
            register={register}
            label="Level"
            name="level"
          />
        </div>
        <div className="">
          <Select
            label="CLass/Semester"
            register={register}
            name="class"
            value={arrayLevel}
          />
        </div>
        <div className="">
          <Select
            label="Faculty"
            register={register}
            name="faculty"
            value={arrayLevel}
          />
        </div>
        <div className="">
          <Select
            label="Section"
            register={register}
            name="section"
            value={arrayLevel}
          />
        </div>
        <div className="col-span-full lg:col-span-2 xl:col-span-full">
          <div className="bg-primary-btn h-fit w-fit hover: focus:outline-none focus:ring- focus:ring-offset-2 flex items-center justify-center p-2 ml-auto text-sm font-medium text-white border border-transparent rounded-md shadow-sm cursor-pointer">
            <Search />
          </div>
        </div>
      </form>
    </div>
  );
};

export default Form;
