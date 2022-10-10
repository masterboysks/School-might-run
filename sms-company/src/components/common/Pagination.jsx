import {
  ArrowLongLeftIcon,
  ArrowLongRightIcon,
} from "@heroicons/react/20/solid";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";

export default function Pagination({ pagination, setPage }) {
  const [isLastPage, setIsLastPage] = useState(false);
  const [isFirstPage, setIsFirstPage] = useState(true);

  const noOfItems = 5;

  let show;
  pagination?.last_page !== undefined && pagination?.last_page !== 1
    ? (show = true)
    : (show = false);
  const handlePageNumber = (e) => {
    setPage(e.target.innerText);
  };
  useEffect(() => {
    pagination?.last_page === pagination?.current_page
      ? setIsLastPage(true)
      : setIsLastPage(false);
    1 === pagination?.current_page
      ? setIsFirstPage(true)
      : setIsFirstPage(false);
  }, [pagination]);
  if (show) {
    return (
      <nav className="flex items-center justify-between border-t border-gray-200 px-4 sm:px-0">
        <div className="-mt-px flex w-0 flex-1">
          <div
            onClick={() => {
              setPage(pagination?.current_page - 1);
            }}
            className={`inline-flex items-center border-t-2 border-transparent pt-4 pr-1 text-sm font-medium text-primary-grey hover:border-primary-base hover:text-primary-base ${
              isFirstPage && "pointer-events-none opacity-60"
            }`}
          >
            <ArrowLongLeftIcon className="mr-3 h-5 w-5 " aria-hidden="true" />
            Previous
          </div>
        </div>
        <div>
          <ul className="hidden md:-mt-px md:flex  space-x-3">
            {noOfItems < pagination?.last_page
              ? Array(noOfItems)
                  .fill(true)
                  .map((c, i) =>
                    pagination?.current_page < 3 ? (
                      <li
                        className={`inline-flex items-center border-t-2 border-transparent px-4 pt-4 text-sm font-medium text-primary-grey hover:border-primary-base hover:text-primary-base ${
                          pagination?.current_page === i + 1 &&
                          "border-primary-base text-primary-base"
                        }`}
                        onClick={handlePageNumber}
                        key={`pagination${i}`}
                      >
                        {i + 1}
                      </li>
                    ) : pagination?.last_page - pagination?.current_page < 3 ? (
                      <li
                        className={`inline-flex items-center border-t-2 border-transparent px-4 pt-4 text-sm font-medium text-primary-grey hover:border-primary-base hover:text-primary-base ${
                          pagination?.current_page ===
                            pagination?.last_page - 4 + i &&
                          "border-primary-base text-primary-base"
                        }`}
                        onClick={handlePageNumber}
                        key={`pagination${i}`}
                      >
                        {pagination?.last_page - 4 + i}
                      </li>
                    ) : (
                      <li
                        className={`inline-flex items-center border-t-2 border-transparent px-4 pt-4 text-sm font-medium text-primary-grey hover:border-primary-base hover:text-primary-base ${
                          pagination?.current_page ===
                            i - 2 + pagination?.current_page &&
                          "border-primary-base text-primary-base"
                        }`}
                        onClick={handlePageNumber}
                        key={`pagination${i}`}
                      >
                        {i - 2 + pagination?.current_page}
                      </li>
                    )
                  )
              : Array(pagination?.last_page)
                  .fill(true)
                  .map((c, i) => (
                    <li
                      onClick={handlePageNumber}
                      key={`pagination${i}`}
                      className={`inline-flex items-center border-t-2 border-transparent px-4 pt-4 text-sm font-medium text-primary-grey hover:border-primary-base hover:text-primary-base ${
                        pagination?.current_page === i + 1 &&
                        "border-primary-base text-primary-base"
                      }`}
                    >
                      {i + 1}
                    </li>
                  ))}
          </ul>
        </div>
        <div className="-mt-px flex w-0 flex-1 justify-end">
          <div
            onClick={() => {
              setPage(pagination?.current_page + 1);
            }}
            className={`inline-flex items-center border-t-2 border-transparent pt-4 pr-1 text-sm font-medium text-primary-grey hover:border-primary-base hover:text-primary-base ${
              isLastPage && "pointer-events-none opacity-60"
            }`}
          >
            Next
            <ArrowLongRightIcon className="ml-3 h-5 w-5 " aria-hidden="true" />
          </div>
        </div>
      </nav>
    );
  }
}
