import React, { useContext } from 'react';
import ThreeDots from '@mui/icons-material/MoreVert';
import { Popover } from '@headlessui/react';
import { DeleteModalContex } from '../../../../../../../contex/admin/common/ContexForDeleteModal';
import classApi from '../../../../../../../api/admin/dashboard/admin/data-setup/classApi';
import { Link } from 'react-router-dom';

const RenderTable = ({ currentItems, setData }) => {
  const value = useContext(DeleteModalContex);

  const deleteFunction = async (id) => {
    const res = await classApi.delete(id);
    res.status === 204 && setData(currentItems.filter((d) => d.id != id));
  };
  const handleDelete = (id, name, inUse) => {
    // @ts-ignore
    value.setValue({
      func: deleteFunction,
      id: id,
      message: `You want to delete ${name} ?`,
      heading: 'Class',
      inUse,
    });
  };
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
            {person.subfaculty_name}
          </td>
          <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
            {person.sections &&
              person.sections.map((curr, index) => {
                return index === 0
                  ? `${curr?.section_name}`
                  : ` ,${curr?.section_name}`;
              })}
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
                <div className="p-3">
                  <Link to={`${person.id}/${person.class_name}`}>Edit</Link>
                </div>
                <button
                  onClick={() => {
                    handleDelete(person.id, person.class_name, person.in_use);
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
