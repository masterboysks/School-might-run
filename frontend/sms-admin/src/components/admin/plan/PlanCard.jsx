import React from "react";
import { PrimaryButton } from "../../commom/buttons";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import EditPlan from "./EditPlan";
export default function PlanCard({
  name,
  price,
  duration,
  modules,
  id,
  defaultValues,
}) {
  let [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }
  return (
    <>
      <div className="relative mt-6 rounded  bg-white w-full max-w-md py-6 px-4">
        <PrimaryButton className="absolute -top-6 ">{name}</PrimaryButton>
        <div className="text-center">
          <div className=" text-xl text-primary-base font-semibold">
            Rs. {price}
          </div>
          <div className="text-xs text-primary-grey/60 ">
            Duration:{duration}
          </div>

          <ul className="grid grid-cols-2 mt-4 gap-3  text-left ">
            {modules.map((c) => (
              <li className="flex space-x-3" key={c}>
                <ArrowRightIcon />
                <div className="">{c}</div>
              </li>
            ))}
          </ul>
          <div className="w-full  ">
            <div
              className="w-fit primary-btn p-2  rounded mt-5 ml-auto"
              onClick={() => {
                setIsOpen(true);
              }}
            >
              <ModeEditIcon fontSize="small" />
            </div>
          </div>
        </div>
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
                <Dialog.Panel className="w-full max-w-2xl transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <EditPlan defaultValues={defaultValues} />
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
