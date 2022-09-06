import React, { Fragment, useState } from "react";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import ExtensionOutlinedIcon from "@mui/icons-material/ExtensionOutlined";
import { Dialog, Popover, Transition } from "@headlessui/react";
import { Link } from "react-router-dom";
import Input from "../../commom/input";
import { useForm } from "react-hook-form";
import Company from "../../../api/Company";
export default function CompanyCard({
  logo,
  name,
  mail,
  lastlogged,
  domain,
  plan,
  expire,
  link,
  users,
  modules,
  defaultValues,
}) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [isOpen, setIsOpen] = useState(false);
  const openModal = () => {
    setIsOpen(true);
  };
  const closeModal = () => {
    setIsOpen(false);
  };
  const onSubmit = async (d) => {
    console.log(d);
    try {
      const res = await Company.edit({
        id: defaultValues.id,
        form: {
          company_name: d.companyName,
          email: d.email,
          domain: d.domain,
        },
      });
      console.log(res);
      res?.status === 201
        ? setIsOpen(false)
        : setEditError("Failed to update plan");
    } catch (e) {
      console.log(e);
    }
  };
  const [editError, setEditError] = useState(false);

  return (
    <>
      <div className="w-full h-fit py-6 space-y-4 px-8 bg-white rounded-2xl text-center max-w-xs mx-auto my-4">
        <div className="flex justify-between text-center text-primary-base/70 ">
          <div>
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className=" p-2 rounded primary-btn flex"
            >
              Log in
            </a>
          </div>
          <Popover className="relative">
            <Popover.Button className="3dots secondary-btn   rounded-lg   !border-0">
              <MoreVertIcon />
            </Popover.Button>
            <Popover.Panel className="flex rounded border border-primary-base shadow-md          flex-col px-2 py-3 gap-3 absolute right-0 w-40 bg-primary-grey-100    hover top-[120%] text-left">
              <div
                onClick={openModal}
                className="py-1 pl-2 hover:bg-primary-base hover:text-white rounded"
              >
                Edit
              </div>
              <Link
                to="#"
                className="py-1 pl-2 hover:bg-primary-base hover:text-white rounded"
              >
                Delete
              </Link>
              <Link
                to="#"
                className="py-1 pl-2 hover:bg-primary-base hover:text-white rounded"
              >
                Reset password
              </Link>
            </Popover.Panel>
          </Popover>
        </div>
        <a href={`https://${domain}`} target="_blank">
          <div className="logo flex items-center justify-center mt-3">
            <img src={logo} alt={name} className="w-[90%] xs:w-2/3 sm:w-1/2" />
          </div>
          <div className="name text-lg font-medium tracking-wide">{name}</div>
        </a>
        <div className="email text-xs font-light tracking-tighter">{mail}</div>
        <div className="">{lastlogged}</div>
        <div className="flex border-b flex-col sm:items-center space-y-2 sm:flex-row sm:space-y-0 text-sm border-primary-grey justify-between pb-3 my-12">
          <div className="break-all">{plan}</div>
          <button className="px-3 py-1.5 rounded secondary-btn">
            Select plan
          </button>
        </div>
        <div className="">{expire}</div>
        <div className="flex justify-between items-center">
          <div className="flex  items-center justify-center space-x-2">
            <PersonOutlineOutlinedIcon /> <div>{users}</div>
          </div>
          <Popover className="relative">
            <Popover.Button className="flex p-2 rounded items-center justify-center space-x-2 primary-btn">
              <ExtensionOutlinedIcon />
              <div>{modules?.length}</div>
            </Popover.Button>
            <Popover.Panel className="absolute ">
              <div className="w-40 bg-white shadow rounded-lg bottom-0 right-0 text-left py-3 px-2 space-y-3">
                {modules?.map((curr) => (
                  <div key={curr}>{curr}</div>
                ))}
              </div>
            </Popover.Panel>
          </Popover>
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
            <div className="fixed inset-0 bg-black/25 " />
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
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white text-primary-grey/80 p-6 text-left align-middle shadow-xl transition-all">
                  <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="grid  gap-5 bg-white rounded-md px-9 pb-6 pt-3 max-w-2xl  mx-auto mt-4"
                  >
                    <h1 className="text-lg  mt-5 "> Edit Company</h1>
                    <div className="border-b "></div>
                    {editError && (
                      <div className="text-red-500">{editError}</div>
                    )}
                    <div>
                      <Input
                        register={register}
                        label="Company name"
                        name="companyName"
                        errors={errors}
                        required={true}
                        defaultValue={name}
                      />
                    </div>
                    <div>
                      <Input
                        register={register}
                        label="Email"
                        name="email"
                        errors={errors}
                        required={true}
                        defaultValue={mail}
                      />
                    </div>
                    <div>
                      <Input
                        register={register}
                        label="Domain"
                        name="domain"
                        errors={errors}
                        required={true}
                        defaultValue={domain}
                      />
                    </div>
                    <div className="w-full flex justify-end">
                      <button
                        className="rounded w-fit mt-5 px-3 py-1.5 primary-btn"
                        type="submit"
                      >
                        Save
                      </button>
                    </div>
                  </form>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
