import ThreeDots from '@mui/icons-material/MoreVert';
import { Popover } from '@headlessui/react';
import { Link } from 'react-router-dom';

export default function RenderTable({
  person,
  selectedPeople,
  setSelectedPeople,
  table,
  index,
}) {
  return (
    <tr className={selectedPeople.includes(person) ? 'bg-gray-50' : undefined}>
      <td className="sm:w-16 sm:px-8 relative w-12 px-6">
        {selectedPeople.includes(person) && (
          <div className="absolute inset-y-0 left-0 w-0.5 bg-primary-btn" />
        )}
        <input
          type="checkbox"
          className="left-4 top-1/2 focus:ring-primary-btn border-primary-field placeholder:text-primary-grey-400 text-primary-btn absolute w-4 h-4 -mt-2 text-sm rounded shadow-md"
          value={person.invoiceStatus}
          checked={selectedPeople.includes(person)}
          onChange={(e) =>
            setSelectedPeople(
              e.target.checked
                ? [...selectedPeople, person]
                : selectedPeople.filter((p) => p !== person)
            )
          }
        />
      </td>
      <td className="whitespace-nowrap py-4 pr-3 text-sm text-left text-gray-500">
        {person.class}
      </td>
      <td className="whitespace-nowrap text-primary-grey-600 px-3 py-4 text-sm">
        {person.faculty}
      </td>
      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
        {person.level}
      </td>
      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
        {person.start}
      </td>
      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
        {person.end}
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
              <Link to={`#`}>View</Link>
            </div>
            <div className="p-3">
              <Link to={`#`}>Edit</Link>
            </div>
          </Popover.Panel>
        </Popover>
      </td>
    </tr>
  );
}
