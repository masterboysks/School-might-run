import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import PermanentAddressForm from "./PermanentAddressForm";
import TemporaryAddressForm from "./TemporaryAddressForm";
import { useEffect } from "react";
import React from "react";
import Steps from "../../../../../../../components/common/navigation/Steps";
const steps = [
  {
    name: "Personal details",
    href: "#",
    status: "complete",
  },
  {
    name: "Address details",
    href: "#",
    status: "current",
  },
  {
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
  const sameAsPermenantAddress = watch("same_as_permanent_address");
  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      const temp = await JSON.parse(localStorage.getItem("adgdsas") || "");
      reset(temp);
    })();
  }, []);

  const onSubmit = async (data) => {
    console.log(data);
    let d = { ...data };
    if (sameAsPermenantAddress) {
      delete d.temp_ward;
      delete d.temp_tole;
      delete d.temp_country;
      delete d.temp_province;
      delete d.temp_district;
      delete d.temp_vdc_municipality;
    }
    localStorage.setItem("adgdsas", JSON.stringify(d));
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
