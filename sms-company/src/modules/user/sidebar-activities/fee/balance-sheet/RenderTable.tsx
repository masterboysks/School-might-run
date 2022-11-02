import React from "react";
import ThreeDots from "@mui/icons-material/MoreVert";
import { Popover } from "@headlessui/react";
// import { Link } from "react-router-dom";
// import { useContext } from "react";
// import { DeleteModalContex } from "../../../../../../../contex/admin/common/ContexForDeleteModal";
// import sectionsApi from "../../../../../../../api/admin/dashboard/admin/data-setup/sectionsApi";

const RenderTable = ({ currentItems }) => {
  //   const value = useContext(DeleteModalContex);

  //   const deleteFunction = async (id) => {
  //     const res = await sectionsApi.delete(id);
  //     res.status === 204 && setData(currentItems.filter((d) => d.id != id));
  //   };
  //   const handleDelete = (id, name, inUse) => {
  //     value.setValue({
  //       func: deleteFunction,
  //       id: id,
  //       message: `You want to delete ${name} ?`,
  //       heading: "section",
  //       inUse,
  //     });
  //   };
  return (
    <>
      {currentItems?.map((person, index, table) => (
        <tr key={person.id + "sections"}>
          <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
            {person.date}
          </td>
          <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
            {person.billNo}
          </td>
          <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
            {person.grandTotal}
          </td>
          <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
            {person.grandTotal}
          </td>
          <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
            {person.grandTotal}
          </td>
          <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
            {person.grandTotal}
          </td>
          <td className="whitespace-nowrap px-3 py-2 text-sm text-gray-500">
            <button className="primary_btn">View</button>
          </td>
        </tr>
      ))}
    </>
  );
};

export default RenderTable;
{
  /* <Popover>
<Popover.Button>
  <ThreeDots />
</Popover.Button>
<Popover.Panel
  className={` -left-full absolute z-10 bg-white divide-y-2 rounded shadow-lg cursor-pointer
   ${index + 1 < table.length ? "top-0" : "bottom-0"}`}
>
  <div className="p-3">
    <Link to={`${person.id}/${person.section_name}`}>Edit</Link>
  </div>
  <button
    onClick={() => {
      handleDelete(person.id, person.section_name, person.in_use);
    }}
    className="p-3"
  >
    Delete
  </button>
</Popover.Panel>
</Popover> */
}
