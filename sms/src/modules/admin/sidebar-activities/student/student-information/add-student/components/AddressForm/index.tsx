import { useForm } from 'react-hook-form';
import { useNavigate, Link } from 'react-router-dom';
import PermanentAddressForm from './PermanentAddressForm';
import TemporaryAddressForm from './TemporaryAddressForm';

function AddressForm() {
  const {
    register,
    watch,
    reset,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm();
  const onSubmit = async (d) => {
    console.log(d);
  };
  const onBack = () => {
    navigate(-1);
  };

  const sameAsPermenantAddress = watch('same_as_permanent_address');
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
