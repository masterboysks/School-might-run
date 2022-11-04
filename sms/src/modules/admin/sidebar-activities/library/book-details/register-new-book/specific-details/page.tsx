import React from "react";
import Steps from "../../../../../../../components/common/navigation/Steps";
import Form from "./Form";
const steps = [
  {
    name: "Book's general details",
    href: "#",
    status: 3, //complete
  },
  {
    name: "Book specific details",
    href: "#",
    status: 2, //current
  },
];
export default function LibrarySpecificDetailsAdd() {
  return (
    <div>
      <Steps title="Book's general details" steps={steps} />
      <Form />
    </div>
  );
}
