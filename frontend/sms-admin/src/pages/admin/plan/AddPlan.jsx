import React, { useState } from "react";
import MainLayout from "../../../layout/admin/MainLayout";
import { useForm } from "react-hook-form";
import AddIcon from "@mui/icons-material/Add";

import Input from "../../../components/commom/input";
import { PrimaryButton } from "../../../components/commom/buttons";
import { useNavigate } from "react-router-dom";
import Breadnav from "../../../components/admin/Breadnav";
import RemoveIcon from "@mui/icons-material/Remove";
const pages = [
  { name: "Plan", href: "/admin/plan", current: false },
  { name: "Create", href: "#", current: true },
];
export default function AddCompany() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (d) => {
    console.log(
      JSON.stringify({
        description: d.description,
        duration: d.duration,
        name: d.name,
        price: d.price,
        whatIsIncluded: JSON.parse(
          included.map((c) => {
            `whatIsIncluded${c}`;
          })
        ),
      })
    );

    navigate("/admin/plan");
  };

  const [included, setIncluded] = useState([1]);
  return (
    <MainLayout className="text-primary-grey">
      <Breadnav pages={pages} />

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="grid  gap-5 bg-white rounded-md px-9 pb-6 pt-3 max-w-2xl  mx-auto mt-4"
      >
        <h1 className="text-lg  mt-5 "> Create Plan</h1>
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
        <button type="submit" className="col-span-full ml-auto">
          <PrimaryButton>Submit</PrimaryButton>
        </button>
      </form>
    </MainLayout>
  );
}
