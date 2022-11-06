import React from 'react';
import { Popover } from '@headlessui/react';
import ThreeDots from '@mui/icons-material/MoreVert';
import { Link } from 'react-router-dom';

export default function RenderTable({ currentItems, setData }) {
  return (
    <>
      {currentItems.map((person, index, table) => (
        <tr key={index}>
          <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
            {person.faculty}
          </td>
          <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
            {person.level}
          </td>
          <td className="whitespace-nowrap  px-3 py-4 text-sm text-gray-500">
            {' '}
            <td className="whitespace-nowrap relative text-sm text-gray-500">
              <Popover>
                <Popover.Button>
                  <ThreeDots />
                </Popover.Button>
                <Popover.Panel
                  className={` -left-full absolute z-10 bg-white divide-y-2 rounded shadow-lg cursor-pointer
                 ${index + 1 < table.length ? 'top-0' : 'bottom-0'}`}
                >
                  {' '}
                  <div
                    onClick={() => {
                      console.log(person);
                      localStorage.setItem(
                        'Mb5sVJt5Qp',
                        JSON.stringify({
                          is_running: person.is_running,
                          academic_year: person.academic_year,
                        })
                      );
                    }}
                    className="p-3"
                  >
                    <Link to={`${person.id}/edit`}>Edit</Link>
                  </div>
                  <button
                    // onClick={() => {
                    //   handleDelete(
                    //     person.id,
                    //     person.academicYear,
                    //     person.in_use
                    //   );
                    // }}
                    className="p-3"
                  >
                    Delete
                  </button>
                </Popover.Panel>
              </Popover>
            </td>
          </td>
        </tr>
      ))}
    </>
  );
}
