import React from "react";
import ThreeDots from "@mui/icons-material/MoreVert";
import { Popover } from "@headlessui/react";
import { DeleteModalContex } from "../../../../../../../contex/admin/common/ContexForDeleteModal";
import { useContext } from "react";
import levelApi from "../../../../../../../api/admin/dashboard/admin/data-setup/levelApi";
import { Link } from "react-router-dom";

const RenderTable = ({ currentItems, setData }) => {
  const value = useContext(DeleteModalContex);

  const deleteFunction = async (id) => {
    const res = await levelApi.delete(id);
    res.status === 200 && setData(currentItems.filter((d) => d.id != id));
  };
  const handleDelete = (id, name) => {
    value.setValue({
      func: deleteFunction,
      id: id,
      message: `You want to delete ${name} ?`,
      heading: "level",
      inUse: false,
    });
  };
  return (
    <>
      {currentItems.map((person, index, table) => (
        <tr key={index}>
          <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
            {person.level_name}
          </td>
          <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
            {person.university_name}
          </td>
          <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
            {person.has_faculty ? "yes" : "no"}
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
                <div
                  className="p-3"
                  onClick={() => {
                    console.log(person);
                    localStorage.setItem(
                      "Mb5sVJt5Qp",
                      JSON.stringify({
                        has_faculty: person.has_faculty,
                        university_id: person.university_id,
                        level_name: person.level_name,
                      })
                    );
                  }}
                >
                  <Link to={`${person.id}/${person.level_name}`}>Edit</Link>
                </div>

                <button
                  onClick={() => {
                    handleDelete(person.id, person.name);
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
