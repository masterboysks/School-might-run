import React from 'react';
import { Input } from '../../../../../../components/common/fields';

export default function Form() {
  return (
    <form className="sm:grid-cols-2  lg:grid-cols-3 xl:grid-cols-4 ring-1 ring-black ring-opacity-5 form-solid grid grid-cols-1 gap-4 p-4 my-6 rounded-md shadow">
      {/* <div className="">
        <Input
          value={academicYear}
          setValue={setAcademicYear}
          error={errorAcademicYear}
          setError={setErrorAcademicYear}
          placeholder="2078"
          label="Student ID*"
        />
      </div>
      <div className="">
        <Input
          value={examName}
          setValue={setExamName}
          error={errorExamName}
          setError={setErrorExamName}
          placeholder="First term examination"
          label="Student name*"
        />
      </div>

      <div className="">
        <Input
          type="date"
          label="To"
          value={gradingSystem}
          setValue={setGradingSystem}
          // selected={gradingSystem}
        />
      </div>
      <div className="">
        <Select
          label="Generated status"
          value={arrayGradingSystem}
          setSelected={setGradingSystem}
          selected={gradingSystem}
        />
      </div>
      <div className="">
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
  </div> 

      <div className="h-fit w-fit bg-primary-btn sm:box-content box-border sm:col-start-2 lg:col-start-3 xl:col-start-4 px-4 py-3 mt-auto ml-auto text-white rounded cursor-pointer">
        <span className="sm:hidden text-primary-grey-100 text-sm">Search</span>
        <Search className="w-4 mx-auto" onClick={handleSubmit} />
      </div> */}
    </form>
  );
}
