import React from "react";
import Steps from "../../../../../../../components/common/navigation/Steps";
import Form from "./Form";
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
export default function page() {
  return (
    <div>
      <Steps title="Book's general details" steps={steps} />
      <Form />
    </div>
  );
}
