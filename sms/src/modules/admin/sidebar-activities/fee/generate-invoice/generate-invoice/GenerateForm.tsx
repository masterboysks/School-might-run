import React from 'react';
import { useState } from 'react';
import { Select } from '../../../../../../components/common/oldFields';
import SearchIcon from '../../../../../../components/common/SearchIcon';

export default function GenerateForm() {
  const [error, setError] = useState('');

  const arrayLevel = ['hfjgk', 'dsfjhg', 'jkhfd'];
  const arrayClassSemester = ['hfjgk', 'dsfjhg', 'jkhfd'];
  const arrayFaculty = ['hfjgk', 'dsfjhg', 'jkhfd'];
  const arraySection = ['hfjgk', 'dsfjhg', 'jkhfd'];
  const [level, setLevel] = useState('Select');
  const [classSemester, setClassSemester] = useState('Select');
  const [faculty, setFaculty] = useState('Select');
  const [section, setSection] = useState('Select');

  const handleSubmit = () => {
    // console.log({ level, classSemester, faculty, section });
  };
  return (
    <div className="my-6">
      {error && (
        <>
          <div className="text-red-600 font-medium text-lg">{error}</div>
        </>
      )}

      <form className="sm:grid-cols-2  lg:grid-cols-3 xl:grid-cols-4 ring-1 ring-black ring-opacity-5 form-solid grid grid-cols-1 gap-4 p-4 my-1 rounded-md shadow">
        <div className="">
          <Select
            label="Level"
            value={arrayLevel}
            selected={level}
            setSelected={setLevel}
          />
        </div>
        <div className="">
          <Select
            label="Class/Semester"
            value={arrayClassSemester}
            selected={classSemester}
            setSelected={setClassSemester}
          />
        </div>

        <div className="">
          <Select
            label="Month"
            value={arraySection}
            selected={section}
            setSelected={setSection}
          />
        </div>
        <div className="flex items-end justify-end">
          <button type="submit" className="primary_btn h-fit ">
            Generate Invoice
          </button>
        </div>
        {/* <SearchIcon
        className=" lg:col-span-2 xl:col-span-full sm:box-content col-span-full  mt-auto ml-auto "
        onClick={handleSubmit}
      /> */}
      </form>
    </div>
  );
}
