import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate, useParams } from 'react-router-dom';
import levelApi from '../../../../../../../api/admin/dashboard/admin/data-setup/levelApi';
import universityBoardApi from '../../../../../../../api/admin/dashboard/admin/data-setup/universityBoardApi';
import Breadnav from '../../../../../../../components/common/navigation/Breadnav';
import Break from '../../../../../../../components/common/Break';
import {
  Checkbox,
  Input,
  Select,
} from '../../../../../../../components/common/fields';

const pages = [
  { name: 'Admin' },
  {
    name: 'Date setup',
  },
  {
    name: 'Level',
    href: '/admin/dashboard/admin/data-setup/level',
  },
  {
    name: 'Edit',
  },
];
const EditLevel = () => {
  const { id } = useParams();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const [error, setError] = useState('');
  const [arrayUniversity, setArrayUniversity] = useState([]);
  useEffect(() => {
    (async () => {
      const data = await universityBoardApi.get();
      setArrayUniversity(data?.data?.data?.data);
      const temp = await JSON.parse(localStorage.getItem('Mb5sVJt5Qp') || '');
      reset(temp);
    })();
    return () => localStorage.removeItem('Mb5sVJt5Qp');
  }, []);

  const navigate = useNavigate();
  const onSubmit = async (d) => {
    const res = await levelApi.edit(id, d);
    res?.status === 201
      ? navigate('/admin/dashboard/admin/data-setup/level')
      : setError('Failed to edit Level');
  };
  return (
    <>
      <Breadnav pages={pages} />
      <Break title="Edit Level and Board details" />
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
              label="University/Board*"
              name="university_id"
              register={register}
              value={arrayUniversity}
              required={true}
              errors={errors}
            />
          </div>
          <div>
            <Input
              label="Level*"
              type="text"
              name="level_name"
              register={register}
              placeholder="+2"
              required={true}
              errors={errors}
            />
          </div>
          <div className="col-span-full">
            <Checkbox
              label="Has faculty"
              name="has_faculty"
              id="hasFaculty"
              register={register}
            />
          </div>
        </div>
        <div className="sm:grid-cols-2  lg:grid-cols-3 xl:grid-cols-4 grid grid-cols-1 gap-4">
          <div className="md:flex-row w-fit col-span-full lg:col-span-2 flex flex-col my-6 ml-auto">
            <div className=" w-fit">
              <Link
                to="/admin/dashboard/admin/data-setup/level"
                className="secondary_btn"
              >
                Cancel
              </Link>
              <button type="submit" className="primary_btn">
                Save
              </button>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default EditLevel;
