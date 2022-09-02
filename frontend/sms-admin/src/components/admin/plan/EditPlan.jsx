import React, { useState } from "react";
import { useForm } from "react-hook-form";
import AddIcon from "@mui/icons-material/Add";

import Input, { MultipleSelect } from "../../commom/input";
import { PrimaryButton } from "../../commom/buttons";

import RemoveIcon from "@mui/icons-material/Remove";
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
export default function EditPlan({ defaultValues }) {
  const [selected, setSelected] = useState(defaultValues.modules || []);
  const [error, setError] = useState(false);
  const [moduleError, setModulesError] = useState(false);

  const [included, setIncluded] = useState(
    defaultValues.whats_included.map((c, i) => {
      return i + 1;
    })
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
    },
  });
  const onSubmit = (d) => {
    console.log(d);
    console.log(
      // JSON.stringify(
      {
        description: d.description,
        duration: d.duration,
        name: d.name,
        price: d.price,
      }
    );
    // );

    navigate("/admin/plan");
  };

  // setIncluded(

  // );

  return (
    <div className="text-primary-grey">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="grid  gap-5 bg-white rounded-md px-9 pb-6 pt-3 max-w-2xl  mx-auto mt-4"
      >
        <h1 className="text-lg  mt-5 "> Edit Plan</h1>
        <div className="border-b "></div>
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
            label="Duration *"
            name="duration"
            errors={errors}
            required={true}
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

                {console.log(defaultValues.whats_included[i])}
                {console.log(c)}
                {console.log(i)}
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
        <button type="submit" className="col-span-full ml-auto">
          <PrimaryButton>Submit</PrimaryButton>
        </button>
      </form>
    </div>
  );
}
