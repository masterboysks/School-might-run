import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate, useParams } from 'react-router-dom';
import fiscalYearApi from '../../../../../../../api/admin/dashboard/admin/data-setup/fiscalYearApi';
import Breadnav from '../../../../../../../components/common/navigation/Breadnav';
import Break from '../../../../../../../components/common/Break';
import {
  Checkbox,
  YearInput,
} from '../../../../../../../components/common/fields';

const pages = [
  { name: 'Admin' },
  {
    name: 'Date setup',
  },
  {
    name: 'Fiscal year',
    href: '/admin/dashboard/admin/data-setup/fiscal-year',
  },
  {
    name: 'Edit',
    href: '',
  },
];
const EditFiscalYear = () => {
  const { id } = useParams();
  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors, isValid },
  } = useForm();
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const onSubmit = async (d) => {
    const res = await fiscalYearApi.edit(id, d);
    res?.status === 201
      ? navigate('/admin/dashboard/admin/data-setup/fiscal-year')
      : setError('Failed to edit Fiscal year');
  };

  useEffect(() => {
    (async () => {
      const temp = await JSON.parse(localStorage.getItem('Mb5sVJt5Qp'));
      reset(temp);
    })();
    return () => localStorage.removeItem('Mb5sVJt5Qp');
  }, []);
  return (
    <>
      <Breadnav pages={pages} />
      <Break title="Edit fiscal year" />
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
            <YearInput
              label="Fiscal year start(BS)*"
              name="start_year"
              register={register}
              errors={errors}
              required={true}
            />
          </div>
          <div>
            <YearInput
              label="Fiscal year end(BS)*"
              name="end_year"
              register={register}
              errors={errors}
              required={true}
            />
          </div>
          <div className="col-span-full">
            <Checkbox
              register={register}
              name="is_running"
              label="is running?"
              id="isRunning_form_54524"
            />
          </div>
        </div>
        <div className="sm:grid-cols-2  lg:grid-cols-3 xl:grid-cols-4 grid grid-cols-1 gap-4">
          <div className="md:flex-row sm:col-span-2 w-fit flex flex-col my-6 ml-auto">
            <div className=" w-fit my-auto">
              <Link
                to="/admin/dashboard/admin/data-setup/fiscal-year"
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

export default EditFiscalYear;
