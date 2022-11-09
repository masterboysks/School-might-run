import React, { useState } from 'react';
import Search from '@mui/icons-material/SearchOutlined';
import { Select } from '../../../../../../components/common/oldFields';

export default function Form() {
  const arrayLevel = ['jhdgs', 'fjkdhgs', 'hdsg', 'djkshf'];
  const arrayClass = ['jhdgs', 'fjkdhgs', 'hdsg', 'djkshf'];
  const arrayFaculty = ['jhdgs', 'fjkdhgs', 'hdsg', 'djkshf'];
  const arraySection = ['jhdgs', 'fjkdhgs', 'hdsg', 'djkshf'];
  const [level, setLevel] = useState('Select');
  const [classSemester, setClassSemester] = useState('Select');
  const [faculty, setFaculty] = useState('Select');
  const [section, setSection] = useState('Select');

  const handleSearch = () => {
    console.log({ level, classSemester, faculty, section });
  };
  return (
    <form className="sm:grid-cols-2  lg:grid-cols-3 xl:grid-cols-4 ring-1 ring-black ring-opacity-5 form-solid grid grid-cols-1 gap-4 p-4 my-6 rounded-md shadow">
      <div className="">
        <Select
          id="level"
          name="level"
          label="Route name"
          value={arrayLevel}
          selected={level}
          setSelected={setLevel}
        />
      </div>
      <div className="">
        <Select
          id="class-semester"
          name="class-semester"
          label="Station"
          value={arrayClass}
          selected={classSemester}
          setSelected={setClassSemester}
        />
      </div>
      <div className="">
        <Select
          id="faculty"
          name="faculty"
          label="Student ID"
          value={arrayFaculty}
          selected={faculty}
          setSelected={setFaculty}
        />
      </div>
      <div className="">
        <Select
          id="section"
          name="section"
          label="Student name"
          value={arraySection}
          selected={section}
          setSelected={setSection}
        />
      </div>
      <div className="">
        <Select
          id="section"
          name="section"
          label="Status"
          value={arraySection}
          selected={section}
          setSelected={setSection}
        />
      </div>
      <div className="h-fit w-fit bg-primary-btn  xl:col-span-3 sm:box-content sm:col-span-1 col-span-full box-border px-4 py-3 mt-auto ml-auto text-white rounded cursor-pointer">
        {/* <span className="sm:hidden text-primary-grey-100 text-sm">Search</span> */}
        <Search className="w-4 mx-auto" onClick={handleSearch} />
      </div>
    </form>
  );
}
