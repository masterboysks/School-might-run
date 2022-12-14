import React from 'react';

const Profile = ({ data }) => {
  return (
    <div className="md:flex ring-black ring-opacity-5 ring-1 form-solid lg:w-10/12 p-4 my-12 rounded-md shadow">
      <img
        key={data?.profile_picture ? 1 : 2}
        src={data?.profile_picture}
        alt={data?.student_name}
        className="md:mr-2 object-cover w-32  mx-auto rounded"
      />
      <div className="flex-1">
        <div className="md:grid-cols-2 gap-x-5 gap-y-2 grid grid-cols-1">
          <span className="md:text-start col-span-full text-primary-grey-700 text-lg font-medium text-center">
            {data?.student_name}
          </span>
          <div className="flex justify-between py-2 border-b-[1px] border-b-primary-grey-300 ">
            <span className="text-primary-grey-600">Student ID:</span>
            <span className="text-primary-grey-700">{data?.student_code}</span>
          </div>
          <div className="flex justify-between py-2 border-b-[1px] border-b-primary-grey-300 ">
            <span className="text-primary-grey-600">Class/semester:</span>
            <span className="text-primary-grey-700">{data?.class}</span>
          </div>
          <div className="flex justify-between py-2 border-b-[1px] border-b-primary-grey-300 ">
            <span className="text-primary-grey-600">Roll no:</span>
            <span className="text-primary-grey-700">{data?.roll_no}</span>
          </div>
          <div className="flex justify-between py-2 border-b-[1px] border-b-primary-grey-300 ">
            <span className="text-primary-grey-600">Faculty:</span>
            <span className="text-primary-grey-700">{data?.faculty}</span>
          </div>
          <div className="flex justify-between py-2 border-b-[1px] border-b-primary-grey-300 ">
            <span className="text-primary-grey-600">Status:</span>
            <span className="text-primary-grey-700">
              {data?.status ? 'Active' : 'Inactive'}
            </span>
          </div>
          <div className="flex justify-between py-2 border-b-[1px] border-b-primary-grey-300 ">
            <span className="text-primary-grey-600">Section:</span>
            <span className="text-primary-grey-700">{data?.section}</span>
          </div>
          <div className=" flex justify-between py-2">
            <span className="text-primary-grey-600">Addmission date:</span>
            <span className="text-primary-grey-700">
              {data?.admission_date}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
