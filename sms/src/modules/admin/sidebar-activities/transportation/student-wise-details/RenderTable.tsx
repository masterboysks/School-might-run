import React from "react";
const arrayGender = {
  1: "Male",
  2: "Femail",
};

const RenderTable = ({
  currentItems,
}: {
  currentItems: {
    id: string;
    name: string;
    route_name: string;
    station: string;
    trip_type: string;
    fee: string;
    status: number;
  }[];
}) => {
  return (
    <>
      {currentItems.map((person, index, table) => (
        <tr key={index}>
          <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
            {person.id}
          </td>
          <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
            {person.name}
          </td>
          <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
            {person.route_name}
          </td>
          <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
            {person.station}
          </td>
          <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
            {person.trip_type}
          </td>
          <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
            {arrayGender[person.fee]}
          </td>
          <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
            {person.status ? "Active" : "Inactive"}
          </td>
        </tr>
      ))}
    </>
  );
};

export default RenderTable;

{
  /* <td className="whitespace-nowrap relative text-sm text-gray-500">
<Popover>
  <Popover.Button>
    <ThreeDots />
  </Popover.Button>
  <Popover.Panel
    className={` -left-full absolute z-10 bg-white divide-y-2 rounded shadow-lg cursor-pointer
     ${index + 1 < table.length ? "top-0" : "bottom-0"}`}
  >
    <div className="p-3">
      <Link to={`${person.id}/general`}>View</Link>
    </div>

    <div className="p-3">Delete</div>
  </Popover.Panel>
</Popover>
</td> */
}
