import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Steps from "../../Steps";
import PermanentAddressForm from "./PermanentAddressForm";
import TemporaryAddressForm from "./TemporaryAddressForm";
import { useEffect } from "react";
const steps = [
  {
    id: "01",
    name: "Personal details",
    href: "#",
    status: "complete",
  },
  {
    id: "02",
    name: "Address details",
    href: "#",
    status: "current",
  },
  {
    id: "03",
    name: "Office details",
    href: "#",
    status: "upcomming",
  },
];

const AddStaffGeneralPersonal = () => {
  const {
    register,
    watch,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();
  // const sameAsPermenantAddress = watch("same_as_permanent_address");
  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      const temp = await JSON.parse(localStorage.getItem("adgdsas"));
      reset(temp);
    })();
  }, []);

  const onSubmit = async (data) => {
    console.log(data);
    let d = { ...data };
    // delete d;
    localStorage.setItem("adgdsas", JSON.stringify(data));
    navigate(
      "/admin/dashboard/staff/staff-information/add-staff/general/office-details"
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
        />
      </form>
    </>
  );
};

export default AddStaffGeneralPersonal;
