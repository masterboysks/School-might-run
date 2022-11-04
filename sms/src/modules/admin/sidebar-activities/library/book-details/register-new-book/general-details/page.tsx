import React from "react";
import Steps from "../../../../../../../components/common/navigation/Steps";
import Form from "./Form";
const steps = [
  {
    name: "Book's general details",
    href: "#",
    status: 2,
  },
  {
    name: "Book specific details",
    href: "#",
    status: 1,
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
