import React from 'react';

const RenderTable = ({ currentItems }) => {
  return (
    <>
      {currentItems?.map((person, index, table) => (
        <tr key={index}>
          <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
            {person.student_code}
          </td>
          <td className="whitespace-nowrap  px-3 py-4 text-sm">
            {person.name}
          </td>

          <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
            {person.invoice_no}
          </td>

          <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
            {person.total_amount}
          </td>
          <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
            {person.no_of_print || 'Not printed'}
          </td>
        </tr>
      ))}
    </>
  );
};

export default RenderTable;
