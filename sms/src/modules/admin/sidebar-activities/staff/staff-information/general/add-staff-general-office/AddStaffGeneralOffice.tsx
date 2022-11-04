import React from "react";
import Steps from "../../../../../../../components/common/navigation/Steps";
import OfficeDetailsForm from "./OfficeDetailsForm";

const steps = [
  {
    name: "Personal details",
    href: "#",
    status: "complete",
  },
  {
    name: "Address details",
    href: "#",
    status: "complete",
  },
  {
    name: "Office details",
    href: "#",
    status: "current",
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
