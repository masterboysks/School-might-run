import React from "react";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import ExtensionOutlinedIcon from "@mui/icons-material/ExtensionOutlined";
import { Popover } from "@headlessui/react";

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
    <div className="w-full h-fit py-12 space-y-4 px-8 bg-white rounded text-center">
      <div className="flex justify-between text-center text-primary-base/70 ">
        <div className="bg-primary-base p-2 rounded text-white">
          <a href={link} target="_blank" rel="noopener noreferrer">
            Log in
          </a>
        </div>
        <div className="3dots">
          <MoreVertIcon />
        </div>
      </div>
      <div className="logo flex items-center justify-center">
        <img src={logo} alt={name} width="280" />
      </div>
      <div className="name text-lg font-medium tracking-wide">{logo}</div>
      <div className="email text-xs font-light tracking-tighter">{mail}</div>
      <div className="">{lastlogged}</div>
      <div className="flex border-b border-primary-grey justify-between pb-3 my-12">
        <div className="">{plan}</div>
        <button className="border rounded border-primary-base px-3 py-1.5 text-primary-base/70 focus:outline-none focus:bg-primary-base focus:text-white">
          Upgrade Plan
        </button>
      </div>
      <div className="">{expire}</div>
      <div className="flex justify-between items-center">
        <div className="flex  items-center justify-center space-x-2">
          <PersonOutlineOutlinedIcon /> <div>{users}</div>
        </div>
        <Popover className="relative">
          <Popover.Button className="flex  items-center justify-center space-x-2 focus:outline-none focus:  p-2 rounded text-white focus:bg-white focus:ring-2 ring- focus:text-primary-base bg-primary-base ">
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
