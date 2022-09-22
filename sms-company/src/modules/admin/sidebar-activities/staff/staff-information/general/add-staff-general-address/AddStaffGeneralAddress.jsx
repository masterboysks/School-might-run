import { useForm } from "react-hook-form";
import Steps from "../../Steps";
import PermanentAddressForm from "./PermanentAddressForm";
import TemporaryAddressForm from "./TemporaryAddressForm";
const steps = [
  {
    id: "01",
    name: "Personal details",
    href: "/admin/dashboard/staff/staff-information/add-staff/general/personal-details",
    status: "complete",
  },
  {
    id: "02",
    name: "Address details",
    href: "/admin/dashboard/staff/staff-information/add-staff/general/address-details",
    status: "current",
  },
  {
    id: "03",
    name: "Office details",
    href: "",
    status: "upcomming",
  },
];

const AddStaffGeneralPersonal = () => {
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm();
  return (
    <>
      <Steps steps={steps} />
      <form>
        <PermanentAddressForm
          register={register}
          watch={watch}
          errors={errors}
        />
        <TemporaryAddressForm
          register={register}
          watch={watch}
          errors={errors}
        />
      </form>
    </>
  );
};

export default AddStaffGeneralPersonal;
