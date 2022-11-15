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

  const handleSubmit = () => {
    // console.log({ level, classSemester, faculty, section });
  };
  return (
    <div className="mt-11 lg:w-2/3 w-full">
      <div className="xl:flex ring-black ring-opacity-5 ring-1 form-solid p-4 my-6 rounded-md shadow">
        <div className="md:grid-cols-2 grid flex-1 grid-cols-1 gap-4">
          <div>
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

          <div className="md:mx-0 md:ml-auto h-fit w-fit md:col-span-2 bg-primary-btn md:box-content xl:hidden box-border px-4 py-3 mt-auto ml-auto text-center text-white rounded cursor-pointer">
            {/* <span className="sm:hidden text-primary-grey-100 text-sm">Search</span> */}
            <Search className="w-4 mx-auto" onClick={handleSubmit} />
          </div>
        </div>
        <div className="w-fit h-fit bg-primary-btn xl:block box-border hidden px-2 py-2 mt-auto ml-3 text-center text-white rounded cursor-pointer">
          {/* <span className="sm:hidden text-primary-grey-100 text-sm">Search</span> */}
          <Search className="w-4 ml-auto" onClick={handleSubmit} />
        </div>
      </div>
    </div>
  );
}
