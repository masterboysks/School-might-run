import React from 'react';
import Steps from '../../../../../../../components/common/navigation/Steps';
import OfficeDetailsForm from './OfficeDetailsForm';

const steps = [
  {
    name: 'Personal details',
    href: '#',
    status: 3,
  },
  {
    name: 'Address details',
    href: '#',
    status: 3,
  },
  {
    name: 'Office details',
    href: '#',
    status: 2,
  },
];

const AddStaffGeneralPersonal = () => {
  return (
    <>
      <Steps steps={steps} title="Office details" />
      <OfficeDetailsForm />
    </>
  );
};

export default AddStaffGeneralPersonal;
