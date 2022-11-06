import React from 'react';
import ThreeDots from '@mui/icons-material/MoreVert';
import { Popover } from '@headlessui/react';
import { DeleteModalContex } from '../../../../../../../contex/admin/common/ContexForDeleteModal';
import { useContext } from 'react';
import subFacultyApi from '../../../../../../../api/admin/dashboard/admin/data-setup/subFacultyApi';
import { Link } from 'react-router-dom';

const RenderTable = ({ currentItems, setData }) => {
  const value = useContext(DeleteModalContex);

  const deleteFunction = async (id) => {
    const res = await subFacultyApi.delete(id);
    res.status === 204 && setData(currentItems.filter((d) => d.id != id));
  };
  const handleDelete = (id, name, inUse) => {
    value.setValue({
      func: deleteFunction,
      id: id,
      message: `You want to delete ${name} ?`,
      heading: 'sub-faculty',
      inUse,
    });
  };
  return (
    <>
      {currentItems?.map((person, index, table) => (
        <tr key={person.id + 'sub-faculty'}>
          <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
            {person.subfaculty_name}
          </td>
          <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
            {person.faculty_name}
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
                  className="p-3"
                  onClick={() => {
                    localStorage.setItem(
                      'Mb5sVJt5Qp',
                      JSON.stringify({
                        subfaculty_name: person.subfaculty_name,
                        faculty_id: person.faculty_id,
                      })
                    );
                  }}
                >
                  <Link to={`${person.id}/${person.subfaculty_name}`}>
                    Edit
                  </Link>
                </div>
                <button
                  onClick={() => {
                    handleDelete(
                      person.id,
                      person.subfaculty_name,
                      person.in_use
                    );
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
