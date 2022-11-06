import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import Break from '../../../../../../components/common/Break';
import {
  Input,
  InputDisabled,
  Select,
  Upload,
  UploadPhoto,
} from '../../../../../../components/common/fields';
export default function VehicleRouteSetupAdd() {
  const [route, setRoute] = useState([
    {
      id: 'kljhgjkshdn',
      name: 'dsjhkjh',
    },
    {
      id: 'kljafsdhgjkshdn',
      name: 'dsjhkjh',
    },
    {
      id: 'kljasfhgjkshdn',
      name: 'dsjhkjh',
    },
    {
      id: 'kljhgfsaejkshdn',
      name: 'dsjhkjh',
    },
    {
      id: 'kljwwrhgjkshdn',
      name: 'dsjwerhkjh',
    },
    {
      id: 'kljrtwyhgjkshdn',
      name: 'dsjhkjh',
    },
  ]);
  const [name, setName] = useState([
    {
      id: 'kljhgjkshdn',
      name: 'dsjhkjh',
    },
    {
      id: 'kljafsdhgjkshdn',
      name: 'dsjhkjh',
    },
    {
      id: 'kljasfhgjkshdn',
      name: 'dsjhkjh',
    },
    {
      id: 'kljhgfsaejkshdn',
      name: 'dsjhkjh',
    },
    {
      id: 'kljwwrhgjkshdn',
      name: 'dsjwerhkjh',
    },
    {
      id: 'kljrtwyhgjkshdn',
      name: 'dsjhkjh',
    },
  ]);
  const {
    register,
    watch,
    formState: { errors },
    handleSubmit,
  } = useForm();
  return (
    <div>
      <Break title="Add vehicle details" />
      <div className="sm:grid-cols-2 mt-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 grid grid-cols-1 gap-4">
        <div className="">
          <Select
            label="Vehicle route.*"
            required={true}
            name="vehicle_route"
            register={register}
            errors={errors}
            value={route}
          />
        </div>
        <div className="">
          <Select
            label="Vehicle name*"
            required={true}
            value={name}
            errors={errors}
            name="vechicle_name"
            register={register}
          />
        </div>
        <div className="">
          <InputDisabled label="Vehicle number" value="1224455" />
        </div>
        <div className="">
          <InputDisabled label="Driver name" value="1224455" />
        </div>
      </div>
    </div>
  );
}
