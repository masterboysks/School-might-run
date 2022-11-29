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
    control,
    reset,
    handleSubmit,
    setValue,
    watch,
  } = useForm({
    defaultValues: {
      invoice_type: '',
      items: [
        {
          invoice_date: '',
          description: '',
          amount: 0,
          discount_amount: 0,
        },
      ],
    },
  });
  const [grandTotal, setGrandTotal] = useState(0);
  const onSubmit = (d) => console.log({ ...d, total_amount: grandTotal });
  const [invoice_type] = watch(['invoice_type']);

  return (
    <>
      <Break title="Logsheet" />
      <form className="" onSubmit={handleSubmit(onSubmit)}>
        <div className="my-6">
          <Radio
            register={register}
            name="invoice_type"
            value={arrayEntryType}
          />
        </div>
        <Table
          watch={watch}
          setGrandTotal={setGrandTotal}
          grandTotal={grandTotal}
          setValue={setValue}
          type={invoice_type}
          control={control}
          register={register}
        />
      </form>
    </>
  );
};
