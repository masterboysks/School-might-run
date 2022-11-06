import React from 'react';
import one from '../../welcome/three.jpg';
const arrayTeacher = [
  {
    name: 'Rajni Shing',
    classTeacher: false,
    picture: one,
    subject: 'Nepali',
  },
  {
    name: 'Rakesh Shing',
    classTeacher: true,
    picture: one,
    subject: 'Englisg',
  },
  {
    name: 'JKHDjkfs Shing',
    classTeacher: false,
    picture: one,
    subject: 'jdhsfj',
  },
  {
    name: '<MASJNJKfhds> Shing',
    classTeacher: false,
    picture: one,
    subject: 'nadkshkj',
  },
  {
    name: 'Raasgdfsjni Shing',
    classTeacher: false,
    picture: one,
    subject: 'Nepali',
  },
  {
    name: 'Rajafgfdgnifdhgfhfgh Shing',
    classTeacher: false,
    picture: one,
    subject: 'Nepali',
  },
];
export default function TeacherDetails() {
  return (
    <>
      <div className="text-primary-grey-700 text-lg font-medium  ">
        Teacher details
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 my-6">
        {arrayTeacher.map((curr) => (
          <div
            className="border rounded p-3 flex gap-4 items-center"
            key={curr.name + curr.id}
          >
            <div className="rounded object-cover overflow-hidden">
              <img src={curr.picture} alt={curr.name} />
            </div>
            <div className=" space-y-3">
              <div>
                <span className="text-primary-grey-700 font-medium">
                  {curr.name}
                </span>
                {curr.classTeacher && (
                  <span className="text-primary-grey-600 ">
                    {'  '}
                    (Class Teacher)
                  </span>
                )}
              </div>
              <div className="">
                Subject:
                <span className="text-primary-grey-700">{curr.subject}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
