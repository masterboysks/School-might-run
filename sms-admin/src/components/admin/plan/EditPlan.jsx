import React, { useState } from "react";
import { useForm } from "react-hook-form";
import AddIcon from "@mui/icons-material/Add";

import Input, { MultipleSelect } from "../../commom/input";

import RemoveIcon from "@mui/icons-material/Remove";
import Plans from "../../../api/Plans";
import { Checkbox } from "../../commom/checkbox";
const arrayModules = [
  "Staff",
  "Users",
  "Account",
  "Library",
  "Inventory",
  "Exam",
  "Report",
  "LMS",
  "Transport",
  "Parent",
  "Student",
  "Teacher",
  "Accounting",
];
export default function EditPlan({
  defaultValues,
  setIsOpen,
  setPlans,
  plans,
}) {
  const [selected, setSelected] = useState(defaultValues.modules || []);
  const [error, setError] = useState(false);
  const [moduleError, setModulesError] = useState(false);

  const [included, setIncluded] = useState(
    defaultValues?.whats_included?.map((c, i) => {
      return i + 1;
    }) || [1]
  );

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      description: defaultValues.description,
      duration: defaultValues.duration,
      name: defaultValues.name,
      price: defaultValues.price,
      max_users: defaultValues.max_users,
      status: defaultValues.status,
    },
  });
  const onSubmit = async (d) => {
    const form = {
      description: d.description,
      duration: d.duration,
      name: d.name,
      price: d.price,
      modules: selected,
      max_users: d.max_users,
      status: d.status,
      whats_included: included.map((c) => {
        return d[`whatIsIncluded${c}`];
      }),
    };
    if (selected.length === 0) {
      setModulesError(true);
    } else {
      try {
        const res = await Plans.edit({
          id: defaultValues.id,
          form,
        });
        res?.status === 201 ? edited(form) : setError("Failed to update plan");
      } catch (e) {
        console.log(e);
      }
    }
  };
  const edited = (form) => {
    const temp = [...plans];
    temp[temp.indexOf(defaultValues)] = { ...form, id: defaultValues.id };
    setPlans(temp);
    setIsOpen(false);
  };

  return (
    <div className="text-primary-grey">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="grid  gap-5 box-border bg-white rounded-md px-9 pb-6 pt-3 max-w-2xl  mx-auto mt-4"
      >
        <h1 className="text-lg  mt-5 "> Edit Plan</h1>
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
          <Input
            register={register}
            label="Duration *"
            name="duration"
            errors={errors}
            required={true}
          />
        </div>
        <div className="">
          <Input
            register={register}
            label="Description"
            name="description"
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
          {included?.map((c, i, a) => (
            <div key={c} className=" flex items-end gap-1">
              <div className=" flex-1">
                <Input
                  register={register}
                  label={`What's included ${i || ""}`}
                  name={"whatIsIncluded" + c}
                  required={true}
                  errors={errors}
                  shouldUnregister={true}
                  defaultValue={defaultValues.whats_included[i]}
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
        <div>
          <Checkbox
            register={register}
            id="checkbox_123"
            label="Active"
            name="status"
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
    </div>
  );
}
