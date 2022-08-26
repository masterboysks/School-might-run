import React from "react";
import { PrimaryButton } from "../../commom/buttons";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
export default function PlanCard({ name, price, duration, modules, id }) {
  return (
    <div className="relative mt-6 rounded  bg-white w-full max-w-md py-6 px-4">
      <PrimaryButton className="absolute -top-6 ">{name}</PrimaryButton>
      <div className="text-center">
        <div className=" text-xl text-primary-base font-semibold">
          Rs. {price}
        </div>
        <div className="text-xs text-primary-grey/60 ">Duration:{duration}</div>

        <ul className="grid grid-cols-2 mt-4 gap-3  text-left ">
          {modules.map((c) => (
            <li className="flex space-x-3">
              <ArrowRightIcon />
              <div className="">{c}</div>
            </li>
          ))}
        </ul>
        <div className="w-full  rounded">
          <div className="w-fit primary-btn p-2  rounded mt-5 ml-auto">
            <ModeEditIcon fontSize="small" />
          </div>
        </div>
      </div>
    </div>
  );
}
