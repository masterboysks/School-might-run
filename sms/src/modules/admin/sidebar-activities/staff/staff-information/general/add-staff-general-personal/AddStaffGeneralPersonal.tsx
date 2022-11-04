import Steps from "../../../../../../../components/common/navigation/Steps";
import Form from "./PersonalDetailsForm";
const steps = [
  {
    name: "Personal details",
    href: "#",
    status: "current",
  },
  {
    name: "Address details",
    href: "#",
    status: "upcomming",
  },
  {
    name: "Office details",
    href: "#",
    status: "upcomming",
  },
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
