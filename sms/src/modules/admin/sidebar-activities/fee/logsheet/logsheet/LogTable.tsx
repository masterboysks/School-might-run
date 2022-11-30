import RenderTable from './LogTableRender';
import { Fragment, useRef, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import studentLogsheetApi from '../../../../../../api/admin/dashboard/fee/studentLogsheetApi';

export default function LogTable() {
  const { student } = useParams();
  const [open, setOpen] = useState(false);
  const { data } = useQuery({
    queryFn: () => studentLogsheetApi.getLogsheet(student),
    queryKey: ['stdentlogsheetapigetlogsheet', student],
    select: (d) => d.data.data,
  });
  const { data: detailsData } = useQuery({
    queryFn: () => studentLogsheetApi.getInvoiceDetails(open),
    queryKey: ['stdentlogsheetapigetinvoicedetails', open],
    select: (d) => d.data.data,
    enabled: !!open,
  });

  const cancelButtonRef = useRef(null);
  return (
    <>
      <div className="my-9">
        <div className=" ring-1 ring-black ring-opacity-5 overflow-x-auto rounded-lg shadow">
          <div className="inline-block w-full align-middle">
            <div className=" w-full rounded-lg">
              <table className="min-w-full divide-y divide-gray-300 table-auto">
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className="px-3 py-3.5  w-16 text-left text-sm font-medium text-primary-grey-700    "
                    >
                      Date
                    </th>

                    <th
                      scope="col"
                      className="px-3 py-3.5  text-left text-sm font-medium text-primary-grey-700  "
                    >
                      Description
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
                      Total amount
                    </th>

                    <th
                      scope="col"
                      className="px-3 py-3.5 w-10  text-left text-sm font-medium text-primary-grey-700  "
                    >
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  <RenderTable currentItems={data} setOpen={setOpen} />
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <Transition.Root show={open ? true : false} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-[99]"
          initialFocus={cancelButtonRef}
          onClose={setOpen}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 transition-opacity bg-gray-500 bg-opacity-75" />
          </Transition.Child>

          <div className="fixed inset-0 z-10 overflow-y-auto">
            <div className="sm:items-center sm:p-0 flex items-end justify-center min-h-full p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                enterTo="opacity-100 translate-y-0 sm:scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              >
                <Dialog.Panel className=" sm:max-w-xl sm:w-full  relative  overflow-hidden text-left transition-all transform bg-white rounded-lg shadow-xl">
                  <div
                    className={` ring-1 ring-black ring-opacity-5  min-w-full overflow-x-auto rounded-lg shadow `}
                  >
                    <div className=" flex flex-col w-full rounded">
                      <div className=" overflow-x-auto">
                        <table className=" min-w-full divide-y divide-gray-300 table-fixed">
                          <thead className="bg-gray-50">
                            <tr className="text-primary-grey-700">
                              <th
                                scope="col"
                                className=" py-3.5 px-3  text-left text-sm font-semibold text-primary-active"
                              >
                                Date
                              </th>
                              <th
                                scope="col"
                                className="px-3 py-3.5 text-left text-sm font-semibold text-primary-active"
                              >
                                Description
                              </th>
                              <th
                                scope="col"
                                className="px-3 py-3.5 text-left text-sm font-semibold text-primary-active"
                              >
                                Amount (Rs.)
                              </th>
                              <th
                                scope="col"
                                className="px-3 py-3.5 text-left text-sm font-semibold text-primary-active"
                              >
                                Discount (Rs.)
                              </th>
                              <th
                                scope="col"
                                className="px-3 py-3.5 text-left text-sm font-semibold text-primary-active"
                              >
                                Total amount (Rs.)
                              </th>
                              <th
                                scope="col"
                                className="px-3 py-3.5 text-left text-sm font-semibold text-primary-active"
                              >
                                Remark
                              </th>
                            </tr>
                          </thead>
                          <tbody className=" bg-white divide-y divide-gray-200">
                            <>
                              {detailsData?.map((person, index, table) => (
                                <tr key={index}>
                                  <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                    {person.invoice_date}
                                  </td>
                                  <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                    {person.description}
                                  </td>
                                  <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                    {person.amount}
                                  </td>
                                  <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                    {person.discount_amount}
                                  </td>
                                  <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                    {person.total_amount <= 0
                                      ? `(Rs.${Math.abs(person.total_amount)})`
                                      : `Rs.${person.total_amount}`}
                                  </td>
                                  <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                    {person.remarks}
                                  </td>
                                </tr>
                              ))}
                            </>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </>
  );
}
{
  /* <div className="md:flex-row flex flex-col w-full">
<div className="grid items-center grid-cols-2 py-1">
  <label htmlFor="grandTotal">Grand total :</label>
  <input
    type="number"
    name="grandTotal"
    disabled
    id="grandTotal"
    placeholder="Rs.12000"
    className="ml-auto mt-[6px] w-36 p- rounded  focus:ring-primary-btn    border-primary-grey-400 bg-primary-grey-100 shadow-md placeholder:text-primary-grey-400    text-primary-grey-700 text-sm"
  />
  <label htmlFor="paidAmount">Paid ammount*: </label>
  <input
    type="number"
    name="paidAmmount"
    id="paidAmmount"
    placeholder="Rs.12000"
    disabled
    className="ml-auto mt-[6px] w-36 p- rounded  focus:ring-primary-btn    border-primary-grey-400 bg-primary-grey-100 shadow-md placeholder:text-primary-grey-400    text-primary-grey-700 text-sm"
  />
  <label htmlFor="due">Due amount:</label>
  <input
    type="number"
    name="due"
    disabled
    id="due"
    placeholder="Rs.12000"
    className="ml-auto mt-[6px] w-36 p- rounded  focus:ring-primary-btn    border-primary-grey-400 bg-primary-grey-100 shadow-md placeholder:text-primary-grey-400    text-primary-grey-700 text-sm"
  />
</div>
<div className=" md:my-0 md:mt-auto flex flex-1 my-3">
  <div className="btns w-fit md:ml-auto ml-0">
    <div
      to="/admin/dashboard/fee/student-logsheet "
      className="secondary_btn"
      onClick={() => setOpen(false)}
    >
      Cancel
    </div>
    <div
      className="primary_btn"
      onClick={() => setOpen(false)}
    >
      Save
    </div>
  </div>
</div>
</div> */
}
