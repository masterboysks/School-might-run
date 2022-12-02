import React from 'react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate, useParams } from 'react-router-dom';
import universityBoardApi from '../../../../../../../api/admin/dashboard/admin/data-setup/universityBoardApi';
import Breadnav from '../../../../../../../components/common/navigation/Breadnav';
import Break from '../../../../../../../components/common/Break';
import { Input } from '../../../../../../../components/common/fields';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import batchApi from '../../../../../../../api/admin/dashboard/admin/data-setup/batchApi';
const pages = [
  { name: 'Admin' },
  {
    name: 'Date setup',
  },
  {
    name: 'Batch',
    href: '/admin/dashboard/admin/data-setup/batch',
  },
  {
    name: 'Edit',
  },
];

const schema = yup.object().shape({
  name: yup.string().required(''),
});
const EditBatch = () => {
  const { id, name } = useParams();
  const [error, setError] = useState('');
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm({
    mode: 'onBlur',
    resolver: yupResolver(schema),

    defaultValues: { name },
  });
  const navigate = useNavigate();
  const onSubmit = async (d) => {
    // console.log(d);
    try {
      const res = await batchApi.edit(id, d);
      res?.status === 201
        ? navigate('/admin/dashboard/admin/data-setup/batch')
        : setError('Failed to edit batch');
    } catch (errors) {
      // console.warn(errors);
    }

    // university
    //   ? navigate("/admin/data-setup/university-board")
    //   : setErrorUniversity(true);
  };
  return (
    <>
      <Breadnav pages={pages} />
      <Break title="Batch" />

      <form
        className="form-solid w-full my-6 rounded-md"
        onSubmit={handleSubmit(onSubmit)}
      >
        {error && (
          <>
            <div className="text-red-600 font-medium text-lg">{error}</div>
            <br />
          </>
        )}
        <div className="sm:grid-cols-2  lg:grid-cols-3 xl:grid-cols-4 grid grid-cols-1 gap-4">
          <div>
            <Input
              label="Batch*"
              placeholder="2078"
              name="batch_name"
              required={true}
              register={register}
              errors={errors}
            />
          </div>
        </div>
        <div className="sm:grid-cols-2  lg:grid-cols-3 xl:grid-cols-4 grid grid-cols-1 gap-4">
          <div className="md:flex-row w-fit flex flex-col my-6 ml-auto">
            <div className=" w-fit my-auto">
              <Link
                to="/admin/dashboard/admin/data-setup/batch"
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

export default EditBatch;
