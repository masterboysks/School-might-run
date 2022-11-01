import React from "react";
import RenderTable from "./RenderTable";
const table = [
  {
    date: "Jun 2",
    billNo: "5521332",
    grandTotal: "1000",
    paidAmount: "99999",
    dueAmmount: "999999999999",
    status: "Paid",
  },
  {
    date: "Jun 2",
    billNo: "552fgs1332",
    grandTotal: "1000",
    paidAmount: "99999",
    dueAmmount: "999999999999",
    status: "Paid",
  },
  {
    date: "Jun 2",
    billNo: "552wqr1332",
    grandTotal: "1000",
    paidAmount: "99999",
    dueAmmount: "999999999999",
    status: "Paid",
  },
  {
    date: "Jun 2",
    billNo: "ahgfdr5521332",
    grandTotal: "1000",
    paidAmount: "99999",
    dueAmmount: "999999999999",
    status: "Paid",
  },
  {
    date: "Jun 2",
    billNo: "5521332rywg",
    grandTotal: "1000",
    paidAmount: "99999",
    dueAmmount: "999999999999",
    status: "Paid",
  },
  {
    date: "Jun 2",
    billNo: "552133agert2",
    grandTotal: "1000",
    paidAmount: "99999",
    dueAmmount: "999999999999",
    status: "Paid",
  },
];
export default function BalanceSheet() {
  return (
    <>
      <div className="text-primary-grey-700 text-lg font-medium  ">
        Fee invoice
      </div>{" "}
      <div className="my-6">
        <div className=" ring-1 ring-black ring-opacity-5 overflow-x-auto rounded-lg shadow">
          <div className="inline-block w-full align-middle">
            <div className=" w-full rounded-lg">
              <table className="min-w-full divide-y divide-gray-300 table-fixed">
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-medium text-primary-grey-700    "
                    >
                      Date
                    </th>

                    <th
                      scope="col"
                      className="px-3 py-3.5  text-left text-sm font-medium text-primary-grey-700  "
                    >
                      Bill no.
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5  text-left text-sm font-medium text-primary-grey-700  "
                    >
                      Particular
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5  text-left text-sm font-medium text-primary-grey-700  "
                    >
                      Payment method
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5  text-left text-sm font-medium text-primary-grey-700  "
                    >
                      Dr
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5  text-left text-sm font-medium text-primary-grey-700  "
                    >
                      Cr
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 w-10 text-left text-sm font-medium text-primary-grey-700  "
                    >
                      Details
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  <RenderTable currentItems={table} />
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
