import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import Break from '../../../../../../components/common/Break';
import { Radio } from '../../../../../../components/common/fields';
import Table from './EntryTable';
const arrayEntryType = [
  {
    name: 'Normal entry',
    id: 'normal',
  },
  {
    name: 'Discount entry',
    id: 'discount',
  },
];
export const Form = () => {
  const {
    formState: { errors, isValid },
    register,
    reset,
    handleSubmit,
    watch,
  } = useForm();
  const [invoice_type] = watch(['invoice_type']);
  // const [entryType, setEntryType] = useState('normal');
  const entryOnChange = (e) => {
    console.log('changed');
  };

  return (
    <>
      <Break title="Logsheet" />
      <form className="">
        <div className="my-6">
          <Radio
            register={register}
            name="invoice_type"
            value={arrayEntryType}
          />
        </div>
        <Table type={invoice_type} />
      </form>
    </>
  );
};
