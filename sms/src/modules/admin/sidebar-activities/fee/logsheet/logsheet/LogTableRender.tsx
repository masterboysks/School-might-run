import React from 'react';

const LogTableRender = ({ currentItems, setOpen }) => {
  return (
    <>
      {currentItems?.map((person, index, table) => (
        <tr key={index}>
          <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
            {person.date}
          </td>
          <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
            {person.description}
          </td>
          <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
            {person.bill_no}
          </td>
          <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
            {person.total_amount <= 0
              ? `(Rs.${Math.abs(person.total_amount)})`
              : `Rs.${person.total_amount}`}
          </td>

          <td className="whitespace-nowrap text-primary-btn px-3 py-4 text-sm">
            <span
              className="cursor-pointer"
              onClick={() => {
                setOpen(person.id);
              }}
            >
              Details
            </span>
          </td>
        </tr>
      ))}
    </>
  );
};

export default LogTableRender;
