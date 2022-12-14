import React from 'react';
import ThreeDots from '@mui/icons-material/MoreVert';
import { Popover } from '@headlessui/react';
import fiscalYearApi from '../../../../../../../api/admin/dashboard/admin/data-setup/fiscalYearApi';
import { DeleteModalContex } from '../../../../../../../contex/admin/common/ContexForDeleteModal';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@tanstack/react-query';

const RenderTable = ({ currentItems, refetch }) => {
  const value = useContext(DeleteModalContex);
  const mutation = useMutation({
    mutationFn: (id) => fiscalYearApi.delete(id),
  });

  const handleDelete = (id, name, inUse) => {
    value.setValue({
      func: mutation.mutate,
      id: id,
      message: `You want to delete ${name} ?`,
      heading: 'fiscal year',
      inUse,
    });
  };
  return (
    <>
      {currentItems?.map((person, index, table) => (
        <tr key={index}>
          <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
            {person.start_year}/{person.end_year}
          </td>
          <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
            {person.is_running ? 'True' : 'False'}
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
                <div
                  onClick={() => {
                    // console.log(person);
                    localStorage.setItem(
                      'Mb5sVJt5Qp',
                      JSON.stringify({
                        start_year: person.start_year,
                        end_year: person.end_year,
                        is_running: person.is_running,
                      })
                    );
                  }}
                  className="p-3"
                >
                  <Link to={`${person.id}/${person.fiscal_year}`}>Edit</Link>
                </div>
                <button
                  onClick={() => {
                    handleDelete(person.id, person.fiscalYear, person.in_use);
                  }}
                  className="p-3"
                >
                  Delete
                </button>
              </Popover.Panel>
            </Popover>
          </td>
        </tr>
      ))}
    </>
  );
};

export default RenderTable;
