import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import RenderTable from "./RenderTable";
const people = [
  {
    stdId: "Lindsay Walton",
    stdName: "Front-end Developer",
    class: "lindsay.walton@example.com",
    faculty: "Member",
    sec: "Lindsay Walton",
    gen: "Front-end Developer",
    numb: "lindsay.walton@example.com",
    status: "Member",
  },
  {
    stdId: "Lindsa",
    stdName: "Front-end Developer",
    class: "lindsay.walton@example.com",
    faculty: "Member",
    sec: "Lindsay Walton",
    gen: "Front-end Developer",
    numb: "lindsay.walton@example.com",
    status: "Member",
  },
  {
    stdId: "Lindsay Wa",
    stdName: "Front-end Developer",
    class: "lindsay.walton@example.com",
    faculty: "Member",
    sec: "Lindsay Walton",
    gen: "Front-end Developer",
    numb: "lindsay.walton@example.com",
    status: "Member",
  },
  {
    stdId: "Lindsay Walton1",
    stdName: "Front-end Developer",
    class: "lindsay.walton@example.com",
    faculty: "Member",
    sec: "Lindsay Walton",
    gen: "Front-end Developer",
    numb: "lindsay.walton@example.com",
    status: "Member",
  },
  {
    stdId: "Lindsa1",
    stdName: "Front-end Developer",
    class: "lindsay.walton@example.com",
    faculty: "Member",
    sec: "Lindsay Walton",
    gen: "Front-end Developer",
    numb: "lindsay.walton@example.com",
    status: "Member",
  },
  {
    stdId: "Lindsay Wa1",
    stdName: "Front-end Developer",
    class: "lindsay.walton@example.com",
    faculty: "Member",
    sec: "Lindsay Walton",
    gen: "Front-end Developer",
    numb: "lindsay.walton@example.com",
    status: "Member",
  },
  {
    stdId: "Lindsay Walton2",
    stdName: "Front-end Developer",
    class: "lindsay.walton@example.com",
    faculty: "Member",
    sec: "Lindsay Walton",
    gen: "Front-end Developer",
    numb: "lindsay.walton@example.com",
    status: "Member",
  },
  {
    stdId: "Lindsa2",
    stdName: "Front-end Developer",
    class: "lindsay.walton@example.com",
    faculty: "Member",
    sec: "Lindsay Walton",
    gen: "Front-end Developer",
    numb: "lindsay.walton@example.com",
    status: "Member",
  },
  {
    stdId: "Lindsay Wa2",
    stdName: "Front-end Developer",
    class: "lindsay.walton@example.com",
    faculty: "Member",
    sec: "Lindsay Walton",
    gen: "Front-end Developer",
    numb: "lindsay.walton@example.com",
    status: "Member",
  },
];

export default function Table() {
  // const itemsOnPage = 5;
  // const [currentPage, setCurrentPage] = useState(1);
  // const [currentItems, setCurrentItems] = useState(
  //   people.slice(0, itemsOnPage)
  // );
  // const [indexOfLastItem, setIndexOfLastItem] = useState(
  //   currentPage * itemsOnPage
  // );
  // const [indexOfFirstItem, setIndexOfFirstItem] = useState(
  //   indexOfLastItem - itemsOnPage
  // );
  // const [message, setmessage] = useState("Showing 1 to 2 of 2 results");

  // const onNextPage = () => {
  //   setCurrentPage((curr) => curr + 1);
  // };

  // const onPreviousPage = () => {
  //   setCurrentPage((curr) => curr - 1);
  // };
  // useEffect(() => {
  //   setIndexOfLastItem(currentPage * itemsOnPage);
  // }, [currentPage]);
  // useEffect(() => {
  //   setIndexOfFirstItem(indexOfLastItem - itemsOnPage);
  // }, [indexOfLastItem]);
  // useEffect(() => {
  //   setmessage(
  //     `Showing ${indexOfFirstItem + 1} to ${
  //       people.length <= indexOfLastItem ? people.length : indexOfLastItem
  //     } of ${people.length}`
  //   );
  //   setCurrentItems(people.slice(indexOfFirstItem, indexOfLastItem));
  // }, [indexOfFirstItem]);

  return (
    <div className="mt-11">
      <div className="w-fit ml-auto mt-4">
        <Link to="register" className="primary_btn">
          Register new book
        </Link>
      </div>
      <div className="my-6">
        <div className=" ring-1 ring-black ring-opacity-5 min-w-full overflow-x-auto rounded-lg shadow">
          <div className="inline-block w-full align-middle">
            <div className=" w-full rounded-lg">
              <table className="min-w-full divide-y divide-gray-300 table-auto">
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-medium text-primary-grey-700    "
                    >
                      Call number
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-medium text-primary-grey-700   "
                    >
                      Book title
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-medium text-primary-grey-700   "
                    >
                      Auther name
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-medium text-primary-grey-700   "
                    >
                      Category
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-medium text-primary-grey-700   "
                    >
                      Sub category
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-medium text-primary-grey-700   "
                    >
                      Published year
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-medium text-primary-grey-700   "
                    >
                      Shelf details
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-medium text-primary-grey-700   "
                    >
                      Status
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
      {/* <nav
        className=" flex items-center justify-between py-3 bg-white border-t border-gray-200"
        aria-label="Pagination"
      >
        <div className="sm:block hidden">
          <p className="text-sm text-gray-700">{message}</p>
        </div>
        <div className="sm:justify-end flex justify-between flex-1">
          <button
            disabled={indexOfFirstItem === 0}
            onClick={onPreviousPage}
            className="disabled:opacity-80 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md"
          >
            Previous
          </button>
          <button
            disabled={indexOfLastItem >= people.length}
            onClick={onNextPage}
            className="disabled:opacity-80 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 ml-3 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md"
          >
            Next
          </button>
        </div>
      </nav> */}
    </div>
  );
}
