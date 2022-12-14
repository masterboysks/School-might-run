import { Link, useNavigate, useParams } from 'react-router-dom';
import { useState } from 'react';
import {
  Input,
  InputNumber,
  Radio,
  Select,
  Checkbox,
} from '../../../../../../../components/common/fields';
import Breadnav from '../../../../../../../components/common/navigation/Breadnav';
import Break from '../../../../../../../components/common/Break';
import { useEffect } from 'react';
import levelApi from '../../../../../../../api/admin/dashboard/admin/data-setup/levelApi';
import { useForm } from 'react-hook-form';
import subjectApi from '../../../../../../../api/admin/dashboard/admin/data-setup/subjectApi';
import React from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
const schema = yup.object().shape({
  level_id: yup.string().required(''),
  subject_name: yup.string().required('').max(255, 'Max size 255.'),
  credit_hours: yup.string().required(''),
  subject_type: yup.string().required(''),
});

const pages = [
  { name: 'Admin' },
  {
    name: 'Date setup',
  },
  {
    name: 'Subject',
    href: '/admin/dashboard/admin/data-setup/subject',
  },
  {
    name: 'Edit',
  },
];
const arraySubjectTypes = [
  { name: 'Compulsary subject', id: 1 },
  { name: 'Elective subject', id: 2 },
];
const EditSubject = () => {
  const { id } = useParams();
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors, isValid },
  } = useForm({ mode: 'onBlur', resolver: yupResolver(schema) });
  const hasPratical = watch('has_practical');
  const [arrayLevel, setArrayLevel] = useState([]);
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const onSubmit = async (d) => {
    console.log(d);
    const res = await subjectApi.edit(id, {
      ...d,
      has_practical: d.has_practical ? 1 : 0,
    });
    // console.log(res);
    res?.status === 201
      ? navigate('/admin/dashboard/admin/data-setup/subject')
      : setError('Failed to edit subject');
  };
  useEffect(() => {
    (async () => {
      const data = await levelApi.getAll();
      setArrayLevel(data?.data?.data);
      const temp = await JSON.parse(localStorage.getItem('Mb5sVJt5Qp') || '');
      // console.log(temp);
      reset(temp);
    })();
    return () => localStorage.removeItem('Mb5sVJt5Qp');
  }, []);
  return (
    <>
      <Breadnav pages={pages} />
      <Break title="Edit subject" />
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
              label="Level*"
              value={arrayLevel}
              register={register}
              errors={errors}
              required={true}
              disabled
              name="level_id"
            />
          </div>
          <div>
            <Input
              label="Subject*"
              placeholder="Science"
              register={register}
              errors={errors}
              required={true}
              name="subject_name"
            />
          </div>

          <div>
            <InputNumber
              label="Credit hours*"
              placeholder="3"
              name="credit_hours"
              register={register}
              required={true}
              errors={errors}
            />
          </div>
          <div className="col-start-1 mt-auto">
            <Checkbox
              label="has pratical"
              name="has_practical"
              register={register}
            />
          </div>

          {hasPratical ? (
            <div>
              <InputNumber
                label="Credit hours pratical*"
                placeholder="1"
                name="credit_hours_pr"
                register={register}
                errors={errors}
                shouldUnregister={true}
              />
            </div>
          ) : null}
          <div className="col-span-full flex my-3 space-x-4">
            <Radio
              value={arraySubjectTypes}
              register={register}
              errors={errors}
              required={true}
              name="subject_type"
            />
          </div>
        </div>
        <div className="sm:grid-cols-2  xl:grid-cols-4 grid grid-cols-1 gap-4">
          <div className="md:flex-row col-span-full xl:col-span-3 flex flex-col my-6 ml-auto">
            <div className=" w-fit">
              <Link
                to="/admin/dashboard/admin/data-setup/subject"
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

export default EditSubject;
