import React from "react";
import ThreeDots from "@mui/icons-material/MoreVert";
import { Popover } from "@headlessui/react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { DeleteModalContex } from "../../../../../../../contex/admin/common/ContexForDeleteModal";
import subjectApi from "../../../../../../../api/admin/dashboard/admin/data-setup/subjectApi";

const RenderTable = ({ currentItems, setData }) => {
  const value = useContext(DeleteModalContex);

  const deleteFunction = async (id) => {
    const res = await subjectApi.delete(id);
    res.status === 204 && setData(currentItems.filter((d) => d.id != id));
  };
  const handleDelete = (id, name, inUse) => {
    value.setValue({
      func: deleteFunction,
      id: id,
      message: `You want to delete ${name} ?`,
      heading: "subject",
      inUse,
    });
  };
  return (
    <>
      {currentItems.map((person, index, table) => (
        <tr key={index}>
          <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
            {person.subject_name}
          </td>
          <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
            {person.subject_type_name}
          </td>
          <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
            {person.level_name}
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
                        level_id: person.level_id,
                        subject_name: person.subject_name,
                        subject_type: person.subject_type + "",
                        credit_hours: person.credit_hours,
                      })
                    );
                  }}
                >
                  <Link to={`${person.id}/${person.subject_name}`}>Edit</Link>
                </div>{" "}
                <button
                  onClick={() => {
                    handleDelete(person.id, person.subject_name, person.in_use);
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
