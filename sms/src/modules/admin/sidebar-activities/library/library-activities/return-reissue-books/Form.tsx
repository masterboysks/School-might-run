import React from "react";
import Search from "@mui/icons-material/SearchOutlined";
import { Input } from "../../../../../../components/common/fields";

export default function Form({ register, handleSubmit, onSubmit }) {
  return (
    <form className="flex gap-4 mt-6" onSubmit={handleSubmit(onSubmit)}>
      <div className="">
        <Input
          label="Membership No"
          name="member_no"
          register={register}
          placeholder="584754"
        />
      </div>
      <div className="">
        <Input
          label="Member name"
          name="member_name"
          register={register}
          placeholder="Ranjit"
        />
      </div>
      <div className="">
        <Input label="Member type" name="member_type" register={register} />
      </div>
      <div className="flex  items-end">
        <button type="submit" className="primary_btn   h-fit w-fit">
          <Search className="w-4 mx-auto" />
        </button>
      </div>
    </form>
  );
}
