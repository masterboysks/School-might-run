import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import React from 'react';
import { Input } from '../../../../../../components/common/fields';
export default function RenderTable({
  register,
  errors,
  setStation,
  station,
  index,
  current,
}) {
  //   const handleChange = (index, event) => {
  //     let data = [...inputFields];
  //     data[index][event.target.name] = event.target.value;
  //     setInputFiled(data);
  //   };
  return (
    <tr>
      <td className="p-2">
        <Input
          placeholder="New baneshwor"
          name={`${current}[station]`}
          label={undefined}
          register={register}
        />
      </td>
      <td className="p-2">
        <Input
          name={`${current}[oneway_fee]`}
          placeholder="5000"
          label={undefined}
          register={register}
        />
      </td>
      <td className="p-2">
        <Input
          placeholder="10000"
          name={`${current}[twoway_fee]`}
          label={undefined}
          register={register}
        />
      </td>
      <td className="p-2">
        <Input
          placeholder="10:00 AM"
          name={`${current}[pickup_time]`}
          label={undefined}
          register={register}
        />
      </td>

      <td>
        {station.length === 1 || (
          <div
            className=" text-primary-grey-700 w-fit p-1 mx-1 bg-white rounded-full shadow"
            onClick={() => {
              setStation((curr) => {
                let temp = [...curr];

                temp.splice(temp.indexOf(current), 1);
                return temp;
              });
            }}
          >
            <CloseOutlinedIcon fontSize="inherit" />
          </div>
        )}
      </td>
    </tr>
  );
}
