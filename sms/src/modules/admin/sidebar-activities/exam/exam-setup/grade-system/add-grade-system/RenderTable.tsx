import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import React from 'react';
import {
  Input,
  InputNumber,
} from '../../../../../../../components/common/fields';
export default function RenderTable({
  register,
  index,
  remove,
  errors,
  table,
}) {
  // const handleChange = (index, event) => {
  //   let data = [...inputFields];
  //   data[index][event.target.name] = event.target.value;
  //   setInputFiled(data);
  // };
  return (
    <tr>
      <td className="p-2">
        <InputNumber
          register={register}
          required
          errors={errors}
          name={`grade_system.${index}.lower_limit`}
          placeholder="80"
          label={undefined}
        />
      </td>
      <td className="p-2">
        <InputNumber
          required
          register={register}
          errors={errors}
          name={`grade_system.${index}.upper_limit`}
          placeholder="90"
          label={undefined}
        />
      </td>
      <td className="p-2">
        <Input
          required
          register={register}
          label={undefined}
          errors={errors}
          name={`grade_system.${index}.grade`}
          placeholder="A"
        />
      </td>
      <td className="p-2">
        <InputNumber
          required
          register={register}
          label={undefined}
          name={`grade_system.${index}.gpa`}
          errors={errors}
        />
      </td>

      <td>
        {table.length === 1 || (
          <div
            className=" text-primary-grey-700 w-fit p-1 mx-1 bg-white rounded-full shadow"
            onClick={() => {
              remove(index);
            }}
          >
            <CloseOutlinedIcon fontSize="inherit" />
          </div>
        )}
      </td>
    </tr>
  );
}
