import React from "react";
import { useForm } from "react-hook-form";
import { Select } from "../../../../components/common/fields";
import design from "./pana.png";
import Table from "./Table";
const arrayDays = [
  { name: "Sun", id: 7 },
  { name: "Mon", id: 1 },
  { name: "Tue", id: 2 },
  { name: "Wed", id: 3 },
  { name: "Thur", id: 4 },
  { id: 5, name: "Fri" },
  { name: "Sat", id: 6 },
];
export default function Dashboard() {
  const { register } = useForm();
  return (
    <div>
      <h1 className="text-xl font-medium text-primary-grey-700">Dashboard</h1>
      <div className=" my-3 mx-auto bg-warning-50 rounded text-primary-grey-600 flex  px-3 py-1.5">
        <div className="">
          <div className="text-primary-grey-700">
            <h2 className="text-lg">Welcome,</h2>
            <h1 className="text-xl font-medium">Shuvam Sherstha</h1>
          </div>
          <p className="">
            Check out your routine, notice, events and all other invoice and
            reciept easly online.
          </p>
        </div>
        <div className="h-full py-3 object-cover">
          <img src={design} alt="design" />
        </div>
      </div>
      <div className="flex md:justify-between md:flex-row flex-col  space-y-3 md:space-y-0 md:items-end">
        <div className=" md:w-52 ">
          <Select
            value={arrayDays}
            register={register}
            name="day"
            label="Class routine"
          ></Select>
        </div>
        <div className="bg-primary-grey-900 text-white rounded py-2 px-5  h-fit mt-auto">
          Preview whole routine
        </div>
      </div>
      <Table></Table>
    </div>
  );
}
