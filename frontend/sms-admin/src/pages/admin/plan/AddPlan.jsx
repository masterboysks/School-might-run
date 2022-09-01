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
  "Staff",
  "Users",
  "Account",
  "Libary",
  "Inventory",
  "Exam",
  "LMS",
  "Transport",
];
const duration = ["monthly", "quaterly", "semi-yearly", "yearly", "2 Years"];
export default function AddCompany() {
  const [selected, setSelected] = useState([]);
  const [error, setError] = useState(false);
  const [moduleError, setModulesError] = useState(false);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm();

  const onSubmit = async (d) => {
    if (selected.length === 0) {
      setModulesError(true);
    } else {
      try {
        console.log({
          description: d.description,
          duration: d.duration,
          name: d.name,
          price: +d.price,
          modules: selected,
          max_users: d.max_users,
          whats_included: included.map((c) => {
            return d[`whatIsIncluded${c}`];
          }),
        });
        const res = await Plans.createPlan({
          description: d.description,
          duration: d.duration,
          name: d.name,
          price: d.price,
          modules: selected,
          max_users: d.max_users,
          whats_included: included.map((c) => {
            return d[`whatIsIncluded${c}`];
          }),
        });
        console.log(res);
        res.data?.message === "Plan Created Successfully."
          ? navigate("/admin/plan")
          : setError("Failed to create plan");
      } catch (e) {
        console.log(e);
      }
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
            selected="Select"
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
            selected={selected}
            setSelected={setSelected}
            error={moduleError}
            setError={setModulesError}
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
              setIncluded([...included, included[included.length - 1] + 1]);
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
