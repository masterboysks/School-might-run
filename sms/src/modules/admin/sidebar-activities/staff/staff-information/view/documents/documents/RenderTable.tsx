import React from 'react';
import ThreeDots from '@mui/icons-material/MoreVert';
import { Popover } from '@headlessui/react';

const RenderTable = ({ currentItems }) => {
  return (
    <>
      {currentItems?.map((person, index, table) => (
        <tr key={person?.id}>
          <td className="whitespace-nowrap px-3 py-4 text-sm text-primary-btn">
            <a
              href={person.document_url}
              target="_blank"
              rel="noopener noreferrer"
            >
              {person?.document_name}
            </a>
          </td>

          <td className="whitespace-nowrap relative text-sm text-gray-500">
            <Popover>
              <Popover.Button>
                <ThreeDots />
              </Popover.Button>
              <Popover.Panel
                className={` -left-full absolute z-10 bg-white divide-y-2 rounded shadow-lg cursor-pointer
                 ${index + 1 < table.length ? 'top-0' : 'bottom-0'}`}
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
