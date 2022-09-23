import React from "react";
import ThreeDots from "@mui/icons-material/MoreVert";
import { Popover } from "@headlessui/react";

const RenderTable = ({ currentItems }) => {
  return (
    <>
      {currentItems.map((person, index, table) => (
        <tr key={index}>
          <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
            {person.feeName}
          </td>
          <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
            {person.level}
          </td>
          <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
            {person.paymentMethod}
          </td>
          <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
            {person.paymentMethod}
          </td>
        </tr>
      ))}
    </>
  );
};

export default RenderTable;
