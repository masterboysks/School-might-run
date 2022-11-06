import Steps from '../../../../../../../components/common/navigation/Steps';
import Form from './PersonalDetailsForm';
const steps = [
  {
    name: 'Personal details',
    href: '#',
    status: 2,
  },
  {
    name: 'Address details',
    href: '#',
    status: 1,
  },
  {
    name: 'Office details',
    href: '#',
    status: 1,
  },
];

const AddStaffGeneralPersonal = () => {
  return (
    <>
      <Steps steps={steps} title="Personal details" />
      <Form />
    </>
  );
};

export default AddStaffGeneralPersonal;
