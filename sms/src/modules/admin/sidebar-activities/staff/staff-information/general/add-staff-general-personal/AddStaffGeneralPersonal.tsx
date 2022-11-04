import Steps from "../../../../../../../components/common/navigation/Steps";
import Form from "./PersonalDetailsForm";
const steps = [
  {
    id: "01",
    name: "Personal details",
    href: "#",
    status: "current",
  },
  {
    id: "02",
    name: "Address details",
    href: "#",
    status: "upcomming",
  },
  {
    id: "03",
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
