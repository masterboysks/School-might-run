import React from "react";
import ThreeDots from "@mui/icons-material/MoreVert";
import { Popover } from "@headlessui/react";

const RenderTable = ({ currentItems }) => {
  return (
    <>
      {currentItems.map((person, index, table) => (
        <tr key={index}>
          <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
            {person.entry_date}
          </td>
          <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
            {person.title}
          </td>
          <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
            {person?.send_to?.length > 1
              ? person?.send_to?.join(" ,")
              : person?.send_to}
          </td>
          <td className="whitespace-nowrap text-primary-btn px-3 py-4 text-sm">
            {person.document ? (
              <a
                href={person.document}
                target="_blank"
                rel="noopener noreferrer"
              >
                View
              </a>
            ) : (
              ""
            )}
          </td>
          <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
            {person.expiry_date}
          </td>

          <td className="whitespace-nowrap relative text-sm text-gray-500">
            <Popover>
              <Popover.Button>
                <ThreeDots />
              </Popover.Button>
              <Popover.Panel
                className={` -left-full absolute z-10 bg-white divide-y-2 rounded shadow-lg cursor-pointer
                 ${index + 1 < table.length ? "top-0" : "bottom-0"}`}
              >
                <div className="p-3">Edit</div>

                <div className="p-3">Delete</div>
              </Popover.Panel>
            </Popover>
          </td>
        </tr>
      ))}
    </>
  );
};

export default RenderTable;
