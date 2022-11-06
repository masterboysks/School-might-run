import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { Input } from '../../../../../../../components/common/fields';
export default function RenderTable({
  register,
  errors,
  setStation,
  station,
  index,
  current,
}) {
  const [accessionNumberGenerate, setAccessionNumberGenerate] = useState('');
  useEffect(() => {
    (async () => {
      const temp = localStorage.getItem('jhsgbbvppi') || '';
      // console.log(temp, "temp");
      const temp1 = await JSON.parse(temp);
      setAccessionNumberGenerate(temp1);
    })();
  }, []);

  const accessionGenerator = (id, values) => {
    console.log(values);
    if (values.isbn) {
      const temp = values?.isbn.split(/[-,.\s]/);
      return `${temp[2]}-${id + 1}-${temp[3]}-${values?.year}`;
      // Registration no from insb -- index number or unit no --publication no-- published date last threee digit
    }
  };

  return (
    <tr>
      <td className="p-2 px-4">{index + 1}</td>
      <td className="p-2">
        {accessionGenerator(index, accessionNumberGenerate)}
      </td>
      <td className="p-2">
        <Input
          placeholder="10:00 AM"
          name={`${current}[pickup_time]`}
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

                console.log(temp.splice(index, 1));
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
