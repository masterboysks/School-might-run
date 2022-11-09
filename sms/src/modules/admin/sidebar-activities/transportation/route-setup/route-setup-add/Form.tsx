import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import Break from '../../../../../../components/common/Break';
import { Input } from '../../../../../../components/common/fields';
import Table from './Table';

export default function Form() {
  const [station, setStation] = useState<number[]>([0]);
  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
  } = useForm();
  return (
    <form>
      <div className="lg:w-2/3 w-full mt-9 ">
        <Input
          name="route_name"
          label="Route name*"
          required={true}
          register={register}
          errors={errors}
        />
      </div>
      <Break title="Add station" />
      <div className="">
        <Table
          register={register}
          errors={errors}
          station={station}
          setStation={setStation}
        />
      </div>
    </form>
  );
}
