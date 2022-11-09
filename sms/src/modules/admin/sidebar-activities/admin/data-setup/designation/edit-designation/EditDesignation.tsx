import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate, useParams } from 'react-router-dom';
import departmentApi from '../../../../../../../api/admin/dashboard/admin/data-setup/departmentApi';
import designationApi from '../../../../../../../api/admin/dashboard/admin/data-setup/designationApi';
import Breadnav from '../../../../../../../components/common/navigation/Breadnav';
import Break from '../../../../../../../components/common/Break';
import { Input, Select } from '../../../../../../../components/common/fields';

const pages = [
  { name: 'Admin' },
  {
    name: 'Date setup',
  },
  {
    name: 'Designation',
    href: '/admin/dashboard/admin/data-setup/designation',
  },
  {
    name: 'Edit',
  },
];

const EditDesignation = () => {
  const { id } = useParams();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm();
  const [arrayDepartment, setArrayDepartment] = useState([]);
  const [error, setError] = useState('');

  const navigate = useNavigate();
  const onSubmit = async (d) => {
    const res = await designationApi.edit(id, d);
    res?.status === 201
      ? navigate('/admin/dashboard/admin/data-setup/designation')
      : setError('Failed to edit designation');
  };

  useEffect(() => {
    (async () => {
      const data = await departmentApi.getAll();
      setArrayDepartment(data?.data?.data);
      const temp = await JSON.parse(localStorage.getItem('Mb5sVJt5Qp') || '');
      reset(temp);
    })();
    return () => localStorage.removeItem('Mb5sVJt5Qp');
  }, []);
  return (
    <>
      <Breadnav pages={pages} />
      <Break title="Add designation" />
      <form
        className="form-solid w-full my-6 rounded-md"
        onSubmit={handleSubmit(onSubmit)}
      >
        {error && (
          <>
            <div className="text-lg font-medium text-red-600">{error}</div>
            <br />
          </>
        )}
        <div className="sm:grid-cols-2  lg:grid-cols-3 xl:grid-cols-4 grid grid-cols-1 gap-4">
          <div>
            <Select
              label="Department*"
              value={arrayDepartment}
              register={register}
              name="department_id"
              errors={errors}
              required={true}
            />
          </div>
          <div>
            <Input
              type="text"
              label="Designation*"
              register={register}
              errors={errors}
              name="designation_name"
              placeholder="Manager"
              required={true}
            />
          </div>
        </div>
        <div className="sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 grid grid-cols-1 gap-4">
          <div className="md:flex-row w-fit sm:col-span-2 flex flex-col my-6 ml-auto">
            <div className=" w-fit my-auto">
              <Link
                to="/admin/dashboard/admin/data-setup/university-board"
                className="secondary_btn"
              >
                Cancel
              </Link>
              <button type="submit" className="primary_btn" disabled={!isValid}>
                Save
              </button>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default EditDesignation;
// const arrayDepartment = ["jdskhf", "djshjh"];
// const [department, setDepartment] = useState("Select");
// const [designation, setDesignation] = useState("");

// //
// const [errorDepartment, setErrorDepartment] = useState(false);
// const [errorDesignation, setErrorDesignation] = useState(false);
// const navigate = useNavigate();
// const handleSubmit = () => {
//   console.log({ department, designation });
//   let temp = false;
//   department === "Select" && (temp = true) && setErrorDepartment(true);
//   designation || setErrorDesignation(true) || (temp = true);
//   temp || navigate("/admin/data-setup/designation");
// };
