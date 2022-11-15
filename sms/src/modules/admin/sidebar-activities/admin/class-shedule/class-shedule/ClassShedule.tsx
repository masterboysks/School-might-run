import Search from '@mui/icons-material/SearchOutlined';
import { Select } from '../../../../../../components/common/oldFields';
import { useState } from 'react';
import Breadnav from '../../../../../../components/common/navigation/Breadnav';
import Table from './Table';
import React from 'react';

const pages = [
  { name: 'Admin' },
  {
    name: 'Class schedule',
    href: '/admin/dashboard/admin/class-schedule/',
  },
];

const ClassSchedule = () => {
  const arrayLevel = ['jhdgs', 'fjkdhgs', 'hdsg', 'djkshf'];
  const arrayClass = ['jhdgs', 'fjkdhgs', 'hdsg', 'djkshf'];
  const arrayFaculty = ['jhdgs', 'fjkdhgs', 'hdsg', 'djkshf'];
  const arraySection = ['jhdgs', 'fjkdhgs', 'hdsg', 'djkshf'];
  const [level, setLevel] = useState('Select');
  const [classSemester, setClassSemester] = useState('Select');
  const [faculty, setFaculty] = useState('Select');
  const [section, setSection] = useState('Select');
  const [errorLevel, setErrorLevel] = useState(false);
  const [errorClass, setErrorClass] = useState(false);
  const [errorSection, setErrorSection] = useState(false);

  const handleSearch = () => {
    // // console.log({ level, classSemester, faculty, section });
    level === 'Select' && setErrorLevel(true);
    classSemester === 'Select' && setErrorClass(true);
    section === 'Select' && setErrorSection(true);
  };
  return (
    <>
      <Breadnav pages={pages} />
      <form className="sm:grid-cols-2  lg:grid-cols-3 xl:grid-cols-4 ring-1 ring-black ring-opacity-5 form-solid grid grid-cols-1 gap-4 p-4 my-6 rounded-md shadow">
        <div className="">
          <Select
            id="level"
            name="level"
            error={errorLevel}
            setError={setErrorLevel}
            label="Level*"
            value={arrayLevel}
            selected={level}
            setSelected={setLevel}
          />
        </div>
        <div className="">
          <Select
            id="class-semester"
            name="class-semester"
            error={errorClass}
            setError={setErrorClass}
            label="Class/Semester*"
            value={arrayClass}
            selected={classSemester}
            setSelected={setClassSemester}
          />
        </div>
        <div className="">
          <Select
            id="faculty"
            name="faculty"
            label="Faculty"
            value={arrayFaculty}
            selected={faculty}
            setSelected={setFaculty}
          />
        </div>
        <div className="">
          <Select
            id="section"
            name="section"
            error={errorSection}
            setError={setErrorSection}
            label="Section*"
            value={arraySection}
            selected={section}
            setSelected={setSection}
          />
        </div>
        <div className="h-fit w-fit bg-primary-btn lg:col-span-2 xl:col-span-full sm:box-content col-span-full box-border px-4 py-3 mt-auto ml-auto text-white rounded cursor-pointer">
          {/* <span className="sm:hidden text-primary-grey-100 text-sm">Search</span> */}
          <Search className="w-4 mx-auto" onClick={handleSearch} />
        </div>
      </form>
      <div className="lg:flex my-12">
        <div className="ring-black ring-opacity-5 ring-1 form-solid lg:w-4/6 p-4 rounded-md shadow">
          <div className="md:grid-cols-2 gap-x-5 gap-y-2 grid grid-cols-1">
            <div className="flex justify-between py-2 border-b-[1px] border-b-primary-grey-300 ">
              <span className="text-primary-grey-600">Class:</span>
              <span className="text-primary-grey-700">1</span>
            </div>
            <div className="flex justify-between py-2 border-b-[1px] border-b-primary-grey-300 ">
              <span className="text-primary-grey-600">Section:</span>
              <span className="text-primary-grey-700">B</span>
            </div>
            <div className="flex justify-between py-2 border-b-[1px] border-b-primary-grey-300 ">
              <span className="text-primary-grey-600">Level:</span>
              <span className="text-primary-grey-700">School level</span>
            </div>
            <div className="flex justify-between py-2 border-b-[1px] border-b-primary-grey-300 ">
              <span className="text-primary-grey-600">No of students:</span>
              <span className="text-primary-grey-700">1</span>
            </div>
            <div className=" flex justify-between py-2">
              <span className="text-primary-grey-600">Faculty:</span>
              <span className="text-primary-grey-700"></span>
            </div>
          </div>
        </div>
      </div>
      <Table />
    </>
  );
};

export default ClassSchedule;
