import React from 'react';
import { Link } from 'react-router-dom';

const RenderTable = ({ currentItems }) => {
  if (!currentItems) return null;
  return (
    <>
      {currentItems?.map((person, index, table) => (
        <tr key={index}>
          <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
            {person.class_name}
          </td>

          <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
            {person.level_name}
          </td>

          <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
            {person.faculty_name}
          </td>
          <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
            {person.section_name}
          </td>

          <td className="whitespace-nowrap text-primary-btn  relative px-3 py-4 text-sm">
            <Link
              to={`view/${person.class_id}/${person.section_id}/${person.class_name}/${person.section_name}`}
            >
              View
            </Link>
          </td>
        </tr>
      ))}
    </>
  );
};

export default RenderTable;
