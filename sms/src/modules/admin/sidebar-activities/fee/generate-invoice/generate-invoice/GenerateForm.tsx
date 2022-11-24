import React from 'react';
import { useState } from 'react';
import { Select } from '../../../../../../components/common/fields';
import { useForm } from 'react-hook-form';
import { useQuery, useMutation } from '@tanstack/react-query';
import levelApi from '../../../../../../api/admin/dashboard/admin/data-setup/levelApi';
import batchApi from '../../../../../../api/admin/dashboard/admin/data-setup/batchApi';
import classApi from '../../../../../../api/admin/dashboard/admin/data-setup/classApi';
import getSectionFacultiesApi from '../../../../../../api/common/unknown/class/getSectionFacultiesApi';
import { arrayMonths } from '../../../../../../components/common/fields/Select';
import generateInvoiceApi from '../../../../../../api/admin/dashboard/fee/generateInvoiceApi';
export default function GenerateForm() {
  const [sucess, setSucess] = useState('');
  const {
    handleSubmit,
    register,
    reset,
    watch,
    formState: { errors, isValid },
  } = useForm();
  const [level_id, class_id] = watch(['level_id', 'class_id']);
  const { data: levelOptions } = useQuery({
    queryFn: () => levelApi.getAll(),
    staleTime: Infinity,
    queryKey: ['levelapigetall'],
    select: (d) => d?.data.data,
  });
  const { data: batchOptions } = useQuery({
    queryFn: () => batchApi.getAll(),
    staleTime: Infinity,
    queryKey: ['batchapigetall'],
    select: (d) => d?.data.data,
  });
  const { data: classOptions } = useQuery({
    staleTime: Infinity,
    queryFn: () => classApi.getAll(level_id),
    queryKey: ['classapigetall', level_id],
    select: (d) => d?.data.data,
    enabled: !!level_id,
  });
  const { data: facultyData } = useQuery({
    queryKey: ['getsectionfacultiesapi', class_id],
    staleTime: Infinity,
    enabled: !!class_id,
    select: (d) => d.data.data,
    onError: (err) => console.log(err),
    queryFn: () => getSectionFacultiesApi.getSectionFaculties(class_id),
  });
  const mutation = useMutation({
    mutationFn: (d) => generateInvoiceApi.generate(d),
    onError: (e) => {
      setSucess(''); //@ts-ignore
      setError(e?.response.data.message);
    },
    onSuccess: (d) => {
      setError('');
      setSucess(d.data.message);

      reset();
    },
  });
  const [error, setError] = useState('');

  const onSubmit = (d) => {
    mutation.mutate({
      ...d,
      faculty_id: facultyData?.faculty?.id || null,
      subfaculty_id: facultyData?.subfaculty?.id || null,
    });
  };
  return (
    <div className="my-6">
      {sucess && (
        <>
          <div className="text-green-600 font-medium text-lg">{sucess}</div>
        </>
      )}
      {error && (
        <>
          <div className="text-red-600 font-medium text-lg">{error}</div>
        </>
      )}

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="sm:grid-cols-2  lg:grid-cols-3 xl:grid-cols-4 ring-1 ring-black ring-opacity-5 form-solid grid grid-cols-1 gap-4 p-4 my-1 rounded-md shadow"
      >
        <div className="">
          <Select
            label="Level"
            value={levelOptions}
            disabled={!levelOptions}
            name="level_id"
            register={register}
            key={levelOptions ? 1 : 2}
            errors={errors}
          />
        </div>
        <div className="">
          <Select
            label="Batch"
            value={batchOptions}
            disabled={!batchOptions}
            key={batchOptions ? 1 : 2}
            name="batch_id"
            errors={errors}
            register={register}
          />
        </div>
        <div className="">
          <Select
            label="Class/Semester"
            value={classOptions}
            disabled={!classOptions}
            key={classOptions ? 1 : 2}
            name="class_id"
            errors={errors}
            register={register}
          />
        </div>

        <div className="">
          <Select
            label="Month"
            value={arrayMonths}
            register={register}
            errors={errors}
            name="month"
          />
        </div>
        <div className="flex sm:col-span-2 lg:col-span-2 xl:col-span-4 items-end justify-end">
          <button type="submit" className="primary_btn h-fit ">
            Generate Invoice
          </button>
        </div>
      </form>
    </div>
  );
}
