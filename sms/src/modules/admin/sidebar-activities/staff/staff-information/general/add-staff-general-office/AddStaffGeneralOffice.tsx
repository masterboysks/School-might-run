import  Steps from "../../Steps";
import  OfficeDetailsForm from "./OfficeDetailsForm";

const steps = [
  {
    id: "01",
    name: "Personal details",
    ,
    status: "complete"
  },
  {
    id: "02",
    name: "Address details",
    ,
    status: "complete"
  },
  {
    id: "03",
    name: "Office details",
    ,
    status: "current"
  }
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
