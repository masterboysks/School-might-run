import { Link } from "react-router-dom";
import RenderTable from "./RenderTable";
import { SearchBar } from "../../../../../../../components/common/oldFields";
import { useState } from "react";
import Breadnav from "../../../../../../../components/common/Breadnav";

const people = [
  {
    academicYear: "2072",
    isRunning: false,
  },
  {
    academicYear: "2073",
    isRunning: true,
  },
];
const pages = [
  { name: "Admin", href: "#", current: false },
  {
    name: "Date setup",
    href: "#",
    current: false,
  },
  {
    name: "Academic year",
    href: "/admin/data-setup/academic-year",
    current: true,
  },
];
const AcademicYear = () => {
  const [search, setSearch] = useState(null);
  return (
    <>
      <Breadnav pages={pages} />
      <div className="mt-11 lg:w-2/3 w-full">
        <div className="sm:flex sm:items-center justify-between">
          <div className="w-72 relative max-w-full">
            <SearchBar value={search} setValue={setSearch} />
          </div>
          <div className="sm:mt-0 sm:ml-16 sm:flex-none mt-4">
            <Link
              to="/admin/data-setup/academic-year/add"
              className="bg-primary-btn hover: focus:outline-none focus:ring- focus:ring-offset-2 sm:w-auto inline-flex items-center justify-center px-4 py-3 text-sm font-medium text-white border border-transparent rounded-md shadow-sm"
            >
              Add
            </Link>
          </div>
        </div>
        <div className="my-6">
          <div className=" ring-1 ring-black ring-opacity-5 overflow-x-auto rounded-lg shadow">
            <div className="inline-block w-full align-middle">
              <div className=" w-full rounded-lg">
                <table className="min-w-full divide-y divide-gray-300 table-auto">
                  <thead className="bg-gray-50">
                    <tr>
                      <th
                        scope="col"
                        className="px-3 py-3.5  text-left text-sm font-medium text-primary-grey-700  "
                      >
                        Academic Year
                      </th>
                      <th
                        scope="col"
                        className="px-3 py-3.5  text-left text-sm font-medium text-primary-grey-700    "
                      >
                        Is running?
                      </th>

                      <th
                        scope="col"
                        className="px-3 py-3.5 w-10 text-left text-sm font-medium text-primary-grey-700  "
                      >
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    <RenderTable currentItems={people} />
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AcademicYear;
