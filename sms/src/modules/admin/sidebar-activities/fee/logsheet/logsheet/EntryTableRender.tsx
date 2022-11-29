import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import React, { useEffect, useState } from 'react';
import {
  DateInput,
  Input,
  InputDisabled,
  InputNumber,
} from '../../../../../../components/common/fields';
export default function RenderTable({
  type,
  index,
  register,
  setValue,
  remove,
  watch,
  setGrandTotal,
}) {
  const [date, setDate] = useState('');
  const total =
    (watch(`items.${index}.amount`) || 0) -
    (watch(`items.${index}.discount_amount`) || 0);

  useEffect(() => setValue(`items.${index}.invoice_date`, date), [date]);
  useEffect(() => {
    setValue(`items.${index}.total_amount`, total);
  }, [total]);
  return (
    <tr>
      <td className="p-2">
        <DateInput label={undefined} selected={date} setSelected={setDate} />
      </td>
      <td className="p-2">
        <Input
          label={undefined}
          register={register}
          name={`items.${index}.description`}
        />
      </td>
      <td className="p-2">
        <InputNumber
          label={undefined}
          register={register}
          name={`items.${index}.amount`}
        />
      </td>
      <td className="p-2">
        {type == 'discount' ? (
          <InputDisabled label={undefined} />
        ) : (
          <InputNumber
            label={undefined}
            register={register}
            shouldUnregister={true}
            name={`items.${index}.discount_amount`}
          />
        )}

        {/* <input
          type="number"
          name="discount"
          id="discount"
          placeholder="00"
          className={`mt-[6px] w-full p- rounded  focus:ring-primary-btn  text-sm ${
            
              ? ' border-primary-field  placeholder:text-primary-grey-400 '
              : '  pointer-events-none border-primary-grey-400 bg-primary-grey-100 shadow-md placeholder:text-primary-grey-400    text-primary-grey-700 '
          } `}
        /> */}
      </td>
      <td className="overscroll-none relative p-2">
        <Input
          disabled
          label={undefined}
          name={`items.${index}.total_amount`}
          register={register}
        />
        {/* <input
          type="number"
          name="total"
          disabled
          id="total"
          placeholder="12000"
          className="mt-[6px] w-full p- rounded  focus:ring-primary-btn    border-primary-grey-400 bg-primary-grey-100 shadow-md placeholder:text-primary-grey-400    text-primary-grey-700 text-sm"
        /> */}
        {/* <div className="top-5 -right-3 absolute z-10 w-5"> </div> */}
      </td>
      <td>
        {index === 0 ? (
          <></>
        ) : (
          <button
            className=" text-primary-grey-700 w-fit p-1 mx-1 bg-white rounded-full shadow"
            onClick={(e) => {
              e.preventDefault();
              // console.log(examName.slice(0, -1));
              remove(index);
            }}
          >
            <CloseOutlinedIcon fontSize="inherit" />
          </button>
        )}
      </td>
    </tr>
  );
}
