import React from "react";
import { Link } from "react-router-dom";

export default function RenderTable({ currentItems, setOpen, status }) {
  return (
    <>
      {currentItems.map((person, index, table) => (
        <tr key={index}>
          <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
            {person.id}
          </td>
          <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
            {person.name}
          </td>
          <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
            {person.roll_no}
          </td>
          <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
            {status[person.status]?.name}
          </td>
          <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
            {person.submitted_date}
          </td>
          <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
            {person.points}
          </td>

          <td className="whitespace-nowrap w-12 text-primary-btn px-3 py-4 text-sm">
            {/* {person.assignment} */}
            <span
              className="cursor-pointer"
              onClick={() => {
                setOpen(true);
              }}
            >
              View
            </span>
          </td>
        </tr>
      ))}
    </>
  );
}
