import React from 'react';
import ThreeDots from '@mui/icons-material/MoreVert';
import { Popover } from '@headlessui/react';
import { useContext } from 'react';
import { DeleteModalContex } from '../../../../../../../contex/admin/common/ContexForDeleteModal';
import departmentApi from '../../../../../../../api/admin/dashboard/admin/data-setup/departmentApi';
import { Link } from 'react-router-dom';

const RenderTable = ({ currentItems, setData }) => {
  const value = useContext(DeleteModalContex);

  const deleteFunction = async (id) => {
    const res = await departmentApi.delete(id);
    res.status === 204 && setData(currentItems.filter((d) => d.id != id));
  };
  const handleDelete = (id, name, inUse) => {
    value.setValue({
      func: deleteFunction,
      id: id,
      message: `You want to delete ${name} ?`,
      heading: 'department',
      inUse,
    });
  };
  return (
    <>
      {currentItems.map((person, index, table) => (
        <tr key={index}>
          <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
            {person.department_name}
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
                {' '}
                <div className="p-3">
                  <Link to={`${person.id}/${person.department_name}`}>
                    Edit
                  </Link>
                </div>
                <button
                  onClick={() => {
                    handleDelete(
                      person.id,
                      person.department_name,
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
