import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { Input, Select } from '../../../../../../../components/common/fields';
import Breadnav from '../../../../../../../components/common/navigation/Breadnav';
import Break from '../../../../../../../components/common/Break';
import facultyApi from '../../../../../../../api/admin/dashboard/admin/data-setup/facultyApi';
import { useForm } from 'react-hook-form';
import { useEffect } from 'react';
import subFacultyApi from '../../../../../../../api/admin/dashboard/admin/data-setup/subFacultyApi';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import React from 'react';
const pages = [
  { name: 'Admin' },
  {
    name: 'Date setup',
  },
  {
    name: 'Sub-Faculty',
    href: '/admin/dashboard/admin/data-setup/sub-faculty',
  },
  {
    name: 'Add',
  },
];

const schema = yup.object().shape({
  faculty_id: yup.string().required(''),
  subfaculty_name: yup.string().required('').max(255, 'Max size 255.'),
});
const AddSubFaculty = () => {
  const {
    register,
    handleSubmit,

    formState: { errors, isValid },
  } = useForm({ mode: 'onBlur', resolver: yupResolver(schema) });
  const [arrayFaculty, setArrayFaculty] = useState([]);
  const [error, setError] = useState('');
  useEffect(() => {
    (async () => {
      const data = await facultyApi.getAll();
      setArrayFaculty(data?.data?.data);
    })();
  }, []);
  const navigate = useNavigate();
  const onSubmit = async (d) => {
    const res = await subFacultyApi.create(d);
    res?.status === 201
      ? navigate('/admin/dashboard/admin/data-setup/sub-faculty')
      : setError('Failed to create sub-faculty');
  };
  return (
    <>
      <Breadnav pages={pages} />
      <Break title="Add Sub-faculty" />
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
              value={arrayFaculty}
              label="Faculty*"
              required={true}
              errors={errors}
              register={register}
              name="faculty_id"
            />
          </div>
          <div>
            <Input
              label="Sub-faculty*"
              placeholder="Bio"
              id="subFaculty"
              required={true}
              errors={errors}
              register={register}
              name="subfaculty_name"
            />
          </div>
        </div>
        <div className="sm:grid-cols-2  lg:grid-cols-3 xl:grid-cols-4 grid grid-cols-1 gap-4">
          <div className="md:flex-row w-fit col-span-full lg:col-span-2 flex flex-col my-6 ml-auto">
            <div className=" w-fit">
              <Link
                to="/admin/dashboard/admin/data-setup/sub-faculty"
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

export default AddSubFaculty;
