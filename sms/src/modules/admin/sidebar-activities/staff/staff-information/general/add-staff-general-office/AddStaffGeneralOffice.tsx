import React from "react";
import Steps from "../../../../../../../components/common/navigation/Steps";
import OfficeDetailsForm from "./OfficeDetailsForm";

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
    status: "complete",
  },
  {
    id: "03",
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
