import React from "react";
import { PrimaryButton } from "../../commom/buttons";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import EditPlan from "./EditPlan";
import DeletePlan from "./DeletePlan";
export default function PlanCard({
  name,
  price,
  duration,
  modules,
  max_user,
  defaultValues,
  status,
  del,
  setPlans,
  plans,
}) {
  let [isOpen, setIsOpen] = useState(false);
  let [deleteConfirm, setDeleteConfirm] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <>
      <div
        className={`relative mt-6 rounded  bg-white w-full max-w-md py-6 px-4 ${
          status || "opacity-60"
        }`}
      >
        <PrimaryButton className="absolute -top-6 ">{name}</PrimaryButton>
        <div className="text-center">
          <div className=" text-xl text-primary-base font-semibold">
            Rs. {price}
          </div>
          <div className="text-xs text-primary-grey/60 ">
            Duration:{duration}
          </div>

          <ul className="grid grid-cols-2 mt-4 gap-3  text-left ">
            {modules?.map((c) => (
              <li className="flex space-x-3" key={c}>
                <ArrowRightIcon />
                <div className="">{c}</div>
              </li>
            ))}
          </ul>
          <div className="text-xs text-primary-grey/60  my-2">
            Max User:{max_user}
          </div>
          <div className="w-full  flex space-x-2">
            <div
              className="w-fit primary-btn p-2  rounded mt-5 ml-auto"
              onClick={() => {
                setDeleteConfirm(true);
              }}
            >
              <DeleteForeverIcon fontSize="small" />
            </div>
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
      <Transition appear show={deleteConfirm} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-10"
          onClose={() => {
            setDeleteConfirm(false);
          }}
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
                  <DeletePlan del={del} id={defaultValues.id} />
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
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
                  <EditPlan
                    defaultValues={defaultValues}
                    setIsOpen={setIsOpen}
                    setPlans={setPlans}
                    plans={plans}
                  />
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
