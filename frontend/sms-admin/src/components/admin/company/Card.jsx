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
    <div className="w-full h-fit">
      <div className="flex justify-between text-center text-primary-base/70 ">
        <div className="tab_gad_company text-white">
          <a href={link} target="_blank" rel="noopener noreferrer">
            Log in
          </a>
        </div>
        <div className="3dots">
          <MoreVertIcon />
        </div>
      </div>
      <div className="logo flex items-center">
        <img src={logo} alt={name} />
      </div>
      <div className="name text-lg font-medium tracking-wide">{logo}</div>
      <div className="email text-xs font-light tracking-tighter">{mail}</div>
      <div className="">{lastlogged}</div>
      <div className="flex border-b border-primary-grey">
        <div className="">{plan}</div>
        <button className="border border-primary-base px-3 py-1.5 text-primary-base/70">
          Upgrade Plan
        </button>
      </div>
      <div className="">{expire}</div>
      <div className="flex justify-between items-center">
        <div className="flex flex-col items-center justify-center space-x-2">
          <PersonOutlineOutlinedIcon /> <div>{users}</div>
        </div>
        <Popover className="relative">
          <Popover.Button className="flex flex-col items-center justify-center space-x-2">
            <ExtensionOutlinedIcon />
            <div>{modules.length}</div>
          </Popover.Button>
          <Popover.Panel>
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
