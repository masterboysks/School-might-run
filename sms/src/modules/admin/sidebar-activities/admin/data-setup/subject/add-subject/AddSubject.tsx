import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import {
  Checkbox,
  Input,
  InputNumber,
  Radio,
  Select,
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
  credit_hours: yup
    .number()
    .required('')
    .min(1, 'Minimium credit hour is 1.')
    .typeError('Must be a number'),
  subject_type: yup.string().required(''),
  has_practical: yup.boolean(),
  credit_hours_pr: yup.number().when('has_practical', {
    is: true,
    then: yup
      .number()
      .required('')
      .min(1, 'Minimium credit hour is 1.')
      .typeError('Must be a number'),
  }),
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
    name: 'Add',
    href: '/admin/dashboard/admin/data-setup/subject/add',
  },
];
const arraySubjectTypes = [
  { name: 'Compulsary subject', id: 1 },
  { name: 'Elective subject', id: 2 },
];
const AddSubject = () => {
  const {
    register,
    handleSubmit,
    watch,

    formState: { errors, isValid },
  } = useForm({ mode: 'onBlur', resolver: yupResolver(schema) });
  const hasPratical = watch('has_practical');
  const [arrayLevel, setArrayLevel] = useState([]);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const onSubmit = async (d) => {
    const res = await subjectApi.create({
      ...d,
      has_practical: d.has_practical ? 1 : 0,
    });
    // console.log(res);
    res?.status === 201
      ? navigate('/admin/dashboard/admin/data-setup/subject')
      : setError('Failed to create subject');
  };
  useEffect(() => {
    (async () => {
      const data = await levelApi.getAll();
      setArrayLevel(data?.data?.data);
    })();
  }, []);

  return (
    <>
      <Breadnav pages={pages} />
      <Break title="Add subject" />
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

export default AddSubject;
