import Search from '@mui/icons-material/SearchOutlined';
import { useState } from 'react';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import departmentApi from '../../../../../../api/admin/dashboard/admin/data-setup/departmentApi';
import designationApi from '../../../../../../api/admin/dashboard/admin/data-setup/designationApi';
import { Input, Select } from '../../../../../../components/common/fields';
const arrayStatus = [
  {
    name: 'Active',
    id: 1,
  },

  {
    name: 'InActive',
    id: 2,
  },
];
function Form({ onSubmit }) {
  const {
    register,
    watch,
    reset,
    getValues,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm();
  const [arrayDesignation, setArrayDesignation] = useState([]);
  const [arrayDepartment, setArrayDepartment] = useState([]);
  const department = watch('department_id');
  useEffect(() => {
    (async () => {
      try {
        const temp = await designationApi.getAll(department);
        setArrayDesignation(temp?.data?.data);
      } catch (e) {
        console.warn(e);
      }
    })();
    reset({ ...getValues(), designation_id: '' });
  }, [department]);

  useEffect(() => {
    (async () => {
      try {
        const temp = await departmentApi.getAll();
        setArrayDepartment(temp?.data?.data);
      } catch (e) {
        console.warn(e);
      }
    })();
  }, []);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="sm:grid-cols-2  lg:grid-cols-3 xl:grid-cols-4 ring-1 ring-black ring-opacity-5 form-solid grid grid-cols-1 gap-4 p-4 my-6 rounded-md shadow"
    >
      <div className="">
        <Input
          register={register}
          errors={errors}
          label="Date"
          name="date"
          type="date"
        />
        {/* <label className="my-6 text-sm" htmlFor="Desigation">
          Date*
        </label>
        <br />
        <input
          type="date"
          className="w-full p-2  cursor-pointer rounded mt-[6px]  focus:ring-primary-btn    border-primary-field shadow-md placeholder:text-primary-grey-400   text-primary-grey-700 text-sm"
        /> */}
      </div>
      <div className="">
        <Select
          value={arrayDepartment}
          label="Department*"
          name="department_id"
          required={true}
          errors={errors}
          register={register}
        />
      </div>
      <div className="">
        {' '}
        <Select
          value={arrayDesignation}
          label="Designation"
          name="designation_id"
          register={register}
        />
      </div>
      <div className="">
        <Input
          register={register}
          errors={errors}
          label="Staff name"
          name="staff_name"
          placeholder="Hari shyam"
        />
      </div>
      <div className="">
        <Select
          label="Status"
          register={register}
          name="status"
          value={arrayStatus}
        />
      </div>
      <button
        type="submit"
        className="h-fit w-fit bg-primary-btn xl:col-span-3 sm:box-content box-border px-4 py-3 mt-auto ml-auto text-white rounded cursor-pointer"
      >
        <Search className="w-4 mx-auto" />
      </button>
    </form>
  );
}

export default Form;
