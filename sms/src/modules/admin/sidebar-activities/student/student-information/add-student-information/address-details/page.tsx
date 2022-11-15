import React from 'react';
import AboveForm from '../../../../../../../components/admin/student/AboveForm';
import AddressForm from './AddressForm';
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
  { name: 'Address details', href: '#', status: 2 },
  { name: 'Class details', href: '#', status: 1 },
  { name: 'Fee details', href: '#', status: 1 },
];
export default function AddStudentAddressForm() {
  return (
    <>
      <AboveForm steps={steps} title="Permanent address" />
      <AddressForm />
    </>
  );
}
