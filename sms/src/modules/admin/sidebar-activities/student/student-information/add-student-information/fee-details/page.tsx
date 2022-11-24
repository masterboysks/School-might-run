import React from 'react';
import AboveForm from '../../../../../../../components/admin/student/AboveForm';
import FeeForm from './FeeForm';
import FeeInstallmentDuration from './FeeInstallmentDuration';
const steps = [
  {
    name: 'Student details',

    status: 3,
  },
  {
    name: 'Guardian details',

    status: 3,
  },
  {
    name: 'Address details',

    status: 3,
  },
  {
    name: 'Class details',

    status: 3,
  },
  { name: 'Fee details', href: '#', status: 2 },
];
export default function AddStudentFeeDetail() {
  return (
    <>
      <AboveForm steps={steps} title="Fee details" />
      <FeeForm />
      {/* <FeeInstallmentDuration /> */}
    </>
  );
}
