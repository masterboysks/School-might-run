import { Input } from "../../../../../../components/common/fields";
import { InputDisabled } from "../../../../../../components/common/fields";

const RenderTable = ({ currentItems, register }) => {
  return (
    <>
      {currentItems?.map((person, index, table) => (
        <tr key={index}>
          <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
            {person.class}
          </td>
          <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
            <Input
              type="number"
              register={register}
              name={"theoryof" + person.class}
             />
          </td>
          <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
            <Input
              type="number"
              register={register}
              name={"theoryof" + person.class}
             />
          </td>
          <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
            <Input
              type="number"
              register={register}
              name={"theoryof" + person.class}
             />
          </td>
          <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
            <InputDisabled
              type="number"
              register={register}
              name={"theoryof" + person.class}
             /Disabled>
          </td>
        </tr>
      ))}
    </>
  );
};

export default RenderTable;
