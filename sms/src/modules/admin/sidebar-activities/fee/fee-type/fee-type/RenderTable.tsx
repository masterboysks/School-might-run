import React from 'react';
import ThreeDots from '@mui/icons-material/MoreVert';
import { Popover } from '@headlessui/react';
import { Link } from 'react-router-dom';
import { useDeleteModalContex } from '../../../../../../contex/admin/common/ContexForDeleteModal';
import feeTypeApi from '../../../../../../api/admin/dashboard/fee/feeTypeApi';
import { useMutation } from '@tanstack/react-query';
const arrayMonths = [
  ,
  'Baishakh',
  'Jestha',
  'Aashadha',
  'Shrawan',
  'Bhadra',
  'Ashwin ',
  'Kartik ',
  'Mangsir ',
  'Paush ',
  'Magh ',
  'Falgun ',
  'Chaitra ',
];
const RenderTable = ({ currentItems, page, refetch }) => {
  const value = useDeleteModalContex();
  const mutaion = useMutation({
    mutationFn: (d) => feeTypeApi.delete(d),
    onSuccess: () => refetch(),
  });

  const handleDelete = (id, name, inUse) => {
    value.setValue({
      func: mutaion.mutate,
      id: id,
      message: `You want to delete ${name} ?`,
      heading: 'fee type',
      inUse,
    });
  };

  return (
    <>
      {currentItems?.map((person, index, table) => (
        <tr key={index}>
          <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
            {person.name}
          </td>
          <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
            {person.level_name}
          </td>
          <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
            {person.month?.map((c, i, t) =>
              t.length != i + 1 ? arrayMonths[c] + ', ' : arrayMonths[c]
            )}
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
                  <Link to={`edit/${person.id}/${page}`}>Edit</Link>
                </div>

                <button
                  className="p-3"
                  onClick={() =>
                    handleDelete(person.id, person.name, person.inUse)
                  }
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
