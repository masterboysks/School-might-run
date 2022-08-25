import React from "react";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import ExtensionOutlinedIcon from "@mui/icons-material/ExtensionOutlined";
import { Popover } from "@headlessui/react";
import { Link } from "react-router-dom";
export default function Card({
  logo,
  name,
  mail,
  lastlogged,
  plan,
  expire,
  link,
  users,
  modules,
}) {
  return (
    <div className="w-full h-fit py-12 space-y-4 px-8 bg-white rounded-2xl text-center max-w-md mx-auto">
      <div className="flex justify-between text-center text-primary-base/70 ">
        <div>
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className=" p-2 rounded primary-btn"
          >
            Log in
          </a>
        </div>
        <Popover className="relative">
          <Popover.Button className="3dots secondary-btn   rounded-lg   !border-0">
            <MoreVertIcon />
          </Popover.Button>
          <Popover.Panel className="flex rounded border border-primary-base shadow-md          flex-col px-2 py-3 gap-3 absolute right-0 w-40 bg-primary-grey-100    hover top-[120%] text-left">
            <Link
              to="#"
              className="py-1 pl-2 hover:bg-primary-base hover:text-white rounded"
            >
              Edit
            </Link>
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
      <div className="logo flex items-center justify-center mt-3">
        <img src={logo} alt={name} className="w-[90%] xs:w-2/3 sm:w-1/2" />
      </div>
      <div className="name text-lg font-medium tracking-wide">{name}</div>
      <div className="email text-xs font-light tracking-tighter">{mail}</div>
      <div className="">{lastlogged}</div>
      <div className="flex border-b flex-col sm:items-center space-y-2 sm:flex-row sm:space-y-0  border-primary-grey justify-between pb-3 my-12">
        <div className="">{plan}</div>
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
            <div>{modules.length}</div>
          </Popover.Button>
          <Popover.Panel className="absolute ">
            <div className="w-40 bg-white shadow rounded-lg bottom-0 right-0 text-left py-3 px-2 space-y-3">
              {modules.map((curr) => (
                <div>{curr}</div>
              ))}
            </div>
          </Popover.Panel>
        </Popover>
      </div>
    </div>
  );
}
