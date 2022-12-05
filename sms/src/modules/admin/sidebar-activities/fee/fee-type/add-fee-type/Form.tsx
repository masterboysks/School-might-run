import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import {
  Input,
  MultipleMonthSelect,
  Select,
} from '../../../../../../components/common/fields';
import { yupResolver } from '@hookform/resolvers/yup';
import { useQuery, useMutation } from '@tanstack/react-query';
import * as yup from 'yup';
import levelApi from '../../../../../../api/admin/dashboard/admin/data-setup/levelApi';
import feeTypeApi from '../../../../../../api/admin/dashboard/fee/feeTypeApi';
const schema = yup.object().shape({
  name: yup.string().required(),
  level_id: yup.string().required(),
  month: yup.array().required().min(1, 'Select at least one item'),
});

export default function Form() {
  const { data: levelapi } = useQuery({
    queryFn: () => levelApi.getAll(),
    queryKey: ['levelapigetall'],
    select: (d) => d?.data.data,
    onSuccess: (d) => console.log(d),
    staleTime: Infinity,
  });
  const {
    register,
    control,
    handleSubmit,
    formState: { isValid, errors },
  } = useForm({ mode: 'onBlur', resolver: yupResolver(schema) });
  const navigate = useNavigate();

  const mutation = useMutation({
    mutationFn: (d) => feeTypeApi.create(d),
    onSuccess: () => navigate(-1),
  });
  const onSubmit = (d) => {
    const data = { ...d };
    mutation.mutate(data);
  };
  return (
    <form
      className="form-solid w-full my-6 rounded-md"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="sm:grid-cols-2  lg:grid-cols-3 xl:grid-cols-4 grid grid-cols-1 gap-4">
        <div>
          <Input
            label="Fee name*"
            placeholder="Admission fee"
            register={register}
            name="name"
            errors={errors}
          />
        </div>
        <div>
          <Select
            register={register}
            label="Level*"
            name="level_id"
            value={levelapi}
            errors={errors}
          />
        </div>
        <div>
          <MultipleMonthSelect
            label="Month*"
            control={control}
            name="month"
            errors={errors}
          />
        </div>
        <div className="md:flex-row w-fit lg:col-span-3  flex flex-col my-6 ml-auto">
          <div className=" w-fit">
            <Link to="/admin/dashboard/fee/fee-type" className="secondary_btn">
              Cancel
            </Link>
            <button type="submit" disabled={!isValid} className="primary_btn">
              Save
            </button>
          </div>
        </div>
      </div>
    </form>
  );
}
