import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import PermanentAddressForm from './PermanentAddressForm';
import TemporaryAddressForm from './TemporaryAddressForm';
import { useEffect } from 'react';
import React from 'react';
import Steps from '../../../../../../../components/common/navigation/Steps';
import { useStaffFormData } from '../../../../../../../contex/admin/staff/StaffFormData';
const steps = [
  {
    name: 'Personal details',
    href: '#',
    status: 3,
  },
  {
    name: 'Address details',
    href: '#',
    status: 2,
  },
  {
    name: 'Office details',
    href: '#',
    status: 1,
  },
];

const AddStaffGeneralPersonal = () => {
  const { dataForm, setForm } = useStaffFormData();

  const {
    register,
    watch,
    reset,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm();
  const sameAsPermenantAddress = watch('same_as_permanent_address');
  const navigate = useNavigate();

  useEffect(() => reset({ ...dataForm.address }), []);

  const onSubmit = async (data) => {
    let filterData = { ...data };
    if (sameAsPermenantAddress) {
      delete filterData.temp_ward;
      delete filterData.temp_tole;
      delete filterData.temp_country;
      delete filterData.temp_province;
      delete filterData.temp_district;
      delete filterData.temp_vdc_municipality;
    }
    setForm((d) => {
      return { ...d, address: { ...d } };
    });
    navigate(
      '/admin/dashboard/staff/staff-information/add-staff/general/office-details'
    );
  };
  return (
    <>
      <Steps steps={steps} title="Address details" />
      <form onSubmit={handleSubmit(onSubmit)}>
        <PermanentAddressForm
          register={register}
          watch={watch}
          errors={errors}
        />
        <TemporaryAddressForm
          register={register}
          watch={watch}
          errors={errors}
          handleBack={undefined}
          isValid={isValid}
        />
      </form>
    </>
  );
};

export default AddStaffGeneralPersonal;
