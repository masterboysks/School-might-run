import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip } from "chart.js";
import Table from "./Table";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import Form from "./Form";

ChartJS.register(ArcElement, Tooltip);
const data = {
  labels: ["Present", "Absent"],
  datasets: [
    {
      label: "Present absent days",
      data: [80, 20],
      backgroundColor: ["rgb(54, 162, 235)", "rgb(255, 99, 132)"],
      hoverOffset: 4,
    },
  ],
};
export default function Attendence() {
  let [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }
  return (
    <>
      <div>
        <h1 className="text-xl font-medium text-primary-grey-700">
          Attendence
        </h1>
        {/* Chart */}
        <div className="flex flex-col sm:flex-row">
          <div className=" w-full sm:w-2/3 lg:w-1/3 flex items-center  border rounded-lg p-2 my-6 gap-5 text-primary-grey-600">
            <div className="w-1/3">
              <Doughnut data={data} />
            </div>
            <div>
              <ul>
                <li>
                  Total school days:
                  <span className="text-primary-grey-700 font-medium">
                    {" "}
                    143
                  </span>
                </li>
                <li>
                  Total present days:
                  <span className="text-primary-grey-700 font-medium">
                    {" "}
                    123
                  </span>
                </li>
                <li>
                  Total absent days:
                  <span className="text-primary-grey-700 font-medium"> 20</span>
                </li>
              </ul>
            </div>
          </div>
          <button
            onClick={openModal}
            className="primary_btn h-fit mt-auto sm:ml-3 mb-6"
          >
            Apply for leave
          </button>
        </div>
        {/* Table */}
        <Table />
      </div>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-primary-grey-700 "
                  >
                    Apply for leave
                  </Dialog.Title>
                  <Form />
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
