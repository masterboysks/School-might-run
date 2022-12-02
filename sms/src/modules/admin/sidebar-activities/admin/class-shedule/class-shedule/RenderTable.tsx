import React from 'react';

const RenderTable = ({ currentItems }) => {
  return (
    <>
      {currentItems?.map((person, index, table) => (
        <tr key={index}>
          <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
            {person.subject_name}
          </td>
          <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
            {person.start_time}
          </td>
          <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
            {person.end_time}
          </td>

          <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
            {person.teacher_name}
          </td>
        </tr>
      ))}
    </>
  );
};

export default RenderTable;
