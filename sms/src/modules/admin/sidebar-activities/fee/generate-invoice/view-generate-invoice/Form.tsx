import React from 'react';
import {
  Input,
  MonthSelect,
  Select,
} from '../../../../../../components/common/fields';
import SearchIcon from '../../../../../../components/common/SearchIcon';
const arrayPrint = [
  {
    id: 0,
    name: 'Not printed',
  },
  {
    id: 1,
    name: 'Printed',
  },
];
export default function Form({ register, errors }) {
  return (
    <div className="sm:grid-cols-2  lg:grid-cols-3 xl:grid-cols-4 ring-1 ring-black ring-opacity-5 form-solid grid grid-cols-1 gap-4 p-4 my-6 rounded-md shadow">
      <div className="">
        <Input
          register={register}
          name="student_code"
          placeholder="2078"
          label="Student ID*"
        />
      </div>
      <div className="">
        <Input
          register={register}
          errors={errors}
          name="student_name"
          placeholder="First term examination"
          label="Student name*"
        />
      </div>

      <div className="">
        <MonthSelect
          name="month"
          errors={errors}
          register={register}
          label="Month"
        />
      </div>
      <div className="">
        <Select
          register={register}
          name="print_status"
          label="Print status"
          value={arrayPrint}
        />
      </div>
      {/* <div className="">
        <Select
          label="Published status"
          value={arrayResultStatus}
          setSelected={setResultStatus}
          selected={resultStatus}
        />
      </div>
      <div className="">
        <Select
          label="Remark"
          value={arrayRemark}
          setSelected={setRemark}
          selected={remark}
        />
      </div> */}

      <div className="h-fit w-fit  sm:box-content box-border sm:col-start-2 lg:col-start-3 xl:col-start-4  sm:mt-auto ml-auto text-white rounded cursor-pointer">
        <button type="submit" className="h-fit w-fit mx-auto">
          <SearchIcon className="" />
        </button>
      </div>
    </div>
  );
}
