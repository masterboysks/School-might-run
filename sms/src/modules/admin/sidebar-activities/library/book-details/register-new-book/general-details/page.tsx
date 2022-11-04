import React from "react";
import Steps from "../../../../../../../components/common/navigation/Steps";
import Form from "./Form";
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
export default function LibraryGeneralDetailsAdd() {
  return (
    <div>
      <Steps title="Book's general details" steps={steps} />
      <Form />
    </div>
  );
}
