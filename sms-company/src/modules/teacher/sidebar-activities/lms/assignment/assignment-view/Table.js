import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import RenderTable from "./RenderTable";
import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { Input, Select } from "../../../../../../components/common/fields";
const people = [
    {
        date: 557663,
        particular: "Magh",
        paymentType: "cash",
        billNo: 99999,
        dr: 11,
        cr: 99999999999999999999,
        balance: 12000000,
    },
    {
        date: "-----",
        particular: "Magh",
        paymentType: "cash",
        billNo: 99999,
        dr: 11,
        cr: 99999999999999999999,
        balance: 12000000,
    },
    {
        date: "--",
        particular: "Magh",
        paymentType: "cash",
        billNo: 99999,
        dr: 11,
        cr: 99999999999999999999,
        balance: 12000000,
    },
];
export default function Table({ data, status }) {
    const { register, handleSubmit, formState: { errors }, } = useForm();
    const [open, setOpen] = useState(false);
    const cancelButtonRef = useRef(null);
    return (_jsxs(_Fragment, { children: [_jsx("div", { className: "md:flex-row flex flex-col justify-between", children: _jsxs("div", { className: "sm:grid-cols-2 grid grid-cols-1 gap-4", children: [_jsx("div", { children: _jsx(Input, { name: "student_name", register: register, label: "Student name" }) }), _jsx("div", { children: _jsx(Select, { value: status, register: register, label: "Submission status", name: "submission_status" }) })] }) }), _jsx(_Fragment, { children: _jsx("div", { className: "my-6", children: _jsx("div", { className: " ring-1 ring-black ring-opacity-5 overflow-x-auto rounded-lg shadow", children: _jsx("div", { className: "inline-block w-full align-middle", children: _jsx("div", { className: " w-full rounded-lg", children: _jsxs("table", { className: "min-w-full divide-y divide-gray-300 table-auto", children: [_jsx("thead", { className: "bg-gray-50", children: _jsxs("tr", { children: [_jsx("th", { scope: "col", className: "px-3 py-3.5 w-12 text-left text-sm font-medium text-primary-grey-700    ", children: "Student Is" }), _jsx("th", { scope: "col", className: "px-3 py-3.5 w-20 text-left text-sm font-medium text-primary-grey-700    ", children: "Submission status" }), _jsx("th", { scope: "col", className: "px-3 py-3.5 w-40  text-left text-sm font-medium text-primary-grey-700    ", children: "Submitted date" }), _jsx("th", { scope: "col", className: "px-3 py-3.5  text-left text-sm font-medium text-primary-grey-700  ", children: "Points (Pts)" }), _jsx("th", { scope: "col", className: "px-3 py-3.5  text-left text-sm font-medium text-primary-grey-700  ", children: "Assignment" })] }) }), _jsx("tbody", { className: "bg-white divide-y divide-gray-200", children: _jsx(RenderTable, { currentItems: data, setOpen: setOpen }) })] }) }) }) }) }) })] }));
}
{
    /* <Transition.Root show={open} as={Fragment}>
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
          <Dialog.Panel
            className="sm:my-8 sm:max-w-xl relative w-full overflow-hidden text-left transition-all transform bg-white rounded-lg shadow-xl"
            as="div"
          >
            <Dialog.Title className="p-2 text-center">
              Magh fee
            </Dialog.Title>
            <Dialog.Description as="div">
              <div className="ring-1 ring-black ring-opacity-5 w-full overflow-x-auto shadow">
                <table className="min-w-full divide-y divide-gray-300 table-auto">
                  <thead className="bg-gray-50 ">
                    <tr>
                      <th className="px-3 py-3.5 text-primary-grey-700 font-medium text-sm">
                        Fee name
                      </th>
                      <th className="px-3 py-3.5 text-primary-grey-700 font-medium text-sm">
                        Amount
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        Monthly fee
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        Rs.2000
                      </td>
                    </tr>
                    <tr>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        Transportation fee
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        Rs.1600
                      </td>
                    </tr>
                    <tr>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        Libary fee
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        Rs.400
                      </td>
                    </tr>
                    <tr>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        Lab fee
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        Rs.1000
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <Dialog.Title className="p-2 text-center">
                Miscellaneous fee
              </Dialog.Title>
              <div className="ring-1 ring-black ring-opacity-5 w-full overflow-x-auto shadow">
                <table className="min-w-full divide-y divide-gray-300 table-auto">
                  <thead className="bg-gray-50 ">
                    <tr>
                      <th className="px-3 py-3.5 text-primary-grey-700 font-medium text-sm">
                        Date
                      </th>
                      <th className="px-3 py-3.5 text-primary-grey-700 font-medium text-sm">
                        Description
                      </th>
                      <th className="px-3 py-3.5 text-primary-grey-700 font-medium text-sm">
                        Ammount
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        2022/5/12
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        1 * School belt
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        Rs.100B
                      </td>
                    </tr>
                    <tr>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        2022/5/22
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        2 * Copy
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        Rs.999999999
                      </td>
                    </tr>
                    <tr>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        2022/5/12
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        3 * Tie
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        Rs.99^99^99
                      </td>
                    </tr>
                    <tr>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        2022/5/12
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        <ul>
                          <li>4 * copies</li>
                          <li>1 * books</li>
                        </ul>
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        Rs.99^99^99^88
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </Dialog.Description>
          </Dialog.Panel>
        </Transition.Child>
      </div>
    </div>
  </Dialog>
  </Transition.Root> */
}
