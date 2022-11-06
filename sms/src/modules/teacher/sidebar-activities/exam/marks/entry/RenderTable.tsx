import React from 'react';
import { Input } from '../../../../../../components/common/fields';
import { InputDisabled } from '../../../../../../components/common/fields';

const RenderTable = ({ currentItems, register }) => {
  return (
    <>
      {currentItems?.map((person, index, table) => (
        <tr key={index}>
          <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
            {person.class}
          </td>
          <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
            <Input
              label={undefined}
              type="number"
              register={register}
              name={'theoryof' + person.class}
            />
          </td>
          <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
            <Input
              label={undefined}
              type="number"
              register={register}
              name={'theoryof' + person.class}
            />
          </td>
          <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
            <Input
              label={undefined}
              type="number"
              register={register}
              name={'theoryof' + person.class}
            />
          </td>
          <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
            <InputDisabled label={undefined} />
          </td>
        </tr>
      ))}
    </>
  );
};

export default RenderTable;
// name={"theoryof" + person.class}
