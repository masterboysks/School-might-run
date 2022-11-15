import React from 'react';
import AboveForm from '../../../../../../../components/admin/student/AboveForm';
import DetailsForm from './Form';
const steps = [
  { name: 'Student details', href: '#', status: 2 },
  { name: 'Guardian details', href: '#', status: 1 },
  { name: 'Address details', href: '#', status: 1 },
  { name: 'Class details', href: '#', status: 1 },
  { name: 'Fee details', href: '#', status: 1 },
];
export default function AddStudentStudentDetails() {
  return (
    <>
      <AboveForm steps={steps} title="Student details" />
      <DetailsForm />
    </>
  );
}
