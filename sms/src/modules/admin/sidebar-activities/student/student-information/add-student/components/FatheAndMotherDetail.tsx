import React from 'react';
import {
  Input,
  InputNumber,
} from '../../../../../../../components/common/fields';
import Break from './Break';

export default function FatheAndMotherDetail({ register, errors }) {
  return (
    <>
      <Break title="Father details" />
      <div className="sm:grid-cols-2  lg:grid-cols-3 xl:grid-cols-4 grid grid-cols-1 gap-4 my-6">
        <div>
          <Input
            label="First Name*"
            name="father[first_name]"
            placeholder="Krish"
            required={true}
            errors={errors}
            register={register}
          />
        </div>
        <div className="">
          <Input
            register={register}
            placeholder="Prashad"
            name="father[middle_name]"
            label="Middle name"
          />
        </div>
        <div className="">
          <Input
            label="Last Name*"
            required={true}
            errors={errors}
            register={register}
            name="father[last_name]"
            placeholder="Koirala"
          />
        </div>
        <div className="">
          <InputNumber
            label="Mobile Number*"
            errors={errors}
            register={register}
            requred={true}
            name="father[mobile_number]"
            placeholder="9805540213"
          />
        </div>
        <div className="">
          <Input
            type="email"
            register={register}
            name="father[email]"
            label="Email"
            placeholder="xyz@suchhi.com.np"
          />
        </div>
        <div className="">
          <Input
            register={register}
            name="father[occupation]"
            label="Occupation*"
            required={true}
            errors={errors}
            placeholder="An architect"
          />
        </div>
      </div>
      <Break title="Mother details" />
      <div className="sm:grid-cols-2  lg:grid-cols-3 xl:grid-cols-4 grid grid-cols-1 gap-4 my-6">
        <div>
          <Input
            label="First Name*"
            name="mother[first_name]"
            placeholder="Sabitri"
            required={true}
            errors={errors}
            register={register}
          />
        </div>
        <div className="">
          <Input
            register={register}
            placeholder=""
            name="mother[middle_name]"
            label="Middle name"
          />
        </div>
        <div className="">
          <Input
            label="Last Name*"
            required={true}
            errors={errors}
            register={register}
            name="mother[last_name]"
            placeholder="Koirala"
          />
        </div>
        <div className="">
          <InputNumber
            label="Mobile Number*"
            errors={errors}
            register={register}
            requred={true}
            name="mother[mobile_number]"
            placeholder="9805540213"
          />
        </div>
        <div className="">
          <Input
            type="email"
            register={register}
            name="mother[email]"
            label="Email"
            placeholder="xyzas@suchhi.com.np"
          />
        </div>
        <div className="">
          <Input
            register={register}
            name="mother[occupation]"
            label="Occupation*"
            required={true}
            errors={errors}
            placeholder="Housewife"
          />
        </div>
      </div>
    </>
  );
}
