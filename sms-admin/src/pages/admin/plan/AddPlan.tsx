import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import AddIcon from "@mui/icons-material/Add";

import Input, {
  MultipleSelect,
  Select,
} from "../../../components/commom/input";
import { useNavigate } from "react-router-dom";
import Breadnav from "../../../components/admin/Breadnav";
import RemoveIcon from "@mui/icons-material/Remove";
import Plans from "../../../api/Plans";
const pages = [
  { name: "Plan", href: "/admin/plan", current: false },
  { name: "Create", href: "#", current: true },
];
const arrayModules = [
  { name: "Staff", id: "Staff" },
  { name: "Users", id: "Users" },
  { name: "Account", id: "Account" },
  { name: "Library", id: "Library" },
  { name: "Inventory", id: "Inventory" },
  { name: "Exam", id: "Exam" },
  { name: "Report", id: "Report" },
  { name: "LMS", id: "LMS" },
  { name: "Transport", id: "Transport" },
  { name: "Parent", id: "Parent" },
  { name: "Student", id: "Student" },
  { name: "Teacher", id: "Teacher" },
  { name: "Accounting", id: "Accounting" },
];
const duration = [
  { name: "Monthly", id: "monthly" },
  { name: "Quaterly", id: "quaterly" },
  { name: "Semi-yearly", id: "semi-yearly" },
  { name: "Yearly", id: "yearly" },
  { name: "2 Years", id: "2 years" },
];
export default function AddCompany() {
  const [error, setError] = useState(false);
  const [moduleError, setModulesError] = useState(false);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  const onSubmit = async (d) => {
    try {
      const res = await Plans.create({
        ...d,
        whats_included: included.map((c) => {
          return d[`whatIsIncluded${c}`];
        }),
      });

      res?.status === 201
        ? navigate("/admin/plan")
        : setError("Failed to create plan");
    } catch (e) {
      console.log(e);
    }
  };

  const [included, setIncluded] = useState([1]);
  return (
    <>
      <Breadnav pages={pages} />

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="grid  gap-5 bg-white rounded-md px-9 pb-6 pt-3 max-w-2xl  mx-auto mt-4"
      >
        <h1 className="text-lg  mt-5 "> Create Plan</h1>
        <div className="border-b "></div>
        {error && <div className="text-red-500">{error}</div>}
        <div className="">
          <Input
            register={register}
            label="Name*"
            name="name"
            required={true}
            errors={errors}
          />
        </div>
        <div className="">
          <Input
            register={register}
            label="Price *"
            name="price"
            type="number"
            errors={errors}
            required={true}
          />
        </div>
        <div className="">
          <Input
            register={register}
            label="Max users *"
            name="max_users"
            type="number"
            errors={errors}
            required={true}
          />
        </div>
        <div className="">
          <Select
            register={register}
            label="Duration * "
            name="duration" //jkhdsf
            required={true}
            errors={errors}
            value={duration}
          />
        </div>

        <div className="">
          <Input
            register={register}
            label="Description*"
            name="description"
            required={true}
            errors={errors}
          />
        </div>
        <div className="">
          <MultipleSelect
            label="Modules*"
            value={arrayModules}
            errors={errors}
            control={control}
            name="modules"
          />
        </div>

        <div className="">
          {included.map((c, i, a) => (
            <div key={c} className=" flex items-end gap-1">
              <div className=" flex-1">
                <Input
                  register={register}
                  label={`What's included ${i || ""}`}
                  name={"whatIsIncluded" + c}
                  required={true}
                  errors={errors}
                  shouldUnregister={true}
                />
              </div>
              {a.length === 1 || (
                <div
                  className=" text-white icon w-fit bg-primary-base/80 rounded h-fit p-1"
                  onClick={() => {
                    let temp = [...included];

                    temp.splice(temp.indexOf(c), 1);
                    setIncluded(temp);
                  }}
                >
                  <RemoveIcon />
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="add">
          <div
            className=" text-white icon w-fit bg-primary-base/80 rounded h-fit p-1"
            onClick={() => {
              setIncluded([...included, included.splice(-1)[0] + 1]);
            }}
          >
            <AddIcon />
          </div>
        </div>
        <button
          type="submit"
          className="col-span-full ml-auto primary-btn rounded"
        >
          Submit
        </button>
      </form>
    </>
  );
}
