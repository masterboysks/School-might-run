import React from "react";
import Breadnav from "../../../../../../../components/common/Breadnav";
import Break from "../../../../../../../components/common/Break";

import Form from "./Form";

const pages = [
  { name: "Exam", href: "#", current: false },
  {
    name: "Exam setup",
    href: "#",
    current: false,
  },
  {
    name: "Exam name",
    href: "/admin/dashboard/exam/exam-setup/exam-name",
    current: false,
  },
  {
    name: "Add",
    href: "/admin/dashboard/exam/exam-setup/exam-name/add",
    current: true,
  },
];
export default function AddExamName() {
  return (
    <>
      <Breadnav pages={pages} />
      <Break title="Add exam name"></Break>
      <Form />
    </>
  );
}
