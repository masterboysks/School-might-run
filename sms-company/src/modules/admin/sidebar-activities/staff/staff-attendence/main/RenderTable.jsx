import React from "react";
import {
  Input,
  InputDisabled,
} from "../../../../../../components/common/fields";

export default function RenderTable({ curr, watch, register, errors }) {
  const status = watch(`${curr.staff_id}[radio]`);
  console.log(status);
  console.log(curr.name + "_radio");
  return (
    <tr>
      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
        {curr.staff_id}
      </td>
      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
        {curr.staff_name}
      </td>
      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
        {curr.department_name}
      </td>
      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
        {curr.designation_name}
      </td>
      <td className=" px-3 py-4 pt-6 ">
        <div className="">
          <input
            type="radio"
            checked="checked"
            className=" ring-0 w-3 h-3 rounded-full"
            {...register(`${curr.staff_id}[radio]`)}
            value="1"
          />
        </div>
      </td>
      <td className=" px-3 py-4 pt-6 ">
        <div className="">
          <input
            type="radio"
            className=" ring-0 w-3 h-3 rounded-full"
            {...register(`${curr.staff_id}[radio]`)}
            value="2"
          />
        </div>
      </td>
      <td className=" px-3 py-4 pt-6 ">
        <div className="">
          <input
            type="radio"
            className=" ring-0 w-3 h-3 rounded-full"
            {...register(`${curr.staff_id}[radio]`)}
            value="3"
          />
        </div>
      </td>
      <td className="whitespace-nowrap px-1 pb-2 text-sm text-gray-500">
        {status === "1" || status === undefined ? (
          <InputDisabled />
        ) : (
          <Input
            register={register}
            name={`${curr.staff_id}[reason]`}
            errors={errors}
            required={true}
            showError={false}
          />
        )}
      </td>
    </tr>
  );
}
