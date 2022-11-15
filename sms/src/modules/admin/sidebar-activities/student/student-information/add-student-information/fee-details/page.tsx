import React from 'react';
import AboveForm from '../../../../../../../components/admin/student/AboveForm';
import FeeForm from './FeeForm';
import FeeInstallmentDuration from './FeeInstallmentDuration';
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
  {
    name: 'Class details',
    href: '/student/student-information/add-class-details',
    status: 3,
  },
  { name: 'Fee details', href: '#', status: 2 },
];
export default function AddStudentFeeDetail() {
  return (
    <>
      {' '}
      <AboveForm steps={steps} title="Fee details" />
      <FeeForm />
      <FeeInstallmentDuration />
    </>
  );
}
