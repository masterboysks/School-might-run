import React from "react";
import ThreeDots from "@mui/icons-material/MoreVert";
import { Popover } from "@headlessui/react";
import { DeleteModalContex } from "../../../../../../../contex/admin/common/ContexForDeleteModal";
import { useContext } from "react";
import academicyearApi from "../../../../../../../api/admin/dashboard/admin/data-setup/academicyearApi";
import { Link } from "react-router-dom";

const RenderTable = ({ currentItems, setData }) => {
  const value = useContext(DeleteModalContex);

  const deleteFunction = async (id) => {
    const res = await academicyearApi.delete(id);
    res.status === 204 && setData(currentItems.filter((d) => d.id != id));
  };
  const handleDelete = (id, name, inUse) => {
    value.setValue({
      func: deleteFunction,
      id: id,
      message: `You want to delete ${name} ?`,
      heading: "academic year",
      inUse,
    });
  };
  return (
    <>
      {currentItems.map((person, index, table) => (
        <tr key={index}>
          <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
            {person.academicYear}
          </td>
          <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
            {person.isRunning ? "True" : "False"}
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
                {" "}
                <div
                  onClick={() => {
                    console.log(person);
                    localStorage.setItem(
                      "Mb5sVJt5Qp",
                      JSON.stringify({
                        is_running: person.is_running,
                        academic_year: person.academic_year,
                      })
                    );
                  }}
                  className="p-3"
                >
                  <Link to={`${person.id}/${person.academic_year}`}>Edit</Link>
                </div>
                <button
                  onClick={() => {
                    handleDelete(person.id, person.academicYear, person.in_use);
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
