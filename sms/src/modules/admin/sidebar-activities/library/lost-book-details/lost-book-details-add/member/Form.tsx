import React from "react";
import { useForm } from "react-hook-form";
import {
  Input,
  InputDisabled,
  Select,
  Textarea,
} from "../../../../../../../components/common/fields";
const arrayLostOrDamaged = [
  {
    name: "Lost",
    id: 1,
  },
  {
    name: "Damaged",
    id: 2,
  },
];
export default function Form() {
  const {
    formState: { errors },
    handleSubmit,
    register,
  } = useForm();
  const onSubmit = (d) => console.log(d);
  return (
    <div className="w-full xl:w-2/3 mt-6">
      <form>
        <div className=" md:grid-cols-3 grid sm:grid-cols-2 gap-4 my-6 rounded-md">
          <div className="">
            <Input
              label="Call number*"
              placeholder="AA 234 3N"
              register={register}
              name="call_number"
            />
          </div>
          <div className="">
            <InputDisabled
              value="Backend bala launxu roknu"
              label="Book title"
            />
          </div>
          <div className="">
            <Input
              label="Member ID*"
              name="member_id"
              placeholder="8855642"
              register={register}
            />
          </div>
          <div className="">
            <Select
              label="Lost/Damaged*"
              name="lost_damaged"
              register={register}
              value={arrayLostOrDamaged}
            />
          </div>
          <div className="">
            <Input
              label="Fine ammount"
              name="fine_ammount"
              placeholder="90,000,000"
              type="number"
              register={register}
            />
          </div>
          <div className="sm:col-span-2">
            <Textarea
              label="Remark*"
              name="remark"
              register={register}
              placeholder="Mice took a big bite it seems."
            />
          </div>
        </div>
        <div className="w-full flex justify-end">
          <button className="secondary_btn">Cancel</button>
          <input type="button" value="Save" className="primary_btn" />
        </div>
      </form>
    </div>
  );
}
