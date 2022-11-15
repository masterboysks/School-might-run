import React from 'react';
import AboveForm from '../../../../../../../components/admin/student/AboveForm';
import ClassForm from './ClassForm';

const steps = [
  {
    name: 'Student details',
    href: '/admin/dashboard/student/student-information/add-student-details',
    status: 3,
  },
  {
    name: 'Guardian details',
    href: '/admin/dashboard/student/student-information/add-student-details/guardian-false',
    status: 3,
  },
  {
    name: 'Address details',
    href: '/student/student-information/add-address-details',
    status: 3,
  },
  { name: 'Class details', href: '#', status: 2 },
  { name: 'Fee details', href: '#', status: 1 },
];

export default function AddStudentClassDetailForm() {
  return (
    <>
      <AboveForm steps={steps} title="Class details" />
      <ClassForm />
    </>
  );
}
