import  Steps from "../../Steps";

import  Form from "./PersonalDetailsForm";
const steps = [
  {
    id: "01",
    name: "Personal details",
    ,
    status: "current"
  },
  {
    id: "02",
    name: "Address details",
    ,
    status: "upcomming"
  },
  {
    id: "03",
    name: "Office details",
    ,
    status: "upcomming"
  }
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
