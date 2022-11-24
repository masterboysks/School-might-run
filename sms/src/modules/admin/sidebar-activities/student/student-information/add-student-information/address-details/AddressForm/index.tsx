import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate, Link } from 'react-router-dom';
import StudentFormStudentPictureAndGurdainPicture from '../../../../../../../../contex/admin/student/StudentFormStudentPictureAndGurdainPicture';
import PermanentAddressForm from './PermanentAddressForm';
import TemporaryAddressForm from './TemporaryAddressForm';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const schema = yup.object().shape({
  country: yup.string().required(''),
  province: yup.string().required(''),
  district: yup.string().required(''),
  vdc_municipality: yup.string().required(''),
  ward: yup.string().required(''),
  tole: yup.string().required(''),
  same_as_permanent_address: yup.boolean(),
  temp_country: yup.string().when('same_as_permanent_address', {
    is: false,
    then: yup.string().required(''),
  }),
  temp_province: yup.string().when('same_as_permanent_address', {
    is: false,
    then: yup.string().required(''),
  }),
  temp_district: yup.string().when('same_as_permanent_address', {
    is: false,
    then: yup.string().required(''),
  }),
  temp_vdc_municipality: yup.string().when('same_as_permanent_address', {
    is: false,
    then: yup.string().required(''),
  }),
  temp_ward: yup.string().when('same_as_permanent_address', {
    is: false,
    then: yup.string().required(''),
  }),
  temp_tole: yup.string().when('same_as_permanent_address', {
    is: false,
    then: yup.string().required(''),
  }),
});
function AddressForm() {
  const navigator = useNavigate();
  const formState = useContext(StudentFormStudentPictureAndGurdainPicture);
  const {
    register,
    watch,
    reset,
    getValues,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    resolver: yupResolver(schema),
    mode: 'onBlur',
    defaultValues: { ...formState?.values?.address },
  });
  const onSubmit = async (d) => {
    // console.log(d);
    // address
    formState.setValues((c) => {
      return {
        ...c,
        address: {
          ...d,
          same_as_permanent_address: d.same_as_permanent_address ? 1 : 0,
        },
      };
    });
    navigate('/admin/dashboard/student/student-information/add-class-details');
    // /admin/dashboard/student/student-information/add-class-details
  };
  const onBack = (e) => {
    e.preventDefault();
    formState.setValues((c) => {
      return {
        ...c,
        address: {
          ...getValues(),
          same_as_permanent_address: getValues().same_as_permanent_address
            ? 1
            : 0,
        },
      };
    });
    navigate(
      '/admin/dashboard/student/student-information/add-student-details/guardian'
    );
  };

  const navigate = useNavigate();
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <PermanentAddressForm register={register} watch={watch} errors={errors} />
      <TemporaryAddressForm
        register={register}
        watch={watch}
        errors={errors}
        handleBack={onBack}
      />
    </form>
  );
}

export default AddressForm;
