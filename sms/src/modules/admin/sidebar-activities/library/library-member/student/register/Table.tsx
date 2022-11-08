import React from 'react';
import { useLayoutEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import RenderTable from './RenderTable';

const people = [
  {
    level: 'School level',
    faculty: '',
    noOfStd: 40,
    invoiceStatus: 'Unplublished',

    class: 'Front-end Developer',
    section: 'lindsay.walton@example.com',
  },
  {
    level: 'School level',
    faculty: '',
    noOfStd: 40,
    invoiceStatus: 'Unplublished',

    class: 'Front-end Developer',
    section: 'lindsay.walton@examplfdgbf.com',
  },
];

export default function Example() {
  const checkbox = useRef();
  const [checked, setChecked] = useState(false);
  const [indeterminate, setIndeterminate] = useState(false);
  const [selectedPeople, setSelectedPeople] = useState([]);

  useLayoutEffect(() => {
    const isIndeterminate =
      selectedPeople.length > 0 && selectedPeople.length < people.length;
    setChecked(selectedPeople.length === people.length);
    setIndeterminate(isIndeterminate);
    checkbox.current.indeterminate = isIndeterminate;
  }, [selectedPeople]);

  function toggleAll() {
    setSelectedPeople(checked || indeterminate ? [] : people);
    setChecked(!checked && !indeterminate);
    setIndeterminate(false);
  }

  return (
    <div className="my-6">
      <div className="flex justify-end w-full gap-3">
        <button
          // to="/admin/dashboard/student/student-information/add-student-details"
          className="primary_btn"
        >
          Renew selected student
        </button>
        <button
          // to="/admin/dashboard/student/student-information/add-student-details"
          className="primary_btn"
        >
          Register selected student
        </button>
      </div>

      <div className=" ring-1 ring-black ring-opacity-5 mb-9 min-w-full mt-4 overflow-x-auto rounded-lg shadow">
        <div className="w-fit ml-auto" />
        <div className=" flex flex-col w-full rounded">
          <div className=" overflow-x-auto">
            <table className=" min-w-full divide-y divide-gray-300 table-fixed">
              <thead className="bg-gray-50">
                <tr className="text-primary-grey-700">
                  <th
                    scope="col"
                    className="sm:w-16 sm:px-8 relative w-12 px-6"
                  >
                    <input
                      type="checkbox"
                      className="left-4 top-1/2 focus:ring-primary-btn border-primary-field placeholder:text-primary-grey-400 text-primary-btn absolute w-4 h-4 -mt-2 text-sm rounded shadow-md"
                      ref={checkbox}
                      checked={checked}
                      onChange={toggleAll}
                    />
                  </th>
                  <th
                    scope="col"
                    className=" py-3.5 pr-3 text-left text-sm font-semibold text-primary-active"
                  >
                    Student Id
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-left text-sm font-semibold text-primary-active"
                  >
                    Stu. name
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-left text-sm font-semibold text-primary-active"
                  >
                    Class/semester
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-left text-sm font-semibold text-primary-active"
                  >
                    Faculty
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-left text-sm font-semibold text-primary-active"
                  >
                    Section
                  </th>
                  {/* <th
                    scope="col"
                    className="relative py-3.5 pl-3 pr-4 sm:pr-6 text-left "
                  >
                    Fine ammount
                  </th> */}
                  <th
                    scope="col"
                    className="relative w-16 py-3.5 pl-3 pr-4 sm:pr-6 text-left"
                  >
                    Status
                  </th>
                </tr>
              </thead>
              <tbody className=" bg-white divide-y divide-gray-200">
                {people.map((person, index, table) => (
                  <RenderTable
                    key={`${person.class}-${person.section}`}
                    person={person}
                    selectedPeople={selectedPeople}
                    setSelectedPeople={setSelectedPeople}
                    table={table}
                    index={index}
                  />
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      {/* <table>
        <tbody className="child:child:pl-2 text-base">
          <tr>
            <th>Total fine</th>
            <td>: Rs.00</td>
          </tr>
          <tr>
            <th>Discount</th>
            <td>: </td>
          </tr>
        </tbody>
      </table> */}
    </div>
  );
}
