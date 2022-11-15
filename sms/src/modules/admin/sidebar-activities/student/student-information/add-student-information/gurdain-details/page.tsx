import React from 'react';
import AboveForm from '../../../../../../../components/admin/student/AboveForm';
import GuardianDetailForm from './GurdainDetailForm';

export default function AddStudentGurdainDetail() {
  const steps = [
    {
      name: 'Student details',
      href: '/admin/dashboard/student/student-information/add-student-details',
      status: 3,
    },
    { name: 'Guardian details', href: '#', status: 2 },
    { name: 'Address details', href: '#', status: 1 },
    { name: 'Class details', href: '#', status: 1 },
    { name: 'Fee details', href: '#', status: 1 },
  ];
  return (
    <>
      <AboveForm steps={steps} title="Local Guardian details" />
      <GuardianDetailForm />
    </>
  );
}
